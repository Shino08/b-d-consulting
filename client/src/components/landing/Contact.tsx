import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  company: z.string().min(2, "La empresa es requerida"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(6, "Teléfono requerido"),
  service: z.string().min(1, "Seleccione un servicio"),
  message: z.string().min(10, "Cuéntenos un poco más sobre su proyecto"),
  consent: z.boolean().refine((val) => val === true, "Debe aceptar el procesamiento de datos"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Solicitud enviada",
      description: "Nos pondremos en contacto con usted a la brevedad.",
    });
    console.log(values);
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Hablemos de su proyecto</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Estamos listos para aportar valor a su organización con soluciones de ingeniería y consultoría de clase mundial.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-muted-foreground">comercialbdconsulting@gmail.com</p>
                  <p className="text-muted-foreground">comercial@bdconsulting1111.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Calle 137 Los Pardillos y Av. Tercera<br />
                    Manzana Nro 02, Local Nro 90-2001<br />
                    Urb. El Trigal Sur, Valencia, Carabobo, Venezuela
                  </p>
                </div>
              </div>

              {/* Placeholder Map */}
              <div className="w-full h-48 bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center text-muted-foreground">
                <MapPin className="w-8 h-8 opacity-20" />
                <span className="ml-2 opacity-50">Mapa de Ubicación</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan Pérez" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre de su empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Corporativo</FormLabel>
                        <FormControl>
                          <Input placeholder="juan@empresa.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="+58 414 1234567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Área de Interés</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="asesoria">Asesoramiento Empresarial</SelectItem>
                          <SelectItem value="costos">Ingeniería de Costos</SelectItem>
                          <SelectItem value="proyectos">Ingeniería de Proyectos</SelectItem>
                          <SelectItem value="confiabilidad">Confiabilidad y Mantenimiento</SelectItem>
                          <SelectItem value="end">Inspección y END</SelectItem>
                          <SelectItem value="riesgos">Ingeniería de Riesgos</SelectItem>
                          <SelectItem value="sistemas">Sistemas y Computación</SelectItem>
                          <SelectItem value="calidad">Calidad y Normalización</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describa brevemente su necesidad o proyecto..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Acepto ser contactado por b&d Consulting
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg h-12">
                  Enviar Solicitud
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
