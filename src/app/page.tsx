import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Location } from "@/components/sections/Location";
import { Investment } from "@/components/sections/Investment";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-primary">
      <Hero />
      <About />
      <Location />
      <Investment />
      <ContactForm />

      <footer className="py-12 bg-black/40 text-center border-t border-white/5">
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em] font-bold italic font-sans">
          © 2025- <strong> Condomínio Alameda das Palmeiras</strong> • <strong>Rosa dos Ventos</strong> • <strong>Parnamirim/RN</strong>
        </p>
      </footer>
    </main>
  );
}