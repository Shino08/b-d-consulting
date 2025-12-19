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
import { motion } from "framer-motion";

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
    const form = useForm({
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

    function onSubmit(values) {
        toast({
            title: "Solicitud enviada",
            description: "Nos pondremos en contacto con usted a la brevedad.",
        });
        console.log(values);
        form.reset();
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
                <motion.div
                    className="grid lg:grid-cols-2 gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Hablemos de su proyecto</h2>
                        <p className="text-lg text-muted-foreground mb-10">
                            Estamos listos para aportar valor a su organización con soluciones de ingeniería y consultoría de clase mundial.
                        </p>

                        <div className="space-y-8">
                            <motion.div
                                className="flex items-start gap-4 group cursor-pointer"
                                whileHover={{ x: 8 }}
                            >
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                                    <Mail className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">Email</h3>
                                    <p className="text-muted-foreground">comercialbdconsulting@gmail.com</p>
                                    <p className="text-muted-foreground">comercial@bdconsulting1111.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 group cursor-pointer"
                                whileHover={{ x: 8 }}
                            >
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">Ubicación</h3>
                                    <p className="text-muted-foreground">
                                        Calle 137 Los Pardillos y Av. Tercera<br />
                                        Manzana Nro 02, Local Nro 90-2001<br />
                                        Urb. El Trigal Sur, Valencia, Carabobo, Venezuela
                                    </p>
                                </div>
                            </motion.div>

                            {/* Placeholder Map */}
                            <motion.div
                                className="w-full h-48 bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center text-muted-foreground hover:bg-slate-300 transition-colors group"
                                whileHover={{ scale: 1.02 }}
                            >
                                <MapPin className="w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity" />
                                <span className="ml-2 opacity-50 group-hover:opacity-70 transition-opacity">Mapa de Ubicación</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-sm border"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
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
                                                    <Input placeholder="Juan Pérez" {...field} data-testid="input-name" />
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
                                                    <Input placeholder="Nombre de su empresa" {...field} data-testid="input-company" />
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
                                                    <Input placeholder="juan@empresa.com" {...field} data-testid="input-email" />
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
                                                    <Input placeholder="+58 414 1234567" {...field} data-testid="input-phone" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

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
                                                    data-testid="textarea-message"
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
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-slate-50 transition-colors">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    data-testid="checkbox-consent"
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

                                <motion.div whileHover={{ scale: 1.02 }}>
                                    <Button
                                        type="submit"
                                        className="w-full bg-accent hover:bg-accent/90 text-white text-lg h-12 font-semibold"
                                        data-testid="button-submit-contact"
                                    >
                                        Enviar Solicitud
                                    </Button>
                                </motion.div>
                            </form>
                        </Form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
