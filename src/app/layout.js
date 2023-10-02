import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--display-font",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--body-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </head>
      <body className={`${playfair.variable} ${source.variable}`}>
        <Navigation />
        <div className="text-dark font-body">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
