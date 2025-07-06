import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Banner from "./_components/Banner";

export const metadata = {
  title: "Welcome to Shop Luxe",
  description: "Your one stop for everything and anything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen  bg-white flex flex-col">
        <header className="">
          <Banner />
          <Navbar />
        </header>

        <main className="flex-1 py-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
