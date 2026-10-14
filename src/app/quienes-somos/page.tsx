"use client";
import Link from "next/link";

export default function QuienesSomos() {
  return (
    <main className="bg-[#FEFEFE] text-zinc-900 overflow-x-hidden">
      {/* HERO */}
      <section className="max-w-[1160px] mx-auto px-6 pt-10 md:pt-16 pb-8 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div>
          <p className="text-[9px] font-black tracking-[0.3em] text-[#169EE3] mb-4">QUIENES SOMOS • RÍO CUARTO</p>
          <h1 className="text-[36px] md:text-[52px] font-black leading-[0.9] tracking-[-0.04em] text-[#0F2F4A]">
            Taller propio,<br/>
            <span className="text-[#169EE3]">sin intermediarios.</span>
          </h1>
          <p className="mt-5 text-[13px] md:text-[14px] leading-[1.7] text-zinc-600 max-w-[42ch]">
            Somos <b className="text-zinc-900">VIT Cristales</b>. Hace 25 años fabricamos e instalamos vidrio templado en Río Cuarto.
            Medimos en tu casa, cortamos en nuestro taller y colocamos en 48hs. Sin polvo, sin obra, sin vueltas.
          </p>
          <div className="mt-6 flex gap-3">
            <div className="bg-[#F0F8FD] border border-[#ABD2E5]/30 rounded-full px-4 py-2 text-[10px] font-bold">✓ 12 años en Río Cuarto</div>
          </div>
        </div>
        <div className="rounded-[24px] md:rounded-[28px] overflow-hidden h-[360px] md:h-[420px] bg-zinc-100 border border-zinc-200 relative">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="taller vidrio"/>
          <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur rounded-[16px] p-4 flex justify-between items-center">
            <div>
              <p className="text-[11px] font-black text-[#0F2F4A]">VIT TALLER</p>
              <p className="text-[10px] text-zinc-500">Corte CNC • Templado • Laminado</p>
            </div>
            <span className="w-8 h-8 bg-[#0F2F4A] text-white rounded-full flex items-center justify-center text-[12px]">✓</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-[1160px] mx-auto px-6 py-8">
        <div className="bg-[#0F2F4A] rounded-[24px] p-6 md:p-8 grid grid-cols-3 gap-4 md:gap-8 text-white">
          <div className="text-center md:text-left"><p className="text-[28px] md:text-[36px] font-black">+850</p><p className="text-[9px] tracking-widest font-bold text-white/50">OBRAS ENTREGADAS</p></div>
          <div className="text-center md:text-left border-x border-white/10"><p className="text-[28px] md:text-[36px] font-black">48hs</p><p className="text-[9px] tracking-widest font-bold text-white/50">INSTALACIÓN PROMEDIO</p></div>
          <div className="text-center md:text-left"><p className="text-[28px] md:text-[36px] font-black">12m</p><p className="text-[9px] tracking-widest font-bold text-white/50">GARANTÍA ESCRITA</p></div>
        </div>
      </section>

      {/* POR QUE VIT */}
      <section className="max-w-[1160px] mx-auto px-6 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[9px] font-black tracking-[0.3em] text-[#169EE3] mb-3">¿POR QUÉ VIT?</p>
            <h2 className="text-[24px] md:text-[32px] font-black leading-[1.1] tracking-tight">No somos revendedores.<br/>Somos vidrieros.</h2>
            <p className="mt-4 text-[12px] leading-[1.7] text-zinc-600 max-w-[40ch]">La mayoría compra y revende. Nosotros tenemos máquina, horno y gente. Eso se nota en la terminación y en el precio.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {t:"Medición sin cargo", d:"Vamos a tu casa en Río Cuarto y zona, medimos y te asesoramos en el momento."},
              {t:"Fabricación propia", d:"Templamos y laminamos en taller. No dependemos de terceros."},
              {t:"Instalación sin polvo", d:"Sistema en seco, sin obra. En 3 horas te dejamos todo colocado."},
              {t:"Material certificado", d:"Trabajamos VASA, Blindex, Guardian. Todo con sello IRAM."},
            ].map(c=>(
              <div key={c.t} className="bg-white border border-zinc-200 rounded-[18px] p-5">
                <div className="w-8 h-8 bg-[#0F2F4A] rounded-full flex items-center justify-center text-white text-[11px] mb-3">✓</div>
                <p className="text-[13px] font-black">{c.t}</p>
                <p className="text-[11px] text-zinc-600 mt-1.5 leading-[1.5]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1160px] mx-auto px-6 pb-12">
        <div className="bg-zinc-50 border border-zinc-100 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row justify-between gap-4 items-center">
          <div>
            <p className="text-[13px] font-bold">¿Querés conocer el taller?</p>
            <p className="text-[11px] text-zinc-500 mt-1">Estamos en Río Cuarto. Pasá sin turno de Lun a Vie 8 a 18hs.</p>
          </div>
          <Link href="/contacto" className="bg-[#0F2F4A] text-white rounded-full px-6 py-3 text-[11px] font-bold w-full md:w-auto text-center">Coordinar visita →</Link>
        </div>
      </section>
    </main>
  )
}