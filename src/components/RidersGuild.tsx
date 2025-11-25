"use client";

import { motion } from "framer-motion";

export default function RidersGuild() {
    return (
        <section id="couriers" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10">

                {/* Left: Content */}
                <div className="w-full mb-12 md:mb-0">
                    <h2 className="text-primary font-mono text-sm mb-4 uppercase tracking-widest">
                        Únete al Gremio
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        RUEDA LIBRE. <br />
                        <span className="text-black">GANA DINERO.</span>
                    </h3>
                    <ul className="space-y-6 mb-10">
                        {[
                            "Pagos Instantáneos (Cripto o Fiat)",
                            "100% Propinas + 95% Tarifa de Entrega",
                            "Sin Uniformes. Sin Jefes.",
                            "Misiones Gamificadas y Botín"
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 text-xl text-gray-600 font-mono"
                            >
                                <span className="text-primary">{">"}</span> {item}
                            </motion.li>
                        ))}
                    </ul>
                    <button className="bg-primary text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-full">
                        Enciende tu Motor
                    </button>
                </div>
            </div>
        </section>
    );
}
