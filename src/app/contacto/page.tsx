export default function Contacto() {
  return (
    <main className="max-w-[1160px] mx-auto px-6 py-14 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-[30px] font-extrabold text-[#144B6F] leading-[1]">Contanos<br/>tu proyecto</h2>
        <p className="text-[12px] text-[#144B6F]/60 mt-4 max-w-[36ch]">Respondemos en el día con presupuesto y fecha de instalación. Estamos en Río Cuarto, servicio en toda Córdoba.</p>
        <div className="mt-8 space-y-2 text-[12px] text-[#144B6F]">
          <p>📍 Río Cuarto, Córdoba</p>
          <p>📲 +54 9 358 400-0000</p>
          <p>✉️ hola@vitcristales.com</p>
        </div>
        <div className="mt-8 bg-[#144B6F] text-white rounded-[16px] p-4">
          <p className="text-[11px] font-bold">¿Querés respuesta más rápida?</p>
          <p className="text-[11px] opacity-70 mt-1">Mandanos foto y medidas por WhatsApp y te cotizamos al instante.</p>
        </div>
      </div>

      <form className="bg-white rounded-[20px] p-5 border border-[#ABD2E5]/40 shadow-[0_8px_30px_rgba(20,75,111,0.06)] space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input placeholder="Nombre" className="bg-[#F8FBFD] rounded-full px-4 py-3 text-[11px] border border-[#ABD2E5]/30 outline-none" />
          <input placeholder="Teléfono" className="bg-[#F8FBFD] rounded-full px-4 py-3 text-[11px] border border-[#ABD2E5]/30 outline-none" />
        </div>
        <select className="bg-[#F8FBFD] rounded-full px-4 py-3 text-[11px] w-full border border-[#ABD2E5]/30 outline-none">
          <option>Mamparas de vidrio</option><option>Puertas de vidrio</option><option>Barandas de escalera</option><option>Cerramiento de oficinas</option><option>Espejos</option>
        </select>
        <textarea placeholder="Medidas, barrio, ¿obra nueva o remodelación?" rows={4} className="bg-[#F8FBFD] rounded-[16px] px-4 py-3 text-[11px] w-full border border-[#ABD2E5]/30 outline-none resize-none"></textarea>
        <button className="w-full bg-[#144B6F] text-white rounded-full py-3 text-[11px] font-bold">ENVIAR POR WHATSAPP →</button>
        <p className="text-[9px] text-center opacity-30">Formulario conectado a WhatsApp</p>
      </form>
    </main>
  )
}