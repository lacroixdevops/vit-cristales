export default function QuienesSomos() {
  return (
    <main className="max-w-[1160px] mx-auto px-6 py-14">
      <p className="text-[9px] tracking-[0.3em] font-bold text-[#169EE3] mb-4">QUIENES SOMOS</p>
      <h2 className="text-[32px] md:text-[44px] font-extrabold leading-[0.95] text-[#144B6F] tracking-tight">Taller familiar.<br/><span className="font-light text-[#144B6F]/40">Terminaciones perfectas.</span></h2>

      <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-[20px] overflow-hidden h-[340px] bg-zinc-100"><img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt=""/></div>
        <div>
          <p className="text-[14px] leading-[1.7] text-[#144B6F]/70">Somos <b>Vit Cristales</b>, La Propuesta Transparente. Desde 2018 en Río Cuarto fabricamos e instalamos vidrio templado 10mm para hogares, comercios y empresas.</p>
          <p className="mt-4 text-[14px] leading-[1.7] text-[#144B6F]/70">No somos revendedores. Medimos, cortamos con CNC y montamos con nuestro equipo. Por eso no filtran, no quedan desparejos y el cliente nos recomienda.</p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#ABD2E5]/30 pt-6">
            <div><p className="text-[20px] font-extrabold text-[#144B6F]">+350</p><p className="text-[9px] font-bold opacity-40">OBRAS</p></div>
            <div><p className="text-[20px] font-extrabold text-[#144B6F]">6 AÑOS</p><p className="text-[9px] font-bold opacity-40">EXPERIENCIA</p></div>
            <div><p className="text-[20px] font-extrabold text-[#144B6F]">100%</p><p className="text-[9px] font-bold opacity-40">A MEDIDA</p></div>
          </div>
        </div>
      </div>
    </main>
  )
}