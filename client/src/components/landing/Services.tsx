import { 
  Building2, 
  Calculator, 
  DraftingCompass, 
  Wrench, 
  Search, 
  ShieldAlert, 
  Monitor, 
  Award 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const services = [
  {
    id: "ae",
    icon: Building2,
    title: "Asesoramiento Empresarial",
    color: "from-blue-500 to-blue-600",
    items: [
      "Informes para toma de decisiones técnicas y financieras",
      "Elaboración de avalúos y anteproyectos",
      "Tramitación de permisos",
      "Planes estratégicos empresariales",
      "Diseño de estructuras organizativas",
      "Manuales de organización y procesos"
    ]
  },
  {
    id: "ic",
    icon: Calculator,
    title: "Ingeniería de Costos",
    color: "from-purple-500 to-purple-600",
    items: [
      "Análisis de precios unitarios y presupuestos",
      "Documentación técnica y legal para ofertas",
      "Estimados de costos según necesidad del proyecto",
      "Control de costos y gestión financiera de obras"
    ]
  },
  {
    id: "ip",
    icon: DraftingCompass,
    title: "Ingeniería de Proyectos",
    color: "from-orange-500 to-orange-600",
    items: [
      "Gestión de proyectos (Visualización a Puesta en Marcha)",
      "Ingeniería conceptual, básica y de detalles",
      "Análisis CAD/CAE y especificaciones técnicas",
      "Proyectos civiles, mecánicos, eléctricos",
      "Análisis de factibilidad y constructibilidad",
      "Determinación del grado de definición (PDRI)"
    ]
  },
  {
    id: "conf",
    icon: Wrench,
    title: "Confiabilidad y Mantenimiento",
    color: "from-red-500 to-red-600",
    items: [
      "Análisis de Modos y Efectos de Falla (AMEF)",
      "Análisis de Criticidad (AC)",
      "Inspección basada en riesgo (IBR)",
      "Análisis de Causa Raíz (ACR)",
      "Auditoría a planificación operativa"
    ]
  },
  {
    id: "end",
    icon: Search,
    title: "Inspección y Ensayos No Destructivos",
    color: "from-green-500 to-green-600",
    items: [
      "Inspección Ultrasónica (UT) y Radiografía (RT)",
      "Partículas Magnéticas (MT) y Líquidos Penetrantes (PT)",
      "Inspección Visual (VT) y Termografía (IRT)",
      "Pruebas de Fuga (LT) y Emisión Acústica (AE)",
      "Sectores: Petróleo, Gas, Energía, Manufactura"
    ]
  },
  {
    id: "risk",
    icon: ShieldAlert,
    title: "Ingeniería de Riesgos",
    color: "from-yellow-500 to-yellow-600",
    items: [
      "Estudios HAZOP y Sistemas SIL",
      "Impacto ambiental y cumplimiento legal SHA",
      "Planes específicos de seguridad (PESHA)",
      "Análisis de Riesgos Operacional (ARO)"
    ]
  },
  {
    id: "sys",
    icon: Monitor,
    title: "Sistemas y Computación",
    color: "from-teal-500 to-teal-600",
    items: [
      "Consultoría en sistemas de información",
      "Soporte técnico y seguridad informática",
      "Desarrollo de software de gestión",
      "Sistemas para gestión de activos"
    ]
  },
  {
    id: "qa",
    icon: Award,
    title: "Calidad y Normalización",
    color: "from-pink-500 to-pink-600",
    items: [
      "Implantación ISO-9000 y ISO-55000",
      "Planes de Inspección y Ensayo (PIE)",
      "Sistemas de gestión de calidad",
      "Auditorías internas y formación"
    ]
  }
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -mr-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Servicios Especializados</h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos un portafolio integral de soluciones técnicas y gerenciales adaptadas a su industria.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="service-card-hover"
            >
              <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-border hover:border-secondary/30 overflow-hidden transition-all px-6">
                <AccordionItem value={service.id} className="border-none">
                  <AccordionTrigger className="hover:no-underline py-6 group">
                    <div className="flex items-center gap-4 text-left">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white shrink-0 group-hover:shadow-lg group-hover:scale-110 transition-all`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-[4.5rem] animate-in fade-in slide-in-from-top-2">
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="text-muted-foreground flex items-start gap-2 relative pl-4 group hover:text-secondary transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className={`absolute left-0 top-2 w-1.5 h-1.5 bg-secondary rounded-full group-hover:bg-accent group-hover:scale-150 transition-all`} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
