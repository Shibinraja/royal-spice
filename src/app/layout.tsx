/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from "./components/top-bar/TopBar";
import Header from "./components/header/Header";
import { BackToTopBtn } from "./components/top-btn/BackToTopBtn";
import Footer from "./sections/footer/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Royal Spice",
  description: "The Taste of India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </head> */}
      <body className={`${playfair.variable} antialiased`}>
        <TopBar />
        <Header />
        {children}
        <Footer/>
        <BackToTopBtn />
      </body>
    </html>
  );
}
