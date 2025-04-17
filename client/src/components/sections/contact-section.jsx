import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Button from "../ui/button";

const ContactSection = () => {
    return (
        <section id="contacto" className="bg-muted py-16 md:py-24 rounded-t-3xl">
            <div className="container">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contacta con Nosotros</h2>
                        <p className="text-muted-foreground">
                        Estamos aquí para responder a todas tus preguntas y ayudarte a hacer realidad tu proyecto.
                        </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-[#592e83]" />
                            <span>+34 900 123 456</span>
                            </div>
                            <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-[#592e83]" />
                            <span>info@nexaconstructora.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                            <MapPin className="h-5 w-5 text-[#592e83]" />
                            <span>Calle Principal 123, 5000 Argentina</span>
                            </div>
                        </div>
                        <div className="aspect-video w-full overflow-hidden rounded-2xl">
                            <img
                            src="/placeholder.svg?height=300&width=600&text=Mapa"
                            alt="Ubicación"
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="rounded-2xl border bg-background p-6 shadow-sm transform transition-all duration-300 hover:shadow-lg">
                    <h3 className="mb-4 text-xl font-bold">Solicita Información</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label
                                htmlFor="nombre"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Nombre
                                </label>
                                <input
                                id="nombre"
                                className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
                                placeholder="Tu nombre"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                htmlFor="apellidos"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Apellidos
                                </label>
                                <input
                                id="apellidos"
                                className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
                                placeholder="Tus apellidos"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label
                            htmlFor="email"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Email
                            </label>
                            <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
                            placeholder="tu@email.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                            htmlFor="telefono"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Teléfono
                            </label>
                            <input
                            id="telefono"
                            type="tel"
                            className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
                            placeholder="Tu teléfono"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                            htmlFor="modelo"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Modelo de interés
                            </label>
                            <select
                            id="modelo"
                            className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
                            >
                                <option value="">Selecciona un modelo</option>
                                <option value="moderno">Moderno</option>
                                <option value="tradicional">Tradicional</option>
                                <option value="ecologico">Ecológico</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label
                            htmlFor="mensaje"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Mensaje
                            </label>
                            <textarea
                            id="mensaje"
                            className="flex min-h-[120px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
                            placeholder="Cuéntanos sobre tu proyecto..."
                            ></textarea>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                            id="privacidad"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-[#592e83] focus:ring-[#592e83]"
                            />
                            <label htmlFor="privacidad" className="text-sm text-muted-foreground">
                            Acepto la política de privacidad y el tratamiento de mis datos.
                            </label>
                        </div>
                        <Button type="submit" className="w-full">
                            <span className="flex items-center">
                            Enviar Solicitud
                            <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </Button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactSection;