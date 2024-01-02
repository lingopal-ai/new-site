import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono, Roboto_Mono, Roboto, Inter } from "next/font/google";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "LingopalAI | AI models to transcribe and understand speech",
  description:
    "With LingopalAI's industry-leading Speech AI models, transcribe speech to text and extract insights from your voice data.",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const roboto_thin = Roboto({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-roboto-thin",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        roboto_mono.variable,
        jetbrains.variable,
        roboto.variable,
        roboto_thin.variable,
        inter.variable
      )}
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
