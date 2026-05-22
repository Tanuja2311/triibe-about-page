import { useState, useRef, useEffect, type CSSProperties } from "react";
import { useCountUp } from "../hooks/useCountUp";
import { FadeUp } from "../components/FadeUp";
import {
  csuite,
  associateBoard,
  legacyBoard,
  locations,
  departments,
  honoraryMembers,
} from "../lib/about-data";
import TableOfContents from "../components/TableOfContents";
import PersonCard from "../components/PersonCard";
import LegacyMemberItem from "../components/LegacyMemberItem";
import LocationCard from "../components/LocationCard";
import DepartmentRow from "../components/DepartmentRow";
import HonoraryItem from "../components/HonoraryItem";

function PhotoSlot({
  src,
  avifSrc,
  gridStyle,
}: {
  src: string;
  avifSrc?: string;
  gridStyle?: CSSProperties;
}) {
  const [failed, setFailed] = useState(false);
  const base: CSSProperties = {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    ...gridStyle,
  };
  if (failed) return <div style={{ ...base, background: "#EAF3DE" }} />;
  if (avifSrc) {
    return (
      <picture style={gridStyle}>
        <source srcSet={avifSrc} type="image/avif" />
        <img
          src={src}
          alt=""
          onError={() => setFailed(true)}
          style={{ ...base, objectFit: "cover", display: "block" }}
        />
      </picture>
    );
  }
  return (
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
      style={{ ...base, objectFit: "cover", display: "block" }}
    />
  );
}

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-[#111111]">{title}</h2>
      {description && (
        <p className="text-gray-500 text-sm mt-2 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

const ctaCards = [
  {
    title: "Join a cohort",
    body: "Are you a next-gen nonprofit founder? Apply to become a TRIIBE Fellow.",
    buttonText: "Apply",
    href: "https://www.triibe.org/apply",
    external: true,
  },
  {
    title: "Get involved",
    body: "Partner with TRIIBE to empower next-gen founders.",
    buttonText: "Contact us",
    href: "mailto:partnerships@triibe.org",
    external: false,
  },
  {
    title: "Fund our work",
    body: "Your donation helps next-gen founders take root today to advance tomorrow.",
    buttonText: "Donate",
    href: "https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz",
    external: true,
  },
];

export default function AboutPage() {
  const { count: count0, start: start0 } = useCountUp(7);
  const { count: count1, start: start1 } = useCountUp(9);
  const { count: count2, start: start2 } = useCountUp(80);
  const { count: count3, start: start3 } = useCountUp(7);

  const statsRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          start0();
          setTimeout(() => start1(), 100);
          setTimeout(() => start2(), 200);
          setTimeout(() => start3(), 300);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <FadeUp delay={0}>
            <h1
              className="font-extrabold text-[#111]"
              style={{ fontSize: 32, lineHeight: 1.25, letterSpacing: "-0.5px", marginBottom: 0 }}
            >
              <span style={{ display: "block", fontWeight: 700, fontSize: 44 }}>
                Everyone you see below is building
              </span>
              <img
                src="/images/triibe-logo-black.png"
                alt="TRIIBE"
                style={{ height: 48, width: "auto", display: "block", marginTop: 36, filter: "brightness(0)" }}
              />
            </h1>
          </FadeUp>

          {/* Right column, asymmetric photo mosaic */}
          <FadeUp delay={150}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: 6,
                height: 340,
              }}
            >
              <div style={{ borderRadius: 10, overflow: "hidden", width: "100%", height: "100%" }}>
                <img
                  src="/images/about/about-photo-1.jpeg"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  alt="TRIIBE team"
                />
              </div>
              <div style={{ borderRadius: 10, overflow: "hidden", width: "100%", height: "100%", gridColumn: 2, gridRow: "span 2" }}>
                <img
                  src="/images/about/about-page-3.jpg"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  alt="TRIIBE team"
                />
              </div>
              <div style={{ borderRadius: 10, overflow: "hidden", width: "100%", height: "100%" }}>
                <img
                  src="/images/about/about-photo-2.png"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  alt="TRIIBE team"
                />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Stats bar */}
        <FadeUp delay={250}>
          <div
            ref={statsRef}
            className="flex justify-around"
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              marginTop: "2rem",
              borderTop: "0.5px solid #e8e8e8",
            }}
          >
            <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>{count0}</p>
              <p style={{ fontSize: 11, color: "#888" }}>Global departments</p>
            </div>
            <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>{count1}</p>
              <p style={{ fontSize: 11, color: "#888" }}>Nonprofit founders funded</p>
            </div>
            <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>
                {count2}
                <span style={{ opacity: count2 === 80 ? 1 : 0, transition: "opacity 0.3s ease" }}>+</span>
              </p>
              <p style={{ fontSize: 11, color: "#888" }}>TRIIBE members</p>
            </div>
            <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>{count3}</p>
              <p style={{ fontSize: 11, color: "#888" }}>Locations worldwide</p>
            </div>
          </div>
        </FadeUp>

        {/* How TRIIBE works */}
        <FadeUp delay={0}>
          <div
            style={{
              paddingTop: "3rem",
              paddingBottom: "3rem",
              borderTop: "0.5px solid #e8e8e8",
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#111", marginBottom: "2rem", display: "block" }}>
              How TRIIBE works
            </h2>
            <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "2.5rem",
              alignItems: "stretch",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}>
              <p style={{ fontSize: 14, color: "#333", lineHeight: 1.7, marginBottom: 16 }}>
                Our 3-year Fellowship ensures founders don't burn out while transitioning from a "youth" nonprofit to an established one.
              </p>
              <a
                href="https://www.triibe.org/fellowship"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#1A6B3C", color: "white", fontSize: 13, fontWeight: 600, padding: "10px 20px", borderRadius: 8, border: "none", display: "inline-block", textDecoration: "none", marginTop: "auto" }}
              >
                TRIIBE Fellowship
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}>
              <p style={{ fontSize: 14, color: "#333", lineHeight: 1.7, marginBottom: 16 }}>
                TRIIBE Talks highlight next-gen nonprofit founders alongside peers over 30, because age doesn't determine the quality of a voice.
              </p>
              <a
                href="https://www.triibe.org/talk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#1A6B3C", color: "white", fontSize: 13, fontWeight: 600, padding: "10px 20px", borderRadius: 8, border: "none", display: "inline-block", textDecoration: "none", marginTop: "auto" }}
              >
                TRIIBE Talks
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}>
              <p style={{ fontSize: 14, color: "#333", lineHeight: 1.7, marginBottom: 16 }}>
                The TRIIBE I00 is the definitive global list of nonprofit founders under 30 to know.
              </p>
              <a
                href="https://www.triibe.org/100"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#1A6B3C", color: "white", fontSize: 13, fontWeight: 600, padding: "10px 20px", borderRadius: 8, border: "none", display: "inline-block", textDecoration: "none", marginTop: "auto" }}
              >
                TRIIBE I00
              </a>
            </div>
          </div>
          </div>
        </FadeUp>
      </div>

      {/* ── Sticky Table of Contents ──────────────────────────────── */}
      <FadeUp delay={0}>
        <TableOfContents />
      </FadeUp>

      {/* ── Sections ─────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">

        {/* C-Suite & Board */}
        <section id="csuite" className="py-16 scroll-mt-28">
          <FadeUp delay={0}>
            <SectionHeader title="C-Suite & Board" />
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {csuite.map((person, i) => (
              <FadeUp key={person.name} delay={i * 100}>
                <PersonCard person={person} photoSize={120} />
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Associate Board */}
        <section
          id="associate"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <FadeUp delay={0}>
            <SectionHeader
              title="Associate Board"
              description="Associate Board Members serve as a pipeline to the Board of Directors, contribute to the Corporation's standing committees, and provide perspective and recommendations on the direction of the Corporation."
            />
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {associateBoard.map((person, i) => (
              <FadeUp key={person.name} delay={i * 80}>
                <PersonCard person={person} photoSize={80} />
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Legacy Board */}
        <section
          id="legacy"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <FadeUp delay={0}>
            <SectionHeader
              title="Legacy Board"
              description="Legacy Board members serve as ambassadors, connectors, and advisors, providing institutional credibility, senior-level counsel, and access to networks that advance its mission."
            />
          </FadeUp>
          <FadeUp delay={100}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
              <div style={{ width: "25%" }}>
                <LegacyMemberItem person={legacyBoard[0]} />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              {legacyBoard.slice(1).map((person) => (
                <LegacyMemberItem key={person.name} person={person} />
              ))}
            </div>
          </FadeUp>
        </section>

        {/* Locations */}
        <section
          id="locations"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <FadeUp delay={0}>
            <SectionHeader
              title="Locations"
              description="TRIIBE, like our name, is decentralized by design. Each location is led by a managing director, with a team and advisory board. Advisory Board members serve as regional ambassadors, connectors, and advisors, providing institutional credibility, senior-level counsel, and access to local networks that advance its mission."
            />
            <span style={{ fontSize: 14, color: "#888", fontStyle: "italic", marginBottom: "2rem", display: "block" }}>
              Local advisors who open doors, build community, and drive fundraising on the ground.
            </span>
          </FadeUp>
          <div className="space-y-4">
            {locations.map((loc, i) => (
              <FadeUp key={loc.location} delay={i * 80}>
                <LocationCard entry={loc} />
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section
          id="departments"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <FadeUp delay={0}>
            <SectionHeader
              title="Departments"
              description="Eight departments, each led by a head and supported by a growing team of contributors."
            />
          </FadeUp>
          <div className="space-y-4">
            {departments.map((dept, i) => (
              <FadeUp key={dept.name} delay={i * 100}>
                <DepartmentRow department={dept} />
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Honorary Members */}
        <section
          id="honorary"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <FadeUp delay={0}>
            <SectionHeader
              title="Honorary Members"
              description="Additional contributors who have shaped the TRIIBE community."
            />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
              {honoraryMembers.map((member) => (
                <HonoraryItem key={member.name} member={member} />
              ))}
            </div>
          </FadeUp>
        </section>

      </div>

      {/* ── 3-CTA Section ────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D2B1E", paddingTop: 80, paddingBottom: 80, width: "100%" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
            {ctaCards.map((card) => (
              <div
                key={card.title}
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: 14,
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 220,
                }}
              >
                <h3 style={{ color: "white", fontWeight: 700, fontSize: 22, margin: 0, marginBottom: 16 }}>
                  {card.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                  {card.body}
                </p>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="block w-full text-center bg-white text-[#0D2B1E] hover:bg-[#f0f0f0] transition-colors"
                  style={{
                    marginTop: "1.5rem",
                    padding: "14px 0",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {card.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
