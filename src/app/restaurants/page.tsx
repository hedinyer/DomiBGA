"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Plus, Trash2 } from "lucide-react";

// --- Mock Data ---
const revenueData = [
    { name: "Lun", value: 4000 },
    { name: "Mar", value: 3000 },
    { name: "Mié", value: 5000 },
    { name: "Jue", value: 2780 },
    { name: "Vie", value: 1890 },
    { name: "Sáb", value: 2390 },
    { name: "Dom", value: 3490 },
];

// --- Sortable Item Component ---
function SortableItem(props: any) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="bg-surface border border-white/10 p-4 rounded-lg flex items-center justify-between mb-2 group hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
                <GripVertical className="text-gray-500 cursor-grab active:cursor-grabbing" />
                <div>
                    <h4 className="font-bold text-white">{props.name}</h4>
                    <p className="text-xs text-gray-400">${props.price}</p>
                </div>
            </div>
            <button onClick={() => props.onDelete(props.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
            </button>
        </div>
    );
}

export default function RestaurantsPage() {
    // --- State ---
    const [menuItems, setMenuItems] = useState([
        { id: "1", name: "Hamburguesa Cyber", price: "15.00" },
        { id: "2", name: "Papas Fritas Void", price: "5.00" },
        { id: "3", name: "Agua Glitch", price: "3.00" },
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // --- Handlers ---
    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            setMenuItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    const handleDelete = (id: string) => {
        setMenuItems(menuItems.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Hero Section */}
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
                        CENTRO DE <span className="text-primary">MANDO</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto font-mono">
                        Toma el control de tus operaciones. Datos en tiempo real. Gestión total. Cero tonterías.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left: Analytics Dashboard */}
                    <div className="glass-dark p-8 rounded-3xl border border-white/10">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Ingresos en Vivo
                            </h2>
                            <select className="bg-black border border-white/20 text-white text-sm rounded px-3 py-1">
                                <option>Esta Semana</option>
                                <option>Este Mes</option>
                            </select>
                        </div>

                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={revenueData}>
                                    <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px' }}
                                        itemStyle={{ color: '#fff' }}
                                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    />
                                    <Bar dataKey="value" fill="#00ff41" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                <p className="text-gray-400 text-xs uppercase mb-1">Pedidos</p>
                                <p className="text-2xl font-bold text-white">1,240</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                <p className="text-gray-400 text-xs uppercase mb-1">Ingresos</p>
                                <p className="text-2xl font-bold text-primary">$45k</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                <p className="text-gray-400 text-xs uppercase mb-1">Ahorro</p>
                                <p className="text-2xl font-bold text-green-400">$12k</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Menu Manager */}
                    <div className="glass-dark p-8 rounded-3xl border border-white/10">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-white">Gestor de Menú</h2>
                            <button className="bg-primary/20 text-primary hover:bg-primary hover:text-black p-2 rounded-full transition-colors">
                                <Plus size={20} />
                            </button>
                        </div>

                        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                            <SortableContext items={menuItems} strategy={verticalListSortingStrategy}>
                                {menuItems.map((item) => (
                                    <SortableItem key={item.id} id={item.id} name={item.name} price={item.price} onDelete={handleDelete} />
                                ))}
                            </SortableContext>
                        </DndContext>

                        <div className="mt-8 pt-8 border-t border-white/10 text-center">
                            <p className="text-gray-500 text-sm mb-4">Arrastra para reordenar. Los cambios se sincronizan instantáneamente.</p>
                            <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-xl">
                                Publicar Cambios
                            </button>
                        </div>
                    </div>

                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-primary to-transparent w-full max-w-2xl">
                        <div className="bg-black p-10">
                            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para unirte a la rebelión?</h2>
                            <p className="text-gray-400 mb-8">Sin contratos de permanencia. Sin tarifas ocultas. Solo negocios justos.</p>
                            <button className="bg-primary text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                                Registrar Restaurante
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
