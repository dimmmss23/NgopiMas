import TextReveal from "@/components/TextReveal";

export default function AboutSection() {
    return (
        <section id="story" className="min-h-screen bg-black text-white flex items-center justify-center py-20">
            <div className="container mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-sm font-light uppercase tracking-widest text-gray-500 mb-4">Filosofi Kami</h2>
                </div>
                <TextReveal>
                    Di NgopiMas, kami percaya kopi lebih dari sekadar minuman. Ia adalah ritual, hubungan dengan alam, dan momen kejernihan murni. Kami hanya mengambil biji terbaik dari dataran tinggi Indonesia, memanggangnya dengan sempurna untuk mengungkap kisah tersembunyi di dalamnya.
                </TextReveal>
            </div>
        </section>
    );
}
