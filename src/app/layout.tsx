import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#FEFEFE] text-zinc-900 antialiased">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');*{font-family:'Plus Jakarta Sans',sans-serif}`}</style>

        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#ABD2E5]/30">
          <div className="max-w-[1160px] mx-auto px-6 h-[64px] flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#144B6F] rounded-full flex items-center justify-center text-white font-black text-[11px]">V</div>
              <div>
                <h1 className="font-extrabold tracking-[0.1em] text-[11px] text-[#144B6F] leading-none">VIT CRISTALES</h1>
                <p className="text-[8px] tracking-widest text-[#169EE3] font-bold">La Propuesta Transparente</p>
              </div>
            </Link>
            <nav className="flex gap-5 text-[11px] font-bold text-[#144B6F]/60 items-center">
              <Link href="/" className="hover:text-[#144B6F]">Inicio</Link>
              <Link href="/obras" className="hover:text-[#144B6F] ">Obras</Link>
              <Link href="/quienes-somos" className="hover:text-[#144B6F]">Quienes Somos</Link>
              <Link href="/servicios" className="hover:text-[#144B6F]">Servicios</Link>
              <Link href="/contacto" className="bg-[#144B6F] text-white px-4 py-2 rounded-full hover:bg-[#0f2f4a]">Contacto</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-[#0F2F4A] text-white">
          <div className="max-w-[1160px] mx-auto px-6 py-14 grid md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0F2F4A] font-black text-[12px]">V</div>
                <div>
                  <p className="font-extrabold tracking-[0.12em] text-[11px] leading-none">VIT CRISTALES</p>
                  <p className="text-[8px] tracking-widest text-[#ABD2E5] font-bold mt-1">La Propuesta Transparente</p>
                </div>
              </div>
              <p className="text-[12px] leading-[1.6] text-white/60 max-w-[28ch]">Taller propio en Río Cuarto. Mamparas, puertas, barandas y oficinas en templado 10mm. Instalación sin polvo en 48hs.</p>
            </div>
            <div>
              <p className="text-[9px] font-black tracking-[0.3em] text-[#ABD2E5] mb-4">SERVICIOS</p>
              <ul className="space-y-2.5 text-[12px] text-white/70">
                <li>Barandas Inox 316L</li><li>Mamparas Frameless</li><li>Box de duchas</li><li>Espejos biselados</li><li>Frentes y oficinas</li>
              </ul>
            </div>
            <div>
              <p className="text-[9px] font-black tracking-[0.3em] text-[#ABD2E5] mb-4">MATERIALES</p>
              <ul className="space-y-2.5 text-[12px] text-white/70">
                <li>Float 4 a 10mm</li><li>Templado seguridad 5X</li><li>Laminado anti-caída</li><li>DVH térmico 40%</li>
              </ul>
            </div>
            <div>
              <p className="text-[9px] font-black tracking-[0.3em] text-[#ABD2E5] mb-4">CONTACTO</p>
              <p className="text-[12px] text-white/70 leading-[1.6]">Río Cuarto, Córdoba<br/>Lun a Vie 8 a 18hs</p>
              <Link href="/contacto" className="inline-block mt-4 bg-white text-[#0F2F4A] rounded-full px-5 py-2.5 text-[11px] font-black">Cotizar WhatsApp →</Link>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="max-w-[1160px] mx-auto px-6 py-4 flex justify-between text-[9px] font-bold tracking-widest text-white/30">
              <span>© 2026 VIT CRISTALES</span>
              <span>RÍO CUARTO • CÓRDOBA</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}