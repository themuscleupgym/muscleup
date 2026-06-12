import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MuscleUp | Elite Fitness Sanctuary Jaipur',
  description: 'Unapologetically premium fitness destination in Jaipur. Experience world-class equipment, scientific body testing, and high-performance training.',
  keywords: ['luxury gym jaipur', 'best gym in jaipur', 'muscleup gym', 'personal training jaipur', 'muscle up gym jaipur'],
  authors: [{ name: 'MuscleUp Gym' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-obsidian">
      <body>{children}</body>
    </html>
  );
}
