"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
    { name: "Otros", profit: 7000, fees: 3000 },
    { name: "DomiBGA", profit: 9500, fees: 500 },
];

export default function Problem() {
    return (
        <section id="mission" className="min-h-screen flex flex-col md:flex-row bg-surface overflow-hidden">
            {/* Left: The Problem (Them) */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 relative group">
                <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h3 className="text-red-500 font-mono text-sm mb-4 uppercase tracking-widest">
                        Advertencia: Erosión de Ganancias
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        LA TRAMPA DEL <br />
                        <span className="text-red-500 line-through decoration-4 decoration-red-500">IMPUESTO DEL 30%</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        Las plataformas tradicionales desangran tu negocio. Tarifas altas, costos ocultos y cero transparencia. Tú cocinas, ellos se comen tus márgenes.
                    </p>

                    <div className="h-64 w-full max-w-md opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                        {/* Abstract Glitch Visual or simple text representation if chart is too complex for this side, 
                 but let's keep it simple text for "Them" side to contrast with "Us" side chart */}
                        <div className="border border-red-500/30 p-6 rounded-lg bg-red-950/20">
                            <div className="flex justify-between mb-4">
                                <span>Valor del Pedido</span>
                                <span>$100.00</span>
                            </div>
                            <div className="flex justify-between mb-4 text-red-500">
                                <span>Tarifa de Plataforma (30%)</span>
                                <span>-$30.00</span>
                            </div>
                            <div className="flex justify-between border-t border-white/10 pt-4">
                                <span>Te Quedas</span>
                                <span className="text-xl font-bold">$70.00</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right: The Solution (Us) */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-black relative">
                <div className="absolute inset-0 bg-primary/5" />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h3 className="text-primary font-mono text-sm mb-4 uppercase tracking-widest">
                        Actualización del Sistema: Completa
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        QUÉDATE CON LO QUE <br />
                        <span className="text-primary">GANAS</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        Tarifas planas. Pagos directos. Sin intermediarios. DomiBGA restaura el equilibrio de poder para restaurantes y repartidores.
                    </p>

                    <div className="h-80 w-full max-w-lg bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} layout="vertical" barSize={40}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" stroke="#fff" width={100} tick={{ fill: '#fff', fontSize: 14, fontFamily: 'var(--font-space-grotesk)' }} />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ backgroundColor: '#050505', borderColor: '#333', color: '#fff' }}
                                />
                                <Bar dataKey="profit" stackId="a" radius={[0, 4, 4, 0]}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.name === 'DomiBGA' ? '#00ff41' : '#333'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                        <div className="text-center mt-4 font-mono text-sm text-gray-400">
                            *Basado en $10k de ventas mensuales
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
