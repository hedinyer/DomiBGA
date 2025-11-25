"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const RotatingText = () => {
    const texts = ["RÁPIDA", "SEGURA", "A TIEMPO", "A PRECIOS JUSTOS"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000); // Cambia cada 2 segundos

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className="relative w-full flex justify-center items-center min-h-[1em] whitespace-nowrap">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-transparent text-stroke hover:text-black transition-colors duration-500 inline-block whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center"
                >
                    {texts[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

export default function Hero() {

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-white z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-10" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2 
                        className="text-primary font-mono text-sm md:text-base mb-4 tracking-[0.5em] uppercase"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Bucaramanga y Área Metropolitana
                    </motion.h2>
                    <motion.h1 
                        className="font-display font-black tracking-tighter mb-6 leading-[0.9] text-center text-black"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-black">ENTREGA</span>
                        <span className="block w-full">
                            <RotatingText />
                        </span>
                    </motion.h1>
                    <motion.p 
                        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl mb-10 font-mono"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        Entregas rápidas en Bucaramanga y área metropolitana. Sin comisiones abusivas del 30%. Precios justos para restaurantes, repartidores y clientes.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col md:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                        <button className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest overflow-hidden rounded-full border-2 border-transparent group-hover:border-green-500 transition-all">
                            <span className="relative z-10 group-hover:text-white transition-colors">Únete a la Alianza</span>
                            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-full" />
                        </button>
                        <button className="px-8 py-4 border border-black/20 hover:border-primary text-black hover:text-primary font-bold uppercase tracking-widest transition-all rounded-full">
                            Rueda con Nosotros
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
