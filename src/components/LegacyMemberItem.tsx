import PersonAvatar from "./PersonAvatar";
import { LinkedInBadge } from "./LinkedInBadge";
import type { Person } from "../types/about";

interface Props {
  person: Person;
}

export default function LegacyMemberItem({ person }: Props) {
  return (
    <div style={{ background: "white", border: "0.5px solid #e8e8e8", borderRadius: 10, padding: "1.25rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <PersonAvatar src={person.imagePath} name={person.name} size={64} />
      <p className="font-bold text-[#111111] text-sm mt-4 leading-tight">{person.name}</p>
      {person.role && (
        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF3DE] text-[#1A6B3C] border border-[#C0DD97]">
          {person.role}
        </span>
      )}
      {person.title && (
        <p style={{ fontSize: 11, color: "#888", marginTop: 6, lineHeight: 1.4 }}>{person.title}</p>
      )}
      <div className="mt-3">
        <LinkedInBadge url={person.linkedIn} />
      </div>
    </div>
  );
}
