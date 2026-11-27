
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Consulting", href: "/consulting" },
  { label: "Product Development", href: "/product-development" },
  { label: "Digital Solutions", href: "/digital-solutions" },
  { label: "Marketing & Growth", href: "/marketing-growth" },
  { label: "Products", href: "/products" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-[29px] font-extrabold tracking-[-1.8px] text-[#101828]">
            DELL<span className="text-[#1769FF]">VE</span>
          </span>
          <span className="hidden border-l border-gray-300 pl-3 text-[9px] font-semibold uppercase leading-[1.5] tracking-[1.5px] text-gray-500 sm:block">
            Business
            <br />
            Innovation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-[#344054] transition-colors duration-200 hover:text-[#1769FF]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-md bg-[#1769FF] px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0755E8] hover:shadow-lg hover:shadow-blue-500/20 xl:inline-flex"
        >
          Let's Talk
          <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 text-2xl text-[#101828] transition hover:border-[#1769FF] hover:text-[#1769FF] xl:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 xl:hidden ${
          menuOpen ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] flex-col px-5 py-4 sm:px-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-100 py-3.5 text-[14px] font-medium text-[#344054] transition-colors hover:text-[#1769FF]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-md bg-[#1769FF] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0755E8]"
          >
            Let's Talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
