import { CheckCircle2, Target, Eye, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const values = [
    "Respeto", "Responsabilidad", "Lealtad", "Disciplina", "Honestidad",
    "Compromiso", "Integridad", "Solidaridad", "Confianza", "Profesionalidad"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">¿Quiénes somos?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos una empresa venezolana de consultoría e ingeniería especializada. 
            Nuestra misión es generar soluciones mediante servicios de asesoría y consultoría especializada 
            para el sector empresarial, industrial y comercial, garantizando el cumplimiento de las 
            necesidades y expectativas de nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Misión */}
          <Card className="border-none shadow-lg bg-slate-50 relative overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-24 h-24 text-primary" />
            </div>
            <CardContent className="pt-8 pb-8 px-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Generar soluciones mediante servicios de asesoría y consultoría especializada que contribuyan 
                a la innovación, mejora permanente y desarrollo sostenible, logrando rentabilidad y 
                liderazgo en el mercado.
              </p>
            </CardContent>
          </Card>

          {/* Visión */}
          <Card className="border-none shadow-lg bg-slate-50 relative overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Eye className="w-24 h-24 text-secondary" />
            </div>
            <CardContent className="pt-8 pb-8 px-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
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

          {/* Valores */}
          <Card className="border-none shadow-lg bg-primary text-white relative overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Gem className="w-24 h-24 text-white" />
            </div>
            <CardContent className="pt-8 pb-8 px-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Nuestros Valores</h3>
              <div className="grid grid-cols-2 gap-3">
                {values.map((val) => (
                  <div key={val} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
