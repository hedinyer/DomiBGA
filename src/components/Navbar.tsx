"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "El Problema", href: "#mission" },
    { name: "Calculadora", href: "#restaurants" },
    { name: "Repartidores", href: "#couriers" },
];

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMobileLinkClick = (href: string) => {
        setIsOpen(false);
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto glass rounded-full px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center border !border-gray-300/50">
                <Link href="/" className="text-xl sm:text-2xl font-display font-bold tracking-tighter text-primary">
                    DOMI<span className="text-black">BGA</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 lg:gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-xs lg:text-sm font-bold uppercase tracking-widest text-black hover:text-primary transition-colors cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        href="/envios"
                        className="bg-primary text-black px-4 lg:px-6 py-2 font-bold uppercase hover:bg-accent transition-colors rounded-full cursor-pointer text-xs lg:text-sm"
                    >
                        Envía Ya
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-black hover:text-primary transition-colors p-1"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 sm:top-20 left-3 sm:left-6 right-3 sm:right-6 glass-dark rounded-2xl p-4 sm:p-6 md:hidden flex flex-col gap-4 sm:gap-6"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => handleMobileLinkClick(link.href)}
                                className="text-lg sm:text-xl font-bold uppercase tracking-widest hover:text-primary cursor-pointer text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link
                            href="/envios"
                            className="bg-primary text-black w-full py-3 font-bold uppercase hover:bg-accent transition-colors rounded-full cursor-pointer text-center text-sm sm:text-base"
                        >
                            Envía Ya
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
