import PersonAvatar from "./PersonAvatar";
import { LinkedInBadge } from "./LinkedInBadge";
import type { LocationEntry, LocationAdvisoryMember } from "../types/about";

function AdvisoryChip({ member }: { member: LocationAdvisoryMember }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        minWidth: 80,
        maxWidth: 100,
      }}
    >
      <PersonAvatar src={member.imagePath} name={member.name} size={40} />
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
        {member.name}
      </p>
      {member.role && (
        <p
          style={{
            fontSize: 10,
            color: "#1A6B3C",
            whiteSpace: "nowrap",
            marginTop: 2,
          }}
        >
          {member.role}
        </p>
      )}
      <LinkedInBadge url={member.linkedIn} />
    </div>
  );
}

interface Props {
  entry: LocationEntry;
}

export default function LocationCard({ entry }: Props) {
  return (
    <div className="flex rounded-xl overflow-hidden border border-[#C0DD97]">
      {/* Left sidebar */}
      <div
        className="flex flex-col justify-start gap-2 p-4 border-r border-[#C0DD97] flex-shrink-0"
        style={{ width: 140, background: "rgba(26,107,60,0.12)" }}
      >
        <span style={{ fontSize: 22, lineHeight: 1 }}>{entry.flag}</span>
        <p
          className="text-[#1A6B3C] font-bold leading-snug"
          style={{ fontSize: 11 }}
        >
          {entry.location}
        </p>
        {entry.locationPath && (
          <a
            href={entry.locationPath}
            className="text-[#1A6B3C] underline mt-1"
            style={{ fontSize: 10 }}
          >
            View →
          </a>
        )}
      </div>

      {/* Right side */}
      <div style={{ flex: 1, padding: 16, minWidth: 0 }}>
        {/* Managing Director */}
        {entry.mdName && (
          <div style={{ marginBottom: entry.advisoryBoard.length > 0 || entry.advisoryBoardForming ? 14 : 0 }}>
            <p
              style={{
                fontSize: 9,
                color: "#999",
                textTransform: "uppercase",
                letterSpacing: 1.2,
                marginBottom: 8,
              }}
            >
              Managing Director
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <PersonAvatar
                src={entry.mdImagePath ?? ""}
                name={entry.mdName}
                size={64}
              />
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#111111", lineHeight: 1.3 }}>
                  {entry.mdName}
                </p>
                <div style={{ marginTop: 4 }}>
                  <LinkedInBadge url={entry.mdLinkedIn} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Advisory Board */}
        {entry.advisoryBoardForming ? (
          <p style={{ fontSize: 11, color: "#aaa", fontStyle: "italic", lineHeight: 1.5 }}>
            Advisory board forming.
          </p>
        ) : entry.advisoryBoard.length > 0 ? (
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 24px", padding: "12px 0" }}>
              {entry.advisoryBoard.map((member) => (
                <AdvisoryChip key={member.name} member={member} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
