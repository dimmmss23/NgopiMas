import { FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-black text-zinc-500 py-12 px-6 border-t border-zinc-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
                <div>
                    <h2 className="text-white text-2xl font-bold mb-4">NGOPI MAS</h2>
                    <p className="max-w-xs">Meningkatkan ritual harian Anda dengan biji kopi pilihan yang bersumber secara etis dari hati Indonesia.</p>
                </div>

                <div className="flex gap-6 text-xl text-white">
                    <a href="https://www.instagram.com/_ag.ng?igsh=MXMxNGxyZjRmZTV2" className="hover:text-gray-300"><FiInstagram /></a>
                    <a href="#" className="hover:text-gray-300"><FiTwitter /></a>
                    <a href="#" className="hover:text-gray-300"><FiGithub /></a>
                </div>
            </div>
            <div className="container mx-auto mt-20 pt-8 border-t border-zinc-900 text-sm flex justify-between">
                <p>© 2026 NgopiMas. Hak Cipta Dilindungi.</p>
                <p>Didesain dengan Cinta.</p>
            </div>
        </footer>
    );
}
