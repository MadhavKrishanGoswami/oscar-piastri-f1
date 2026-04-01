import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oscar Piastri | F1 Driver Dashboard",
  description: "Track Oscar Piastri's F1 journey - race results, championship standings, stats, and career highlights. The official fan dashboard for the McLaren F1 driver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
