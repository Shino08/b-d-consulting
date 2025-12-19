export function Divisions() {
  const divisions = [
    { name: "b&d Consulting", desc: "Consultoría e Ingeniería Especializada" },
    { name: "b&Maintenance", desc: "Gestión de Mantenimiento y Confiabilidad" },
    { name: "b&Commerce", desc: "Suministros y Soluciones Comerciales" },
    { name: "b&Wood", desc: "Proyectos Industriales Madereros" },
    { name: "Btech", desc: "Business Technology & Systems" },
  ];

  return (
    <section id="divisions" className="py-24 bg-primary text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestras Divisiones</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {divisions.map((div) => (
            <div key={div.name} className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                <span className="font-display font-bold text-xl text-center px-2">{div.name.split(' ')[0]}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{div.name}</h3>
              <p className="text-sm text-white/70">{div.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
