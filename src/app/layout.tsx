import type { Metadata } from "next";
import type React from "react";
import ClientLayout from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "RimeHQ Dashboard - Learning Management System",
  description:
    "A modern, responsive dashboard interface for online learning platform with course management, mentor connections, and progress tracking. Built with Next.js, TypeScript, and Framer Motion.",
  keywords: [
    "dashboard",
    "learning management system",
    "online courses",
    "education platform",
    "Next.js",
    "React",
    "TypeScript",
    "Framer Motion",
    "responsive design",
    "UI/UX",
  ],
  authors: [{ name: "RimeHQ Frontend Assessment" }],
  creator: "RimeHQ Assessment Candidate",
  publisher: "RimeHQ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rimehq-dashboard.vercel.app",
    title: "RimeHQ Dashboard - Modern Learning Platform",
    description:
      "Experience a beautifully crafted learning management dashboard with smooth animations, responsive design, and intuitive user experience.",
    siteName: "RimeHQ Dashboard",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RimeHQ Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RimeHQ Dashboard - Modern Learning Platform",
    description:
      "A responsive learning management dashboard with beautiful animations and modern UI design.",
    images: ["/og-image.png"],
    creator: "@rimehq",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#6366f1",
      },
    ],
  },
  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
