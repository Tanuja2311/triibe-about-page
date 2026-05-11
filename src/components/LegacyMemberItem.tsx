import PersonAvatar from "./PersonAvatar";
import { LinkedInBadge } from "./LinkedInBadge";
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
      <LinkedInBadge url={person.linkedIn} />
    </div>
  );
}
