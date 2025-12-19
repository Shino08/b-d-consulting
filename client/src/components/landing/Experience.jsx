import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        year: "2024",
        title: "Ingeniería de sellos mecánicos & Variadores de frecuencia",
        client: "Petrocedeño",
        desc: "Mejorador de crudo - Ingeniería especializada para bombas centrífugas y PCP (100-1200 HP).",
        category: "Ingeniería",
        image: "/Sellos.webp"
    },
    {
        year: "2024",
        title: "Ingeniería de Detalles Taller Industrial",
        client: "Corporación B&D",
        desc: "Desarrollo completo de ingeniería de detalles para construcción en Paraguaná.",
        category: "Proyectos",
        image: "/Detalles.webp"
    },
    {
        year: "2023-24",
        title: "Reactivación Gabarra Orgullo del Delta",
        client: "PDVSA Petrowarao",
        desc: "Recuperación de confiabilidad operativa e instalación de generadores eléctricos en Campo Pedernales.",
        category: "Mantenimiento",
        image: "/Delta.webp"
    },
    {
        year: "2022-23",
        title: "Ingeniería Conceptual Planta de Biomasa",
        client: "Aserradero Dismak",
        desc: "Estudios conceptuales para planta de generación energética basada en biomasa.",
        category: "Ingeniería",
        image: "/Biomasa.webp"
    },
    {
        year: "2022",
        title: "Análisis Causa Raíz (ACR)",
        client: "Pequiven / Fertinitro",
        desc: "Investigación técnica y análisis de fallas en múltiples proyectos críticos.",
        category: "Confiabilidad",
        image: "/Analisis.webp"
    },
    {
        year: "2022",
        title: "Asistencia Técnica Arranque de Plantas",
        client: "Pequiven",
        desc: "Soporte especializado en arranque de plantas de Urea, Amoniaco y Servicios Industriales II.",
        category: "Operaciones",
        image: "/Arranque.webp"
    },
];

const stats = [
    { value: "50+", label: "Proyectos Ejecutados" },
    { value: "15+", label: "Años de Experiencia" },
    { value: "20+", label: "Clientes Satisfechos" },
    { value: "100%", label: "Compromiso" },
];

export function Experience() {
    const [selectedProject, setSelectedProject] = useState(0);

    return (
        <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra Experiencia</h2>
                        <p className="text-lg text-muted-foreground">
                            Trayectoria sólida ejecutando proyectos de alta complejidad para las principales industrias del país.
                        </p>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                        {["PDVSA", "Petrocedeño", "Pequiven"].map((name) => (
                            <motion.div key={name} whileHover={{ scale: 1.05 }}>
                                <Badge variant="secondary" className="text-sm px-4 py-1">{name}</Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Timeline */}
                    <div className="relative border-l-2 border-secondary/20 ml-4 space-y-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={`relative pl-8 cursor-pointer ${selectedProject === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onClick={() => setSelectedProject(index)}
                            >
                                <motion.div
                                    className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full ring-4 ring-white transition-colors ${selectedProject === index ? 'bg-accent' : 'bg-secondary/40'
                                        }`}
                                    whileHover={{ scale: 1.3 }}
                                />

                                <div className="flex flex-col gap-1 mb-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-accent font-bold font-mono text-sm">{project.year}</span>
                                        <Badge variant="outline" className="text-xs">{project.category}</Badge>
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                                </div>

                                <p className="text-sm text-muted-foreground">{project.client}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image/Details Panel */}
                    <motion.div
                        className="sticky top-32"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={selectedProject}
                                        src={projects[selectedProject].image}
                                        alt={projects[selectedProject].title}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <Badge className="bg-accent text-white mb-2">{projects[selectedProject].year}</Badge>
                                    <h4 className="text-white font-bold text-xl">{projects[selectedProject].title}</h4>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedProject}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="font-semibold text-primary mb-2">{projects[selectedProject].client}</p>
                                        <p className="text-muted-foreground">{projects[selectedProject].desc}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="flex gap-2 mt-4 justify-center">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedProject(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${selectedProject === index
                                        ? 'bg-accent w-6'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`View project ${index + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
