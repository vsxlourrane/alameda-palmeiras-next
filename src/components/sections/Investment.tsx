import { CASAS } from "@/constants/data";
import { PriceCard } from "@/components/ui/PriceCard";

export function Investment() {
  return (
    <section id="investimento" className="py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-primary font-serif italic mb-20 leading-tight">O Investimento</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {CASAS.map((casa, i) => (
            <PriceCard 
              key={i}
              titulo={casa.n}
              preco={casa.p}
              subtitulo={casa.s}
              detalhes={casa.d}
            />
          ))}
        </div>
      </div>
    </section>
  );
}