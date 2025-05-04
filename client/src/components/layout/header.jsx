import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#modelos', label: 'Modelos' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#contacto', label: 'Contacto' }
];

const NavLink = ({ href, label }) => (
    <a
        href={ href }
        className="group relative text-sm font-medium transition-colors text-neutral-700 hover:text-primary"
        aria-current={ window.location.hash === href ? 'page' : undefined }
    >
        <span className="after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full relative">
            { label }
        </span>
    </a>
);

const MobileNavLink = ({ href, label, onClick }) => (
    <a
        href={ href }
        className="text-sm font-medium py-2 px-4 rounded-lg hover:bg-neutral-100 transition-colors"
        onClick={ onClick }
    >
        { label }
    </a>
);

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

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    };

    return (
        <header
            className={ cn("sticky top-0 z-40 w-full transition-all duration-300",
                scrolled
                    ? "bg-gradient-to-b from-[#faf6fe]/90 to-white/60 backdrop-blur-md shadow-sm border-b border-neutral-200"
                    : "bg-transparent"
            ) }
        >
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <a href="#inicio" aria-label="Inicio" className="flex items-center gap-2">
                        <div className={ cn(
                            "flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300",
                            scrolled ? "bg-primary text-white border-primary" : "bg-transparent border-black text-black"
                        ) }>
                            <Home className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold leading-none">NEXA</span>
                            <span className="text-xs text-muted-foreground">constructora desarrollista</span>
                        </div>
                    </a>
                </div>

                <nav role="navigation" className="hidden md:flex gap-6">
                    {
                        navLinks.map((link) => (
                            <NavLink key={ link.href } href={ link.href } label={ link.label } />
                        ))
                    }
                </nav>

                <a
                    href="#contacto"
                    aria-label="Solicitar Presupuesto"
                    className="hidden md:inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 bg-primary text-white rounded-xl hover:scale-105 hover:shadow-lg group"
                >
                    Solicitar Presupuesto
                </a>

                <button
                    onClick={ () => setIsMenuOpen(!isMenuOpen) }
                    className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-100"
                    aria-label={ isMenuOpen ? 'Cerrar menú' : 'Abrir menú' }
                    aria-controls="mobile-menu"
                    aria-expanded={ isMenuOpen }
                >
                    {
                        isMenuOpen ? (<X className="h-5 w-5" />) : (<Menu className="h-5 w-5" />)
                    }
                </button>
            </div>
            <div
                className={ cn("md:hidden fixed inset-x-0 top-16 bg-white border-b border-neutral-200 shadow-lg transition-all duration-300 ease-in-out transform",
                    isMenuOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-full opacity-0 scale-95 pointer-events-none"
                ) }
                id="mobile-menu"
            >
                <nav role="navigation" className="container py-4 flex flex-col space-y-4">
                    {
                        navLinks.map((link) => (
                            <MobileNavLink key={ link.href } href={ link.href } label={ link.label } onClick={ handleLinkClick } />
                        ))
                    }
                    <div className="pt-2 pb-4">
                        <a
                            href="#contacto"
                            onClick={ handleLinkClick }
                            aria-label="Solicitar Presupuesto"
                            className="inline-flex w-full items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 bg-primary text-white rounded-xl hover:scale-105 hover:shadow-lg group"
                        >
                            Solicitar Presupuesto
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;