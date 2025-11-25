"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfitCalculator() {
    const [sales, setSales] = useState(10000);
    const competitorFee = sales * 0.30;
    const domiFee = sales * 0.05; // Assuming 5% or flat fee, let's say 5% for comparison
    const savings = competitorFee - domiFee;

    return (
        <section className="min-h-screen flex items-center justify-center bg-white py-20 px-6">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 items-center">

                {/* Left: Text */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-primary font-mono text-sm mb-4 uppercase tracking-widest">
                        Calculadora de ROI
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                        HAZ LAS <br />
                        <span className="text-black">CUENTAS.</span>
                    </h3>
                    <p className="text-gray-600 text-lg mb-8">
                        Mira exactamente cuánto estás perdiendo con los "grandes". Cámbiate a DomiBGA y reinvierte ese capital en tu negocio.
                    </p>
                    <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                        Empieza a Ahorrar Ahora
                    </button>
                </div>

                {/* Right: Calculator */}
                <div className="w-full md:w-1/2">
                    <div className="glass p-8 rounded-3xl border border-gray-300/50 relative overflow-hidden bg-white/50">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <span className="font-mono text-6xl font-bold text-primary">$$$</span>
                        </div>

                        <div className="mb-10">
                            <label className="block text-gray-600 text-sm font-mono mb-4 uppercase">Volumen de Ventas Mensual</label>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-2xl font-bold text-black">$</span>
                                <input
                                    type="range"
                                    min="1000"
                                    max="50000"
                                    step="1000"
                                    value={sales}
                                    onChange={(e) => setSales(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                            <div className="text-4xl font-mono font-bold text-black">
                                ${sales.toLocaleString()}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-gray-300/50 pb-4">
                                <span className="text-gray-600">Tarifas Competencia (30%)</span>
                                <span className="text-red-500 font-mono text-xl">-${competitorFee.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-300/50 pb-4">
                                <span className="text-gray-600">Tarifas DomiBGA (5%)</span>
                                <span className="text-primary font-mono text-xl">-${domiFee.toLocaleString()}</span>
                            </div>

                            <div className="mt-8 bg-white p-6 rounded-xl border border-primary/20">
                                <span className="block text-primary text-sm font-mono uppercase mb-2">Ahorro Anual</span>
                                <motion.span
                                    key={savings}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="block text-5xl font-display font-bold text-black"
                                >
                                    ${(savings * 12).toLocaleString()}
                                </motion.span>
                                <span className="text-gray-600 text-xs mt-2 block">Eso es suficiente para una nueva furgoneta de reparto.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
