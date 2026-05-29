import { Logo } from "@/components/shared/Logo";
import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Tools", href: "#tools" },
  { label: "Stories", href: "#stories" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 pt-4 z-20">
      <nav className="w-full bg-card/50 border border-card rounded-xl px-6 py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Menu links */}
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
          <button className="md:hidden text-base font-medium p-2.5 cursor-pointer  text-marketing-muted">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
