import SideNav2 from "@/Components/SideNav2/page";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/Components/Footer/page";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hackerthon",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          {/* Add global meta tags, link to stylesheets, etc. */}
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
      
          <SideNav1/>
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
    </>
  );
}