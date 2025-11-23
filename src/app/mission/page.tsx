"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MissionPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <div ref={containerRef} className="bg-black min-h-[300vh] relative">

            {/* Fixed Hero Section */}
            <div className="fixed top-0 left-0 right-0 h-screen flex items-center justify-center overflow-hidden pointer-events-none">
                <motion.div style={{ opacity, scale }} className="text-center px-6">
                    <h1 className="text-6xl md:text-9xl font-display font-black text-white mb-8 tracking-tighter">
                        EL <br /> MANIFIESTO
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-mono max-w-3xl mx-auto">
                        No estamos construyendo una empresa. Estamos construyendo una resistencia contra la economía de extracción.
                    </p>
                </motion.div>
            </div>

            {/* Scrolling Content */}
            <div className="relative z-10 pt-[100vh]">
                <div className="max-w-4xl mx-auto px-6 pb-40 space-y-40">

                    {/* Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-surface border border-white/10 p-12 rounded-3xl backdrop-blur-md"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-6">01. El Problema</h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Los gigantes de la entrega se han convertido en señores feudales digitales. Toman el 30% de los restaurantes y exprimen a los repartidores hasta dejarlos secos. Han convertido la comida local en un producto básico globalizado, optimizado para el valor de las acciones, no para el valor humano.
                        </p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-surface border border-white/10 p-12 rounded-3xl backdrop-blur-md"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-6">02. La Solución</h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            DomiBGA es una red entre pares. Conectamos restaurantes directamente con los repartidores y clientes. Los contratos inteligentes manejan los pagos al instante. La gobernanza es compartida. Las ganancias se quedan en la comunidad.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative border-l-2 border-white/10 pl-12 py-10 space-y-20">
                        {[
                            { year: "2010", title: "La Era de la Plataforma", desc: "Las aplicaciones de entrega centralizadas surgen, ofreciendo conveniencia a un alto costo." },
                            { year: "2020", title: "El Punto de Quiebre", desc: "Los restaurantes quiebran debido a tarifas insostenibles durante la crisis global." },
                            { year: "2025", title: "La Rebelión DomiBGA", desc: "Lanzamos el primer protocolo de entrega descentralizado de código abierto." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="relative"
                            >
                                <span className="absolute -left-[55px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-black" />
                                <span className="text-primary font-mono text-sm mb-2 block">{item.year}</span>
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
}
