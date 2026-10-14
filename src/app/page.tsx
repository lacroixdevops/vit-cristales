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
  {t:"Vidrio Float", sub:"BASE CRISTALINA", desc:"El vidrio base transparente de 4mm a 10mm. Ideal para espejos y frentes de placard.", uso:"Espejos, muebles, interiores", espesor:"4 a 10mm", color:"bg-[#E8F4FB] text-[#14598C]"},
  {t:"Vidrio Templado", sub:"SEGURIDAD 5X", desc:"5 veces más resistente que el float. Se rompe en granitos no cortantes. Norma IRAM 12556.", uso:"Mamparas, puertas, barandas", espesor:"8 / 10mm", color:"bg-[#FEF3C7] text-[#92400E]"},
  {t:"Laminado Seguridad", sub:"ANTI-CAÍDA", desc:"Dos vidrios unidos con lámina PVB. Si se rompe queda pegado, no cae al vacío.", uso:"Barandas, balcones, techos", espesor:"3+3 / 5+5", color:"bg-[#FEE2E2] text-[#991B1B]"},
  {t:"DVH", sub:"TÉRMICO Y ACÚSTICO", desc:"Doble vidriado con cámara de 12mm. Ahorra 40% energía y frena 32db de ruido.", uso:"Ventanas, oficinas", espesor:"4/12/4", color:"bg-[#DCFCE7] text-[#166534]"},
];

