"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid, Rectangle, LabelList } from "recharts";
import { Shield, Lock, EyeOff, ArrowRight, AlertTriangle, BarChart3, CheckCircle } from "lucide-react";

const data = [
    { name: "Otros", profit: 7000, fees: 3000, commission: "30%" },
    { name: "DomiBGA", profit: 9500, fees: 500, commission: "5%" },
];

export default function Problem() {
    return (
        <section id="mission" className="relative sm:mt-16 mt-12 max-w-[98vw] lg:max-w-[95vw] xl:max-w-7xl mx-auto px-2 sm:px-3">
            <div className="relative overflow-hidden glass rounded-3xl mr-0 ml-0">
                {/* Hover effects */}
                <div className="absolute inset-y-0 -inset-x-16 sm:-inset-x-24 md:-inset-x-32 lg:-inset-x-40 xl:-inset-x-48 2xl:-inset-x-64 bg-transparent" />

                <div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <motion.h3 
                            className="text-2xl font-semibold tracking-tight text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            La Trampa del 30%
                        </motion.h3>
                        <motion.span 
                            className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Shield className="text-red-400 w-4 h-4" />
                            Comisiones Abusivas
                        </motion.span>
                    </div>

                    {/* Three feature cards */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch">
                        {/* Card 1: Problem - Traditional Platforms */}
                        <motion.div 
                            className="max-w-xl w-full flex flex-col min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] md:aspect-[3/5] lg:aspect-[3/5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 ease-out group relative overflow-hidden rounded-xl sm:rounded-[2rem] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 justify-between text-white morph-border shader-noise"
                            initial={{ opacity: 0, y: 30, rotateX: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8 }}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            {/* Dark Overlay for text readability */}
                            <div className="absolute inset-0 bg-red-950/80 rounded-xl sm:rounded-[2rem]" />
                            
                            {/* Liquid Glass Overlay */}
                            <div className="absolute inset-0 rounded-xl sm:rounded-[2rem]" style={{
                                background: 'rgba(127, 29, 29, 0.1)',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(239, 68, 68, 0.1)'
                            }} />

                            {/* Content Container */}
                            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5 relative z-10 flex-1 flex flex-col">
                                {/* Header Badge */}
                                <motion.div 
                                    className="flex items-center justify-center gap-2 sm:gap-3"
                                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 200 }}
                                >
                                    <motion.span 
                                        className="text-[9px] xs:text-[10px] sm:text-[10px] px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-1.5 bg-gradient-to-r from-red-500/30 via-red-400/25 to-red-500/30 text-red-100 rounded-full font-bold tracking-wide sm:tracking-wider backdrop-blur-md border border-red-400/30 shadow-lg whitespace-nowrap"
                                        whileHover={{ scale: 1.05 }}
                                        animate={{
                                            boxShadow: [
                                                "0 0 10px rgba(239, 68, 68, 0.3)",
                                                "0 0 20px rgba(239, 68, 68, 0.5)",
                                                "0 0 10px rgba(239, 68, 68, 0.3)",
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        30% COMISIÓN
                                    </motion.span>
                                </motion.div>

                                {/* Title Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <h3 className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl tracking-tight font-bold leading-[1.1] sm:leading-tight mb-1.5 sm:mb-2">
                                        <span className="bg-gradient-to-r from-white via-red-50 to-white bg-clip-text text-transparent block">
                                            Plataformas
                                        </span>
                                        <span className="text-red-200 block">Tradicionales</span>
                                    </h3>
                                    <motion.p 
                                        className="text-red-300 text-[10px] sm:text-xs mt-2 sm:mt-3 font-medium flex items-center gap-1.5 sm:gap-2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full animate-pulse flex-shrink-0" />
                                        <span>El Problema</span>
                                    </motion.p>
                                </motion.div>

                                {/* Financial Breakdown Card */}
                                <motion.div 
                                    className="relative flex-1 flex flex-col justify-center"
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 150 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative border border-red-500/40 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-950/40 via-red-900/30 to-red-950/40 backdrop-blur-xl shadow-2xl overflow-hidden">
                                        <div className="relative z-10 space-y-2 sm:space-y-2.5 md:space-y-3">
                                            {/* Order Value */}
                                            <div className="flex justify-between items-center pb-2 sm:pb-2.5 md:pb-3 border-b border-red-500/20 gap-2">
                                                <span className="text-neutral-300 text-[10px] sm:text-xs font-medium truncate">Valor del Pedido</span>
                                                <motion.span 
                                                    className="text-white font-bold text-sm sm:text-base md:text-lg flex-shrink-0"
                                                    initial={{ scale: 0.8 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.8, type: "spring" }}
                                                >
                                                    $100.00
                                                </motion.span>
                                            </div>
                                            
                                            {/* Fee - Highlighted */}
                                            <motion.div 
                                                className="flex justify-between items-center pb-2 sm:pb-2.5 md:pb-3 border-b border-red-500/20 gap-2"
                                                initial={{ x: -10 }}
                                                whileInView={{ x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.9 }}
                                            >
                                                <span className="text-red-200 text-[10px] sm:text-xs font-medium flex items-center gap-1.5 sm:gap-2 min-w-0">
                                                    <EyeOff className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                                    <span className="truncate">Tarifa (30%)</span>
                                                </span>
                                                <motion.span 
                                                    className="font-bold text-base sm:text-lg md:text-xl text-red-400 flex items-center gap-1 flex-shrink-0"
                                                    animate={{
                                                        scale: [1, 1.1, 1],
                                                        textShadow: [
                                                            "0 0 0px rgba(239, 68, 68, 0)",
                                                            "0 0 15px rgba(239, 68, 68, 0.6)",
                                                            "0 0 0px rgba(239, 68, 68, 0)",
                                                        ]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    -$30.00
                                                </motion.span>
                                            </motion.div>
                                            
                                            {/* Remaining Amount */}
                                            <div className="flex justify-between items-center pt-1.5 sm:pt-2 gap-2">
                                                <span className="text-neutral-300 text-[10px] sm:text-xs font-medium">Te Quedas</span>
                                                <motion.span 
                                                    className="text-lg sm:text-xl md:text-2xl font-bold text-white flex-shrink-0"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                                                >
                                                    $70.00
                                                </motion.span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Footer Section */}
                            <motion.div
                                className="relative z-10 border-red-600/30 border-t pt-3 sm:pt-4 md:pt-5 lg:pt-6 space-y-2 sm:space-y-2.5 md:space-y-3 mt-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                            >
                                <p className="leading-relaxed text-[10px] sm:text-xs text-slate-100 font-light">
                                    Las plataformas tradicionales <span className="font-semibold text-red-200">desangran tu negocio</span>. Tarifas altas, costos ocultos y cero transparencia. Tú cocinas, ellos se comen tus márgenes.
                                </p>
                                <div className="flex flex-col xs:flex-row justify-between items-stretch xs:items-center gap-2 xs:gap-3 pt-1.5 sm:pt-2">
                                    <motion.div 
                                        className="flex items-center justify-center xs:justify-start gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-red-950/30 rounded-full border border-red-500/20 w-full xs:w-auto"
                                        whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.4)" }}
                                    >
                                        <span className="text-[9px] xs:text-[10px] tracking-wide sm:tracking-wider font-bold text-red-200 whitespace-nowrap">COSTOS OCULTOS</span>
                                        <EyeOff className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-300 flex-shrink-0" />
                                    </motion.div>
                                    <motion.a 
                                        href="#mission" 
                                        className="text-red-200 text-[10px] sm:text-xs hover:text-red-100 transition-colors font-semibold flex items-center justify-center xs:justify-end gap-1 group/link whitespace-nowrap"
                                        whileHover={{ x: 4 }}
                                    >
                                        Ver solución
                                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Card 2: Comparison Chart */}
                        <motion.div 
                            className="max-w-xl w-full flex flex-col min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] md:aspect-[3/5] lg:aspect-[3/5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 ease-out group relative overflow-hidden rounded-xl sm:rounded-[2rem] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 justify-between text-black morph-border shader-noise bg-white"
                            initial={{ opacity: 0, y: 30, rotateX: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8 }}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            {/* White background overlay */}
                            <div className="absolute inset-0 bg-white rounded-xl sm:rounded-[2rem]" />
                            
                            {/* Subtle border overlay */}
                            <div className="absolute inset-0 rounded-xl sm:rounded-[2rem]" style={{
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
                            }} />

                            {/* Content Container */}
                            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5 relative z-10 flex-1 flex flex-col">
                                {/* Header Badge */}
                                <motion.div 
                                    className="flex items-center justify-center gap-2 sm:gap-3"
                                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 200 }}
                                >
                                    <motion.span 
                                        className="text-[9px] xs:text-[10px] sm:text-[10px] px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-1.5 bg-gradient-to-r from-blue-600/20 via-blue-500/15 to-blue-600/20 text-blue-900 rounded-full font-bold tracking-wide sm:tracking-wider backdrop-blur-md border border-blue-600/30 shadow-lg whitespace-nowrap"
                                        whileHover={{ scale: 1.05 }}
                                        animate={{
                                            boxShadow: [
                                                "0 0 10px rgba(30, 58, 138, 0.2)",
                                                "0 0 20px rgba(30, 58, 138, 0.3)",
                                                "0 0 10px rgba(30, 58, 138, 0.2)",
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        COMPARACIÓN
                                    </motion.span>
                                </motion.div>

                                {/* Title Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <h3 className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl tracking-tight font-bold leading-[1.1] sm:leading-tight mb-1.5 sm:mb-2">
                                        <span className="text-black block">
                                            Comparación de
                                        </span>
                                        <span className="text-blue-900 block">Ganancias</span>
                                    </h3>
                                    <motion.p 
                                        className="text-neutral-700 text-[10px] sm:text-xs mt-2 sm:mt-3 font-medium flex items-center gap-1.5 sm:gap-2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full animate-pulse flex-shrink-0" />
                                        <span>Los Números</span>
                                    </motion.p>
                                </motion.div>

                                {/* Comparison Chart */}
                                <motion.div 
                                    className="relative flex-1 flex flex-col justify-center"
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 150 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative border border-blue-600/20 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-blue-50/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                                        <div className="relative z-10 space-y-2 sm:space-y-2.5 md:space-y-3">
                                            <div className="w-full" style={{ height: '160px' }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                            <BarChart 
                                                data={data} 
                                                layout="vertical"
                                                margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
                                                barCategoryGap="20%"
                                            >
                                                <defs>
                                                    {/* Red gradient for competitors - more vibrant */}
                                                    <linearGradient id="gradientRed" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#991b1b" stopOpacity={1} />
                                                        <stop offset="30%" stopColor="#dc2626" stopOpacity={1} />
                                                        <stop offset="70%" stopColor="#ef4444" stopOpacity={0.95} />
                                                        <stop offset="100%" stopColor="#b91c1c" stopOpacity={1} />
                                                    </linearGradient>
                                                    {/* Green gradient for DomiBGA - more vibrant */}
                                                    <linearGradient id="gradientGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#14532d" stopOpacity={1} />
                                                        <stop offset="30%" stopColor="#16a34a" stopOpacity={1} />
                                                        <stop offset="70%" stopColor="#22c55e" stopOpacity={0.95} />
                                                        <stop offset="100%" stopColor="#15803d" stopOpacity={1} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid 
                                                    strokeDasharray="2 2" 
                                                    stroke="rgba(0, 0, 0, 0.1)" 
                                                    horizontal={false}
                                                    vertical={false}
                                                />
                                                <XAxis 
                                                    type="number" 
                                                    hide
                                                />
                                                <YAxis 
                                                    dataKey="name" 
                                                    type="category" 
                                                    tickLine={false}
                                                    axisLine={false}
                                                    tick={{ fill: 'rgba(0, 0, 0, 0.8)', fontSize: 13, fontWeight: 600, fontFamily: 'system-ui, -apple-system, sans-serif' }}
                                                    width={75}
                                                />
                                                <Tooltip
                                                    cursor={false}
                                                    contentStyle={{ 
                                                        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                                                        border: '1px solid rgba(255, 255, 255, 0.1)', 
                                                        color: '#fff',
                                                        borderRadius: '12px',
                                                        padding: '12px 16px',
                                                        backdropFilter: 'blur(20px)',
                                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                                                        fontFamily: 'system-ui, -apple-system, sans-serif'
                                                    }}
                                                    labelStyle={{ color: '#60a5fa', fontWeight: 600, marginBottom: '6px', fontSize: '13px' }}
                                                    itemStyle={{ color: '#fff', fontSize: '14px' }}
                                                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Ganancia']}
                                                />
                                                <Bar 
                                                    dataKey="profit" 
                                                    radius={[0, 8, 8, 0]}
                                                    barSize={50}
                                                >
                                                    {data.map((entry, index) => {
                                                        const strokeColor = entry.name === 'DomiBGA' ? '#16a34a' : '#dc2626';
                                                        return (
                                                            <Cell 
                                                                key={`cell-${index}`} 
                                                                fill="#ffffff"
                                                                stroke={strokeColor}
                                                                strokeWidth={0.5}
                                                            />
                                                        );
                                                    })}
                                                    <LabelList 
                                                        dataKey="commission" 
                                                        content={(props: any) => {
                                                            if (!props || !props.width) return null;
                                                            const { x, y, width, value, index } = props;
                                                            if (width < 60) return null;
                                                            
                                                            // Get the data entry by index
                                                            const entry = data[index];
                                                            if (!entry) return null;
                                                            
                                                            const textColor = entry.name === 'DomiBGA' ? '#16a34a' : '#dc2626';
                                                            
                                                            return (
                                                                <g>
                                                                    <text
                                                                        x={x + width / 2}
                                                                        y={y + 24}
                                                                        fill={textColor}
                                                                        textAnchor="middle"
                                                                        dominantBaseline="middle"
                                                                        fontSize="18"
                                                                        fontWeight="700"
                                                                        style={{ 
                                                                            fontFamily: 'system-ui, -apple-system, sans-serif',
                                                                            letterSpacing: '0.5px'
                                                                        }}
                                                                    >
                                                                        {value}
                                                                    </text>
                                                                </g>
                                                            );
                                                        }}
                                                    />
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Footer Section */}
                            <motion.div
                                className="relative z-10 border-blue-600/20 border-t pt-3 sm:pt-4 md:pt-5 lg:pt-6 space-y-2 sm:space-y-2.5 md:space-y-3 mt-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                            >
                                <p className="leading-relaxed text-[10px] sm:text-xs text-neutral-700 font-light">
                                    Comparación basada en <span className="font-semibold text-blue-900">$10k de ventas mensuales</span>. DomiBGA te permite quedarte con más de tus ganancias.
                                </p>
                                <div className="flex flex-col xs:flex-row justify-between items-stretch xs:items-center gap-2 xs:gap-3 pt-1.5 sm:pt-2">
                                    <motion.div 
                                        className="flex items-center justify-center xs:justify-start gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-blue-100/50 rounded-full border border-blue-600/30 w-full xs:w-auto"
                                        whileHover={{ scale: 1.05, borderColor: "rgba(30, 58, 138, 0.5)" }}
                                    >
                                        <span className="text-[9px] xs:text-[10px] tracking-wide sm:tracking-wider font-bold text-blue-900 whitespace-nowrap">$10K MENSUALES</span>
                                        <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-700 flex-shrink-0" />
                                    </motion.div>
                                    <motion.a 
                                        href="#mission" 
                                        className="text-blue-900 text-[10px] sm:text-xs hover:text-blue-700 transition-colors font-semibold flex items-center justify-center xs:justify-end gap-1 group/link whitespace-nowrap"
                                        whileHover={{ x: 4 }}
                                    >
                                        Ver más
                                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Card 3: Solution - DomiBGA */}
                        <motion.div 
                            className="max-w-xl w-full flex flex-col min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] md:aspect-[3/5] lg:aspect-[3/5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 ease-out group relative overflow-hidden rounded-xl sm:rounded-[2rem] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 justify-between text-white morph-border shader-noise"
                            initial={{ opacity: 0, y: 30, rotateX: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8 }}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            {/* Dark Overlay for text readability */}
                            <div className="absolute inset-0 bg-green-950/80 rounded-xl sm:rounded-[2rem]" />
                            
                            {/* Liquid Glass Overlay - Green variant */}
                            <div className="absolute inset-0 rounded-xl sm:rounded-[2rem]" style={{
                                background: 'rgba(34, 197, 94, 0.1)',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                border: '1px solid rgba(34, 197, 94, 0.2)',
                                boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(34, 197, 94, 0.1)'
                            }} />

                            {/* Content Container */}
                            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5 relative z-10 flex-1 flex flex-col">
                                {/* Header Badge */}
                                <motion.div 
                                    className="flex items-center justify-center gap-2 sm:gap-3"
                                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 200 }}
                                >
                                    <motion.span 
                                        className="text-[9px] xs:text-[10px] sm:text-[10px] px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-1.5 bg-gradient-to-r from-primary/30 via-primary/25 to-primary/30 text-primary rounded-full font-bold tracking-wide sm:tracking-wider backdrop-blur-md border border-primary/30 shadow-lg whitespace-nowrap"
                                        whileHover={{ scale: 1.05 }}
                                        animate={{
                                            boxShadow: [
                                                "0 0 10px rgba(0, 255, 65, 0.3)",
                                                "0 0 20px rgba(0, 255, 65, 0.5)",
                                                "0 0 10px rgba(0, 255, 65, 0.3)",
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        SOLO 5%
                                    </motion.span>
                                </motion.div>

                                {/* Title Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <h3 className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl tracking-tight font-bold leading-[1.1] sm:leading-tight mb-1.5 sm:mb-2">
                                        <span className="bg-gradient-to-r from-white via-green-50 to-white bg-clip-text text-transparent block">
                                            DomiBGA
                                        </span>
                                        <span className="text-primary block">La Solución</span>
                                    </h3>
                                    <motion.p 
                                        className="text-primary/80 text-[10px] sm:text-xs mt-2 sm:mt-3 font-medium flex items-center gap-1.5 sm:gap-2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
                                        <span>La Solución</span>
                                    </motion.p>
                                </motion.div>

                                {/* Financial Breakdown Card */}
                                <motion.div 
                                    className="relative flex-1 flex flex-col justify-center"
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 150 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative border border-primary/40 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-950/40 via-green-900/30 to-green-950/40 backdrop-blur-xl shadow-2xl overflow-hidden">
                                        <div className="relative z-10 space-y-2 sm:space-y-2.5 md:space-y-3">
                                            {/* Order Value */}
                                            <div className="flex justify-between items-center pb-2 sm:pb-2.5 md:pb-3 border-b border-primary/20 gap-2">
                                                <span className="text-neutral-300 text-[10px] sm:text-xs font-medium truncate">Valor del Pedido</span>
                                                <motion.span 
                                                    className="text-white font-bold text-sm sm:text-base md:text-lg flex-shrink-0"
                                                    initial={{ scale: 0.8 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.8, type: "spring" }}
                                                >
                                                    $100.00
                                                </motion.span>
                                        </div>
                                            
                                            {/* Fee - Highlighted */}
                                            <motion.div 
                                                className="flex justify-between items-center pb-2 sm:pb-2.5 md:pb-3 border-b border-primary/20 gap-2"
                                                initial={{ x: -10 }}
                                                whileInView={{ x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.9 }}
                                            >
                                                <span className="text-primary/90 text-[10px] sm:text-xs font-medium flex items-center gap-1.5 sm:gap-2 min-w-0">
                                                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                                    <span className="truncate">Tarifa (5%)</span>
                                                </span>
                                                <motion.span 
                                                    className="font-bold text-base sm:text-lg md:text-xl text-primary flex items-center gap-1 flex-shrink-0"
                                                    animate={{
                                                        scale: [1, 1.1, 1],
                                                        textShadow: [
                                                            "0 0 0px rgba(0, 255, 65, 0)",
                                                            "0 0 15px rgba(0, 255, 65, 0.6)",
                                                            "0 0 0px rgba(0, 255, 65, 0)",
                                                        ]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    -$5.00
                                                </motion.span>
                                            </motion.div>
                                            
                                            {/* Remaining Amount */}
                                            <div className="flex justify-between items-center pt-1.5 sm:pt-2 gap-2">
                                                <span className="text-neutral-300 text-[10px] sm:text-xs font-medium">Te Quedas</span>
                                                <motion.span 
                                                    className="text-lg sm:text-xl md:text-2xl font-bold text-white flex-shrink-0"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                                                >
                                                    $95.00
                                                </motion.span>
                                        </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Footer Section */}
                            <motion.div
                                className="relative z-10 border-primary/30 border-t pt-3 sm:pt-4 md:pt-5 lg:pt-6 space-y-2 sm:space-y-2.5 md:space-y-3 mt-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                            >
                                <p className="leading-relaxed text-[10px] sm:text-xs text-slate-100 font-light">
                                    Tarifas planas. Pagos directos. Sin intermediarios. DomiBGA <span className="font-semibold text-primary">restaura el equilibrio de poder</span> para restaurantes y repartidores.
                                </p>
                                <div className="flex flex-col xs:flex-row justify-between items-stretch xs:items-center gap-2 xs:gap-3 pt-1.5 sm:pt-2">
                                    <motion.div 
                                        className="flex items-center justify-center xs:justify-start gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-green-950/30 rounded-full border border-primary/20 w-full xs:w-auto"
                                        whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 65, 0.4)" }}
                                    >
                                        <span className="text-[9px] xs:text-[10px] tracking-wide sm:tracking-wider font-bold text-primary whitespace-nowrap">TRANSPARENCIA</span>
                                        <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" />
                                    </motion.div>
                                    <motion.a 
                                        href="#mission" 
                                        className="text-primary text-[10px] sm:text-xs hover:text-green-300 transition-colors font-semibold flex items-center justify-center xs:justify-end gap-1 group/link whitespace-nowrap"
                                        whileHover={{ x: 4 }}
                                    >
                                        Únete ahora
                                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Copy matching the rest of the page */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h4 className="text-lg font-semibold tracking-tight text-white">Sin Comisiones Abusivas</h4>
                            <p className="mt-2 text-sm text-neutral-400">Las plataformas tradicionales desangran tu negocio con tarifas del 30%. Tú cocinas, ellos se comen tus márgenes.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h4 className="text-lg font-semibold tracking-tight text-white">Pagos Directos</h4>
                            <p className="mt-2 text-sm text-neutral-400">Sin intermediarios. DomiBGA restaura el equilibrio de poder para restaurantes y repartidores.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h4 className="text-lg font-semibold tracking-tight text-white">Transparencia Total</h4>
                            <p className="mt-2 text-sm text-neutral-400">Tarifas claras desde el inicio. Sin costos ocultos. Sabes exactamente cuánto ganas.</p>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div 
                        className="mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <a href="#mission" className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-primary transition-colors">
                            Explora nuestras tarifas
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
