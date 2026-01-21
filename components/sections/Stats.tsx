"use client";

import { useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
    { label: "Varietas", value: 12 },
    { label: "Petani", value: 450 },
    { label: "Cangkir Disajikan", value: 15400 },
];

export default function Stats() {
    return (
        <section className="bg-black text-white py-20 border-t border-zinc-900">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                {stats.map((stat, i) => (
                    <StatItem key={i} {...stat} isLast={i === stats.length - 1} />
                ))}
            </div>
        </section>
    );
}

function StatItem({ label, value, isLast }: { label: string; value: number; isLast: boolean }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
            });
            return controls.stop;
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col items-center">
            <h3 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                {displayValue.toLocaleString()}{isLast && "+"}
            </h3>
            <p className="text-gray-400 uppercase tracking-widest mt-4">{label}</p>
        </div>
    );
}
