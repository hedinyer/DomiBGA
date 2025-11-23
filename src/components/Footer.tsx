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
        <footer className="bg-surface border-t border-white/10 py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">

                {/* Brand */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-display font-bold text-white mb-2">DOMIBGA</h2>
                    <p className="text-gray-500 font-mono text-sm">© 2025 Entrega Descentralizada.</p>
                </div>

                {/* QR Codes */}
                <div className="flex gap-8">
                    <div className="text-center group cursor-pointer">
                        <div className="bg-white p-2 mb-2 group-hover:bg-primary transition-colors">
                            <pre className="font-mono text-[8px] leading-[8px] text-black whitespace-pre">
                                {QRAscii}
                            </pre>
                        </div>
                        <span className="text-xs font-mono text-gray-400 uppercase group-hover:text-primary">App iOS</span>
                    </div>
                    <div className="text-center group cursor-pointer">
                        <div className="bg-white p-2 mb-2 group-hover:bg-primary transition-colors">
                            <pre className="font-mono text-[8px] leading-[8px] text-black whitespace-pre">
                                {QRAscii}
                            </pre>
                        </div>
                        <span className="text-xs font-mono text-gray-400 uppercase group-hover:text-primary">App Android</span>
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                    <a href="#" className="hover:text-primary transition-colors">Legal</a>
                    <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
                    <a href="#" className="hover:text-primary transition-colors">Contacto</a>
                </div>
            </div>
        </footer>
    );
}
