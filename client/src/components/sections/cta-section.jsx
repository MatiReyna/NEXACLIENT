import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#592e83] to-[#4a2670] py-16 text-white md:py-24 rounded-t-3xl">
            <div className="container text-center">
                <div className="mx-auto max-w-[800px] space-y-6 transition-all duration 700 animate-fade-in">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        ¿Listo para comenzar tu proyecto con <span className="text-primary">NEXA</span>?
                    </h2>
                    <p className="mx-auto max-w-[600px] md:text-xl">
                        Construye el espacio de tus sueños con la mejor calidad, innovación y sostenibilidad.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-primary text-white h-11 px-8 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-primary/90 group"
                        >
                            Solicitar Presupuesto
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#modelos"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-white bg-transparent text-white h-11 px-8 text-sm font-medium transition-all duration-300 hover:bg-[#d5bef4] hover:text-white group"
                        >
                            Ver Modelos
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CtaSection;