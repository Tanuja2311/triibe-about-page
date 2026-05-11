import { Linkedin } from "lucide-react";
import PersonAvatar from "./PersonAvatar";
import type { Department } from "../types/about";

function MemberChip({
  name,
  imagePath,
  linkedIn,
}: {
  name: string;
  imagePath: string;
  linkedIn?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 w-16">
      <PersonAvatar src={imagePath} name={name} size={40} />
      <p className="text-[10px] text-[#111111] font-medium text-center leading-tight w-full break-words">
        {name}
      </p>
      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:text-[#004182] transition-colors"
          aria-label={`${name} on LinkedIn`}
        >
          <Linkedin size={10} />
        </a>
      )}
    </div>
  );
}

interface Props {
  department: Department;
}

export default function DepartmentRow({ department }: Props) {
  const { name, Icon, members } = department;

  return (
    <div className="flex rounded-xl overflow-hidden border border-[#C0DD97]">
      <div
        className="flex flex-col justify-center gap-1.5 p-4 border-r border-[#C0DD97] flex-shrink-0"
        style={{ width: 130, background: "rgba(26,107,60,0.12)" }}
      >
        <Icon size={20} className="text-[#1A6B3C]" />
        <p className="text-[#1A6B3C] font-bold text-sm leading-tight">{name}</p>
        <p className="text-[#2D7A4B] text-xs">
          {members.length} {members.length === 1 ? "member" : "members"}
        </p>
      </div>
      <div className="flex-1 flex flex-wrap gap-4 p-4 items-start content-start">
        {members.map((member) => (
          <MemberChip
            key={member.name}
            name={member.name}
            imagePath={member.imagePath}
            linkedIn={member.linkedIn}
          />
        ))}
      </div>
    </div>
  );
}
