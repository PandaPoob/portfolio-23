"use client";
import "./globals.css";
import "aos/dist/aos.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";
import AOS from "aos";
import { React, useEffect } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--display-font",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--body-font",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <meta
          property="og:image"
          content="https://pandapoob.com/img/display.PNG"
        />
      </head>
      <body
        className={`${playfair.variable} ${source.variable} max-w-screen overflow-x-hidden`}
      >
        <Navigation />
        <div className="text-dark font-body">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
