import React from 'react';

const lawyers = [
  {
    name: "Dr. Roberto Silva",
    role: "Socio Fundador",
    specialty: "Derecho Penal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Lic. Elena Mendoza",
    role: "Socia Senior",
    specialty: "Derecho Corporativo",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Carlos Ruiz",
    role: "Asociado Senior",
    specialty: "Litigio Civil",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-3">Nuestro Equipo</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Mentes Brillantes a su Servicio</h3>
            <p className="text-slate-400">
              Un equipo de abogados reconocidos por su integridad y resultados excepcionales.
            </p>
          </div>
          <button className="text-amber-500 border-b border-amber-500 pb-1 hover:text-amber-400 transition-colors">
            Ver todo el equipo &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {lawyers.map((lawyer, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
              <img 
                src={lawyer.image} 
                alt={lawyer.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-amber-500 text-sm font-medium mb-1">{lawyer.specialty}</p>
                <h4 className="text-2xl font-bold text-white mb-2">{lawyer.name}</h4>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {lawyer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;