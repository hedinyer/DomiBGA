"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Package, Receipt, ShieldCheck, Zap, X, CreditCard } from "lucide-react";

type ShippingSpeed = "normal" | "express";

const SIZE_PRESETS = [
  { id: "S", label: "Caja Pequeña", detail: "10 x 15 x 20 cm", base: 9000 },
  { id: "M", label: "Caja Mediana", detail: "20 x 25 x 35 cm", base: 14000 },
  { id: "L", label: "Caja Grande", detail: "35 x 40 x 60 cm", base: 22000 },
];

export default function EnviosPage() {
  const [size, setSize] = useState<typeof SIZE_PRESETS[number]["id"]>("M");
  const [weight, setWeight] = useState("2.5");
  const [declaredValue, setDeclaredValue] = useState("150000");
  const [pickup, setPickup] = useState("");
  const [pickupContact, setPickupContact] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [dropoffContact, setDropoffContact] = useState("");
  const [speed, setSpeed] = useState<ShippingSpeed>("normal");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const router = useRouter();

  const selectedSize = SIZE_PRESETS.find((option) => option.id === size) ?? SIZE_PRESETS[1];

  const estimate = useMemo(() => {
    const numericWeight = Number(weight) || 0;
    const numericValue = Number(declaredValue) || 0;

    const weightFee = Math.max(numericWeight - 1, 0) * 2500;
    const insurance = numericValue * 0.007; // 0.7% seguro básico
    const speedFee = speed === "express" ? 9000 : 0;

    return Math.round(selectedSize.base + weightFee + insurance + speedFee);
  }, [declaredValue, selectedSize.base, speed, weight]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validar que los campos de ruta estén llenos
    if (pickup && pickupContact && dropoff && dropoffContact) {
      setShowPaymentModal(true);
    }
  };

  const handlePayment = () => {
    // Generar número de seguimiento
    const newTrackingNumber = `DOMI-${Date.now().toString().slice(-8)}`;
    
    // Guardar datos en sessionStorage
    const shippingData = {
      size,
      sizeLabel: selectedSize.label,
      weight,
      declaredValue,
      pickup,
      pickupContact,
      dropoff,
      dropoffContact,
      speed,
      estimate,
      trackingNumber: newTrackingNumber,
      date: new Date().toISOString(),
    };
    
    sessionStorage.setItem("shippingData", JSON.stringify(shippingData));
    
    // Cerrar modal de pago y redirigir
    setShowPaymentModal(false);
    router.push("/envios/confirmacion");
  };

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.2),_transparent_50%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1515164433345-4c83e46c0270?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen opacity-20" />

          <div className="relative z-10 p-8 sm:p-12 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-black/60 hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} /> Volver
            </Link>
            <div className="space-y-4">
              <p className="text-primary font-mono text-xs sm:text-sm tracking-[0.4em] uppercase">Briefing de Envío</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-tight text-black">
                Diseña tu entrega <span className="text-primary">perfecta</span>
              </h1>
              <p className="text-base sm:text-lg text-black/70 max-w-3xl font-mono">
                Calcula en tiempo real el costo estimado, define puntos de recogida y entrega y activa la prioridad que
                necesites. Todo con la estética impecable de nuestra landing principal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <Package className="text-primary" />, label: "Caja + Peso", value: `${size} · ${weight} kg` },
                { icon: <MapPin className="text-primary" />, label: "Trayecto", value: pickup && dropoff ? "Listo" : "Pendiente" },
                { icon: <Zap className="text-primary" />, label: "Modalidad", value: speed === "express" ? "Entrega Express" : "Entrega Normal" },
              ].map((info, index) => (
                <div
                  key={info.label}
                  className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl p-4 flex items-center gap-4 border border-black/10"
                >
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">{info.icon}</div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-1">{info.label}</p>
                    <p className="text-lg font-display text-black">{info.value || "Completa los datos"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form + Summary */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl border border-black/10 p-6 sm:p-8 space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="space-y-3">
              <p className="text-primary font-mono text-xs uppercase tracking-[0.4em]">Paso 1</p>
              <h2 className="text-3xl font-display text-black">Características del paquete</h2>
              <p className="text-black/60 text-sm font-mono">Selecciona el formato que se ajusta al contenido.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {SIZE_PRESETS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSize(option.id)}
                  className={`rounded-2xl border px-4 py-4 text-left transition-all ${size === option.id
                      ? "border-primary bg-primary/10 text-black shadow-[0_0_20px_rgba(0,255,65,0.25)]"
                      : "border-black/10 hover:border-black/40"
                    }`}
                >
                  <p className="text-sm uppercase tracking-[0.4em] text-black/60">{option.id}</p>
                  <p className="text-xl font-display mt-2 text-black">{option.label}</p>
                  <p className="text-black/50 text-xs mt-1">{option.detail}</p>
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-5 items-end">
              <label className="flex flex-col space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-black/60">Peso (kg)</span>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none h-[48px]"
                />
              </label>
              <label className="flex flex-col space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-black/60">Valor declarado (COP)</span>
                <input
                  type="number"
                  min="0"
                  value={declaredValue}
                  onChange={(event) => setDeclaredValue(event.target.value)}
                  className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none h-[48px]"
                />
              </label>
              <label className="flex flex-col space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-black/60">Modalidad</span>
                <div className="flex gap-2 h-[48px]">
                  {(["normal", "express"] as ShippingSpeed[]).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSpeed(option)}
                      className={`flex-1 rounded-2xl border px-3 font-mono uppercase tracking-[0.3em] text-xs h-full ${speed === option ? "border-primary bg-primary text-black" : "border-black/10 text-black/60"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </label>
            </div>

            <div className="space-y-3">
              <p className="text-primary font-mono text-xs uppercase tracking-[0.4em]">Paso 2</p>
              <h2 className="text-3xl font-display text-black">Ruta y contacto</h2>
              <p className="text-black/60 text-sm font-mono">Detalla desde dónde salimos y dónde entregamos.</p>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-black/60">Punto de recogida</span>
                  <input
                    type="text"
                    value={pickup}
                    onChange={(event) => setPickup(event.target.value)}
                    placeholder="Carrera 33 #45, Cabecera · Torre 2"
                    className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none placeholder:text-black/30"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-black/60">Contacto</span>
                  <input
                    type="text"
                    value={pickupContact}
                    onChange={(event) => setPickupContact(event.target.value)}
                    placeholder="+57 312 000 0000 · Ana López"
                    className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none placeholder:text-black/30"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-black/60">Punto de entrega</span>
                  <input
                    type="text"
                    value={dropoff}
                    onChange={(event) => setDropoff(event.target.value)}
                    placeholder="Calle 51 #27, Cañaveral · Torre 2"
                    className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none placeholder:text-black/30"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-black/60">Contacto</span>
                  <input
                    type="text"
                    value={dropoffContact}
                    onChange={(event) => setDropoffContact(event.target.value)}
                    placeholder="+57 316 000 0000 · Recibe Juan"
                    className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none placeholder:text-black/30"
                  />
                </label>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full rounded-full bg-primary text-black font-bold uppercase tracking-[0.4em] py-4 text-sm shadow-[0_0_25px_rgba(0,255,65,0.35)]"
            >
              Agendar recolección
            </motion.button>
          </motion.form>

          {/* Summary */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl border border-black/10 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.4em] text-black/60">Estimado</p>
                <ShieldCheck className="text-primary" />
              </div>
              <p className="text-4xl font-display text-black">${estimate.toLocaleString("es-CO")}</p>
              <p className="text-black/60 text-sm font-mono">
                Costos incluyen cobertura básica y logística estándar en Bucaramanga y su área metropolitana.
              </p>
              <div className="rounded-2xl border border-black/5 bg-gray-100 p-4 space-y-2 text-sm font-mono text-black/70">
                <div className="flex justify-between">
                  <span>Tamaño base</span>
                  <span>${selectedSize.base.toLocaleString("es-CO")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Seguro 0.7%</span>
                  <span>${Math.round((Number(declaredValue) || 0) * 0.007).toLocaleString("es-CO")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Servicio</span>
                  <span>{speed === "express" ? "$9.000 Express" : "$0 Normal"}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl border border-black/10 p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Receipt className="text-primary" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-black/60">Checklist</p>
                  <p className="text-lg font-display text-black">Antes de enviar</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-black/70 font-mono">
                <li>• Asegúrate de embalar y sellar correctamente.</li>
                <li>• Ten listo el contacto de recogida y entrega.</li>
                <li>• Verifica si requieres pago contraentrega.</li>
              </ul>
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm text-black/80 font-mono">
                <p className="text-primary mb-1">Entrega Express</p>
                <p>Promedio 45 min - 1h dentro del anillo metropolitano.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Pago */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl border border-black/10 p-8 max-w-md w-full space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-display font-black text-black">Pago Electrónico</h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-black/60 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl p-4 border border-black/10">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60 mb-2">Total a pagar</p>
                <p className="text-3xl font-display font-black text-black">${estimate.toLocaleString("es-CO")}</p>
              </div>

              <div className="space-y-3">
                <label className="block space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-black/60">Número de tarjeta</span>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none"
                  />
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="block space-y-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-black/60">Vencimiento</span>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none"
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-black/60">CVV</span>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none"
                    />
                  </label>
                </div>
                <label className="block space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-black/60">Titular de la tarjeta</span>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full rounded-2xl bg-gray-100 border border-black/10 px-4 py-3 font-mono text-black focus:border-primary focus:outline-none"
                  />
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={handlePayment}
                className="w-full rounded-full bg-primary text-black font-bold uppercase tracking-[0.4em] py-4 text-sm shadow-[0_0_25px_rgba(0,255,65,0.35)] flex items-center justify-center gap-2"
              >
                <CreditCard size={18} />
                Pagar ${estimate.toLocaleString("es-CO")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}

