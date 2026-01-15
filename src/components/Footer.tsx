import React from 'react';
import { Scale, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-amber-500 rounded-md">
                <Scale className="text-slate-900 h-5 w-5" />
              </div>
              <span className="text-xl font-serif font-bold tracking-wide text-white">
                LEX <span className="text-amber-500">AETERNA</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Defendiendo sus derechos con integridad, excelencia y resultados probados desde hace más de dos décadas.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-amber-500 hover:bg-slate-800 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Áreas de Práctica', 'Equipo', 'Blog Legal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legales</h4>
            <ul className="space-y-3">
              {['Aviso de Privacidad', 'Términos de Uso', 'Confidencialidad'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Lex Aeterna Legal S.C. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-sm">
            Diseñado para la excelencia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;