import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-20 bg-black text-white">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-40 text-center lg:text-left">
        <div className="flex flex-col">
          <Link href="/" className="py-2">
            Men
          </Link>
          <Link href="/" className="py-2">
            Women
          </Link>
          <Link href="/" className="py-2">
            Categories
          </Link>
          <Link href="/" className="py-2">
            About
          </Link>
          <Link href="/" className="py-2">
            Contact
          </Link>
        </div>
        <div className="flex flex-col">
          <Link href="/" className="py-2">
            Shipping & Returns
          </Link>
          <Link href="/" className="py-2">
            Store Policy
          </Link>
          <Link href="/" className="py-2">
            Payment Methods
          </Link>
          <Link href="/" className="py-2">
            FAQ
          </Link>
          <Link href="/" className="py-2">
            Contact
          </Link>
        </div>
        <div className="flex flex-col w-full max-w-md">
          <p className="pb-4">
            Join our mailing list and get 10% off your purchase
          </p>
          <form className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email">Enter your email here*</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full mt-2 p-2 block text-black bg-white"
              />
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <input
                type="checkbox"
                id="confirm-subscribe"
                name="confirm-subscribe"
                className="scale-150 mx-2"
              />
              <label htmlFor="confirm-subscribe">
                Yes, subscribe me to your newsletter
              </label>
            </div>
            <button className="w-full cursor-pointer hover:bg-gray-600 transition-all bg-gray-400 text-black p-3">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-20">
        <Logo />
        <p>© by Omotosho Ayomide</p>
      </div>
    </footer>
  );
}
