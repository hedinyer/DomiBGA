"use client";

const QRAscii = `
█▀▀▀▀▀█ ▄ ▄ █▀▀▀▀▀█
█ ███ █ ▄▄▄ █ ███ █
█ ▀▀▀ █ ▀█▀ █ ▀▀▀ █
▀▀▀▀▀▀▀ ▀ ▀ ▀▀▀▀▀▀▀
▀ ▀▄▀▄▀▀▄▀▀▄▀ ▄▀▄ ▀
█▄ ▄ ▄▄▀▀▀▄▀▀▀▄ ▄ █
▀ ▀ ▀▀▀▀ ▀▀ ▀ ▀ ▀▀▀
█▀▀▀▀▀█ ▄ █ ▀ ▄▀▄ █
█ ███ █ ▀█▀▀▀▀▄▀█▀█
█ ▀▀▀ █ ▄▄▄ █ ▀ █ █
▀▀▀▀▀▀▀ ▀▀▀▀▀ ▀▀▀▀▀
`;

export default function Footer() {
    return (
        <footer id="download" className="bg-surface border-t border-white/10 py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-12">

                {/* Brand */}
                <div className="text-center md:text-left order-1 md:order-1">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">DOMIBGA</h2>
                    <p className="text-gray-500 font-mono text-xs sm:text-sm">© 2025 Entrega Descentralizada.</p>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 order-2 md:order-2 text-center sm:text-left">
                    <a href="#" className="hover:text-primary transition-colors">Legal</a>
                    <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
                    <a href="#" className="hover:text-primary transition-colors">Contacto</a>
                </div>
            </div>
        </footer>
    );
}
