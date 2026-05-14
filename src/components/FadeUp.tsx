import { useFadeUp } from "../hooks/useFadeUp";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}

export function FadeUp({ children, delay = 0, threshold = 0.15 }: FadeUpProps) {
  const { ref, visible } = useFadeUp(threshold);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
