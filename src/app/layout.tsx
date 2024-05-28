import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Official Reforged Wiki",
  description:
    "The Reforged Wiki is an official wiki devoted to providing information about the Reforged features.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
