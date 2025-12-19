import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const dynamicTexts = [
    {
        title: "Consultoría Especializada",
        description: "Soluciones de asesoría técnica y gerencial para el sector industrial y empresarial."
    },
    {
        title: "Innovación y Desarrollo",
        description: "Impulsamos la transformación y mejora continua de su organización."
    },
    {
        title: "Ingeniería de Proyectos",
        description: "Desde la conceptualización hasta la puesta en marcha de sus proyectos."
    },
    {
        title: "Excelencia Operativa",
        description: "Optimización de procesos para alcanzar el máximo rendimiento."
    },
];

export function Hero() {
    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Hero.webp"
                    alt="Industrial Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#043487]/50" />
            </div>

            {/* Subtle animated elements */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
            />

            <div className="container relative z-10 px-4 md:px-6">
                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Column: Main Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <motion.p
                            className="font-medium mb-4 uppercase tracking-wider text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            b&d Consulting
                        </motion.p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Soluciones integrales de ingeniería y consultoría
                        </h1>
                        <p className="text-xl font-medium mb-8 max-w-md">
                            Innovación, especialización y gerencia para los sectores empresarial, industrial y comercial.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-accent hover:bg-accent/90 text-white h-12 px-8 font-semibold"
                                onClick={() => scrollToSection("#services")}
                                data-testid="button-view-services"
                            >
                                Ver servicios
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm h-12 px-8 font-semibold"
                                onClick={() => scrollToSection("#contact")}
                                data-testid="button-contact"
                            >
                                Contactar
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Dynamic Text */}
                    <motion.div
                        className="hidden lg:block"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentText}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                                        {dynamicTexts[currentText].title}
                                    </h2>
                                    <p className="text-white/80 text-lg leading-relaxed">
                                        {dynamicTexts[currentText].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress indicators */}
                            <div className="flex gap-2 mt-8">
                                {dynamicTexts.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentText(index)}
                                        className="relative h-1 flex-1 rounded-full bg-white/20 overflow-hidden"
                                        aria-label={`Ver texto ${index + 1}`}
                                    >
                                        {currentText === index && (
                                            <motion.div
                                                className="absolute inset-0 bg-accent rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 4, ease: "linear" }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={() => scrollToSection("#about")}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                data-testid="button-scroll"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm">Desplázate</span>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </motion.button>
        </section>
    );
}
