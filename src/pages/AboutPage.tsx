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
  gridStyle,
}: {
  src: string;
  gridStyle?: CSSProperties;
}) {
  const [failed, setFailed] = useState(false);
  const base: CSSProperties = {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    ...gridStyle,
  };
  return failed ? (
    <div style={{ ...base, background: "#EAF3DE" }} />
  ) : (
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

export default function AboutPage() {
  const { count: count0, start: start0 } = useCountUp(8);
  const { count: count1, start: start1 } = useCountUp(6);
  const { count: count2, start: start2 } = useCountUp(17);
  const { count: count3, start: start3 } = useCountUp(30);

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
            <p
              className="uppercase font-medium text-[#1A6B3C] mb-4"
              style={{ fontSize: 11, letterSpacing: 3 }}
            >
              OUR ORGANIZATIONAL STRUCTURE
            </p>
            <h1
              className="font-extrabold text-[#111]"
              style={{ fontSize: 32, lineHeight: 1.25, letterSpacing: "-0.5px", marginBottom: 0 }}
            >
              <span style={{ display: "block", marginBottom: 12 }}>
                Everyone you see below is building
              </span>
              <img
                src="/images/triibe-logo-black.png"
                alt="TRIIBE"
                style={{ height: 52, display: "inline-block", filter: "brightness(0)" }}
              />
              <span>.</span>
            </h1>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.75, marginTop: "2rem" }}>
              Our board of directors, legally bound to be under 30, govern the
              foundation, with an associate board as the pipeline to future
              directors. Our legacy board and each location's advisory board
              over 30 opens doors and bridges generational expertise. Eight
              global departments and a network of managing directors run day to
              day operations, and our honorary members champion us in their own
              communities.
            </p>
          </FadeUp>

          {/* Right column — asymmetric photo mosaic */}
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
              <PhotoSlot src="/images/about/about-photo-1.jpg" />
              <PhotoSlot
                src="/images/about/about-photo-2.jpg"
                gridStyle={{ gridColumn: 2, gridRow: "span 2" }}
              />
              <PhotoSlot src="/images/about/about-photo-3.jpg" />
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
              <p style={{ fontSize: 11, color: "#888" }}>Locations worldwide</p>
            </div>
            <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>
                {count2}
                <span style={{ opacity: count2 === 17 ? 1 : 0, transition: "opacity 0.3s ease" }}>+</span>
              </p>
              <p style={{ fontSize: 11, color: "#888" }}>Legacy board members</p>
            </div>
            <div className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>
                {count3}
                <span style={{ opacity: count3 === 30 ? 1 : 0, transition: "opacity 0.3s ease" }}>+</span>
              </p>
              <p style={{ fontSize: 11, color: "#888" }}>Honorary members</p>
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
                <PersonCard person={person} photoSize={96} />
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
              description="The associate board is the pipeline to future TRIIBE directors — the next generation of leaders building toward governance. Invitations going out now."
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
              description="Experienced leaders who advise, connect, and champion TRIIBE's mission across sectors and generations."
            />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {legacyBoard.map((person) => (
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
              description="TRIIBE is decentralized by design. Each location is led by a chapter director building community on the ground."
            />
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <FadeUp key={loc.name + loc.location} delay={i * 80}>
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
          className="py-16 border-t border-gray-100 scroll-mt-28 pb-24"
        >
          <FadeUp delay={0}>
            <SectionHeader
              title="Honorary Members"
              description="Changemakers who have contributed to the TRIIBE community and whose work we carry forward."
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
    </main>
  );
}
