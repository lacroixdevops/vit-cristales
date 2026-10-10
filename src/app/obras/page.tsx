"use client";
import Link from "next/link";

const categorias = [
  {
    cat: "BARANDAS",
    items: [
      { t: "Balcón barrio Golf - Laminado 5+5", barrio: "Río Cuarto", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop" },
      { t: "Escalera flotante con Inox", barrio: "Las Higueras", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  {
    cat: "ESPEJOS",
    items: [
      { t: "Espejo 2x1m biselado + LED", barrio: "B° Alberdi", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" },
      { t: "Espejo orgánico baño", barrio: "B° Castelli", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  {
    cat: "MAMPARAS FIJAS",
    items: [
      { t: "Mampara fija 120cm - 10mm", barrio: "B° Centro", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop" },
      { t: "Mampara fija + puerta batiente", barrio: "B° Golf", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  {
    cat: "BOX DE DUCHAS",
    items: [
      { t: "Box en L con corredera", barrio: "B° Banda Norte", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop" },
      { t: "Box frontal 2 puertas", barrio: "B° Alberdi", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  {
    cat: "FRONTALES",
    items: [
      { t: "Frontal placard bronce espejado", barrio: "B° Golf", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" },
      { t: "Frontal vestidor transparente", barrio: "Río Cuarto", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" },
    ]
  },
];

export default function ObrasPage() {
  return (
    <main className="bg-white text-zinc-900">
      <section className="max-w-[1160px] mx-auto px-6 pt-10 pb-8">
        <p className="text-[9px] font-black tracking-[0.3em] text-[#169EE3]">NUESTRO TRABAJO</p>
        <h1 className="text-[32px] md:text-[44px] font-black leading-[0.9] mt-2">Obras por categoría.<br/><span className="text-zinc-400 font-light">Todo templado 10mm IRAM.</span></h1>
        <p className="text-[12px] text-zinc-600 mt-3 max-w-[48ch]">Barandas, espejos, mamparas fijas, box de duchas y frontales. Todas instaladas en Río Cuarto y zona.</p>
      </section>

      {categorias.map((bloque) => (
        <section key={bloque.cat} className="max-w-[1160px] mx-auto px-6 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-[12px] font-black tracking-widest bg-zinc-900 text-white rounded-full px-3 py-1">{bloque.cat}</h2>
            <div className="h-px flex-1 bg-zinc-200"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {bloque.items.map((o, i) => (
              <div key={i} className="group relative rounded-[18px] overflow-hidden h-[300px] border border-zinc-200">
                <img src={o.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={o.t} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 p-4">
                  <p className="text-white text-[13px] font-bold">{o.t}</p>
                  <p className="text-white/60 text-[10px] mt-1">📍 {o.barrio} • 10mm templado</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-[1160px] mx-auto px-6 pb-20">
        <div className="bg-[#169EE3] rounded-[20px] p-6 flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="text-white text-[14px] font-bold">¿Viste lo que buscabas? Mandame foto de tu espacio.</p>
          <Link href="/contacto" className="bg-white text-zinc-900 rounded-full px-6 py-3 text-[11px] font-bold">Pedir presupuesto →</Link>
        </div>
      </section>
    </main>
  );
}