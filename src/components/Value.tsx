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
        <div className="grid grid-cols-[repeat(40,1fr)] gap-1 font-mono text-[10px] leading-[10px] text-black/10 select-none">
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
        <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <MapGrid />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-primary font-mono text-sm mb-6 uppercase tracking-widest">
                        Logística Optimizada
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-display font-bold mb-8">
                        NO SOLO ENTREGAMOS. <br />
                        <span className="text-black">TELETRANSPORTAMOS.</span>
                    </h3>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-12">
                        Nuestra red de mensajería descentralizada encuentra el camino más corto a través del caos.
                        <span className="text-primary"> 40% más rápido</span> que la competencia.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            { title: "Rastreo en Tiempo Real", desc: "Mira tu paquete moverse como puntos de datos ASCII en la cuadrícula." },
                            { title: "Enrutamiento Inteligente", desc: "Algoritmos de IA evitan el tráfico y los cuellos de botella al instante." },
                            { title: "Entrega Directa", desc: "Sin almacenes. Solo del punto A al punto B." },
                        ].map((item, i) => (
                            <div key={i} className="glass p-6 rounded-xl !border !border-gray-300/50 transition-all group">
                                <h4 className="text-black font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
