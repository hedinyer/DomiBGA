"use client";

import { motion } from "framer-motion";

const bikeAscii = `
      __o
    _ \\<_
   (_)/(_)
`;

export default function RidersGuild() {
    return (
        <section id="couriers" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden py-20">
            {/* Moving Road */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-surface overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
                <motion.div
                    className="flex whitespace-nowrap text-white/10 font-mono text-xs mt-2"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    {Array(20).fill("________________________________________________________________").join("")}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between relative z-10">

                {/* Left: Content */}
                <div className="w-full md:w-1/2 mb-12 md:mb-0">
                    <h2 className="text-primary font-mono text-sm mb-4 uppercase tracking-widest">
                        Únete al Gremio
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        RUEDA LIBRE. <br />
                        <span className="text-white">GANA DINERO.</span>
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
                                className="flex items-center gap-4 text-xl text-gray-300 font-mono"
                            >
                                <span className="text-primary">{">"}</span> {item}
                            </motion.li>
                        ))}
                    </ul>
                    <button className="bg-primary text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                        Enciende tu Motor
                    </button>
                </div>

                {/* Right: ASCII Bike */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                    <div className="relative">
                        <motion.pre
                            className="font-mono text-primary text-6xl md:text-9xl leading-none select-none"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
                        >
                            {bikeAscii}
                        </motion.pre>
                        {/* Speed lines */}
                        <motion.div
                            className="absolute top-1/2 -right-20 space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {[1, 2, 3].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-20 h-[2px] bg-white/20"
                                    animate={{ x: [-20, 0], opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
