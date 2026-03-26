"use client";

import { useEffect, useRef, useCallback } from "react";

export function useMagneticCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const { x: tx, y: ty } = targetRef.current;
    const pos = posRef.current;

    pos.x += (tx - pos.x) * 0.12;
    pos.y += (ty - pos.y) * 0.12;

    if (cursorRef.current) {
      cursorRef.current.style.left = `${pos.x}px`;
      cursorRef.current.style.top = `${pos.y}px`;
    }
    if (dotRef.current) {
      dotRef.current.style.left = `${tx}px`;
      dotRef.current.style.top = `${ty}px`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Create cursor elements
    const cursor = document.createElement("div");
    cursor.className = "magnetic-cursor";
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);
    dotRef.current = dot;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      dot.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      dot.style.opacity = "0";
    };

    // Magnetic hover effect on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-magnetic]"
    );

    const handleElEnter = () => cursor.classList.add("hovering");
    const handleElLeave = () => cursor.classList.remove("hovering");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElEnter);
      el.addEventListener("mouseleave", handleElLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    rafRef.current = requestAnimationFrame(animate);

    // Hide on touch devices
    if ("ontouchstart" in window) {
      cursor.style.display = "none";
      dot.style.display = "none";
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElEnter);
        el.removeEventListener("mouseleave", handleElLeave);
      });
      cancelAnimationFrame(rafRef.current);
      cursor.remove();
      dot.remove();
    };
  }, [animate]);
}
