export default function CTA() {
    return (
        <section className="min-h-screen bg-white text-black flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Placeholder using CSS gradients can go here */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 opacity-20 blur-3xl scale-150 animate-pulse" />

            <div className="relative z-10 text-center px-6">
                <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">
                    WAKTUNYA <br /> MENSEDUH
                </h2>
                <button className="px-10 py-5 bg-black text-white rounded-full text-xl font-bold hover:scale-105 transition-transform duration-300">
                    Mulai Sekarang
                </button>
            </div>
        </section>
    );
}
