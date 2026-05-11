import PersonAvatar from "./PersonAvatar";
import { LinkedInBadge } from "./LinkedInBadge";
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        width: 110,
        minWidth: 110,
        maxWidth: 110,
      }}
    >
      <PersonAvatar src={imagePath} name={name} size={40} />
      <p
        style={{
          fontSize: 11,
          color: "#111111",
          fontWeight: 500,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%",
        }}
      >
        {name}
      </p>
      <LinkedInBadge url={linkedIn} />
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
      <div
        style={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          gap: "16px 28px",
          padding: 16,
          alignItems: "flex-start",
          alignContent: "flex-start",
        }}
      >
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
