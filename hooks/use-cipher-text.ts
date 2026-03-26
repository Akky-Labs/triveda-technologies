"use client";

import { useCallback, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export function useCipherText() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const animate = useCallback((element: HTMLElement) => {
    const originalText = element.dataset.original || element.innerText;
    element.dataset.original = originalText;

    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return originalText[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 2;
    }, 30);
  }, []);

  return { animate };
}
