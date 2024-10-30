import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yogesh Kumar | Software Engineer & Developer",
  description:
    "Explore the portfolio of Yogesh Kumar, a skilled Software Engineer specializing in JavaScript, TypeScript, Python, and modern web technologies. Discover projects, skills, and achievements.",
  keywords:
    "Yogesh Kumar, Software Engineer, Full Stack Developer, JavaScript, TypeScript, Python, Next.js, React.js, AWS, Portfolio",
  authors: [
    { name: "Yogesh Kumar", url: "https://portfolio-new-one-iota.vercel.app/" },
  ],
  robots: { index: false, follow: false },
  openGraph: {
    title: "Yogesh Kumar | Software Engineer & Developer",
    description:
      "Explore the portfolio of Yogesh Kumar, a skilled Software Engineer specializing in JavaScript, TypeScript, Python, and modern web technologies.",
    url: "https://portfolio-new-one-iota.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://portfolio-new-one-iota.vercel.app//portfolio-banner.png",
        width: 800,
        height: 600,
        alt: "Yogesh Kumar - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Kumar | Software Engineer & Developer",
    description:
      "Explore the portfolio of Yogesh Kumar, a skilled Software Engineer specializing in JavaScript, TypeScript, Python, and modern web technologies.",
    images: [
      {
        url: "https://portfolio-new-one-iota.vercel.app//portfolio-banner.png",
        alt: "Yogesh Kumar - Software Engineer",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
