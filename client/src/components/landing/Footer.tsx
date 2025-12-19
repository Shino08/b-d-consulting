export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-white rounded flex items-center justify-center text-primary font-bold">
              b&d
            </div>
            <span className="font-display font-bold text-lg">b&d Consulting</span>
          </div>
          
          <nav className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </nav>
        </div>
        
        <div className="text-center md:text-left text-sm text-white/50 border-t border-white/10 pt-8">
          <p>© 2025 b&d Consulting. Todos los derechos reservados. | Business & Development</p>
        </div>
      </div>
    </footer>
  );
}
