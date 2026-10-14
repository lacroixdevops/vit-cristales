"use client";
import Link from "next/link";
import { useState } from "react";

const categorias = [
  {
    cat: "BARANDAS",
    items: [
      { t: "Balcón barrio Golf - Laminado 5+5", barrio: "Río Cuarto", imgs: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"] },
      { t: "Escalera flotante con Inox", barrio: "Las Higueras", imgs: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"] },
      { t: "Baranda balcón vidrio curvo", barrio: "B° Centro", imgs: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"] },
    ]
  },
  {
    cat: "ESPEJOS",
    items: [
      { t: "Espejo 2x1m biselado + LED", barrio: "B° Alberdi", imgs: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop"] },
      { t: "Espejo orgánico baño", barrio: "B° Castelli", imgs: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"] },
      { t: "Espejo vestidor XL sin marco", barrio: "B° Golf", imgs: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"] },
    ]
  },
  {
    cat: "MAMPARAS FIJAS",
    items: [
      { t: "Mampara fija 120cm - 10mm", barrio: "B° Centro", imgs: ["https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop"] },
      { t: "Mampara fija + puerta batiente", barrio: "B° Golf", imgs: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop"] },
      { t: "Mampara industrial negra", barrio: "B° Banda Norte", imgs: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop"] },
    ]
  },
  {
    cat: "BOX DE DUCHAS",
    items: [
      { t: "Box en L con corredera", barrio: "B° Banda Norte", imgs: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop"] },
      { t: "Box frontal 2 puertas", barrio: "B° Alberdi", imgs: ["https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop"] },
      { t: "Box plegable chico 80cm", barrio: "B° Castelli", imgs: ["https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop"] },
    ]
  },
  {
    cat: "FRONTALES",
    items: [
      { t: "Frontal placard bronce espejado", barrio: "B° Golf", imgs: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"] },
      { t: "Frontal vestidor transparente", barrio: "Río Cuarto", imgs: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop"] },
      { t: "Frontal alacena vidrio acanalado", barrio: "B° Centro", imgs: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"] },
    ]
  },
];

function CarouselCard({ t, barrio, imgs, cat }: { t: string, barrio: string, imgs: string[], cat: string }) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="group relative rounded-[18px] overflow-hidden h-[220px] md:h-[260px] border border-zinc-200 bg-zinc-100">
      <div className="w-full h-full relative">
        {imgs.map((img, i) => (
          <img key={i} src={img} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${i===idx? "opacity-100" : "opacity-0"}`} alt={t} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent pointer-events-none"></div>
      </div>
      <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between">
        <span className="bg-white/90 backdrop-blur rounded-full px-2.5 py-1 text-[7px] font-black tracking-widest">{cat}</span>
        <span className="bg-black/40 backdrop-blur text-white rounded-full px-2 py-1 text-[8px] font-bold">{idx+1}/{imgs.length}</span>
      </div>
      {imgs.length > 1 && (
        <>
          <button onClick={()=> setIdx((idx-1+imgs.length)%imgs.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-[12px] opacity-0 group-hover:opacity-100 transition">‹</button>
          <button onClick={()=> setIdx((idx+1)%imgs.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-[12px] opacity-0 group-hover:opacity-100 transition">›</button>
        </>
      )}
      <div className="absolute bottom-0 p-3.5 w-full">
        <div className="flex gap-1 mb-2">{imgs.map((_, i)=>(<div key={i} className={`h-[2px] rounded-full transition-all ${i===idx? "w-5 bg-white" : "w-2 bg-white/40"}`}></div>))}</div>
        <p className="text-white text-[12px] font-bold leading-[1.2]">{t}</p>
        <p className="text-white/60 text-[9px] mt-1">📍 {barrio} • 10mm</p>
      </div>
    </div>
  )
}

export default function ObrasPage() {
  const [filtro, setFiltro] = useState("TODOS");
  const lista = filtro === "TODOS"? categorias : categorias.filter(c => c.cat === filtro);

  return (
    <main className="bg-[#FEFEFE] text-zinc-900 overflow-x-hidden">
      {/* HEADER FIX - SIN SOLAPAR */}
      <section className="max-w-[1160px] mx-auto px-6 pt-8 md:pt-12">
        <p className="text-[10px] font-bold tracking-[0.28em] text-[#169EE3] mb-4">NUESTRO TRABAJO • RÍO CUARTO</p>

        <h1 className="font-black tracking-[-0.05em] text-[#111] flex flex-col gap-1">
          <span className="text-[30px] md:text-[44px] leading-[1.05]">Obras por categoría.</span>
          <span className="text-[30px] md:text-[44px] leading-[1.05] text-zinc-400 font-light">Todo templado 10mm IRAM.</span>
        </h1>

        <p className="text-[13px] md:text-[14px] text-zinc-500 mt-5 max-w-[48ch] leading-[1.6]">
          Barandas, espejos, mamparas fijas, box de duchas y frontales. Todas instaladas en Río Cuarto y zona en las últimas semanas.
        </p>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-3 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide" style={{scrollbarWidth:"none"}}>
          {["TODOS","BARANDAS","ESPEJOS","MAMPARAS FIJAS","BOX DE DUCHAS","FRONTALES"].map(f=>(
            <button key={f} onClick={()=>setFiltro(f)} className={`whitespace-nowrap rounded-full px-4 py-2 text-[10px] font-bold tracking-wide border transition ${filtro===f? "bg-[#0F2F4A] text-white border-[#0F2F4A]" : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-900 hover:text-zinc-900"}`}>{f}</button>
          ))}
        </div>
      </section>

      {lista.map((bloque) => (
        <section key={bloque.cat} className="max-w-[1160px] mx-auto px-6 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-[10px] font-black tracking-widest bg-[#111] text-white rounded-full px-3 py-1.5">{bloque.cat}</h2>
            <div className="h-px flex-1 bg-zinc-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {bloque.items.map((o, i) => (
              <CarouselCard key={i} t={o.t} barrio={o.barrio} imgs={o.imgs} cat={bloque.cat} />
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-[1160px] mx-auto px-6 pb-12">
        <div className="bg-[#0F2F4A] rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <div>
            <p className="text-[9px] font-black tracking-[0.3em] text-[#ABD2E5] mb-1">COTIZACIÓN EXPRESS</p>
            <h3 className="text-[18px] md:text-[22px] font-black text-white leading-[1.1]">¿Tenés medidas? Te cotizamos en 2hs.</h3>
          </div>
          <Link href="/contacto" className="bg-white text-[#0F2F4A] rounded-full px-6 py-3 text-[10px] font-black tracking-widest text-center w-full md:w-auto">COTIZAR AHORA →</Link>
        </div>
      </section>
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </main>
  );
}