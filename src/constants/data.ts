export interface Diferencial { t: string; d: string; }
export interface LocalizacaoItem { l: string; t: string; d: string; }
export interface Casa { n: string; p: string; s: string; d: string[]; }

export const DIFERENCIAIS: Diferencial[] = [
  { t: "Lazer Completo", d: "Piscina, Playground, Cross Training e Pet Place para sua família em Parnamirim." },
  { t: "Segurança 24h", d: "Condomínio fechado com monitoramento, Alarme e Cerca Elétrica profissional." },
  { t: "Praticidade", d: "Localização estratégica em Rosa dos Ventos, perto de tudo o que você precisa." },
  { t: "Casas Modernas", d: "Arquitetura contemporânea com acabamento premium e alta valorização." }
];

export const LOCALIZACAO: LocalizacaoItem[] = [
  { l: "Super Show Biz", t: "01 min", d: "Supermecado" },
  { l: "UPA 24h Parnamirim", t: "04 min", d: "Saúde" },
  { l: "Praia de Ponta Negra", t: "30 min", d: "Lazer" },
  { l: "Natal Shopping", t: "25 min", d: "Conveniência" },
];

export const CASAS: Casa[] = [
  { n: "Casa Carnaúba", p: "R$ 270.000", s: "2 Quartos (Suíte Master) - 66m²", d: ["Acabamento Premium", "Pé direito elevado", "Ideal para financiamento MCMV"] },
  { n: "Casa Buriti", p: "R$ 300.000", s: "3 Quartos (Suíte e Flex Office) - 73m²", d: ["Arquitetura Moderna", "Maior área construída", "Espaço Gourmet integrado"] }
];