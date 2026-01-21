import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Global components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (single export – correct)
export const metadata: Metadata = {
  title: "Civonex — Educate. Empower. Engage.",
  description:
    "Civonex is a student-driven, digital-first initiative focused on education, civic awareness, and practical knowledge, developed in collaboration with institutions.",
  keywords: [
    "civic sense",
    "education platform",
    "student awareness",
    "digital society",
    "Civonex",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        {children}

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
