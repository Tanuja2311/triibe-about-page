import { Linkedin } from "lucide-react";
import PersonAvatar from "./PersonAvatar";
import type { Person } from "../types/about";

interface Props {
  person: Person;
  photoSize: number;
}

export default function PersonCard({ person, photoSize }: Props) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 bg-white hover:border-[#C0DD97] transition-colors">
      <PersonAvatar src={person.imagePath} name={person.name} size={photoSize} />
      <p className="font-bold text-[#111111] text-sm mt-4 leading-tight">{person.name}</p>
      {person.role && (
        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF3DE] text-[#1A6B3C] border border-[#C0DD97]">
          {person.role}
        </span>
      )}
      {person.linkedIn && (
        <a
          href={person.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#0A66C2] hover:underline"
        >
          <Linkedin size={12} />
          LinkedIn
        </a>
      )}
    </div>
  );
}
