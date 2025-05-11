import { ArrowRight, ChevronRight } from 'lucide-react';

const ProcessSection = () => {

    const steps = [
        {
            step: 1,
            title: 'Consulta Inicial',
            description: 'Analizamos tus necesidades y te asesoramos sobre las mejores opciones para iniciar el proyecto.'
        },
        {
            step: 2,
            title: 'Diseño Personalizado',
            description: 'Creamos el diseño de tu casa según tus preferencias y requerimientos.'
        },
        {
            step: 3,
            title: 'Fabricación',
            description: 'Construimos los módulos en nuestra fábrica con estrictos controles de calidad.'
        },
        {
            step: 4,
            title: 'Instalación',
            description: 'Transportamos e instalamos tu casa en el terreno en tiempo récord.'
        }
    ];

    return (
        <section id="proceso" className="bg-[#f2ebfc] py-16 md:py-24">
            <div className="container space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-primary">Nuestro Proceso</h2>
                    <div className="mx-auto h-1 w-24 bg-primary rounded-full mt-4"></div>
                    <p className="mx-auto max-w-[700px] text-[#241f19]/80 md:text-xl">
                        Conoce cómo trabajamos para hacer realidad tu proyecto.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        steps.map((item) => (
                            <div key={ item.step } className="group relative flex flex-col items-center space-y-4 p-6">
                                <div aria-label={`Número de paso ${ item.step }`} className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-md transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                                    { item.step }
                                </div>
                                <h3 className="text-xl font-bold text-center text-primary">{ item.title }</h3>
                                <p className="mx-auto max-w-[700px] text-[#3b3b3b] md:text-xl text-[#241f19]">{ item.description }</p>
                                {
                                    item.step < 4 && (
                                        <ChevronRight aria-hidden="true" className="absolute right-2 lg:right-4 top-12 hidden h-8 w-8 text-[#592e83] lg:block transition-transform duration-300 group-hover:translate-x-1" />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <a
                        href="#contacto"
                        className="group inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Solicitar Información
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </a>
                </div>
            </div>
        </section>
    )
};

export default ProcessSection;