"use client";

import { useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Tools", href: "#tools" },
  { label: "Stories", href: "#stories" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full max-w-6xl mx-auto px-6 pt-4">
      <nav className="relative w-full bg-card/50 backdrop-blur-md border border-card rounded-xl px-6 py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Menu links for desktop */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium text-marketing-muted">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-marketing-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA and Mobile Menu buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/signup"
            className="hidden md:inline-flex bg-marketing-primary text-card text-base font-medium px-5 py-2.5 rounded-xl hover:bg-marketing-primary/90 active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            Free Trial
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-base font-medium p-2.5 cursor-pointer text-marketing-muted hover:text-marketing-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-lg border border-card rounded-xl p-4 shadow-lg flex flex-col gap-4 animate-fade-in z-50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-marketing-muted hover:text-marketing-primary transition-colors py-2 px-3 rounded-lg hover:bg-marketing-primary/5"
              >
                {item.label}
              </a>
            ))}
            <hr className="border-card my-1" />
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="w-full bg-marketing-primary text-card text-center text-base font-medium py-3 rounded-xl hover:bg-marketing-primary/90 active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              Free Trial
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
