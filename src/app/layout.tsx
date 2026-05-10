import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dominion Kingdom Builder",
  description: "Curated Dominion card combinations for any expansion setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
