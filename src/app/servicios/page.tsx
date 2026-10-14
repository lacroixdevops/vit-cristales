"use client";
import Link from "next/link";

const servicios = [
  {id:"mamparas", t:"Mamparas de ducha", d:"Fijas, correderas y batientes. 10mm templado, cierre magnético y burletes siliconados.", tag:"BAÑO TOP", icon:"🚿"},
  {id:"puertas", t:"Puertas de vidrio", d:"Pivotantes y batientes para interior. Herrajes inox 316, cierre suave y manijones premium.", tag:"INTERIOR", icon:"🚪"},
  {id:"barandas", t:"Barandas de escalera y balcón", d:"Sistema con botones inox + vidrio laminado 5+5. Seguridad certificada.", tag:"SEGURIDAD", icon:"🪜"},
  {id:"oficinas", t:"Oficinas y divisiones", d:"Cerramientos sin marco, acústicos 32db. Perfilería negra minimalista para tu local.", tag:"CORPORATIVO", icon:"🏢"},
  {id:"ventanas", t:"Colocación en ventanas", d:"Vamos a domicilio. Sellado profesional sin filtraciones. Reposición por rotura.", tag:"A DOMICILIO", icon:"🪟"},
  {id:"paños", t:"Paños de vidrio y DVH", d:"Corte a medida en fábrica. Float, laminado, templado y DVH. Entrega en obra.", tag:"FABRICACIÓN", icon:"⬜"},
  {id:"venta", t:"Venta de vidrio en fábrica", d:"Comprá retirado en nuestra planta. Precio directo de fábrica, sin intermediarios.", tag:"DIRECTO", icon:"🏭"},
  {id:"espejos", t:"Espejos a medida", d:"4mm/5mm, biselado, orgánico, con luz LED o pegado invisible. Colocación incluida.", tag:"DECOR", icon:"🪞"},
  {id:"plataforma", t:"Alquiler plataforma eléctrica", d:"Plataforma tijera eléctrica para trabajos en altura. Con operador. Para vidrieros y constructoras.", tag:"SERVICIO", icon:"🏗️"},
  {id:"mantenimiento", t:"Mantenimiento y service", d:"Service de duchas que pierden, puertas desalineadas, cambio de rueditas, burletes y sellados.", tag:"POST VENTA", icon:"🔧"},
];

export default function Servicios() {
  return (
    <main className="bg-[#FEFEFE] text-zinc-900 overflow-x-hidden">
      <section className="max-w-[1160px] mx-auto px-6 pt-8 md:pt-14 pb-6">
        <p className="text-[10px] font-bold tracking-[0.28em] text-[#169EE3] mb-4">QUÉ HACEMOS • TALLER PROPIO</p>
        <h1 className="font-black tracking-[-0.05em] text-[#111] flex flex-col gap-1">
          <span className="text-[30px] md:text-[46px] leading-[1.05]">Todo en vidrio.</span>
          <span className="text-[30px] md:text-[46px] leading-[1.05] text-zinc-400 font-light">De la fábrica a tu casa.</span>
        </h1>
        <p className="text-[13px] md:text-[14px] text-zinc-500 mt-5 max-w-[56ch] leading-[1.6]">
          No solo vendemos. Medimos, fabricamos, colocamos a domicilio, vendemos retirado en fábrica y te damos mantenimiento. Con plataforma propia.
        </p>
      </section>

      <section className="max-w-[1160px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {servicios.map(s=>(
            <div key={s.id} className="group bg-white rounded-[20px] p-5 border border-zinc-200 hover:border-[#0F2F4A]/20 hover:shadow-[0_12px_40px_rgba(15,47,74,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[180px]">
              <div>
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-[16px] group-hover:bg-[#0F2F4A] group-hover:text-white transition">{s.icon}</div>
                  <span className="bg-[#F0F8FD] text-[#169EE3] border border-[#ABD2E5]/30 rounded-full px-3 py-1 text-[8px] font-black tracking-widest">{s.tag}</span>
                </div>
                <h3 className="text-[14px] md:text-[15px] font-black text-[#0F2F4A] mt-4 leading-[1.2]">{s.t}</h3>
                <p className="text-[11.5px] text-zinc-500 mt-2 leading-[1.5]">{s.d}</p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold tracking-wide text-[#0F2F4A]/40 group-hover:text-[#169EE3] transition">
                <span>Ver detalles</span><span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUE DIFERENCIAL */}
      <section className="max-w-[1160px] mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-3">
          <div className="bg-[#0F2F4A] rounded-[20px] p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-[#169EE3]/20 rounded-full blur-[40px]"></div>
            <p className="text-[9px] font-black tracking-[0.3em] text-[#ABD2E5] mb-3 relative z-10">¿POR QUÉ VIT ES DISTINTO?</p>
            <h3 className="text-[18px] md:text-[20px] font-black leading-[1.2] relative z-10">Vendemos retirado, colocamos a domicilio y te alquilamos la plataforma.</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 relative z-10">
              <div className="bg-white/10 rounded-[12px] p-3"><p className="text-[11px] font-bold">✓ Venta en fábrica</p><p className="text-[10px] text-white/50 mt-1">Precio sin intermediario</p></div>
              <div className="bg-white/10 rounded-[12px] p-3"><p className="text-[11px] font-bold">✓ Colocación a domicilio</p><p className="text-[10px] text-white/50 mt-1">Río Cuarto y zona</p></div>
              <div className="bg-white/10 rounded-[12px] p-3"><p className="text-[11px] font-bold">✓ Plataforma eléctrica</p><p className="text-[10px] text-white/50 mt-1">Para altura, con operador</p></div>
              <div className="bg-white/10 rounded-[12px] p-3"><p className="text-[11px] font-bold">✓ Service post-venta</p><p className="text-[10px] text-white/50 mt-1">Duchas y puertas</p></div>
            </div>
          </div>
          <div className="bg-zinc-50 border border-zinc-200 rounded-[20px] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-black tracking-widest">¿TENÉS MEDIDAS?</p>
              <p className="text-[13px] text-zinc-600 mt-2 leading-[1.5]">Mandá foto de tu ventana, ducha o puerta por WhatsApp y te cotizamos en el día con precio cerrado.</p>
            </div>
            <Link href="/contacto" className="mt-6 bg-[#0F2F4A] text-white rounded-full px-6 py-3.5 text-[11px] font-black tracking-widest text-center hover:bg-black transition">COTIZAR POR WHATSAPP →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}