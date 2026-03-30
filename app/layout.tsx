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
  title: "Triveda Technologies — Engineering Intelligent Digital Ecosystems",
  description:
    "Triveda Technologies is a premium technology consulting and digital transformation partner delivering AI-driven, scalable, and enterprise-ready solutions.",
  keywords:
    "technology consulting, digital transformation, AI solutions, software development, cloud migration, Triveda Technologies",
  authors: [{ name: "Triveda Technologies" }],
  openGraph: {
    title: "Triveda Technologies — Engineering Intelligent Digital Ecosystems",
    description:
      "Premium technology consulting and digital transformation partner delivering AI-driven, scalable, and enterprise-ready solutions.",
    type: "website",
    url: "https://trivedatechnologies.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triveda Technologies",
    description: "Engineering Intelligent Digital Ecosystems",
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
        <link rel="canonical" href="https://trivedatechnologies.com" />
      </head>
      <body className="min-h-screen bg-[#030712] text-zinc-200 overflow-x-hidden" suppressHydrationWarning>
        <SmoothScrollWrapper>
          {children}
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
