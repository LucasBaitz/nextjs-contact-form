import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact Form",
  description: "Frontend Mentor's 'Contact Form' Challenge Developed Using Next.js",
  creator: "Lucas Baitz"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}><Toaster />{children}</body>
    </html>
  );
}
