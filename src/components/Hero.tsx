"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";

const RotatingText = () => {
    const texts = ["RÁPIDA", "SEGURA", "A TIEMPO", "A PRECIOS JUSTOS"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000); // Cambia cada 2 segundos

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className="relative w-full flex justify-center items-center min-h-[1em] whitespace-nowrap">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-black inline-block whitespace-nowrap text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center"
                >
                    {texts[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const attemptPlay = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        video.setAttribute("playsinline", "true");
        video.setAttribute("webkit-playsinline", "true");
        video.setAttribute("muted", "muted");
        video.setAttribute("autoplay", "autoplay");
        video.setAttribute("loop", "loop");

        video.playsInline = true;
        video.muted = true;
        video.defaultMuted = true;
        video.autoplay = true;
        video.loop = true;
        video.controls = false;

        video.muted = true;
        video.defaultMuted = true;
        video.setAttribute("muted", "muted");

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                video.muted = true;
                video.play().catch(() => { /* give up silently */ });
            });
        }
    }, []);

    useLayoutEffect(() => {
        attemptPlay();
    }, [attemptPlay]);

    useEffect(() => {
        const video = videoRef.current;
        if (video && video.readyState < 2) {
            video.load();
        }

        attemptPlay();

        const onLoadedData = () => attemptPlay();
        const onCanPlay = () => attemptPlay();

        if (video) {
            video.addEventListener("loadeddata", onLoadedData);
            video.addEventListener("canplay", onCanPlay);
        }

        const resumeOnGesture = () => {
            attemptPlay();
        };

        document.addEventListener("touchstart", resumeOnGesture, { once: true });
        document.addEventListener("click", resumeOnGesture, { once: true });

        return () => {
            if (video) {
                video.removeEventListener("loadeddata", onLoadedData);
                video.removeEventListener("canplay", onCanPlay);
            }
            document.removeEventListener("touchstart", resumeOnGesture);
            document.removeEventListener("click", resumeOnGesture);
        };
    }, [attemptPlay]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-0 bg-white">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                defaultMuted
                controls={false}
                playsInline
                disablePictureInPicture
                onLoadedMetadata={attemptPlay}
                style={{ WebkitTouchCallout: "none" }}
                preload="auto"
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/herosection/vecteezy_a-parcel-delivery-worker-dressed-in-a-red-uniform-is-holding_24842634.mp4" type="video/mp4" />
            </video>
            
            {/* Background Elements */}
            <div className="absolute inset-0 bg-white/30 z-[1]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60 z-10" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2 
                        className="text-primary font-mono text-xs sm:text-sm md:text-base mb-3 sm:mb-4 tracking-[0.3em] sm:tracking-[0.5em] uppercase px-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Bucaramanga y Área Metropolitana
                    </motion.h2>
                    <motion.h1 
                        className="font-display font-black tracking-tighter mb-4 sm:mb-6 leading-[0.9] text-center text-black"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-black">ENTREGA</span>
                        <span className="block w-full">
                            <RotatingText />
                        </span>
                    </motion.h1>
                    <motion.p 
                        className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-8 sm:mb-10 font-mono px-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        Deja de regalar el 30% de tus ventas, envía sin comisiones abusivas.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                        <Link
                            href="/envios"
                            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-black font-bold uppercase tracking-widest overflow-hidden rounded-full border-2 border-transparent group-hover:border-green-500 transition-all text-sm sm:text-base text-center"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors">Envía tu Paquete Hoy</span>
                            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-full" />
                        </Link>
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-black/20 hover:border-primary text-black hover:text-primary font-bold uppercase tracking-widest transition-all rounded-full text-sm sm:text-base">
                            Rueda con Nosotros
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
