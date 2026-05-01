'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Helper functions from the original script
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
const getDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.hypot(x2 - x1, y2 - y1);

// Local team images generated for the project
const teamImages = [
    "/images/team/member1.png",
    "/images/team/member2.png",
    "/images/team/member3.png",
    "/images/team/member4.png",
    "/images/team/member5.png",
];

interface ImageTrailProps {
    images?: string[];
    trailDistance?: number;
    className?: string;
}

export default function ImageTrail({
    images = teamImages,
    trailDistance = 100,
    className = ""
}: ImageTrailProps) {
    // We use refs to manipulate DOM elements directly for high-performance animation
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLImageElement | null)[]>([]);

    // State refs to track animation values without triggering React re-renders
    const state = useRef({
        mousePos: { x: 0, y: 0 },
        cacheMousePos: { x: 0, y: 0 },
        lastMousePos: { x: 0, y: 0 },
        imgPosition: 0,
        zIndexVal: 1,
    });

    useEffect(() => {
        // 1. Setup Event Listeners
        const handleMouseMove = (ev: MouseEvent) => {
            state.current.mousePos = { x: ev.clientX, y: ev.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // 2. Animation Loop
        let frameId: number;

        const render = () => {
            const { mousePos, cacheMousePos, lastMousePos } = state.current;

            // Calculate distance from last active position
            const distance = getDistance(
                mousePos.x,
                mousePos.y,
                lastMousePos.x,
                lastMousePos.y
            );

            // Smooth out the "current" drawing position (lerp)
            state.current.cacheMousePos.x = lerp(cacheMousePos.x, mousePos.x, 0.1);
            state.current.cacheMousePos.y = lerp(cacheMousePos.y, mousePos.y, 0.1);

            // Threshold: only trigger a new image if moved trailDistance px
            if (distance > trailDistance) {
                showNextImage();
                state.current.lastMousePos = { ...mousePos };
            }

            // Check if animations are idle to reset z-index (optional optimization)
            // In the GSAP 3 version, we can just keep incrementing zIndex safely 
            // or reset if needed, but the original logic's reset was a bit aggressive.
            // We will increment zIndex to ensure correct stacking order.

            frameId = requestAnimationFrame(render);
        };

            const showNextImage = () => {
                const { imgPosition, zIndexVal, cacheMousePos, mousePos } = state.current;

                // Get the current image DOM element
                const img = itemsRef.current[imgPosition];
                if (!img) return;

                // Kill any running animations on this specific image
                gsap.killTweensOf(img);

                // Calculation for centering the image
                const rect = img.getBoundingClientRect();
                const w = rect.width;
                const h = rect.height;

                // GSAP Timeline (GSAP 3 Syntax)
                const tl = gsap.timeline();

                // 1. Set initial state (visible, centered on cached mouse pos)
                tl.set(img, {
                    opacity: 1,
                    scale: 1,
                    zIndex: zIndexVal,
                    x: cacheMousePos.x - w / 2,
                    y: cacheMousePos.y - h / 2,
                })
                    // 2. Move to actual mouse pos slightly
                    .to(img, {
                        duration: 0.9,
                        ease: "expo.out",
                        x: mousePos.x - w / 2,
                        y: mousePos.y - h / 2,
                    }, 0)
                    // 3. Fade out and scale down
                    .to(img, {
                        duration: 1.8,
                        ease: "power1.out",
                        opacity: 0,
                    }, 0.8)
                    .to(img, {
                        duration: 1.8,
                        ease: "quint.out",
                        scale: 0.2,
                    }, 0.8);

                // Update state for next cycle
                state.current.zIndexVal++;
                state.current.imgPosition =
                    imgPosition < itemsRef.current.length - 1 ? imgPosition + 1 : 0;
            };

        // Start the loop
        render();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(frameId);
        };
    }, [trailDistance]);

    return (
        <main className={`w-full h-full bg-[#030712] text-black ${className}`}>
            <div
                ref={containerRef}
                className="relative flex justify-center items-center h-[300px] md:h-screen w-full overflow-hidden"
            >
                {images.map((url, index) => (
                    <img
                        key={index}
                        ref={(el) => {
                            if (itemsRef.current) {
                                itemsRef.current[index] = el;
                            }
                        }}
                        className="absolute top-0 left-0 opacity-0 w-[200px] aspect-[2/3] object-cover block shadow-2xl rounded-sm pointer-events-none"
                        src={url}
                        alt={`trail-image-${index}`}
                    />
                ))}

                <h3 className="relative z-10 text-[6vw] text-white font-heading font-bold uppercase tracking-tighter pointer-events-none select-none mix-blend-difference">
                    Team NexGen
                </h3>
            </div>
        </main>
    );
}
