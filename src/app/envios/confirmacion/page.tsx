"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, CheckCircle2, Package, Truck, Clock, Receipt, UserCheck, MapPin } from "lucide-react";

interface ShippingData {
  size: string;
  sizeLabel: string;
  weight: string;
  declaredValue: string;
  pickup: string;
  pickupContact: string;
  dropoff: string;
  dropoffContact: string;
  speed: string;
  estimate: number;
  trackingNumber: string;
  date: string;
}

export default function ConfirmacionPage() {
  const router = useRouter();
  const [shippingData, setShippingData] = useState<ShippingData | null>(null);

  useEffect(() => {
    // Obtener datos del sessionStorage
    const data = sessionStorage.getItem("shippingData");
    if (data) {
      setShippingData(JSON.parse(data));
    } else {
      // Si no hay datos, redirigir a la página de envíos
      router.push("/envios");
    }
  }, [router]);

  if (!shippingData) {
    return (
      <div className="min-h-screen bg-white text-black pt-24 pb-16 px-4 sm:px-6 flex items-center justify-center">
        <p className="text-black/60 font-mono">Cargando...</p>
      </div>
    );
  }

  const selectedSize = {
    S: "Caja Pequeña",
    M: "Caja Mediana",
    L: "Caja Grande",
  }[shippingData.size] || "Caja Mediana";

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/envios"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-black/60 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Volver a envíos
          </Link>
        </div>

        {/* Grid de Factura y Seguimiento */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Factura */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl border border-black/10 p-8 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-display font-black text-black">Factura de Pago</h2>
              <Receipt className="text-primary" size={24} />
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-black/10 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-black/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-black/60 mb-1">Número de factura</p>
                    <p className="text-lg font-display font-black text-black font-mono">{shippingData.trackingNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.3em] text-black/60 mb-1">Fecha</p>
                    <p className="text-sm font-mono text-black">{new Date(shippingData.date).toLocaleDateString("es-CO")}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-black/60 mb-2">Datos del envío</p>
                    <div className="space-y-2 text-sm font-mono text-black/80">
                      <p><span className="font-bold">Tamaño:</span> {selectedSize} ({shippingData.size})</p>
                      <p><span className="font-bold">Peso:</span> {shippingData.weight} kg</p>
                      <p><span className="font-bold">Valor declarado:</span> ${Number(shippingData.declaredValue).toLocaleString("es-CO")}</p>
                      <p><span className="font-bold">Modalidad:</span> {shippingData.speed === "express" ? "Entrega Express" : "Entrega Normal"}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-black/60 mb-2">Punto de recogida</p>
                    <p className="text-sm font-mono text-black">{shippingData.pickup}</p>
                    <p className="text-xs font-mono text-black/60 mt-1">{shippingData.pickupContact}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-black/60 mb-2">Punto de entrega</p>
                    <p className="text-sm font-mono text-black">{shippingData.dropoff}</p>
                    <p className="text-xs font-mono text-black/60 mt-1">{shippingData.dropoffContact}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 space-y-2">
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-black/70">Tamaño base</span>
                    <span className="text-black">${(() => {
                      const base = { S: 9000, M: 14000, L: 22000 }[shippingData.size as "S" | "M" | "L"] || 14000;
                      return base.toLocaleString("es-CO");
                    })()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-black/70">Seguro 0.7%</span>
                    <span className="text-black">${Math.round((Number(shippingData.declaredValue) || 0) * 0.007).toLocaleString("es-CO")}</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-black/70">Servicio</span>
                    <span className="text-black">{shippingData.speed === "express" ? "$9.000 Express" : "$0 Normal"}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-black/10">
                    <span className="text-lg font-display font-black text-black">Total</span>
                    <span className="text-2xl font-display font-black text-primary">${shippingData.estimate.toLocaleString("es-CO")}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 flex items-center gap-2 text-primary">
                  <CheckCircle size={20} />
                  <p className="text-sm font-mono">Pago confirmado</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Seguimiento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl border border-black/10 p-8 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-display font-black text-black">Seguimiento del Pedido</h2>
              <Package className="text-primary" size={24} />
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-black/10">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60 mb-2">Número de seguimiento</p>
                <p className="text-xl font-display font-black text-primary font-mono">{shippingData.trackingNumber}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-black text-black">Asignar el pedido</p>
                    <p className="text-sm font-mono text-black/60">Tu pedido ha sido asignado a un repartidor</p>
                    <p className="text-xs font-mono text-black/40 mt-1">Hace unos momentos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                    <Package className="text-black/30" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-black text-black/30">Recoger el pedido</p>
                    <p className="text-sm font-mono text-black/30">El repartidor se dirigirá al punto de recogida</p>
                    <p className="text-xs font-mono text-black/20 mt-1">Pendiente</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                    <Truck className="text-black/30" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-black text-black/30">Pedido a su dirección de destino</p>
                    <p className="text-sm font-mono text-black/30">El paquete está en camino a la dirección de entrega</p>
                    <p className="text-xs font-mono text-black/20 mt-1">Pendiente</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-black/30" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-black text-black/30">Pedido entregado</p>
                    <p className="text-sm font-mono text-black/30">El paquete ha sido entregado exitosamente</p>
                    <p className="text-xs font-mono text-black/20 mt-1">Pendiente</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-primary" size={18} />
                  <p className="text-sm font-display font-black text-black">Tiempo estimado</p>
                </div>
                <p className="text-sm font-mono text-black/70">
                  {shippingData.speed === "express" 
                    ? "Entrega Express: 45 min - 1h dentro del anillo metropolitano"
                    : "Entrega Normal: 2-4 horas dentro del anillo metropolitano"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

