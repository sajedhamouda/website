import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solais | AI Visibility Platform",
  description:
    "A premium platform to monitor, analyze, and improve your brand visibility across AI-generated answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
