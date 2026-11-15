import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parameshmoganti.com"),

  title: {
    default: "Paramesh Moganti | Lead Frontend Engineer",
    template: "%s | Paramesh Moganti",
  },

  description:
    "Frontend engineer specializing in React, TypeScript, micro-frontends, design systems, web accessibility, and scalable frontend architecture.",

  applicationName: "Paramesh Moganti",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Paramesh Moganti",
    title: "Paramesh Moganti | Lead Frontend Engineer",
    description:
      "Explore frontend engineering, React, micro-frontends, design systems, and practical engineering insights.",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paramesh Moganti — Lead Frontend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Paramesh Moganti | Lead Frontend Engineer",
    description:
      "Practical insights on React, frontend architecture, micro-frontends, and design systems.",
    images: ["/brand/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
