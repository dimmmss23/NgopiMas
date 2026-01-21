"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="min-h-screen bg-black text-white flex items-center py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#D4AF37]">Hubungi Kami</h2>
                        <p className="text-xl text-gray-400 mb-12">
                            Tertarik untuk berkolaborasi atau sekadar ingin menyapa? Kami selalu terbuka untuk secangkir kopi dan percakapan hangat.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-widest">Alamat</h4>
                                <p className="text-gray-400">Jl. Kopi No. 1, Palembang, Sumatera Selatan</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-widest">Email</h4>
                                <p className="text-gray-400">agung@ngopimas.id</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900 p-6 md:p-10 rounded-3xl space-y-6 border border-zinc-800"
                    >
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-[#D4AF37]">Nama</label>
                            <input type="text" className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors text-white" placeholder="Nama Anda" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-[#D4AF37]">Email</label>
                            <input type="email" className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors text-white" placeholder="email@contoh.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-[#D4AF37]">Pesan</label>
                            <textarea rows={4} className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors text-white" placeholder="Tulis pesan Anda..." />
                        </div>
                        <button type="button" className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-colors duration-300">
                            Kirim Pesan
                        </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}
