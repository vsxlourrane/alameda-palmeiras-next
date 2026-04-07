"use client";

import React, { useCallback } from "react";

export function ContactForm() {
  const handleWhatsApp = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const dataV = formData.get("data") as string;
    const horaV = formData.get("hora") as string;
    
    const fone = "5584991920773"; 
    
    
    const dataFormatada = dataV?.split('-').reverse().join('/');
    
    
    const msg = `Olá! Meu nome é ${nome} (${email}). Gostaria de agendar uma visita ao Alameda das Palmeiras para o dia ${dataFormatada} às ${horaV}.`;
    
    window.open(`https://wa.me/${fone}?text=${encodeURIComponent(msg)}`, "_blank");
  }, []);

  return (
    <section id="agendar" className="py-32 bg-brand-primary relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif italic leading-tight">
          Seu novo lar <br/> 
          <span className="text-brand-gold text-playfair">em Parnamirim.</span>
        </h2>
        
        <form onSubmit={handleWhatsApp} className="grid gap-6 text-left bg-white/5 p-8 md:p-16 rounded-[4rem] border border-white/10 backdrop-blur-xl shadow-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            
            
            <div className="flex flex-col">
              <label htmlFor="nome" className="sr-only">Nome Completo</label>
              <input 
                id="nome"
                required 
                name="nome" 
                type="text" 
                placeholder="Nome Completo" 
                className="p-5 bg-white/10 border border-white/10 rounded-2xl text-white outline-none focus:border-brand-gold transition-all placeholder:text-gray-400" 
              />
            </div>

            
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">Seu melhor e-mail</label>
              <input 
                id="email"
                required 
                name="email" 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="p-5 bg-white/10 border border-white/10 rounded-2xl text-white outline-none focus:border-brand-gold transition-all placeholder:text-gray-400" 
              />
            </div>

            
            <div className="space-y-2">
              <label htmlFor="data-visita" className="text-[10px] text-brand-gold font-bold uppercase ml-2 tracking-widest">
                Data da Visita
              </label>
              <input 
                id="data-visita"
                required 
                name="data" 
                type="date" 
                className="w-full p-5 bg-white/10 border border-white/10 rounded-2xl text-white [color-scheme:dark] outline-none focus:border-brand-gold transition-all" 
              />
            </div>

       
            <div className="space-y-2">
              <label htmlFor="hora-visita" className="text-[10px] text-brand-gold font-bold uppercase ml-2 tracking-widest">
                Melhor Horário
              </label>
              <input 
                id="hora-visita"
                required 
                name="hora" 
                type="time" 
                className="w-full p-5 bg-white/10 border border-white/10 rounded-2xl text-white [color-scheme:dark] outline-none focus:border-brand-gold transition-all" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-brand-gold text-brand-primary font-black py-7 rounded-2xl hover:bg-white hover:text-brand-primary transition-all duration-500 uppercase tracking-widest text-sm shadow-2xl mt-4"
          >
            Agendar Agora no WhatsApp
          </button>
        </form>
      </div>
      
      
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full z-0 pointer-events-none" />
    </section>
  );
}