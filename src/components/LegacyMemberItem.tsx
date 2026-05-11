import { Linkedin } from "lucide-react";
import PersonAvatar from "./PersonAvatar";
import type { Person } from "../types/about";

interface Props {
  person: Person;
}

export default function LegacyMemberItem({ person }: Props) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <PersonAvatar src={person.imagePath} name={person.name} size={64} />
      <p className="text-xs font-semibold text-[#111111] leading-tight">{person.name}</p>
      {person.role && (
        <p className="text-[10px] text-[#2D7A4B] -mt-1">{person.role}</p>
      )}
      {person.linkedIn && (
        <a
          href={person.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:text-[#004182] transition-colors"
          aria-label={`${person.name} on LinkedIn`}
        >
          <Linkedin size={14} />
        </a>
      )}
    </div>
  );
}
