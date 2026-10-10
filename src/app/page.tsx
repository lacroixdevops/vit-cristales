"use client";
import Link from "next/link";
import { useRef } from "react";

const servicios = [
  {t:"Mamparas", sub:"Frameless 10mm", img:"https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop"},
  {t:"Puertas", sub:"Pivotantes", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"},
  {t:"Barandas", sub:"Inox 316L", img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"},
  {t:"Oficinas", sub:"Acústico 32db", img:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"},
  {t:"Espejos", sub:"Biselado + LED", img:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"},
];

const vidrios = [
  {t:"Vidrio Float", sub:"BASE", desc:"Transparente 4 a 10mm para espejos y frentes.", uso:"Espejos, muebles", espesor:"4 a 10mm"},
  {t:"Templado", sub:"SEGURIDAD 5X", desc:"5x más fuerte. Norma IRAM para mamparas y barandas.", uso:"Mamparas, puertas", espesor:"8 / 10mm"},
  {t:"Laminado", sub:"ANTI-CAÍDA", desc:"Dos vidrios + PVB. No cae si se rompe.", uso:"Barandas, techos", espesor:"3+3 / 5+5"},
  {t:"DVH", sub:"TÉRMICO", desc:"Doble vidriado cámara 12mm. Ahorra 40% energía.", uso:"Ventanas, oficinas", espesor:"4/12/4"},
];

const obras = [
  {cat:"BARANDAS", t:"Baranda balcón", img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"},
  {cat:"MAMPARAS FIJAS", t:"Mampara fija 120cm", img:"https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop"},
  {cat:"BOX DUCHAS", t:"Box en L", img:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop"},
  {cat:"ESPEJOS", t:"Espejo biselado", img:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"},
  {cat:"FRONTALES", t:"Frontal bronce", img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop"},
  {cat:"BARANDAS", t:"Escalera flotante", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"},
];

export default function Inicio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir:number) => { if(scrollRef.current) scrollRef.current.scrollBy({left: dir*280, behavior:"smooth"})};

  return (
    <main className="bg-white text-zinc-900">
      {/* HERO FOTO NUEVA VIDRIO */}
      <section className="max-w-[1160px] mx-auto px-6 pt-8 pb-10 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div>
          <div className="inline-flex gap-2 bg-[#E8F4FB] rounded-full px-3 py-1.5 mb-5"><span className="w-2 h-2 bg-[#169EE3] rounded-full animate-pulse"></span><p className="text-[9px] font-black tracking-widest text-[#14598C]">TALLER EN RÍO CUARTO • 48HS</p></div>
          <h1 className="text-[42px] md:text-[56px] font-black leading-[0.88] tracking-[-0.04em]">Vidrio que<br/><span className="text-[#169EE3]">agranda</span><br/>tu casa.</h1>
          <p className="mt-4 text-[13px] text-zinc-600 max-w-[38ch]">Mamparas, puertas, barandas y oficinas en templado 10mm.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/contacto" className="bg-zinc-900 text-white rounded-full px-6 py-3 text-[11px] font-bold">Cotizar WhatsApp →</Link>
            <Link href="/obras" className="bg-white border border-zinc-200 rounded-full px-6 py-3 text-[11px] font-bold">Ver obras</Link>
          </div>
        </div>
        <div className="rounded-[24px] overflow-hidden h-[440px] border border-zinc-200 bg-zinc-100">
          <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="mampara vidrio"/>
        </div>
      </section>

 
      {/* VIDRIOS */}
      <section className="max-w-[1160px] mx-auto px-6 py-14">
        <p className="text-[9px] font-black tracking-[0.3em] text-[#169EE3] mb-2">MATERIALES</p>
        <h2 className="text-[22px] font-black">Trabajamos con Float, Laminado, Templado y DVH.</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-3">
          {vidrios.map(v=><div key={v.t} className="bg-white border border-zinc-200 rounded-[16px] p-4"><div className="flex justify-between mb-2"><span className="bg-zinc-100 text-[8px] font-black px-2 py-1 rounded-full">{v.sub}</span><span className="text-[10px] text-zinc-400">{v.espesor}</span></div><h3 className="text-[13px] font-bold">{v.t}</h3><p className="text-[11px] text-zinc-600 mt-1">{v.desc}</p><p className="text-[10px] font-semibold mt-3">✓ {v.uso}</p></div>)}
        </div>
      </section>

      {/* OBRAS - BARANDAS, ESPEJOS, MAMPARAS FIJAS, BOX, FRONTALES */}
      <section className="bg-zinc-900 text-white py-14">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="flex justify-between items-end mb-6"><div><p className="text-[9px] font-black tracking-[0.3em] text-[#ABD2E5] mb-2">OBRAS REALES</p><h2 className="text-[22px] font-black leading-[1.1]">Barandas, espejos, mamparas fijas,<br/>box de duchas y frontales.</h2></div><Link href="/obras" className="hidden md:block bg-white text-zinc-900 rounded-full px-4 py-2 text-[10px] font-bold">Ver todo →</Link></div>
          <div className="grid md:grid-cols-3 gap-3">
            {obras.map((o,i)=><div key={i} className="relative rounded-[18px] overflow-hidden h-[260px] bg-zinc-800"><img src={o.img} className="w-full h-full object-cover opacity-80" alt=""/><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div><div className="absolute top-3 left-3 bg-white text-zinc-900 rounded-full px-3 py-1 text-[8px] font-black">{o.cat}</div><div className="absolute bottom-0 p-4"><p className="text-[13px] font-bold">{o.t}</p><p className="text-[10px] opacity-60">Templado 10mm • Río Cuarto</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="max-w-[1160px] mx-auto px-6 py-12"><div className="bg-[#169EE3] rounded-[20px] p-6 flex justify-between items-center"><p className="text-white text-[14px] font-bold">¿Tenés medidas? Te cotizo hoy.</p><Link href="/contacto" className="bg-white text-zinc-900 rounded-full px-5 py-2.5 text-[11px] font-bold">COTIZAR →</Link></div></section>
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </main>
  )
}