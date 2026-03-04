import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olive | Your Daily Bible & Spiritual Guide",
  description:
    "Olive helps you build a daily spiritual rhythm with Scripture, guided reflection, and prayer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
