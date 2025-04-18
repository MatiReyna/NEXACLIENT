import { ArrowRight } from 'lucide-react';
import Button from '../ui/button';

const HeroSection = () => {
    return (
        <section id="inicio" className="relative">
            <div className="absolute inset-0 z-0">
                <img
                    src="/src/assets/hero/image.png"
                    alt="Casa prefabricada moderna"
                    className="object-cover w-full h-full brightness-[0.7]"
                />
            </div>
            <div className="container relative z-10 flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32 lg:py-40">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        NEXA Constructora Desarrollista
                    </h1>
                    <p className="mx-auto max-w-[700px] text-white md:text-xl">
                        Construimos proyectos inmobiliarios de alta calidad, con diseños innovadores y sostenibles.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg">
                        <a href="#modelos" className="flex items-center group">
                            Ver Modelos
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                    <Button variant="white-outline" size="lg">
                        <a href="#proceso">Cómo Trabajamos</a>
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;