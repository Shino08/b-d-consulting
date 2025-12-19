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
    items: [
      "Implantación ISO-9000 y ISO-55000",
      "Planes de Inspección y Ensayo (PIE)",
      "Sistemas de gestión de calidad",
      "Auditorías internas y formación"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Servicios Especializados</h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos un portafolio integral de soluciones técnicas y gerenciales adaptadas a su industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm border px-6">
                <AccordionItem value={service.id} className="border-none">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-semibold text-primary">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-[4.5rem]">
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2 relative pl-4">
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-secondary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
