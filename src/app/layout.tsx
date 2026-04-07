import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap", 
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: " Alameda das Palmeiras | Casas em Condomínio Fechado em Parnamirim",
  description: "More no melhor condomínio de Rosa dos Ventos, Parnamirim/RN. Casas de 2 e 3 quartos com lazer completo, segurança 24h e financiamento MCMV Faixa 3. Agende sua visita!",
  keywords: ["Casa a venda em Parnamirim","Casas em condomínio a venda em Parnamirim/RN" ,"Condomínio Fechado em Parnamirim/RN", "Casas em Rosa dos Ventos Parnamirim", "Condomínio Alameda das Palmeiras", "Minha Casa Minha Vida-Faixa 3 em Parnamirim", "Imóveis a venda em Parnamirim"],
  alternates: {
    canonical: "https://alameda-das-palmeiras.vercel.app/", 
  },
  
  openGraph: {
    title: "Alameda das Palmeiras | Exclusividade e Segurança em Parnamirim",
    description: "Casas modernas em condomínio fechado com área de lazer completa em Rosa dos Ventos.",
    url: "https://alameda-das-palmeiras.vercel.app/",
    siteName: "Alameda das Palmeiras",
    locale: "pt_BR",
    type: "website",
  },
  
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} scroll-smooth antialiased`}>
      <body className="bg-brand-primary text-white font-sans selection:bg-brand-gold selection:text-brand-primary">
        {children}
      </body>
    </html>
  );
}