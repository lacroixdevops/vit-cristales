"use client";
import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre:"", tel:"", servicio:"Mamparas de vidrio", msg:"" });

  const handleSend = (e: any) => {
    e.preventDefault();
    const texto = `Hola VIT! Quiero cotizar:%0A%0A*Nombre:* ${form.nombre}%0A*Tel:* ${form.tel}%0A*Servicio:* ${form.servicio}%0A*Detalle:* ${form.msg}%0A%0AVi esto en la web vitcristales.com`;
    window.open(`https://wa.me/5493584000000?text=${texto}`, "_blank");
  };

  return (
    <main className="bg-[#FEFEFE] min-h-[80vh]">
      <div className="max-w-[1160px] mx-auto px-6 py-8 md:py-14 grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">

        {/* IZQ */}
        <div className="pt-2">
          <p className="text-[10px] font-bold tracking-[0.28em] text-[#169EE3] mb-4">CONTACTO • RÍO CUARTO</p>
          <h1 className="font-black tracking-[-0.05em] text-[#111] flex flex-col gap-1">
            <span className="text-[32px] md:text-[46px] leading-[0.9]">Contanos</span>
            <span className="text-[32px] md:text-[46px] leading-[0.9] text-zinc-400 font-light">tu proyecto</span>
          </h1>
          <p className="text-[13px] text-zinc-500 mt-5 max-w-[36ch] leading-[1.6]">
            Respondemos en el día con presupuesto y fecha de instalación. Estamos en Río Cuarto, servicio en toda Córdoba.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-[12px]"><div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center">📍</div><span className="font-medium text-[#0F2F4A]">Parque Industrial, Río Cuarto</span></div>
            <div className="flex items-center gap-3 text-[12px]"><div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center">📲</div><span className="font-medium text-[#0F2F4A]">+54 9 358 400-0000</span></div>
            <div className="flex items-center gap-3 text-[12px]"><div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center">✉️</div><span className="font-medium text-[#0F2F4A]">hola@vitcristales.com</span></div>
          </div>

          <div className="mt-8 bg-[#0F2F4A] text-white rounded-[20px] p-5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-[120px] h-[120px] bg-[#169EE3]/20 rounded-full blur-[20px]"></div>
            <p className="text-[11px] font-black tracking-widest relative z-10">¿QUERÉS RESPUESTA MÁS RÁPIDA?</p>
            <p className="text-[11px] text-white/60 mt-2 leading-[1.5] relative z-10">Mandanos foto y medidas por WhatsApp y te cotizamos al instante. Atendemos hasta las 20hs.</p>
            <a href="https://wa.me/5493584000000" target="_blank" className="mt-4 inline-block bg-white text-[#0F2F4A] rounded-full px-5 py-2.5 text-[10px] font-black tracking-widest">ABRIR WHATSAPP →</a>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSend} className="bg-white rounded-[22px] md:rounded-[24px] p-5 md:p-7 border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] space-y-3 md:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[9px] font-black tracking-widest text-zinc-500 ml-3">NOMBRE</label>
              <input required value={form.nombre} onChange={e=>setForm({...form, nombre:e.target.value})} placeholder="Ej: Juan Perez" className="bg-[#F8FBFD] rounded-full px-5 py-3.5 text-[13px] w-full border border-zinc-200 focus:border-[#0F2F4A] outline-none transition text-zinc-900 placeholder:text-zinc-400" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black tracking-widest text-zinc-500 ml-3">TELÉFONO / WHATSAPP</label>
              <input required value={form.tel} onChange={e=>setForm({...form, tel:e.target.value})} placeholder="3584 00-0000" className="bg-[#F8FBFD] rounded-full px-5 py-3.5 text-[13px] w-full border border-zinc-200 focus:border-[#0F2F4A] outline-none transition text-zinc-900 placeholder:text-zinc-400" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] font-black tracking-widest text-zinc-500 ml-3">¿QUÉ NECESITÁS?</label>
            <select value={form.servicio} onChange={e=>setForm({...form, servicio:e.target.value})} className="bg-[#F8FBFD] rounded-full px-5 py-3.5 text-[13px] w-full border border-zinc-200 focus:border-[#0F2F4A] outline-none text-zinc-900">
              <option>Mamparas de vidrio</option>
              <option>Puertas de vidrio</option>
              <option>Barandas de escalera / balcón</option>
              <option>Cerramiento de oficinas</option>
              <option>Espejos a medida</option>
              <option>Ventanas / Paños / DVH</option>
              <option>Venta retirada en fábrica</option>
              <option>Alquiler plataforma eléctrica</option>
              <option>Mantenimiento / Service</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] font-black tracking-widest text-zinc-500 ml-3">MEDIDAS, BARRIO Y DETALLE</label>
            <textarea required value={form.msg} onChange={e=>setForm({...form, msg:e.target.value})} placeholder="Ej: Mampara fija 90cm, B° Golf, planta alta, tengo foto..." rows={4} className="bg-[#F8FBFD] rounded-[18px] px-5 py-4 text-[13px] w-full border border-zinc-200 focus:border-[#0F2F4A] outline-none resize-none leading-[1.5] text-zinc-900 placeholder:text-zinc-400"></textarea>
          </div>

          <button type="submit" className="w-full bg-[#0F2F4A] text-white rounded-full py-4 text-[11px] font-black tracking-[0.15em] hover:bg-black transition flex items-center justify-center gap-2">
            ENVIAR POR WHATSAPP <span>→</span>
          </button>
          <p className="text-[9px] text-center text-zinc-400 font-medium tracking-wide">TE LLEGA AL WHATSAPP DE VIT • RESPUESTA EN EL DÍA</p>
        </form>
      </div>
    </main>
  )
}