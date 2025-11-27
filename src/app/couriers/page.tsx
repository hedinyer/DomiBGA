"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Trophy, TrendingUp } from "lucide-react";

export default function CouriersPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Hero */}
                <div className="mb-16 text-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                    <h1 className="text-5xl md:text-8xl font-display font-black mb-6 relative z-10">
                        LA CALLE ES <br /> <span className="text-transparent text-stroke">TUYA</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto font-mono relative z-10">
                        Gana XP. Sube de nivel. Desbloquea recompensas. La entrega es ahora un MMO.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { label: "Ganancias de Hoy", value: "$142.500", icon: <TrendingUp className="text-green-400" /> },
                        { label: "Entregas", value: "18", icon: <MapPin className="text-blue-400" /> },
                        { label: "Racha", value: "5 Días", icon: <Zap className="text-yellow-400" /> },
                        { label: "Nivel", value: "42", icon: <Trophy className="text-purple-400" /> },
                    ].map((stat, i) => (
                        <div key={i} className="glass-dark p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-xs uppercase font-bold mb-1">{stat.label}</p>
                                <p className="text-2xl font-mono font-bold text-white">{stat.value}</p>
                            </div>
                            <div className="p-3 bg-white/5 rounded-full">
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Active Quests */}
                    <div className="lg:col-span-1 glass-dark p-8 rounded-3xl border border-white/10 h-fit">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Trophy className="text-primary" size={24} />
                            Misiones Activas
                        </h2>

                        <div className="space-y-6">
                            {[
                                { title: "Demonio de la Velocidad", desc: "Completa 5 entregas en < 20min", progress: 80, reward: "+500 XP" },
                                { title: "Guerrero de Lluvia", desc: "Entrega durante mal clima", progress: 30, reward: "+$20.000 Bono" },
                                { title: "Racha de Fin de Semana", desc: "Trabaja Sáb & Dom", progress: 100, reward: "Desbloqueado" },
                            ].map((quest, i) => (
                                <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-white text-sm">{quest.title}</h3>
                                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{quest.reward}</span>
                                    </div>
                                    <p className="text-gray-500 text-xs mb-3">{quest.desc}</p>
                                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-primary to-green-400"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${quest.progress}%` }}
                                            transition={{ duration: 1, delay: i * 0.2 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Heatmap / Map Placeholder */}
                    <div className="lg:col-span-2 glass-dark p-8 rounded-3xl border border-white/10 min-h-[500px] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Inteligencia de Mapa de Calor</h2>
                                    <p className="text-gray-400 text-sm">Zonas de alta demanda detectadas cerca del Centro.</p>
                                </div>
                                <span className="flex items-center gap-2 text-red-500 font-mono text-xs animate-pulse">
                                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                                    EN VIVO
                                </span>
                            </div>

                            {/* Mock Hotspots */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="relative">
                                    <div className="absolute w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse" />
                                    <MapPin className="text-red-500 relative z-10 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" size={48} />
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded border border-red-500/50 whitespace-nowrap">
                                        +1.5x Aumento
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
