const servicios = [
  {id:"mamparas", t:"Mamparas de vidrio", d:"Frameless, corredera y batiente. Vidrio 10mm templado con cierre magnético.", tag:"BAÑO"},
  {id:"puertas", t:"Puertas de vidrio", d:"Pivotantes y batientes con herrajes inox y cierre suave. Para interior.", tag:"INTERIOR"},
  {id:"barandas", t:"Barandas de escalera", d:"Botones inox 316 + vidrio laminado. Seguridad certificada para escaleras y balcones.", tag:"SEGURIDAD"},
  {id:"oficinas", t:"Cerramiento de oficinas", d:"Divisiones sin marco, acústicas 32db. Perfilería negra minimalista.", tag:"CORPORATIVO"},
  {id:"espejos", t:"Espejos a medida", d:"Float 4mm/5mm, biselado, con luz LED o pegado invisible.", tag:"DECOR"},
];

export default function Servicios() {
  return (
    <main className="max-w-[1160px] mx-auto px-6 py-14">
      <h2 className="text-[30px] font-extrabold text-[#144B6F] tracking-tight">Servicios</h2>
      <p className="text-[12px] text-[#144B6F]/50 mt-2">Todo en vidrio templado 10mm con instalación propia.</p>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {servicios.map(s=>(
          <div key={s.id} className="bg-white rounded-[20px] p-5 border border-[#ABD2E5]/30 shadow-[0_8px_30px_rgba(20,75,111,0.06)] hover:-translate-y-1 transition">
            <div className="flex justify-between items-start">
              <span className="bg-[#F0F7FB] text-[#169EE3] rounded-full px-3 py-1 text-[8px] font-bold tracking-widest">{s.tag}</span>
              <span className="w-7 h-7 rounded-full bg-[#144B6F] text-white flex items-center justify-center text-[10px]">↗</span>
            </div>
            <h3 className="text-[16px] font-bold text-[#144B6F] mt-4">{s.t}</h3>
            <p className="text-[12px] text-[#144B6F]/60 mt-2 leading-[1.5]">{s.d}</p>
          </div>
        ))}
      </div>
    </main>
  )
}