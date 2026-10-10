import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#F8FBFD] text-zinc-900 antialiased">
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
            <nav className="flex gap-5 text-[11px] font-bold text-[#144B6F]/60">
              <Link href="/" className="hover:text-[#144B6F]">Inicio</Link>
              <Link href="/quienes-somos" className="hover:text-[#144B6F]">Quienes Somos</Link>
              <Link href="/servicios" className="hover:text-[#144B6F]">Servicios</Link>
              <Link href="/contacto" className="bg-[#144B6F] text-white px-4 py-2 rounded-full hover:bg-[#0f2f4a]!text-white">Contacto</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="max-w-[1160px] mx-auto px-6 py-8 border-t border-[#ABD2E5]/20 flex justify-between text-[9px] font-bold tracking-widest text-[#144B6F]/30">
          <span>© 2026 VIT CRISTALES • La Propuesta Transparente</span>
          <span>RÍO CUARTO • CÓRDOBA</span>
        </footer>
      </body>
    </html>
  );
}