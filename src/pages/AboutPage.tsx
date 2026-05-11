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
    <main className="bg-white min-h-screen font-sans">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-6">
        <div className="border border-black rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left: black */}
          <div className="bg-[#111111] p-10 lg:p-12 flex flex-col justify-center min-h-64">
            <p className="text-[#78C896] text-xs uppercase tracking-widest font-semibold mb-5">
              Our organizational structure
            </p>
            <h1 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
              Everyone you see below is building TRIIBE.
            </h1>
          </div>

          {/* Right: white */}
          <div className="bg-white p-8 lg:p-10">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              TRIIBE runs on eight global departments, chapters in six countries, and dozens of
              legacy advisors and honorary changemakers. From the C-Suite to the associate board
              pipeline — everyone listed below is actively building the infrastructure next-gen
              nonprofit founders need to grow without burning out.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-lg p-4 border border-[#C0DD97]"
                  style={{ background: "rgba(26,107,60,0.08)" }}
                >
                  <p className="text-2xl font-bold text-[#1A6B3C]">{value}</p>
                  <p className="text-xs text-[#2D7A4B] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Table of Contents */}
      <TableOfContents />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* C-Suite & Board */}
        <section id="csuite" className="py-16 scroll-mt-20">
          <SectionHeader title="C-Suite & Board" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {csuite.map((person) => (
              <PersonCard key={person.name} person={person} photoSize={96} />
            ))}
          </div>
        </section>

        {/* Associate Board */}
        <section id="associate" className="py-16 border-t border-gray-100 scroll-mt-20">
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
        <section id="legacy" className="py-16 border-t border-gray-100 scroll-mt-20">
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
        <section id="locations" className="py-16 border-t border-gray-100 scroll-mt-20">
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
        <section id="departments" className="py-16 border-t border-gray-100 scroll-mt-20">
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
        <section id="honorary" className="py-16 border-t border-gray-100 scroll-mt-20 pb-24">
          <SectionHeader
            title="Honorary Members"
            description="Changemakers who have contributed to the TRIIBE community and whose work we carry forward."
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {honoraryMembers.map((member) => (
              <HonoraryItem key={member.name} member={member} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
