import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop Luxe",
  description: "Your one stop for everything and anything",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen flex flex-col bg-white">
//         <header className="p-8">
//           <Navbar />
//         </header>
//         <main className="flex-1 container mx-auto p-8">{children}</main>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen  bg-white flex flex-col">
        <header className="">
          <Navbar />
        </header>

        <main className="flex-1 px-20 py-10">{children}</main>

        <footer className="p-6 text-center">
          © 2025 Shop Luxe. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
