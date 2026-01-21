"use client";

import { motion } from "framer-motion";

export default function Preloader({ progress }: { progress: number }) {
    return (
        <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    className="text-8xl font-bold tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {Math.round(progress)}%
                </motion.div>
                <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-white"
                        style={{ width: `${progress}%` }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
                <p className="text-sm uppercase tracking-widest text-gray-400 animate-pulse">Menyeduh Pengalaman</p>
            </div>
        </motion.div>
    );
}
