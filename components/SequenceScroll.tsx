"use client";

import { useScroll, useMotionValueEvent, useTransform, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Preloader from "@/components/Preloader";

const FRAME_COUNT = 192;
const FRAME_PATH = "/sequence/ezgif-frame-";

export default function SequenceScroll() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // Text Overlay Transforms
    // 0% -> Title
    const opacityTitle = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const yTitle = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // 30% -> Slogan Left
    const opacitySlogan1 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
    const xSlogan1 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-50, 0, -50]);

    // 60% -> Slogan Right
    const opacitySlogan2 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
    const xSlogan2 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [50, 0, 50]);

    // 90% -> CTA
    const opacityCTA = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
    const scaleCTA = useTransform(scrollYProgress, [0.8, 0.9], [0.8, 1]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;
            const promises = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const paddedIndex = i.toString().padStart(3, "0");
                    img.src = `${FRAME_PATH}${paddedIndex}.jpg`;
                    img.onload = () => {
                        loadedImages[i - 1] = img;
                        loadedCount++;
                        setLoadingProgress((loadedCount / FRAME_COUNT) * 100);
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image: ${img.src}`);
                        // Resolve anyway to prevent Promise.all failure
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            // Small delay to show 100%
            setTimeout(() => setIsLoaded(true), 1000);
        };

        loadImages();
    }, []);

    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images.length) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index - 1] || images[0];
        if (!img) return;

        const aspect = img.width / img.height;
        const canvasAspect = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > aspect) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / aspect;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * aspect;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, [images]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (isLoaded) {
            const index = Math.min(Math.max(Math.floor(latest), 1), FRAME_COUNT);
            requestAnimationFrame(() => renderFrame(index));
        }
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (isLoaded && images.length > 0) {
                renderFrame(1);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images, renderFrame]);

    return (
        <div ref={containerRef} className="h-[400vh] relative z-0">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover block"
                />

                <AnimatePresence>
                    {!isLoaded && <Preloader progress={loadingProgress} />}
                </AnimatePresence>

                {/* Text Overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center text-white mix-blend-difference">
                    <motion.div
                        style={{ opacity: opacityTitle, y: yTitle }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-4 text-[#D4AF37]">NGOPI MAS</h1>
                        <p className="text-sm md:text-xl lg:text-2xl font-light tracking-widest uppercase">Seni Ekstraksi</p>
                    </motion.div>

                    <motion.div
                        style={{ opacity: opacitySlogan1, x: xSlogan1 }}
                        className="absolute inset-0 flex flex-col items-center justify-center md:items-start md:pl-32 px-6 text-center md:text-left"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-2xl">
                            Setiap Biji <br /> Punya Cerita
                        </h2>
                    </motion.div>

                    <motion.div
                        style={{ opacity: opacitySlogan2, x: xSlogan2 }}
                        className="absolute inset-0 flex flex-col items-center justify-center md:items-end md:pr-32 px-6 text-center md:text-right"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-2xl">
                            Diseduh dengan <br /> Sempurna
                        </h2>
                    </motion.div>

                    <motion.div
                        style={{ opacity: opacityCTA, scale: scaleCTA }}
                        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center max-w-3xl">
                            Siap Merasakan Bedanya?
                        </h2>
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300">
                            Pesan Sekarang
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
