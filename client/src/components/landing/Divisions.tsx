import { motion } from "framer-motion";

export function Divisions() {
  const divisions = [
    { name: "b&d Consulting", desc: "Consultoría e Ingeniería Especializada" },
    { name: "b&Maintenance", desc: "Gestión de Mantenimiento y Confiabilidad" },
    { name: "b&Commerce", desc: "Suministros y Soluciones Comerciales" },
    { name: "b&Wood", desc: "Proyectos Industriales Madereros" },
    { name: "Btech", desc: "Business Technology & Systems" },
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
    <section id="divisions" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
      <motion.div 
        className="absolute top-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="container px-4 md:px-6 text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestras Divisiones
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {divisions.map((div) => (
            <motion.div 
              key={div.name} 
              className="flex flex-col items-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-all border border-white/20 group-hover:border-accent group-hover:shadow-lg"
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <span className="font-display font-bold text-xl text-center px-2 text-white group-hover:text-accent transition-colors">
                  {div.name.split(' ')[0]}
                </span>
              </motion.div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{div.name}</h3>
              <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">{div.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
