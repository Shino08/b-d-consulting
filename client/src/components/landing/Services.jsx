import {
    Briefcase,
    Coins,
    Compass,
    Settings,
    ScanSearch,
    Shield,
    Laptop,
    BadgeCheck
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
        icon: Briefcase,
        title: "Asesoramiento Empresarial",
        color: "bg-blue-500",
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
        icon: Coins,
        title: "Ingeniería de Costos",
        color: "bg-violet-500",
        items: [
            "Análisis de precios unitarios y presupuestos",
            "Documentación técnica y legal para ofertas",
            "Estimados de costos según necesidad del proyecto",
            "Control de costos y gestión financiera de obras"
        ]
    },
    {
        id: "ip",
        icon: Compass,
        title: "Ingeniería de Proyectos",
        color: "bg-amber-500",
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
        icon: Settings,
        title: "Confiabilidad y Mantenimiento",
        color: "bg-rose-500",
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
        icon: ScanSearch,
        title: "Inspección y Ensayos No Destructivos",
        color: "bg-emerald-500",
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
        icon: Shield,
        title: "Ingeniería de Riesgos",
        color: "bg-yellow-500",
        items: [
            "Estudios HAZOP y Sistemas SIL",
            "Impacto ambiental y cumplimiento legal SHA",
            "Planes específicos de seguridad (PESHA)",
            "Análisis de Riesgos Operacional (ARO)"
        ]
    },
    {
        id: "sys",
        icon: Laptop,
        title: "Sistemas y Computación",
        color: "bg-cyan-500",
        items: [
            "Consultoría en sistemas de información",
            "Soporte técnico y seguridad informática",
            "Desarrollo de software de gestión",
            "Sistemas para gestión de activos"
        ]
    },
    {
        id: "qa",
        icon: BadgeCheck,
        title: "Calidad y Normalización",
        color: "bg-pink-500",
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

            <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
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
                    className="max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-4">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <AccordionItem
                                    value={service.id}
                                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 overflow-hidden px-5 data-[state=open]:shadow-lg data-[state=open]:border-gray-200"
                                >
                                    <AccordionTrigger className="hover:no-underline py-5 group">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                                                <service.icon className="w-5 h-5" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-base font-medium text-gray-800 group-hover:text-gray-900 transition-colors">{service.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5 pl-14">
                                        <ul className="space-y-2">
                                            {service.items.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="text-gray-600 text-sm flex items-start gap-2.5 group/item hover:text-gray-800 transition-colors"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.08 }}
                                                >
                                                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0 group-hover/item:bg-gray-600 transition-colors" />
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
