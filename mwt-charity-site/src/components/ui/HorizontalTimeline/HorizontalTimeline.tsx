import { useEffect, useMemo, useRef } from "react";
import type { TimelineItem } from "../../../types/timeline";

type HorizontalTimelineProps = {
  title: string;
  items: TimelineItem[];
  className?: string;
};

export function HorizontalTimeline({
  title,
  items,
  className,
}: HorizontalTimelineProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const preferReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if(!scroller) return;

    const updateProgress = () => {
        const max = scroller.scrollWidth - scroller.clientWidth;
        if (max <= 0) {
            setProgress(0);
            return;
        }
        setProgress(scroller.scrollLeft / max);
    }

    updateProgress();
    scroller.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
        scroller.removeEventListener("scroll", updateProgress);
    }, []);
}

