"use client";

import { motion } from "framer-motion";

const AsciiBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none select-none font-mono text-[10px] leading-[10px] text-primary whitespace-pre">
            {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="animate-pulse" style={{ animationDelay: `${Math.random() * 5}s` }}>
                    {Array.from({ length: 200 }).map(() => Math.random() > 0.5 ? "1" : "0").join("")}
                </div>
            ))}
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-void z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
                <AsciiBackground />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-primary font-mono text-sm md:text-base mb-4 tracking-[0.5em] uppercase">
                        Anulación del Sistema: Iniciada
                    </h2>
                    <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter mb-6 leading-[0.9]">
                        ENTREGA <br />
                        <span className="text-transparent text-stroke hover:text-white transition-colors duration-500">
                            LIBERTAD
                        </span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-10 font-mono">
                        Rompe el ciclo de comisiones del 30%. La primera red de entrega descentralizada para la gente, por la gente.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <button className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-colors">Únete a la Alianza</span>
                            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        </button>
                        <button className="px-8 py-4 border border-white/20 hover:border-primary text-white hover:text-primary font-bold uppercase tracking-widest transition-all">
                            Rueda con Nosotros
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-[10px] font-mono uppercase tracking-widest">Desliza para Iniciar</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
