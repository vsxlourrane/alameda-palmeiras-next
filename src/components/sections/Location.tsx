import Image from "next/image";
import { LOCALIZACAO } from "@/constants/data";

export function Location() {
  return (
    <section className="py-32 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-8 font-serif italic leading-tight">Localização <br/>Privilegiada.</h2>
          <p className="text-gray-500 mb-12 text-lg font-light leading-relaxed">
           O emprendimento <strong>Condomínio Alameda das Palmeiras</strong>, fica localizado no bairro <strong>Rosa dos Ventos em Parnamirim</strong>. Proposionado-lhe <strong> agilidade</strong> na vida diária, visto que fica próximo a serviços essenciais, garantindo <strong> valorização constante do seu imóvel</strong>.
          </p>
          <div className="space-y-6">
            {LOCALIZACAO.map((loc, i) => (
              <div key={i} className="flex justify-between border-b border-zinc-200 pb-4 group">
                <span className="font-bold text-brand-primary group-hover:text-brand-gold transition-colors">{loc.l}</span>
                <span className="text-brand-gold font-serif italic text-2xl">{loc.t}</span>
              </div>
            ))}
          </div>
        </div>
        <a href="https://maps.app.goo.gl/Nz9hrRH2nQ6q19SF7" target="_blank" rel="noopener noreferrer" className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group order-1 lg:order-2">
          <Image 
            src="/mapa-localizacao-alameda.avif" 
            alt="Localização do Condomínio Alameda das Palmeiras Parnamirim" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
            loading="lazy"
            sizes="(max-width: 768px) 90vw, 45vw"
            quality={65}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-primary/20 backdrop-blur-sm">
            <span className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold shadow-2xl">ABRIR MAPA</span>
          </div>
        </a>
      </div>
    </section>
  );
}