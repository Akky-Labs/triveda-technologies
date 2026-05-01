import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll as SmoothScrollWrapper } from "@/components/smooth-scroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexGen Digital — Intelligent AI & Digital Solutions for Modern Businesses",
  description:
    "NexGen Digital is a next-generation AI and digital consulting firm delivering intelligent, scalable, and enterprise-ready technology solutions for ambitious businesses.",
  keywords:
    "AI solutions, digital transformation, intelligent automation, software development, cloud architecture, NexGen Digital",
  authors: [{ name: "NexGen Digital" }],
  openGraph: {
    title: "NexGen Digital — Intelligent AI & Digital Solutions",
    description:
      "Next-generation AI and digital consulting firm delivering intelligent, scalable, and enterprise-ready technology solutions.",
    type: "website",
    url: "https://nexgendigital.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGen Digital",
    description: "Intelligent AI & Digital Solutions for Modern Businesses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://nexgendigital.io" />
      </head>
      <body className="min-h-screen bg-[#030712] text-zinc-200 overflow-x-hidden" suppressHydrationWarning>
        <SmoothScrollWrapper>
          {children}
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
