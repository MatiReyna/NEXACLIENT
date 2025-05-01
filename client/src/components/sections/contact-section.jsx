import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/button';
import mapa from '../../assets/contact/mapa.png';

const ContactSection = () => {

    const [ showConfirmation, setShowConfirmation ] = useState(false);

    return (
        <section id="contacto" className="bg-[#f5f5f5] py-16 md:py-24 rounded-t-3xl">
            <div className="container">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Contacta con Nosotros</h2>
                            <p className="mx-auto max-w-[700px] text-[#241f19]/80 md:text-xl">
                                Estamos aquí para responder a todas tus preguntas y ayudarte a hacer realidad tu proyecto.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-[#592e83]" />
                                <span>+54 9 351559-4819</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-[#592e83]" />
                                <span>hola@nexaconstructora.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-[#592e83]" />
                                <span>Pasaje San Ignacio 104 Bº Villa Esquiu, Provincia de Córdoba</span>
                            </div>
                        </div>
                        <div className="aspect-video w-full overflow-hidden rounded-2xl">
                            <img
                                src={ mapa }
                                alt="Ubicación"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="rounded-2xl border bg-background p-6 shadow-sm transform transition-all duration-300 hover:shadow-lg">
                        <h3 className="mb-4 text-xl font-bold">Solicita Información</h3>
                        <form className="space-y-4" onSubmit={ (e) => {
                            e.preventDefault();
                            setShowConfirmation(true)
                        } }>
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
                                        className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
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
                                        className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
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
                                    className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
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
                                    className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
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
                                    className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
                                >
                                    <option value="">Selecciona un modelo</option>
                                    <option value="Modelo Florida">Modelo Florida</option>
                                    <option value="Modelo Indiana">Modelo Indiana</option>
                                    <option value="Modelo Oregon">Modelo Oregon</option>
                                    <option value="Modelo Hawaii">Modelo Hawaii</option>
                                    <option value="Modelo Alaska">Modelo Alaska</option>
                                    <option value="Modelo Texas">Modelo Texas</option>
                                    <option value="Modelo California">Modelo California</option>
                                    <option value="Modelo Kansas">Modelo Kansas</option>
                                    <option value="Modelo Washington">Modelo Washington</option>
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
                                    className="flex min-h-[120px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50"
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
                            <Button type="submit" className="group w-full transition-transform duration-300 hover:scale-105">
                                <span className="flex items-center">
                                    Enviar Solicitud
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            {
                showConfirmation && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="bg-gradient-to-b from-[#592e83] to-[#8b4cd1] p-6 rounded-2xl shadow-lg max-w-md w-full text-center space-y-4 transition-all duration-300 transform scale-100 opacity-100">
                            <CheckCircle className="mx-auto h-10 w-10 text-green-500" />
                            <h4 className="text-lg font-semibold text-primary">¡Solicitud enviada!</h4>
                            <p className="text-sm text-muted-foreground">
                                Gracias por contactarnos. Un asesor de NEXA Constructora se comunicará con vos a la brevedad
                            </p>
                            <Button onClick={ () => setShowConfirmation(false) } className="mt-2 w-full">
                                Cerrar
                            </Button>
                        </div>
                    </div>
                )
            }
        </section>
    )
};

export default ContactSection;