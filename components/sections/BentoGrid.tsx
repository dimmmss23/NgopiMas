
import Image from "next/image";
export default function BentoGrid() {
    return (
        <section id="beans" className="min-h-screen bg-zinc-950 text-white p-8 md:p-20">
            <div className="container mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-5xl font-bold mb-4">Koleksi Kami</h2>
                    <p className="text-gray-400 max-w-xl">Dikurasi dengan teliti. Untuk penikmat sejati.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-3 gap-4 h-[120vh]">
                    {/* Card 1: Large Feature - Arabica Gayo */}
                    <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
                        <Image
                            src="/arabicagayo.jpg"
                            alt="Arabica Gayo Beans"
                            fill
                            sizes="(max-width: 768px) 100vw, 66vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                        <div className="absolute p-8 bottom-0 left-0 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl font-bold mb-2 text-[#D4AF37]">Arabica Gayo</h3>
                            <p className="text-gray-200">Catatan rasa rempah, cokelat hitam, dan keasaman yang lembut.</p>
                        </div>
                    </div>

                    {/* Card 2: Tall Sidebar - Manual Brew */}
                    <div className="md:col-span-1 md:row-span-3 relative rounded-3xl overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop"
                            alt="Manual Brew V60"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black opacity-90" />
                        <div className="p-8 h-full flex flex-col justify-end relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl font-bold mb-2 text-[#D4AF37]">Seduh Manual</h3>
                            <p className="text-gray-200">Perlengkapan untuk ritual pour-over yang meditatif.</p>
                        </div>
                    </div>

                    {/* Card 3: Wide Bottom - Subscription */}
                    <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop"
                            alt="Coffee Subscription"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                        <div className="p-8 h-full flex flex-col justify-center relative z-10 translate-x-2 group-hover:translate-x-0 transition-transform duration-500">
                            <h3 className="text-3xl font-bold mb-2 text-[#D4AF37]">Berlangganan</h3>
                            <p className="text-gray-200 max-w-md">Kopi segar dikirim ke pintu Anda setiap bulan. Jangan pernah kehabisan stok.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
