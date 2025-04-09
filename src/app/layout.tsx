import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full-Stack Developer Portfolio | Back-End & Front-End Expert",
  description: "Professional portfolio showcasing full-stack development skills, GitHub projects, certifications, and services for both back-end and front-end development.",
  keywords: ["full-stack developer", "web developer", "front-end developer", "back-end developer", "portfolio", "programming", "software engineer", "developer portfolio"],
  authors: [{ name: "Your Name" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-domain.com",
    title: "Full-Stack Developer Portfolio",
    description: "Professional full-stack developer showcasing projects, skills, and services",
    siteName: "Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer Portfolio",
    description: "Professional full-stack developer showcasing projects, skills, and services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
