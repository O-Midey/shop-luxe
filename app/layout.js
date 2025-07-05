import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Welcome to Shop Luxe",
  description: "Your one stop for everything and anything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen  bg-white flex flex-col">
        <header className="">
          <Navbar />
        </header>

        <main className="flex-1 py-10">{children}</main>

        <footer className="p-6 text-center">
          © 2025 Shop Luxe. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
