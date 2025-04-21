import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin } from 'lucide-react';
import AnimatedTooltip from '../ui/animated-tooltip';

const Footer = () => {

    const animatedTeam = [
        {
            id: 1,
            name: 'Matias Reyna',
            designation: 'Software Engineer',
            image: '/src/assets/animated/animated1.jpg'
        },
        {
            id: 2,
            name: 'Facundo Sagario',
            designation: 'CEO',
            image: '/src/assets/animated/animated2.jpg'
        },
        {
            id: 3,
            name: 'Emily Davis',
            designation: 'Product Manager',
            image: '/src/assets/animated/animated3.jpg'
        },
        {
            id: 4,
            name: 'Nicolás Sagario',
            designation: 'Soap Developer',
            image: '/src/assets/animated/animated4.jpg'
        },
        {
            id: 5,
            name: 'Jane Smith',
            designation: 'The Explorer',
            image: '/src/assets/animated/animated5.jpg'
        },
        {
            id: 6,
            name: 'Dora',
            designation: 'Data Scientist',
            image: '/src/assets/animated/animated6.jpg'
        }
    ];

    return (
        <footer className="bg-background border-t border-neutral-200">
            <div className="container py-8 md:py-12">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Home className="h-6 w-6" />
                            <span className="text-xl font-bold text-[#592e83]">NEXA</span>
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
                                <a
                                    href="#inicio"
                                    className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#modelos"
                                    className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Modelos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#beneficios"
                                    className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Beneficios
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#proceso"
                                    className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Proceso
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contacto"
                                    className="text-muted-foreground
                                hover:text-foreground transition-colors
                                duration-300"
                                >
                                    Contacto
                                </a>
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
                            hover:text-foreground hover:underline transition-colors
                            duration-300"
                                >
                                    Aviso Legal
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground
                            hover:text-foreground hover:underline transition-colors
                            duration-300"
                                >
                                    Politica de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground
                            hover:text-foreground hover:underline transition-colors
                            duration-300"
                                >
                                    Cookies
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground
                            hover:text-foreground hover:underline transition-colors
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
                                <span className="text-muted-foreground">+54 9 351559-4819</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">hola@nexaconstructora.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Pasaje San Ignacio 104 Bº Villa Esquiu, Provincia de Córdoba</span>
                            </li>
                        </ul>
                        <div className="mt-4 flex space-x-4">
                            <Link
                                href="#"
                                className="text-muted-foreground
                            hover:text-foreground transition-transform
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
                            <Link
                                href="#"
                                className="text-muted-foreground
                            hover:text-foreground transition-transform
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
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground
                            hover:text-foreground transition-transform
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
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center md:justifiy-center">
                    <AnimatedTooltip items={ animatedTeam } />
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