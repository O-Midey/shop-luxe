import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import FloatingBanner from "./_components/FloatingBanner";

export const metadata = {
  title: "Welcome to Shop Luxe",
  description: "Your one store for everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <header className="bg-white fixed top-0 left-0 w-full z-[999]">
          <FloatingBanner />
          <Navbar />
        </header>

        <main className="flex-1 z-0 pt-[216px]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
