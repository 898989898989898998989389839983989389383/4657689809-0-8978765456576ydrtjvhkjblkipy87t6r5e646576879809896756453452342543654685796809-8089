import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type Spark = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  color: string;
};

const sparkColors = [
  "rgba(255, 211, 105, 0.95)",
  "rgba(32, 71, 168, 0.95)",
  "rgba(255, 242, 196, 0.98)",
] as const;

export default function CursorTrail() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [sparks, setSparks] = useState<Spark[]>([]);
  const lastPoint = useRef({ x: 0, y: 0 });
  const sparkId = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window === "undefined") return;

    const mediaQueries = [
      window.matchMedia("(pointer: fine)"),
      window.matchMedia("(prefers-reduced-motion: no-preference)"),
    ];

    const syncEnabled = () => {
      setEnabled(mediaQueries.every((query) => query.matches));
    };

    syncEnabled();
    mediaQueries.forEach((query) => query.addEventListener("change", syncEnabled));

    return () => {
      mediaQueries.forEach((query) => query.removeEventListener("change", syncEnabled));
    };
  }, [mounted]);

  useEffect(() => {
    if (!enabled) {
      setCursor({ x: 0, y: 0, visible: false });
      setSparks([]);
      return;
    }

    const removeSpark = (id: number) => {
      setSparks((current) => current.filter((spark) => spark.id !== id));
    };

    const handleMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      setCursor({ x, y, visible: true });

      const dx = x - lastPoint.current.x;
      const dy = y - lastPoint.current.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 16) return;

      lastPoint.current = { x, y };

      const sparkCount = Math.min(3, Math.max(1, Math.round(distance / 22)));
      const nextSparks: Spark[] = Array.from({ length: sparkCount }, (_, index) => {
        const id = sparkId.current++;
        const offsetX = (Math.random() - 0.5) * 18 - dx * 0.08;
        const offsetY = (Math.random() - 0.5) * 18 - dy * 0.08;
        const spark = {
          id,
          x: x + offsetX,
          y: y + offsetY,
          size: 6 + Math.random() * 10,
          rotation: Math.random() * 360,
          duration: 520 + Math.random() * 360,
          color: sparkColors[(sparkId.current + index) % sparkColors.length],
        };

        window.setTimeout(() => removeSpark(id), spark.duration);
        return spark;
      });

      setSparks((current) => [...current.slice(-14), ...nextSparks]);
    };

    const handleLeave = () => {
      setCursor((current) => ({ ...current, visible: false }));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [enabled]);

  if (!mounted || !enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden="true">
      <div
        className={`cursor-orb ${cursor.visible ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: `translate3d(${cursor.x - 18}px, ${cursor.y - 18}px, 0)`,
        }}
      />

      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="cursor-spark"
          style={
            {
              left: `${spark.x}px`,
              top: `${spark.y}px`,
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              "--spark-color": spark.color,
              "--spark-rotation": `${spark.rotation}deg`,
              "--spark-duration": `${spark.duration}ms`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
