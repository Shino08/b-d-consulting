import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-12 border-t border-white/10 relative overflow-hidden">
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <motion.div
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src="/logo.svg"
                            alt="b&d Consulting"
                            className="h-8 object-contain invert"
                        />
                    </motion.div>

                    <nav className="flex gap-6 text-sm text-white/70">
                        <motion.a
                            href="#"
                            className="hover:text-white transition-colors"
                            whileHover={{ x: 2 }}
                        >
                            Aviso Legal
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-white transition-colors"
                            whileHover={{ x: 2 }}
                        >
                            Política de Privacidad
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-white transition-colors"
                            whileHover={{ x: 2 }}
                        >
                            LinkedIn
                        </motion.a>
                    </nav>
                </div>

                <div className="text-center md:text-left text-sm text-white/50 border-t border-white/10 pt-8">
                    <p>© 2025 b&d Consulting. Todos los derechos reservados. | Business & Development</p>
                </div>
            </div>
        </footer>
    );
}
