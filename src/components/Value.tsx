"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MapGrid = () => {
    const [grid, setGrid] = useState<string[]>([]);

    useEffect(() => {
        const rows = 20;
        const cols = 40;
        const chars = [".", "+", "x", "o", " "];
        const newGrid = [];
        for (let i = 0; i < rows * cols; i++) {
            newGrid.push(chars[Math.floor(Math.random() * chars.length)]);
        }
        setGrid(newGrid);
    }, []);

    return (
        <div className="grid grid-cols-[repeat(40,1fr)] gap-0.5 sm:gap-1 font-mono text-[8px] sm:text-[10px] leading-[8px] sm:leading-[10px] text-black/10 select-none">
            {grid.map((char, i) => (
                <span key={i} className={Math.random() > 0.95 ? "text-primary animate-pulse" : ""}>
                    {char}
                </span>
            ))}
        </div>
    );
};

export default function Value() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-12 sm:py-16 md:py-20">
            {/* Background video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    defaultMuted
                    playsInline
                    disablePictureInPicture
                    className="w-full h-full object-cover"
                >
                    <source src="/herosection/vecteezy_asian-woman-receiving-product-from-delivery-man-at-home_29801211.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-white/80" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-30 z-10">
                <MapGrid />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-primary font-mono text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-widest">
                        Logística Optimizada
                    </h2>
                    <h3 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 sm:mb-8 leading-tight">
                        NO SOLO ENTREGAMOS. <br />
                        <span className="text-black">TELETRANSPORTAMOS.</span>
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
                        Nuestra red de mensajería descentralizada encuentra el camino más corto a través del caos.
                        <span className="text-primary"> 40% más rápido</span> que la competencia.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-left">
                        {[
                            { title: "Rastreo en Tiempo Real", desc: "Mira tu paquete moverse como puntos de datos ASCII en la cuadrícula." },
                            { title: "Enrutamiento Inteligente", desc: "Algoritmos de IA evitan el tráfico y los cuellos de botella al instante." },
                            { title: "Entrega Directa", desc: "Sin almacenes. Solo del punto A al punto B." },
                        ].map((item, i) => (
                            <div key={i} className="glass p-4 sm:p-5 md:p-6 rounded-xl !border !border-gray-300/50 transition-all group">
                                <h4 className="text-black font-bold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
