import { Badge } from "@/components/ui/badge";

const projects = [
  {
    year: "2024",
    title: "Ingeniería de sellos mecánicos & Variadores de frecuencia",
    client: "Petrocedeño",
    desc: "Mejorador de crudo - Ingeniería especializada para bombas centrífugas y PCP (100-1200 HP)."
  },
  {
    year: "2024",
    title: "Ingeniería de Detalles Taller Industrial",
    client: "Corporación B&D",
    desc: "Desarrollo completo de ingeniería de detalles para construcción en Paraguaná."
  },
  {
    year: "2023-24",
    title: "Reactivación Gabarra Orgullo del Delta",
    client: "PDVSA Petrowarao",
    desc: "Recuperación de confiabilidad operativa e instalación de generadores eléctricos en Campo Pedernales."
  },
  {
    year: "2022-23",
    title: "Ingeniería Conceptual Planta de Biomasa",
    client: "Aserradero Dismak",
    desc: "Estudios conceptuales para planta de generación energética basada en biomasa."
  },
  {
    year: "2022",
    title: "Análisis Causa Raíz (ACR)",
    client: "Pequiven / Fertinitro",
    desc: "Investigación técnica y análisis de fallas en múltiples proyectos críticos."
  },
  {
    year: "2022",
    title: "Asistencia Técnica Arranque de Plantas",
    client: "Pequiven",
    desc: "Soporte especializado en arranque de plantas de Urea, Amoniaco y Servicios Industriales II (Complejo Hugo Chávez)."
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Experiencia Comprobada</h2>
            <p className="text-lg text-muted-foreground">
              Trayectoria sólida ejecutando proyectos de alta complejidad para las principales industrias del país.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            <Badge variant="secondary" className="text-sm px-4 py-1">PDVSA</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-1">Petrocedeño</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-1">Pequiven</Badge>
          </div>
        </div>

        <div className="relative border-l-2 border-primary/10 ml-4 md:ml-12 space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-secondary ring-4 ring-white" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <span className="text-secondary font-bold font-mono text-lg">{project.year}</span>
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <p className="font-semibold text-primary mb-1">{project.client}</p>
                <p className="text-muted-foreground">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
