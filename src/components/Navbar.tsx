import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "https://www.triibe.org/" },
  { label: "Program", href: "https://www.triibe.org/program" },
  { label: "TRIIBE I00", href: "https://www.triibe.org/triibe-i00" },
  { label: "Summit", href: "https://www.triibe.org/summit" },
  { label: "TRIIBE Talk", href: "https://www.triibe.org/triibe-talk" },
  { label: "Media", href: "https://www.triibe.org/media" },
  { label: "About us", href: "#", active: true },
];

const BG = "#0D2B1E";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto px-8 flex items-center h-16">

        {/* Logo */}
        <div className="flex-1">
          <a href="https://www.triibe.org/">
            <img
              src="/images/triibe-logo-black.png"
              alt="TRIIBE"
              style={{
                height: 32,
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
          </a>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                color: "#ffffff",
                fontWeight: link.active ? 700 : 400,
                textDecoration: "none",
                opacity: link.active ? 1 : 0.85,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity = link.active ? "1" : "0.85")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="flex-1 hidden md:flex justify-end items-center gap-3">
          <a
            href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "#ffffff",
              color: BG,
              border: "1px solid #ffffff",
              padding: "7px 20px",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Donate
          </a>
          <a
            href="https://www.triibe.org/apply"
            className="rounded-md transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "#ffffff",
              color: BG,
              border: "1px solid #ffffff",
              padding: "7px 20px",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Apply
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex-1 flex justify-end md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
          style={{ backgroundColor: BG, borderColor: "rgba(255,255,255,0.15)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 14,
                color: "#ffffff",
                fontWeight: link.active ? 700 : 400,
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            className="flex gap-3 pt-3 border-t"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            <a
              href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md"
              style={{
                backgroundColor: "#ffffff",
                color: BG,
                border: "1px solid #ffffff",
                padding: "7px 20px",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Donate
            </a>
            <a
              href="https://www.triibe.org/apply"
              className="rounded-md"
              style={{
                backgroundColor: "#ffffff",
                color: BG,
                border: "1px solid #ffffff",
                padding: "7px 20px",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Apply
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
