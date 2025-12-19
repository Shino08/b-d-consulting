import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Experiencia Comprobada</h2>
            <p className="text-lg text-muted-foreground">
              Trayectoria sólida ejecutando proyectos de alta complejidad para las principales industrias del país.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Badge variant="secondary" className="text-sm px-4 py-1">PDVSA</Badge>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Badge variant="secondary" className="text-sm px-4 py-1">Petrocedeño</Badge>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Badge variant="secondary" className="text-sm px-4 py-1">Pequiven</Badge>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative border-l-2 border-secondary/20 ml-4 md:ml-12 space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div 
                className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent ring-4 ring-white"
                whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(255, 140, 0, 0.6)" }}
              />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <span className="text-accent font-bold font-mono text-lg">{project.year}</span>
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
              </div>
              
              <motion.div 
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-transparent hover:border-secondary/20 group"
                whileHover={{ y: -4 }}
              >
                <p className="font-semibold text-primary group-hover:text-secondary transition-colors mb-1">{project.client}</p>
                <p className="text-muted-foreground">{project.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
