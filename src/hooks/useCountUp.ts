import { useState, useEffect } from "react";

export function useCountUp(
  target: number,
  duration: number = 1500,
  startOnMount: boolean = false
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(startOnMount);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | undefined;
    const step = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return { count, start: () => setHasStarted(true) };
}
