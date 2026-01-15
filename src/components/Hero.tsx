import React from 'react';
import { ChevronRight, ShieldCheck, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
          alt="Law office background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-amber-500/30 text-amber-400 text-sm font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Defensa Legal de Élite desde 1995</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white">
            Justicia sin <br/>
            <span className="text-gold-gradient">Compromisos</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Protegemos su patrimonio, su libertad y su futuro. Nuestros abogados especialistas combinan experiencia, estrategia y dedicación absoluta para ganar los casos más complejos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
              Programar Cita
              <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#practice" className="px-8 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center justify-center">
              Ver Servicios
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
            <div>
              <h3 className="text-3xl font-bold text-white">98%</h3>
              <p className="text-sm text-slate-500">Casos Ganados</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-sm text-slate-500">Clientes Felices</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">25+</h3>
              <p className="text-sm text-slate-500">Años Exp.</p>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="hidden md:block relative">
           <div className="relative z-10 glass-panel p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Award className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Reconocimiento Nacional</h4>
                  <p className="text-slate-400 text-sm">Premiados como la firma del año por 3 años consecutivos.</p>
                </div>
              </div>
              <div className="h-1 w-full bg-slate-700/50 rounded-full mb-4 overflow-hidden">
                 <div className="h-full bg-amber-500 w-3/4 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Clock className="w-4 h-4 text-amber-500" />
                Atención 24/7 para emergencias penales
              </div>
           </div>
           
           {/* Decorative blurred shapes */}
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;