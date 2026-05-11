import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "https://triibe.org/" },
  { label: "Program", href: "https://triibe.org/program" },
  { label: "TRIIBE I00", href: "https://triibe.org/triibe100" },
  { label: "Summit", href: "https://triibe.org/summit" },
  { label: "TRIIBE Talk", href: "https://triibe.org/triibetalk" },
  { label: "Media", href: "https://triibe.org/media" },
  { label: "About Us", href: "https://triibe.org/about", active: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="https://triibe.org" aria-label="TRIIBE home">
            <img
              src="/images/triibe-logo.png"
              alt="TRIIBE"
              className="h-7"
              style={{ filter: "brightness(0)" }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-medium transition-colors ${
                  link.active
                    ? "text-[#1A6B3C]"
                    : "text-[#111111] hover:text-[#1A6B3C]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-4 py-2 rounded-full border border-[#1A6B3C] text-[#1A6B3C] hover:bg-[#EAF3DE] transition-colors"
              >
                Donate
              </a>
              <a
                href="https://triibe.org/apply"
                className="text-xs font-semibold px-4 py-2 rounded-full bg-[#1A6B3C] text-white hover:bg-[#2D7A4B] transition-colors"
              >
                Apply
              </a>
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden text-[#111111] p-1"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block text-sm font-medium ${
                link.active ? "text-[#1A6B3C]" : "text-[#111111]"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex gap-3 border-t border-gray-100">
            <a
              href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2 rounded-full border border-[#1A6B3C] text-[#1A6B3C]"
            >
              Donate
            </a>
            <a
              href="https://triibe.org/apply"
              className="text-xs font-semibold px-4 py-2 rounded-full bg-[#1A6B3C] text-white"
            >
              Apply
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
