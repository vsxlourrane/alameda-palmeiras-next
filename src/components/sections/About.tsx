import Image from "next/image";
import { DIFERENCIAIS } from "@/constants/data";

export function About() {
  return (
    <section className="py-32 bg-white text-brand-primary rounded-t-[4rem] relative z-30 -mt-12 border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif italic text-brand-primary leading-tight">A Alma do Projeto</h2>
            <p className="text-gray-600 text-xl font-light leading-relaxed">
              Uma experiência sensorial para quem busca <strong>bem-estar</strong>,<strong>exclusividade</strong> e <strong>conforto</strong>. Arquitetura contemporânea e alinhamento às tendências mundiais o <strong>Alameda das Palmeiras</strong> revoluciona o <strong> mercado imobiliário</strong> de <strong>Parnamirim</strong>.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="/alma-do-projeto-detalhe.avif" 
              alt="Área de lazer do Condomínio Alameda das Palmeiras" 
              fill 
              className="object-cover" 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFERENCIAIS.map((item, idx) => (
            <article key={idx} className="p-10 rounded-[2rem] border-2 border-brand-primary text-center group hover:bg-brand-primary transition-all duration-500">
              <h3 className="text-2xl font-serif italic font-light text-brand-gold mb-4 group-hover:text-brand-gold transition-colors">{item.t}</h3>
              <p className="text-gray-500 text-sm font-light group-hover:text-gray-200">{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}