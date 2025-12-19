import { CheckCircle2, Target, Eye, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
    const values = [
        "Respeto", "Responsabilidad", "Lealtad", "Disciplina", "Honestidad",
        "Compromiso", "Integridad", "Solidaridad", "Confianza", "Profesionalidad"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">¿Quiénes somos?</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Somos una empresa venezolana de consultoría e ingeniería especializada.
                        Nuestra misión es generar soluciones mediante servicios de asesoría y consultoría especializada
                        para el sector empresarial, industrial y comercial, garantizando el cumplimiento de las
                        necesidades y expectativas de nuestros clientes.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Misión */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                    >
                        <Card className="border-none shadow-lg bg-white relative overflow-hidden group hover:shadow-xl transition-shadow h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Target className="w-24 h-24 text-primary" />
                            </div>
                            <CardContent className="pt-8 pb-8 px-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                                    <Target className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">Misión</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Generar soluciones mediante servicios de asesoría y consultoría especializada que contribuyan
                                    a la innovación, mejora permanente y desarrollo sostenible, logrando rentabilidad y
                                    liderazgo en el mercado.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Visión */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                    >
                        <Card className="border-none shadow-lg bg-white relative overflow-hidden group hover:shadow-xl transition-shadow h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Eye className="w-24 h-24 text-secondary" />
                            </div>
                            <CardContent className="pt-8 pb-8 px-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                                    <Eye className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">Visión</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Ser una referencia nacional e internacional por nuestra calidad de servicio,
                                    profesionalismo, alineación a los objetivos de los clientes y respuestas a sus necesidades,
                                    como camino al progreso social-ambiental.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Valores */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden group hover:shadow-xl transition-shadow h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Gem className="w-24 h-24 text-white" />
                            </div>
                            <CardContent className="pt-8 pb-8 px-6">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                                    <Gem className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6">Nuestros Valores</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {values.map((val, i) => (
                                        <motion.div
                                            key={val}
                                            className="flex items-center gap-2 text-sm text-white/90 hover:text-accent transition-colors"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                            <span>{val}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
