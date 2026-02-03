import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nest - Mart & Grocery",
  description:
    "Don't miss amazing grocery deals. Fresh organic products delivered to your doorstep.",
  keywords: [
    "grocery",
    "organic",
    "fresh food",
    "delivery",
    "vegetables",
    "fruits",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.variable} ${dmSans.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
