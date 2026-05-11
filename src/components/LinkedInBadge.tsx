interface Props {
  url: string | undefined;
}

export function LinkedInBadge({ url }: Props) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md text-white font-bold text-[11px] hover:opacity-90 transition-opacity"
      style={{ width: 20, height: 20, backgroundColor: "#0A66C2", flexShrink: 0 }}
      aria-label="LinkedIn profile"
    >
      in
    </a>
  );
}
