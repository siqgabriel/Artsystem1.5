import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PopupWidget from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArtSystem",
  description: "ArtSystem - Soluções em tecnologia",
};

export default function RootLayout({
  children,
  hideNavbarAndPopup = false,
}: Readonly<{
  children: React.ReactNode;
  hideNavbarAndPopup?: boolean;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {!hideNavbarAndPopup && <Navbar />}
          <div>{children}</div>
          <Footer />
          {!hideNavbarAndPopup && <PopupWidget />}
        </ThemeProvider>
      </body>
    </html>
  );
}