const { execSync } = require('child_process');
const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname);
const outDir = path.join(dir, 'out');
const url = 'https://github.com/themuscleupgym/muscleup.git';

// Dynamically resolve token
let token = process.env.GITHUB_TOKEN || '';
const tokenPath = path.join(dir, 'git-token.txt');
if (!token && fs.existsSync(tokenPath)) {
  token = fs.readFileSync(tokenPath, 'utf8').trim();
}

async function run() {
  try {
    if (!token) {
      throw new Error('No GitHub token found. Please set GITHUB_TOKEN environment variable or add it to git-token.txt.');
    }

    console.log('--- Step 1: Building static files (npm run build) ---');
    execSync('npm run build', { stdio: 'inherit', cwd: dir });
    console.log('Build completed successfully.');

    console.log('--- Step 2: Preparing out directory ---');
    const nojekyllPath = path.join(outDir, '.nojekyll');
    fs.writeFileSync(nojekyllPath, '');
    console.log('Created .nojekyll file at:', nojekyllPath);

    const gitDir = path.join(outDir, '.git');
    if (!fs.existsSync(gitDir)) {
      await git.init({ fs, dir: outDir });
      console.log('Initialized clean Git repository in out directory.');
    }

    // Scan out folder
    function getFiles(currentDir) {
      let results = [];
      const list = fs.readdirSync(currentDir);
      list.forEach((file) => {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        const relativePath = path.relative(outDir, filePath).replace(/\\/g, '/');

        if (file === '.git') {
          return;
        }

        if (stat.isDirectory()) {
          results = results.concat(getFiles(filePath));
        } else {
          results.push(relativePath);
        }
      });
      return results;
    }

    const files = getFiles(outDir);
    console.log(`Staging ${files.length} static assets...`);

    for (const filepath of files) {
      await git.add({ fs, dir: outDir, filepath });
    }

    console.log('Staged static files. Committing...');

    const sha = await git.commit({
      fs,
      dir: outDir,
      author: {
        name: 'MuscleUp Admin',
        email: 'musclesupgymoffical@gmail.com'
      },
      message: 'Deploy static site updates'
    });

    console.log('Created deploy commit. SHA:', sha);

    const currentBranch = await git.currentBranch({ fs, dir: outDir }) || 'master';
    console.log(`Current branch: ${currentBranch}`);

    console.log('Force pushing static files to remote gh-pages branch...');
    await git.push({
      fs,
      http,
      dir: outDir,
      url,
      ref: currentBranch,
      remoteRef: 'gh-pages',
      force: true,
      onAuth: () => ({ username: token, password: '' })
    });

    console.log('--- Deployment Completed Successfully! ---');
  } catch (error) {
    console.error('Deployment failed:', error.message || error);
  }
}

run();
