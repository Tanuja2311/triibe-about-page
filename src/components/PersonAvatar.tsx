import { useState } from "react";

interface Props {
  src: string;
  name: string;
  size: number;
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function PersonAvatar({ src, name, size }: Props) {
  const [errored, setErrored] = useState(false);
  const dim = { width: size, height: size, minWidth: size };

  if (errored) {
    return (
      <div
        className="rounded-full bg-[#1A6B3C] text-white flex items-center justify-center font-semibold flex-shrink-0"
        style={{ ...dim, fontSize: Math.round(size * 0.35) }}
      >
        {initials(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="rounded-full object-cover flex-shrink-0"
      style={dim}
      onError={() => setErrored(true)}
      loading="lazy"
    />
  );
}
