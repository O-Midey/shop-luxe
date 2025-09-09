"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import Logo from "./Logo";
import SearchButton from "./icons/SearchButton";
import UserIcon from "./icons/UserIcon";
import Wishlist from "./icons/WishlistIcon";
import CartIcon from "./icons/CartIcon";
import { useCartStore } from "@/app/_store/cartStore";
import AuthContext from "@/app/_context/AuthContext";
import AuthModal from "@/app/_components/AuthModal"; // 👈 import your modal

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const totalQuantity = useCartStore((state) => state.totalQuantity());
  const { user } = useContext(AuthContext);

  return (
    <>
      <nav className="flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-20 py-6 mt-6 shadow-md">
        {/* LEFT */}
        <div className="flex items-center space-x-8 flex-1">
          <button className="lg:hidden" onClick={() => setIsOpen(true)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden lg:flex space-x-8">
            <Link href="/">HOME</Link>
            <Link href="/shop/new">NEW</Link>
            <Link href="/shop/sale">SALE</Link>
            <Link href="/#categories">CATEGORIES</Link>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-1 text-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end space-x-6 flex-1">
          <SearchButton />

          <div className="hidden lg:flex items-center space-x-6">
            {/* USER ICON */}
            {user ? (
              <Link href="/account">
                <UserIcon />
              </Link>
            ) : (
              <button onClick={() => setIsAuthModalOpen(true)}>
                <UserIcon />
              </button>
            )}

            <Link href="/wishlist">
              <Wishlist showCountBadge />
            </Link>
            <Link href="/cart" className="relative">
              <CartIcon />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="mb-8 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link href="/shop/new" onClick={() => setIsOpen(false)}>
              NEW
            </Link>
            <Link href="/shop/sale" onClick={() => setIsOpen(false)}>
              SALE
            </Link>
            <Link href="/#categories" onClick={() => setIsOpen(false)}>
              CATEGORIES
            </Link>
            <div className="flex space-x-4 pt-6">
              <Wishlist />
              <CartIcon />
            </div>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed w-full inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* AUTH MODAL */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
