import type { LucideIcon } from "lucide-react";
import { Mail, Linkedin, Youtube, Instagram } from "lucide-react";

// ─── data ────────────────────────────────────────────────────────────────────

const linkGroups: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "For applicants",
    links: [
      { label: "Apply Now", href: "https://www.triibe.org/apply" },
      { label: "Fellowship Details", href: "https://www.triibe.org/fellowship" },
      { label: "FAQ", href: "https://www.triibe.org/fellowship#faqFellowship" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Team", href: "https://www.triibe.org/about" },
      { label: "Fellows", href: "https://www.triibe.org/cohort" },
    ],
  },
  {
    heading: "Partner",
    links: [
      { label: "Donate", href: "https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz" },
      { label: "Contact", href: "mailto:partnerships@triibe.org" },
    ],
  },
];

const socialLinks: { Icon: LucideIcon; href: string; label: string }[] = [
  { Icon: Mail, href: "mailto:partnerships@triibe.org", label: "Email" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/thetriibe/", label: "LinkedIn" },
  { Icon: Youtube, href: "https://www.youtube.com/@TRIIBEorg", label: "YouTube" },
  { Icon: Instagram, href: "https://www.instagram.com/triibe__talk", label: "Instagram" },
];

// ─── helpers ─────────────────────────────────────────────────────────────────

function isMailto(href: string) {
  return href.startsWith("mailto");
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={isMailto(href) ? undefined : "_blank"}
      rel={isMailto(href) ? undefined : "noopener noreferrer"}
      style={{
        display: "block",
        marginBottom: 8,
        fontSize: 14,
        color: "#444",
        textDecoration: "none",
        transition: "color 0.15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#1A6B3C")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
    >
      {label}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

// ─── component ───────────────────────────────────────────────────────────────

/**
 * Reusable TRIIBE site footer.
 * Matches triibe.org — white background, 5-column top grid, dark bottom bar.
 * Import and drop in at the bottom of any TRIIBE page.
 */
export default function Footer() {
  return (
    <footer style={{ backgroundColor: "white" }}>
      <div className="max-w-6xl mx-auto px-6" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>

        {/* ── Top: 5-column grid ─────────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          style={{ paddingBottom: "2rem", borderBottom: "0.5px solid #e8e8e8" }}
        >
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/triibe-logo-black.png"
              alt="TRIIBE"
              style={{ height: 32, width: "auto" }}
            />
            <p style={{ fontSize: 14, color: "#444", marginTop: 12, maxWidth: 200, lineHeight: 1.65 }}>
              Building a world that prioritizes a return on impact, not income.
            </p>
          </div>

          {/* Cols 2–4 — Link groups */}
          {linkGroups.map(({ heading, links }) => (
            <div key={heading}>
              <p style={{ fontWeight: 600, fontSize: 13, color: "#111", marginBottom: 12 }}>
                {heading}
              </p>
              {links.map(({ label, href }) => (
                <FooterLink key={label} href={href} label={label} />
              ))}
            </div>
          ))}

          {/* Col 5 — Transparency */}
          <div>
            <p style={{ fontWeight: 600, fontSize: 13, color: "#111", marginBottom: 12 }}>
              Transparency
            </p>
            <a
              href="https://app.candid.org/profile/16039436/triibe-33-2683719/?pkId=c105f719-74b7-416c-a32c-8f844267934d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.triibe.org/images/candid.svg"
                alt="Candid Platinum Transparency Seal"
                style={{ width: 80 }}
              />
            </a>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
        >
          <p style={{ fontSize: 13, color: "#888" }}>
            © 2026 TRIIBE 501(c)(3). All rights reserved.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={isMailto(href) ? undefined : "_blank"}
                rel={isMailto(href) ? undefined : "noopener noreferrer"}
                aria-label={label}
                style={{ color: "#444", display: "flex", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1A6B3C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
              >
                <Icon size={20} />
              </a>
            ))}

            {/* TikTok — no Lucide icon, inline SVG */}
            <a
              href="https://www.tiktok.com/@triibetalk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              style={{ color: "#444", display: "flex", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A6B3C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
