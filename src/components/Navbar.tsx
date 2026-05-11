import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "https://triibe.org/" },
  { label: "Program", href: "https://triibe.org/program" },
  { label: "TRIIBE I00", href: "https://triibe.org/triibe100" },
  { label: "Summit", href: "https://triibe.org/summit" },
  { label: "TRIIBE Talk", href: "https://triibe.org/triibetalk" },
  { label: "Media", href: "https://triibe.org/media" },
  { label: "About us", href: "https://triibe.org/about", active: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="https://triibe.org" className="flex items-center shrink-0">
          <img
            src="/images/triibe-logo-black.png"
            alt="TRIIBE"
            style={{ height: 32, width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium transition-colors duration-200"
              style={{
                color: link.active ? "#1A6B3C" : "#111111",
                borderBottom: link.active
                  ? "1px solid #1A6B3C"
                  : "1px solid transparent",
                paddingBottom: "2px",
              }}
              onMouseEnter={(e) => {
                if (!link.active) e.currentTarget.style.color = "#1A6B3C";
              }}
              onMouseLeave={(e) => {
                if (!link.active) e.currentTarget.style.color = "#111111";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              padding: "7px 18px",
              borderRadius: "4px",
              border: "1px solid #1A6B3C",
              color: "#1A6B3C",
              backgroundColor: "transparent",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#EAF3DE")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Donate
          </a>
          <a
            href="https://triibe.org/apply"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              padding: "7px 18px",
              borderRadius: "4px",
              backgroundColor: "#1A6B3C",
              color: "white",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2D7A4B")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#1A6B3C")
            }
          >
            Apply
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#111111] p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[13px] font-medium transition-colors"
              style={{ color: link.active ? "#1A6B3C" : "#111111" }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3 border-t border-gray-100">
            <a
              href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                padding: "7px 18px",
                borderRadius: "4px",
                border: "1px solid #1A6B3C",
                color: "#1A6B3C",
              }}
            >
              Donate
            </a>
            <a
              href="https://triibe.org/apply"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                padding: "7px 18px",
                borderRadius: "4px",
                backgroundColor: "#1A6B3C",
                color: "white",
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
