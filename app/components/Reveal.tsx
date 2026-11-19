"use client";

import { useEffect, useRef } from "react";
import "./reveal.css";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function Reveal({ children, className = "" }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={elementRef} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
