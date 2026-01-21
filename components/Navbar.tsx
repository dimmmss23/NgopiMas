"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

const navLinks = [
    { title: "Kisah Kami", href: "#story" },
    { title: "Biji Kopi", href: "#beans" },
    { title: "Pengalaman", href: "#experience" },
    { title: "Kontak", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0] as const,
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1] as const,
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1] as const,
                duration: 0.7,
            },
        },
    };

    // Improved Header with Blur
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 backdrop-blur-md bg-black/20 text-white mix-blend-mode-normal">
            <div className="text-2xl font-bold tracking-tighter z-50">
                <Link href="/">NGOPI MAS</Link>
            </div>

            <button
                onClick={toggleMenu}
                className="text-sm font-medium uppercase tracking-widest z-50 flex items-center gap-2 group cursor-pointer"
            >
                <span className="group-hover:opacity-75 transition-opacity">{isOpen ? "Tutup" : "Menu"}</span>
                <div className="relative w-6 h-6">
                    <FiMenu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} size={24} />
                    <FiX className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} size={24} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen bg-black text-white p-10 flex flex-col justify-center origin-top"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-xl font-bold">Navigasi</h3>
                            </div>
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col gap-6 justify-center items-center h-full"
                            >
                                {navLinks.map((link, index) => (
                                    <div key={index} className="overflow-hidden">
                                        <motion.div
                                            variants={mobileLinkVars}
                                            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
                                        >
                                            <Link href={link.href} onClick={toggleMenu} className="hover:text-gray-400 transition-colors">
                                                {link.title}
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>

                            <div className="flex justify-between items-end mt-auto">
                                <div className="flex gap-4 text-xl">
                                    <Link href="#" className="hover:text-gray-400 transition-colors"><FiInstagram /></Link>
                                    <Link href="#" className="hover:text-gray-400 transition-colors"><FiTwitter /></Link>
                                    <Link href="#" className="hover:text-gray-400 transition-colors"><FiGithub /></Link>
                                </div>
                                <p className="text-sm text-gray-500">© 2026 NgopiMas. Dibuat dengan cinta.</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
