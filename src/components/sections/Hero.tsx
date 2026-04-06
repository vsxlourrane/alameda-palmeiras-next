import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-primary py-24 lg:py-0">
      <div className="container mx-auto px-6 z-20 grid lg:grid-cols-2 gap-12 items-center">
        <header className="flex flex-col justify-center text-left max-w-2xl">
          <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-6">Lançamento em Parnamirim • RN</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white font-serif tracking-tighter mb-8 leading-tight">
            Viver bem é uma <br />
            <span className="text-brand-gold italic font-light font-playfair">escolha.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
            O <strong>Condomínio Alameda das Palmeiras</strong> é a união perfeita entre segurança e 
            bem-estar no coração de <strong>Rosa dos Ventos</strong> um dos melhores bairros de <strong>Parnamirim/RN</strong>.
          </p>
          <Button href="#agendar">Agendar Visita Agora</Button>
        </header>
        
        <div className="relative w-full aspect-[888/710] rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-zinc-900">
          <Image 
            src="/fachada-condominio-alameda-palmeiras-parnamirim (2).avif"
            alt="Fachada Alameda das Palmeiras em Parnamirim RN"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 888px"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-gold/5 blur-[150px] rounded-full z-0" />
    </section>
  );
}