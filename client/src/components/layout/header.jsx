import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import Button from '../ui/button';
import { cn } from '../../lib/utils';

const Header = () => {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    };

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#modelos', label: 'Modelos' },
        { href: '#beneficios', label: 'Beneficios' },
        { href: '#proceso', label: 'Proceso' },
        { href: '#contacto', label: 'Contacto' }
    ];

    return (
        <header
            className={ cn("sticky top-0 z-40 w-full transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm border-b border-neutral-200"
                    : "bg-transparent"
            ) }
        >
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#592e83] text-white">
                        <Home className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold leading-none">NEXA</span>
                        <span className="text-xs text-muted-foreground">constructora desarrollista</span>
                    </div>
                </div>

                <nav className="hidden md:flex gap-6">
                    {
                        navLinks.map((link) => (
                            <a
                                key={ link.href }
                                href={ link.href }
                                className="text-sm font-medium transition-colors hover:text-[#592e83] relative group"
                            >
                                { link.label }
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#592e83] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))
                    }
                </nav>

                <Button className="hidden md:inline-flex">
                    <a href="#contacto">Solicitar Presupuesto</a>
                </Button>

                <button
                    onClick={ () => setIsMenuOpen(!isMenuOpen) }
                    className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-100"
                    aria-label={ isMenuOpen ? 'Cerrar menú' : 'Abrir menú' }
                >
                    {
                        isMenuOpen ? (<X className="h-5 w-5" />) : (<Menu className="h-5 w-5" />)
                    }
                </button>
            </div>
            <div
                className={ cn("md:hidden fixed inset-x-0 top-16 bg-white border-b border-neutral-200 shadow-lg transition-all duration-300 ease-in-out transform", isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none") }
            >
                <nav className="container py-4 flex flex-col space-y-4">
                    {
                        navLinks.map((link) => (
                            <a
                                key={ link.href }
                                href={ link.href }
                                className="text-sm font-medium py-2 px-4 rounded-lg hover:bg-neutral-100 transition-colors"
                                onClick={ handleLinkClick }
                            >
                                { link.label }
                            </a>
                        ))
                    }
                    <div className="pt-2 pb-4">
                        <Button className="w-full">
                            <a href="#contacto" onClick={ handleLinkClick }>
                                Solicitar Presupuesto
                            </a>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;