interface FeatureCardProps {
  titulo: string;
  descricao: string;
}

export function FeatureCard({ titulo, descricao }: FeatureCardProps) {
  return (
    <article className="p-10 rounded-[2rem] border-2 border-brand-primary text-center group hover:bg-brand-primary transition-all duration-500">
      <h3 className="text-2xl font-serif italic font-light text-brand-gold mb-4 group-hover:text-brand-gold transition-colors">
        {titulo}
      </h3>
      <p className="text-gray-500 text-sm font-light group-hover:text-gray-200">
        {descricao}
      </p>
    </article>
  );
}