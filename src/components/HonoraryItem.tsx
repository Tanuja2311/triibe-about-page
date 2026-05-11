import { Linkedin, Instagram } from "lucide-react";
import PersonAvatar from "./PersonAvatar";
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
      {member.linkedIn && (
        <a
          href={member.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:text-[#004182] transition-colors"
          aria-label={`${member.name} on ${isInstagram ? "Instagram" : "LinkedIn"}`}
        >
          {isInstagram ? <Instagram size={10} /> : <Linkedin size={10} />}
        </a>
      )}
    </div>
  );
}
