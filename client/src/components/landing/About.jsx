import { useState, useEffect } from "react";
import { Target, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const values = [
    {
        name: "Respeto",
        description: "Valoramos a cada persona y organización con la que trabajamos.",
        image: "/Respeto.jpg"
    },
    {
        name: "Responsabilidad",
        description: "Cumplimos con nuestros compromisos de manera oportuna y eficiente.",
        image: "/Responsabilidad.jpg"
    },
    {
        name: "Compromiso",
        description: "Nos dedicamos plenamente a alcanzar los objetivos de nuestros clientes.",
        image: "/Compromiso.jpg"
    },
    {
        name: "Integridad",
        description: "Actuamos con honestidad y transparencia en todas nuestras operaciones.",
        image: "/Integridad.jpg"
    },
    {
        name: "Profesionalidad",
        description: "Aplicamos los más altos estándares técnicos y éticos en cada proyecto.",
        image: "/Personalidad.jpg"
    },
    {
        name: "Confianza",
        description: "Construimos relaciones duraderas basadas en resultados comprobados.",
        image: "/Confianza.jpg"
    },
];

export function About() {
    const [currentValue, setCurrentValue] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentValue((prev) => (prev + 1) % values.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentValue((prev) => (prev + 1) % values.length);
    };

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentValue((prev) => (prev - 1 + values.length) % values.length);
    };

    return (
        <section id="about" className="py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">¿Quiénes somos?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Empresa venezolana de consultoría e ingeniería especializada
                    </p>
                </motion.div>

                {/* Main Grid: Mission/Vision Left, Values Carousel Right */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Mission & Vision */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Misión */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Target className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Misión</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-[60px]">
                                Generar soluciones mediante servicios de asesoría y consultoría especializada
                                que contribuyan a la innovación, mejora permanente y desarrollo sostenible,
                                logrando rentabilidad y liderazgo en el mercado.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 ml-[60px]" />

                        {/* Visión */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                    <Eye className="w-6 h-6 text-secondary" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Visión</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-[60px]">
                                Ser una referencia nacional e internacional por nuestra calidad de servicio,
                                profesionalismo y alineación a los objetivos de los clientes, como camino
                                al progreso social-ambiental.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Values Carousel */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentValue}
                                        src={values[currentValue].image}
                                        alt={values[currentValue].name}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

                                {/* Value Name Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentValue}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-1">Nuestros Valores</p>
                                            <h4 className="text-white text-2xl font-bold">{values[currentValue].name}</h4>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={goToPrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white"
                                    aria-label="Valor anterior"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white"
                                    aria-label="Siguiente valor"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Description */}
                            <div className="p-6">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentValue}
                                        className="text-muted-foreground text-center"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {values[currentValue].description}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            {/* Dots Navigation */}
                            <div className="flex justify-center gap-2 pb-6">
                                {values.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setIsAutoPlaying(false);
                                            setCurrentValue(index);
                                        }}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentValue === index
                                                ? 'bg-accent w-6'
                                                : 'bg-gray-200 w-2 hover:bg-gray-300'
                                            }`}
                                        aria-label={`Ver valor ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
