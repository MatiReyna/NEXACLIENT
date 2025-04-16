import { Link } from "react-router-dom";
import { Home, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-neutral-200">
            <div className="container py-8 md:py-12">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                        <Home className="h-6 w-6" />
                        <span className="text-xl font-bold">NEXA</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Construimos casa prefabricadas de alta calidad,
                            personalizadas y respetuosas con el medio ambiente.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Enlaces</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                href="#inicio"
                                className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="#modelos"
                                className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Modelos
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="#beneficios"
                                className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Beneficios
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="#proceso"
                                className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Proceso
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="#contacto"
                                className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                    <h3 className="mb-4 text-lg font-semibold">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                            href="#"
                            className="text-muted-foreground
                            hover:text-foreground transition-colors
                            duration-300"
                            >
                                Aviso Legal
                            </Link>
                        </li>
                        <li>
                            <Link
                            href="#"
                            className="text-muted-foreground
                            hover:text-foreground transition-colors
                            duration-300"
                            >
                                Politica de Privacidad
                            </Link>
                        </li>
                        <li>
                            <Link
                            href="#"
                            className="text-muted-foreground
                            hover:text-foreground transition-colors
                            duration-300"
                            >
                                Cookies
                            </Link>
                        </li>
                        <li>
                            <Link
                            href="#"
                            className="text-muted-foreground
                            hover:text-foreground transition-colors
                            duration-300"
                            >
                                Término y Condiciones
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">+56 999 888 7777</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">info@nexaconstructora.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Calle 1, Edificio 1, Piso 1</span>
                            </li>
                        </ul>
                        <div className="mt-4 flex space-x-4">
                            <Link
                            href="#"
                            className="text-muted-foreground
                            hover:text-foregroundtransition-transform
                            duration-300 hover:scale-110"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        &copy; { new Date().getFullYear() } NEXA Constructora Desarrollista. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;