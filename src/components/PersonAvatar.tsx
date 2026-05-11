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

  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    minWidth: size,
    flexShrink: 0,
  };

  if (errored) {
    return (
      <div
        className="rounded-full bg-[#1A6B3C] text-white flex items-center justify-center font-semibold"
        style={{ ...containerStyle, fontSize: Math.round(size * 0.35) }}
      >
        {initials(name)}
      </div>
    );
  }

  return (
    <div
      className="rounded-full overflow-hidden"
      style={containerStyle}
    >
      <img
        src={src}
        alt={name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        onError={() => setErrored(true)}
        loading="lazy"
      />
    </div>
  );
}
