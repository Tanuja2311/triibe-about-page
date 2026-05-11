import PersonAvatar from "./PersonAvatar";
import { LinkedInBadge } from "./LinkedInBadge";
import { InstagramBadge } from "./InstagramBadge";
import type { HonoraryMember } from "../types/about";

interface Props {
  member: HonoraryMember;
}

export default function HonoraryItem({ member }: Props) {
  const isInstagram = member.linkedIn?.includes("instagram.com");

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <PersonAvatar src={member.imagePath} name={member.name} size={32} />
      <p style={{ fontSize: 13, fontWeight: 500, color: '#111111', whiteSpace: 'nowrap', textAlign: 'center' }}>{member.name}</p>
      {isInstagram ? (
        <InstagramBadge url={member.linkedIn!} />
      ) : (
        <LinkedInBadge url={member.linkedIn} />
      )}
    </div>
  );
}
