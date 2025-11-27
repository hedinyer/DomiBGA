"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfitCalculator() {
    const [sales, setSales] = useState(10000000); // 10 millones de pesos
    const competitorFee = sales * 0.30;
    const domiFee = sales * 0.05; // Assuming 5% or flat fee, let's say 5% for comparison
    const savings = competitorFee - domiFee;

    return (
        <section id="restaurants" className="min-h-screen flex items-center justify-center bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center">

                {/* Left: Text */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-primary font-mono text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-widest">
                        Calculadora de ROI
                    </h2>
                    <h3 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                        HAZ LAS <br />
                        <span className="text-black">CUENTAS.</span>
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                        Mira exactamente cuánto estás perdiendo con los "grandes". Cámbiate a DomiBGA y reinvierte ese capital en tu negocio.
                    </p>
                    <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest hover:bg-primary transition-colors text-sm sm:text-base rounded-full">
                        Empieza a Ahorrar Ahora
                    </button>
                </div>

                {/* Right: Calculator */}
                <div className="w-full md:w-1/2">
                    <div className="glass p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-300/50 relative overflow-hidden bg-white/50">
                        <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-20">
                            <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-primary">$$$</span>
                        </div>

                        <div className="mb-6 sm:mb-8 md:mb-10">
                            <label className="block text-gray-600 text-xs sm:text-sm font-mono mb-3 sm:mb-4 uppercase">Volumen de Ventas Mensual</label>
                            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <span className="text-xl sm:text-2xl font-bold text-black">$</span>
                                <input
                                    type="range"
                                    min="1000000"
                                    max="50000000"
                                    step="1000000"
                                    value={sales}
                                    onChange={(e) => setSales(Number(e.target.value))}
                                    className="w-full h-2 sm:h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-black">
                                ${sales.toLocaleString('es-CO')}
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                            <div className="flex justify-between items-center border-b border-gray-300/50 pb-3 sm:pb-4 gap-2">
                                <span className="text-gray-600 text-xs sm:text-sm md:text-base">Tarifas Competencia (30%)</span>
                                <span className="text-red-500 font-mono text-lg sm:text-xl flex-shrink-0">-${competitorFee.toLocaleString('es-CO')}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-300/50 pb-3 sm:pb-4 gap-2">
                                <span className="text-gray-600 text-xs sm:text-sm md:text-base">Tarifas DomiBGA (5%)</span>
                                <span className="text-primary font-mono text-lg sm:text-xl flex-shrink-0">-${domiFee.toLocaleString('es-CO')}</span>
                            </div>

                            <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-5 md:p-6 rounded-xl border border-primary/20">
                                <span className="block text-primary text-xs sm:text-sm font-mono uppercase mb-2">Ahorro Anual</span>
                                <motion.span
                                    key={savings}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="block text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black"
                                >
                                    ${(savings * 12).toLocaleString('es-CO')}
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
