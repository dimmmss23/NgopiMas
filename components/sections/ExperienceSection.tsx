"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        title: "Pemilihan Biji (Sourcing)",
        description: "Kami hanya memilih 1% biji kopi terbaik dari petani lokal di dataran tinggi Gayo dan Toraja.",
    },
    {
        title: "Penyangraian (Roasting)",
        description: "Dipanggang dalam batch kecil untuk memastikan profil rasa yang konsisten dan memikat.",
    },
    {
        title: "Penyeduhan (Brewing)",
        description: "Setiap cangkir diseduh dengan presisi, suhu, dan rasio yang sempurna oleh barista kami.",
    },
];

export default function ExperienceSection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    return (
        <section id="experience" ref={container} className="min-h-screen bg-zinc-900 text-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center text-[#D4AF37]">Pengalaman Ngopi</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, i) => (
                        <StepCard key={i} index={i} step={step} />
                    ))}
                </div>
            </div>

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-[120px]" />
            </div>
        </section>
    );
}

function StepCard({ index, step }: { index: number; step: { title: string; description: string } }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 border-l-2 border-[#D4AF37] bg-black/50 backdrop-blur-sm"
        >
            <h3 className="text-xl font-bold text-[#D4AF37] mb-2">0{index + 1}</h3>
            <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
            <p className="text-gray-400 leading-relaxed">{step.description}</p>
        </motion.div>
    );
}
