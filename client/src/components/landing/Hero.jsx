import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@assets/generated_images/industrial_engineering_plant_background.png";

export function Hero() {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Industrial Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Animated background elements */}
            <motion.div
                className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
                animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                animate={{ x: [0, -50, 50, 0], y: [0, -30, 30, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
            />

            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                    >
                        Soluciones integrales de <br />
                        <span className="bg-gradient-to-r from-accent via-secondary to-accent text-transparent bg-clip-text">
                            consultoría e ingeniería
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Innovación, especialización y gerencia para los sectores empresarial, industrial y comercial.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
                    >
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-white min-w-[200px] h-14 text-lg font-semibold interactive-hover"
                            onClick={() => scrollToSection("#services")}
                            data-testid="button-view-services"
                        >
                            Ver nuestros servicios
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm min-w-[200px] h-14 text-lg font-semibold transition-all duration-300"
                            onClick={() => scrollToSection("#experience")}
                            data-testid="button-experience"
                        >
                            Conocer experiencia
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={() => scrollToSection("#about")}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                data-testid="button-scroll"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm">Desplázate</span>
                    <ChevronDown className="w-6 h-6" />
                </div>
            </motion.button>
        </section>
    );
}
