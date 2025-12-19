import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-8 border-t border-white/10 relative overflow-hidden">
            <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto">
                {/* Main Footer Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                    {/* Logo */}
                    <motion.img
                        src="/b_d_Consulting-Picsart-AiImageEnhancer.png"
                        alt="b&d Consulting"
                        className="h-12 object-contain"
                        whileHover={{ scale: 1.05 }}
                    />

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-5 text-sm text-white/70">
                        <a href="#about" className="hover:text-white transition-colors">Nosotros</a>
                        <a href="#services" className="hover:text-white transition-colors">Servicios</a>
                        <a href="#experience" className="hover:text-white transition-colors">Experiencia</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
                    </nav>

                    {/* Legal Links */}
                    <div className="flex gap-3 text-xs text-white/50">
                        <a href="#" className="hover:text-white/70 transition-colors">Aviso Legal</a>
                        <span className="text-white/30">|</span>
                        <a href="#" className="hover:text-white/70 transition-colors">Privacidad</a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs text-white/40 border-t border-white/10 pt-4">
                    <p>© 2025 b&d Consulting. Todos los derechos reservados. | Business & Development</p>
                </div>
            </div>
        </footer>
    );
}
