
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";



import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Business Consulting | Product Innovation & Digital Growth",
    template: "%s | Your Company",
  },

  description:
    "Transform your business with business consulting, product development, digital transformation, AI automation and marketing growth solutions.",

  keywords: [
    "Business Consulting",
    "Management Consulting",
    "Product Development",
    "Product Innovation",
    "Digital Transformation",
    "AI Automation",
    "Digital Marketing",
    "Business Growth",
  ],

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
