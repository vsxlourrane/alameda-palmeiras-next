import { Button } from "./Button";

interface PriceCardProps {
  titulo: string;
  preco: string;
  subtitulo: string;
  detalhes: string[];
  onSimulate: () => void;
}

export function PriceCard({ titulo, preco, subtitulo, detalhes, onSimulate }: PriceCardProps) {
  return (
    <div className="p-12 bg-brand-primary text-white rounded-[3rem] shadow-3xl border border-white/5 flex flex-col text-left hover:scale-[1.02] transition-transform duration-500">
      <h3 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">{titulo}</h3>
      <div className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-none">{preco}</div>
      <p className="text-brand-gold mb-10 italic text-lg font-medium">{subtitulo}</p>
      
      <ul className="space-y-4 mb-12 flex-grow border-t border-white/10 pt-8 font-light text-sm">
        {detalhes.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-400 italic">
            <span className="text-brand-gold text-xs">✓</span> {item}
          </li>
        ))}
      </ul>
      
     
      <Button onClick={onSimulate}>
        Simular Financiamento
      </Button>
    </div>
  );
}