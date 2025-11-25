"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "Misión", href: "/mission" },
    { name: "Restaurantes", href: "/restaurants" },
    { name: "Repartidores", href: "/couriers" },
    { name: "Descargar", href: "#download" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex justify-between items-center border !border-gray-300/50">
                <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-primary">
                    DOMI<span className="text-black">BGA</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest text-black hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="bg-primary text-black px-6 py-2 font-bold uppercase hover:bg-accent transition-colors rounded-full">
                        Únete Ahora
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-6 right-6 glass-dark rounded-2xl p-6 md:hidden flex flex-col gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xl font-bold uppercase tracking-widest hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-primary text-black w-full py-3 font-bold uppercase hover:bg-accent transition-colors rounded-full">
                            Únete Ahora
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
