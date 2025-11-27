"use client";

import { motion } from "framer-motion";

export default function RidersGuild() {
    return (
        <section id="couriers" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center relative z-10">

                {/* Left: Content */}
                <div className="w-full mb-8 sm:mb-12 md:mb-0">
                    <h2 className="text-primary font-mono text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-widest">
                        Únete al Gremio
                    </h2>
                    <h3 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                        RUEDA LIBRE. <br />
                        <span className="text-black">GANA DINERO.</span>
                    </h3>
                    <ul className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10">
                        {[
                            "Pagos Instantáneos",
                            "100% Propinas + 95% Tarifa de Entrega",
                            "Sin Uniformes. Sin Jefes.",
                            "Misiones Gamificadas y Botín"
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl text-gray-600 font-mono"
                            >
                                <span className="text-primary text-lg sm:text-xl md:text-2xl flex-shrink-0">{">"}</span> 
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <button className="bg-primary text-black px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-full text-sm sm:text-base w-full sm:w-auto">
                        Enciende tu Motor
                    </button>
                </div>
            </div>
        </section>
    );
}
