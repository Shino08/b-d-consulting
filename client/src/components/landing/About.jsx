import { Target, Eye, Gem } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
    const values = [
        "Respeto", "Responsabilidad", "Lealtad", "Disciplina", "Honestidad",
        "Compromiso", "Integridad", "Solidaridad", "Confianza", "Profesionalidad"
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">¿Quiénes somos?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Empresa venezolana de consultoría e ingeniería especializada, comprometida con
                        la innovación y el desarrollo sostenible del sector empresarial e industrial.
                    </p>
                </motion.div>

                {/* Mission & Vision - Minimal Layout */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Misión */}
                    <motion.div
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <Target className="w-5 h-5 text-primary" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary">Misión</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed pl-[52px]">
                            Generar soluciones mediante servicios de asesoría y consultoría especializada
                            que contribuyan a la innovación, mejora permanente y desarrollo sostenible,
                            logrando rentabilidad y liderazgo en el mercado.
                        </p>
                    </motion.div>

                    {/* Visión */}
                    <motion.div
                        className="group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                                <Eye className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary">Visión</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed pl-[52px]">
                            Ser una referencia nacional e internacional por nuestra calidad de servicio,
                            profesionalismo y alineación a los objetivos de los clientes, como camino
                            al progreso social-ambiental.
                        </p>
                    </motion.div>
                </div>

                {/* Values - Minimal Horizontal List */}
                <motion.div
                    className="border-t border-gray-100 pt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-8 justify-center">
                        <Gem className="w-5 h-5 text-accent" strokeWidth={1.5} />
                        <h3 className="text-lg font-semibold text-primary">Nuestros Valores</h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {values.map((val, i) => (
                            <motion.span
                                key={val}
                                className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-full hover:bg-primary hover:text-white transition-colors cursor-default"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {val}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
