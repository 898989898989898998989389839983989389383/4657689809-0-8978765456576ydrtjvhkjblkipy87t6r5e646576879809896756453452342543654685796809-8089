import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/brands", label: "Brands" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-300/60 bg-orange-500/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo subtitle="Old Baneshwor, Kathmandu" className="gap-2.5" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/15 hover:text-white"
              activeProps={{ className: "!bg-white/20 !text-white font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/9779843766006"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 xl:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp 9843766006
          </a>
          <a
            href="tel:+9779843766006"
            className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="border-t border-orange-300/60 bg-orange-500 px-4 pb-4 pt-2 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/15 hover:text-white"
              activeProps={{ className: "!bg-white/20 !text-white font-semibold" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/9779843766006"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp 9843766006
          </a>
          <a
            href="tel:+9779843766006"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-orange-600"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
