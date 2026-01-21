"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    children: string;
}

export default function TextReveal({ children }: TextRevealProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"],
    });

    const words = children.split(" ");

    return (
        <p ref={container} className="flex flex-wrap text-4xl leading-tight font-bold p-10 max-w-5xl mx-auto text-white">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} range={[start, end]} progress={scrollYProgress}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

interface WordProps {
    children: React.ReactNode;
    range: [number, number];
    progress: MotionValue<number>;
}

const Word = ({ children, range, progress }: WordProps) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="relative mr-3 mt-3">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};
