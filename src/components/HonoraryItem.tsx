import { Instagram } from "lucide-react";
import PersonAvatar from "./PersonAvatar";
import { LinkedInBadge } from "./LinkedInBadge";
import type { HonoraryMember } from "../types/about";

interface Props {
  member: HonoraryMember;
}

export default function HonoraryItem({ member }: Props) {
  const isInstagram = member.linkedIn?.includes("instagram.com");

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <PersonAvatar src={member.imagePath} name={member.name} size={32} />
      <p className="text-[10px] font-medium text-[#111111] leading-tight">{member.name}</p>
      {isInstagram ? (
        <a
          href={member.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E1306C] hover:opacity-80 transition-opacity"
          aria-label={`${member.name} on Instagram`}
        >
          <Instagram size={12} />
        </a>
      ) : (
        <LinkedInBadge url={member.linkedIn} />
      )}
    </div>
  );
}
