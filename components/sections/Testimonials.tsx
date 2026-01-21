"use client";

import { motion } from "framer-motion";

const testimonials = [
    { quote: "Pengalaman kopi terbaik yang pernah saya rasakan. Sungguh ajaib.", author: "Sarah J." },
    { quote: "Akhirnya, merek yang mengerti seni memanggang kopi.", author: "Michael C." },
    { quote: "Pengiriman lancar dan rasa yang luar biasa.", author: "Jessica T." },
];

export default function Testimonials() {
    return (
        <section className="bg-zinc-950 text-white py-32 overflow-hidden">
            <div className="mb-20 container mx-auto px-6">
                <h2 className="text-4xl font-bold">Kata Mereka</h2>
            </div>
            <div className="flex overflow-hidden mask-linear-gradient">
                <motion.div
                    className="flex gap-20 whitespace-nowrap pl-20"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {/* Original Set */}
                    {testimonials.map((t, i) => (
                        <div key={i} className="min-w-[80vw] md:min-w-[30vw] p-6 md:p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800">
                            <p className="text-xl md:text-3xl font-light mb-8 whitespace-normal leading-relaxed">&quot;{t.quote}&quot;</p>
                            <p className="text-lg md:text-xl font-bold text-gray-400">- {t.author}</p>
                        </div>
                    ))}
                    {/* Duplicated Set for Loop */}
                    {testimonials.map((t, i) => (
                        <div key={`dup-${i}`} className="min-w-[80vw] md:min-w-[30vw] p-6 md:p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800">
                            <p className="text-xl md:text-3xl font-light mb-8 whitespace-normal leading-relaxed">&quot;{t.quote}&quot;</p>
                            <p className="text-lg md:text-xl font-bold text-gray-400">- {t.author}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
