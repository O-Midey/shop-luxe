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
      <body className="min-h-screen  bg-white flex flex-col">
        <header className="">
          <FloatingBanner />
          <Navbar />
        </header>

        <main className="flex-1 py-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
