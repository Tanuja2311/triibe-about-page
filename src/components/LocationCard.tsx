import { ArrowRight, Linkedin } from "lucide-react";
import PersonAvatar from "./PersonAvatar";
import type { LocationEntry } from "../types/about";

interface Props {
  entry: LocationEntry;
}

export default function LocationCard({ entry }: Props) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 bg-white hover:border-[#C0DD97] transition-colors gap-3">
      <PersonAvatar src={entry.imagePath} name={entry.name} size={64} />
      <div>
        <p className="font-bold text-[#111111] text-sm">{entry.name}</p>
        <p className="text-xs text-gray-500 mt-0.5">{entry.location}</p>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <a
          href={entry.locationPath}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#EAF3DE] text-[#1A6B3C] border border-[#C0DD97] hover:bg-[#d4ebc4] transition-colors"
        >
          View location <ArrowRight size={11} />
        </a>
        {entry.linkedIn && (
          <a
            href={entry.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors"
          >
            <Linkedin size={11} />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
