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
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  };

  if (errored) {
    return (
      <div
        style={{
          ...containerStyle,
          background: "#1A6B3C",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: Math.round(size * 0.35),
        }}
      >
        {initials(name)}
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <img
        src={src}
        alt={name}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        onError={() => setErrored(true)}
        loading="lazy"
      />
    </div>
  );
}
