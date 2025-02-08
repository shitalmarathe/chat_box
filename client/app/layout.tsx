import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
variable: "--font-outfit-sans",
 subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat Box",
  description: "Create anonymised chat room, make healthy conversations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
