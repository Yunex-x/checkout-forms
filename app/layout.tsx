import "./globals.css";
import { Catamaran } from "next/font/google";
import type { Metadata } from "next";

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Checkout - Complete Your Purchase",
  description: "Secure checkout page for completing your order",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={catamaran.className}>{children}</body>
    </html>
  );
}