const obrasInicio = [
  {cat:"BARANDAS", t:"Baranda balcón B° Golf", sub:"Laminado 5+5 + Inox", img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"},
  {cat:"ESPEJOS", t:"Espejo biselado 2x1m", sub:"Biselado + LED", img:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"},
  {cat:"MAMPARAS FIJAS", t:"Mampara fija 120cm", sub:"Frameless 10mm", img:"https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop"},
  {cat:"BOX DE DUCHAS", t:"Box ducha en L", sub:"Corredero templado", img:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop"},
  {cat:"FRONTALES", t:"Frontal placard bronce", sub:"Espejado corredizo", img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop"},
  {cat:"BARANDAS", t:"Escalera interior", sub:"Flotante Inox 316L", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"},
];

const marcas = ["VASA", "BLINDEX®", "GUARDIAN GLASS", "SAINT-GOBAIN", "ALUAR", "AGC"];

export default function Inicio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => { if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" }); };

  return (
    <main className="bg-[#FEFEFE] text-zinc-900 overflow-x-hidden">
      {/* HERO CON IMAGEN DE FONDO */}
      {/* HERO CON IMAGEN DE FONDO - MAS VISIBLE */}
           {/* HERO - IMAGEN AL 90% VISIBLE */}
           {/* HERO - ENCOFRADO LINDO */}
            {/* HERO - ENCOFRADO LINDO - LIMPIO */}
      <section className="relative w-full min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden rounded-b-[32px] md:rounded-b-[40px]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1588253198250-d4c5be49f387?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="fondo vidrio"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent md:from-white/90 md:via-white/25 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent md:hidden"></div>
        </div>

        <div className="relative z-10 max-w-[1160px] mx-auto px-6 w-full py-10 md:py-0">
          <div className="max-w-[540px] bg-white rounded-[24px] md:rounded-[28px] p-7 md:p-9 shadow-[0_24px_80px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.04)] border border-white">
            <div className="inline-flex items-center gap-2.5 bg-[#F0F8FD] border border-[#ABD2E5]/40 rounded-full pl-1.5 pr-3.5 py-1 mb-5">
              <span className="w-6 h-6 bg-[#169EE3] rounded-full flex items-center justify-center text-white text-[10px]">✓</span>
              <p className="text-[9px] font-black tracking-[0.15em] text-[#144B6F]">TALLER PROPIO • INSTALACIÓN EN 48HS</p>
            </div>

            <h1 className="text-[38px] md:text-[56px] font-black leading-[0.9] tracking-[-0.04em] text-[#0F2F4A]">
              Vidrio que<br/>
              <span className="text-[#169EE3] relative">
                agranda
                <span className="absolute bottom-2 left-0 w-full h-[8px] bg-[#ABD2E5]/40 -z-10"></span>
              </span>
              <br/>tu casa.
            </h1>

            <p className="mt-4 text-[13px] leading-[1.65] text-zinc-600 max-w-[36ch]">
              Mamparas, puertas, barandas y oficinas en <b className="text-zinc-900">templado 10mm</b>. Medimos, fabricamos e instalamos en Río Cuarto sin obra.
            </p>

            <div className="mt-7 flex gap-3">
              <Link href="/contacto" className="flex-1 md:flex-none bg-[#0F2F4A] text-white rounded-full px-7 py-3.5 text-[11px] font-black tracking-wide text-center shadow-lg shadow-[#0F2F4A]/20 hover:bg-black transition">Cotizar por WhatsApp →</Link>
              <Link href="/obras" className="hidden sm:flex bg-white border border-zinc-200 rounded-full px-7 py-3.5 text-[11px] font-bold text-center hover:bg-zinc-50 transition items-center justify-center">Ver obras</Link>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-100 flex gap-5">
              <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[10px]">✓</div><p className="text-[10px] font-bold text-zinc-700">Templado 10mm</p></div>
              <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[10px]">✓</div><p className="text-[10px] font-bold text-zinc-700">Inox 316L</p></div>
              <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[10px]">✓</div><p className="text-[10px] font-bold text-zinc-700">Garantía 12m</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDRIOS */}
      <section className="max-w-[1160px] mx-auto px-6 py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4 mb-6 md:mb-8">
          <div>
            <p className="text-[9px] font-black tracking-[0.3em] text-[#169EE3] mb-2">¿CON QUÉ VIDRIO TRABAJAMOS?</p>
            <h2 className="text-[22px] md:text-[30px] font-black leading-[1.05] tracking-tight">No es lo mismo Float que Templado.<br/>Te explicamos para que elijas bien.</h2>
          </div>
          <p className="text-[12px] text-zinc-500 max-w-[32ch] leading-[1.5]">Usamos solo vidrio certificado IRAM. Cada tipo tiene una función: seguridad, anti-caída o térmico.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {vidrios.map(v=>(
            <div key={v.t} className="group bg-white border border-zinc-200 rounded-[20px] p-5 hover:border-zinc-900 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[8px] font-black px-2.5 py-1 rounded-full tracking-widest ${v.color}`}>{v.sub}</span>
                <span className="text-[10px] text-zinc-400 font-bold">{v.espesor}</span>
              </div>
              <h3 className="text-[14px] font-black">{v.t}</h3>
              <p className="text-[11px] text-zinc-600 mt-2 leading-[1.5] min-h-[44px]">{v.desc}</p>
              <div className="mt-4 pt-4 border-t border-zinc-100 flex justify-between items-center">
                <p className="text-[10px] font-bold text-zinc-900">✓ {v.uso}</p>
                <span className="text-[10px] group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OBRAS */}
      <section className="bg-[#242A32] text-white py-10 md:py-16">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 md:mb-8">
            <div>
              <p className="text-[9px] font-black tracking-[0.3em] text-[#ABD2E5] mb-2">OBRAS REALES EN RÍO CUARTO</p>
              <h2 className="text-[22px] md:text-[28px] font-black leading-[1.05]">Barandas, espejos,<br/>mamparas fijas, box de duchas y frontales.</h2>
            </div>
            <div className="flex gap-2 flex-wrap h-fit">
              {["BARANDAS","ESPEJOS","MAMPARAS FIJAS","BOX DUCHAS","FRONTALES"].map(c=><span key={c} className="bg-white/10 border border-white/10 rounded-full px-3 py-1 text-[8px] md:text-[9px] font-bold">{c}</span>)}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {obrasInicio.map((o,i)=>(
              <div key={i} className="group relative rounded-[20px] overflow-hidden h-[260px] md:h-[280px] bg-[#2E3440] border border-white/10">
                <img src={o.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90" alt={o.t}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-white text-zinc-900 rounded-full px-3 py-1 text-[8px] font-black tracking-widest">{o.cat}</div>
                <div className="absolute bottom-0 p-4"><p className="text-[13px] font-bold">{o.t}</p><p className="text-[10px] opacity-60 mt-1">{o.sub} • Templado 10mm</p></div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center"><Link href="/obras" className="bg-white text-zinc-900 rounded-full px-7 py-3 text-[11px] font-bold w-full md:w-auto text-center">Ver todas las obras →</Link></div>
        </div>
      </section>

      {/* CARRUSEL SERVICIOS */}
      <section className="bg-zinc-50 border-y border-zinc-100 py-8 md:py-10">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[14px] font-black">¿Qué querés hacer? →</h2>
            <div className="hidden md:flex gap-2">
              <button onClick={()=>scroll(-1)} className="w-8 h-8 rounded-full bg-white border">‹</button>
              <button onClick={()=>scroll(1)} className="w-8 h-8 rounded-full bg-zinc-900 text-white">›</button>
            </div>
          </div>
          <div ref={scrollRef} className="flex gap-3 overflow-x-auto snap-x scroll-smooth pb-2 scrollbar-hide" style={{scrollbarWidth:"none"}}>
            {servicios.map(s=>(
              <Link key={s.t} href="/obras" className="min-w-[72%] sm:min-w-[260px] snap-start bg-white rounded-[18px] p-2.5 border border-zinc-200">
                <div className="rounded-[12px] overflow-hidden h-[160px] md:h-[180px]"><img src={s.img} className="w-full h-full object-cover" alt=""/></div>
                <div className="px-1 pt-3 flex justify-between"><p className="text-[13px] font-bold">{s.t}</p><span className="text-[10px] bg-zinc-900 text-white rounded-full px-2.5 py-1">{s.sub}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="py-8 md:py-10 border-b border-zinc-100 bg-white overflow-hidden">
        <div className="max-w-[1160px] mx-auto px-6 flex justify-between items-center mb-4 md:mb-6">
          <p className="text-[9px] font-black tracking-[0.3em] text-zinc-400">MARCAS • CALIDAD IRAM</p>
          <p className="hidden md:block text-[10px] text-zinc-400">Stock permanente en Río Cuarto</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-8 md:gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap px-6">
            {marcas.concat(marcas).concat(marcas).map((m,i)=><span key={i} className="text-[16px] md:text-[20px] font-black tracking-[0.15em] text-zinc-200 hover:text-zinc-900 transition">{m}</span>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1160px] mx-auto px-6 py-8 md:py-12">
        <div className="relative overflow-hidden bg-[#0F2F4A] rounded-[24px] md:rounded-[28px] p-6 md:p-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center border border-white/10">
          <div className="absolute -top-24 -right-24 w-[300px] h-[300px] bg-[#169EE3]/20 rounded-full blur-[60px]"></div>
          <div className="relative z-10">
            <p className="text-[9px] font-black tracking-[0.3em] text-[#ABD2E5] mb-2">COTIZACIÓN EXPRESS</p>
            <h3 className="text-[20px] md:text-[26px] font-black text-white leading-[1.1]">¿Tenés medidas?<br/>Te cotizamos en <span className="text-[#ABD2E5]">2hs</span>.</h3>
            <p className="text-[11px] text-white/60 mt-2">Mandá foto + medidas por WhatsApp y te pasamos precio cerrado.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto">
            <Link href="/contacto" className="bg-white text-[#0F2F4A] rounded-full px-8 py-4 text-[11px] font-black tracking-widest hover:bg-[#ABD2E5] transition text-center">COTIZAR AHORA →</Link>
            <p className="text-[9px] text-white/40 text-center font-bold tracking-widest">RESPUESTA EN 2HS • RÍO CUARTO</p>
          </div>
        </div>
      </section>

      <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </main>
  )
}