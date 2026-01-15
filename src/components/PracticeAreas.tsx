import React from 'react';
import { Scale, Briefcase, Users, Building2, Gavel, HeartHandshake } from 'lucide-react';

const areas = [
  {
    icon: <Briefcase className="w-8 h-8 text-amber-500" />,
    title: "Derecho Corporativo",
    desc: "Fusiones, adquisiciones y reestructuraciones empresariales con visión estratégica."
  },
  {
    icon: <Gavel className="w-8 h-8 text-amber-500" />,
    title: "Derecho Penal",
    desc: "Defensa rigurosa en delitos de cuello blanco y litigios complejos."
  },
  {
    icon: <Users className="w-8 h-8 text-amber-500" />,
    title: "Derecho Familiar",
    desc: "Divorcios, custodias y herencias manejados con sensibilidad y firmeza."
  },
  {
    icon: <Building2 className="w-8 h-8 text-amber-500" />,
    title: "Bienes Raíces",
    desc: "Asesoría integral en transacciones inmobiliarias y desarrollo urbano."
  },
  {
    icon: <Scale className="w-8 h-8 text-amber-500" />,
    title: "Litigio Civil",
    desc: "Resolución de disputas contractuales y responsabilidad civil."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-amber-500" />,
    title: "Mediación",
    desc: "Soluciones alternativas de conflictos para evitar procesos judiciales largos."
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-3">Nuestras Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Excelencia en Cada Caso</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ofrecemos un enfoque multidisciplinario para resolver sus problemas legales más desafiantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="group glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 cursor-pointer border-t border-slate-800">
              <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 border border-slate-800 shadow-lg">
                {area.icon}
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{area.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;