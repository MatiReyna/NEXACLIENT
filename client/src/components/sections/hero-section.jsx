import { ArrowRight } from 'lucide-react';
import Button from '../ui/button';
import heroImage from '../../assets/hero/image.png'

const HeroSection = () => {
    return (
        <section id="inicio" className="relative">
            <div className="absolute inset-0 z-0">
                <img
                    src={ heroImage }
                    alt="Casa prefabricada moderna"
                    className="object-cover object-center w-full h-full brightness-[0.7]"
                    loading="lazy"
                />
            </div>
            <div className="container relative z-10 flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32 lg:py-40">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold tracking-tighter text-white leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                        NEXA Constructora Desarrollista
                    </h1>
                    <p className="mx-auto max-w-[700px] text-white md:text-xl">
                        Con más de 150 empleados especializados en logística, administración, producción, arquitectura y ventas,
                        en NEXA ofrecemos un equipo comprometido, comunicativo, complementario y confiable.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                        href="#modelos"
                        aria-label="Ver Modelos de casas"
                        className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium transition-all duration-300 bg-primary text-white rounded-xl hover:scale-105 hover:shadow-lg"
                    >
                        Ver Modelos
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </a>
                    <a
                        href="#proceso"
                        aria-label="Cómo Trabajamos"
                        className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white border border-white rounded-xl transition-all duration-300 hover:bg-[#d5bef4] hover:scale-105 hover:shadow-lg"
                    >
                        Cómo Trabajamos
                    </a>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;