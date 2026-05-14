import { useState, type CSSProperties } from "react";
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

const stats = [
  { value: "8", label: "Global departments" },
  { value: "6", label: "Locations worldwide" },
  { value: "17+", label: "Legacy board members" },
  { value: "30+", label: "Honorary members" },
];

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
  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div>
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
              <img src="/images/triibe-logo-black.png" alt="TRIIBE" style={{ height: 52, display: "inline-block", filter: "brightness(0)" }} />
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
          </div>

          {/* Right column — asymmetric photo mosaic */}
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
        </div>

        {/* Stats bar */}
        <div
          className="flex justify-around"
          style={{
            paddingTop: "2rem",
            marginTop: "2rem",
            borderTop: "0.5px solid #e8e8e8",
          }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1A6B3C" }}>
                {value}
              </p>
              <p style={{ fontSize: 11, color: "#888" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sticky Table of Contents ──────────────────────────────── */}
      <TableOfContents />

      {/* ── Sections ─────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">

        {/* C-Suite & Board */}
        <section id="csuite" className="py-16 scroll-mt-28">
          <SectionHeader title="C-Suite & Board" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {csuite.map((person) => (
              <PersonCard key={person.name} person={person} photoSize={96} />
            ))}
          </div>
        </section>

        {/* Associate Board */}
        <section
          id="associate"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <SectionHeader
            title="Associate Board"
            description="The associate board is the pipeline to future TRIIBE directors — the next generation of leaders building toward governance. Invitations going out now."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {associateBoard.map((person) => (
              <PersonCard key={person.name} person={person} photoSize={80} />
            ))}
          </div>
        </section>

        {/* Legacy Board */}
        <section
          id="legacy"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <SectionHeader
            title="Legacy Board"
            description="Experienced leaders who advise, connect, and champion TRIIBE's mission across sectors and generations."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {legacyBoard.map((person) => (
              <LegacyMemberItem key={person.name} person={person} />
            ))}
          </div>
        </section>

        {/* Locations */}
        <section
          id="locations"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <SectionHeader
            title="Locations"
            description="TRIIBE is decentralized by design. Each location is led by a chapter director building community on the ground."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <LocationCard key={loc.name + loc.location} entry={loc} />
            ))}
          </div>
        </section>

        {/* Departments */}
        <section
          id="departments"
          className="py-16 border-t border-gray-100 scroll-mt-28"
        >
          <SectionHeader
            title="Departments"
            description="Eight departments, each led by a head and supported by a growing team of contributors."
          />
          <div className="space-y-4">
            {departments.map((dept) => (
              <DepartmentRow key={dept.name} department={dept} />
            ))}
          </div>
        </section>

        {/* Honorary Members */}
        <section
          id="honorary"
          className="py-16 border-t border-gray-100 scroll-mt-28 pb-24"
        >
          <SectionHeader
            title="Honorary Members"
            description="Changemakers who have contributed to the TRIIBE community and whose work we carry forward."
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
            {honoraryMembers.map((member) => (
              <HonoraryItem key={member.name} member={member} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
