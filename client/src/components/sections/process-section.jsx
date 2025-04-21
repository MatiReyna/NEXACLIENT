import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from '../ui/button';

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
            description: 'Transportamos e intalamos tu casa en el terreno en tiempo récord.'
        }
    ];

    return (
        <section id="proceso" className="bg-muted py-16 md:py-24 rounded-t-3xl">
            <div className="container space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestro Proceso</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Conoce cómo trabajamos para hacer realidad tu proyecto.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        steps.map((item) => (
                            <div key={ item.step } className="group relative flex flex-col items-center space-y-4 p-6">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#592e83] text-2xl font-bold text-white shadow-md transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                                    { item.step }
                                </div>
                                <h3 className="text-xl font-bold">{ item.title }</h3>
                                {/* <p className="text-muted-foreground">{ item.description }</p> */}
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{ item.description }</p>
                                {
                                    item.step < 4 && (
                                        <ChevronRight className="absolute -right-4 top-12 hidden h-8 w-8 text-[#592e83] lg:block transition-transform duration-300 group-hover:translate-x-1" />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <a href="#contacto" className="flex items-center group">
                            Solicitar Información
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default ProcessSection;