export function LinkedInBadge({ url }: { url: string }) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        color: '#0A66C2',
        fontFamily: '"Source Sans Pro", "Arial", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        textDecoration: 'none',
        background: 'none',
        border: 'none',
        padding: 0,
        letterSpacing: '-0.5px',
      }}
    >
      in
    </a>
  );
}
