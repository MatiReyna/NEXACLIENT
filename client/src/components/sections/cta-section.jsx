import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#592e83] to-[#8b4cd1] py-16 text-white md:py-24">
            <div className="container text-center">
                <div className="mx-auto max-w-[800px] space-y-6 transition-all duration-700 animate-fade-in">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        ¿Listo para comenzar tu proyecto con <span className="text-[#bb94ec]">NEXA</span>?
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-primary rounded-full mt-4"></div>
                    <p className="mx-auto max-w-[600px] md:text-xl">
                        Construye el espacio de tus sueños con la mejor calidad, innovación y sostenibilidad.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center items-center">
                        <a
                            href="#contacto"
                            aria-label="Ir a sección de contacto para solicitar presupuesto"
                            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                        >
                            Presupuesto
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </a>
                        <a
                            href="#modelos"
                            aria-label="Ir a sección de modelos"
                            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white border border-white rounded-xl transition-all duration-300 hover:bg-[#f2ebfc] hover:text-primary hover:scale-105 hover:shadow-lg group"
                        >
                            Ver Modelos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CtaSection;