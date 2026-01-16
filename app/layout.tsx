import type { Metadata } from "next";
import { Inter, Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knowell",
  description:
    "A personal journal for centralized knowledge logging, with optional anonymous sharing in a calm, pressure-free space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${inter.variable} ${poppins.variable} ${firaCode.variable} 
          antialiased bg-background-light text-text-primary-light
          dark:bg-background-dark dark:text-text-primary-dark
          font-body
        `}
      >
        {children}
      </body>
    </html>
  );
}