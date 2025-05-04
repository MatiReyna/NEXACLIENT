import { Card, CardContent } from '../ui/card';
import { Clock, Leaf, Shield, CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
    return (
        <section id="beneficios" className="bg-[#f2ebfc] bg-gradient-to-br from-white to-[#f8f2ff] py-16 md:py-24">
            <div className="container space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-primary">
                        Beneficios de Construir con NEXA
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-primary rounded-full mt-4"></div>
                    <p className="mx-auto max-w-[700px] text-[#241f19]/80 md:text-xl">
                        Descubre por qué somos líderes en el desarrollo de proyectos inmobiliarios.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="group rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:scale-[1.02] hover:border-primary border-transparent border">
                        <CardContent className="flex flex-col items-center space-y-4 p-6">
                            <Clock aria-label="Construcción Rápida" className="h-12 w-12 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary/10 rounded-full p-2 group-hover:text-white group-hover:bg-primary transition-all duration-500 ease-out" />
                            <h3 id="beneficio-construccion-rapida" className="text-xl font-bold">Construcción Rápida</h3>
                            <p className="text-center text-muted-foreground" aria-labelledby="beneficio-construccion-rapida">
                                Reducimos el tiempo de construcción hasta en un 70% comparado con métodos tradicionales.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="group rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:scale-[1.02] hover:border-primary border-transparent border">
                        <CardContent className="flex flex-col items-center space-y-4 p-6">
                            <Leaf aria-label="Ecológicas" className="h-12 w-12 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary/10 rounded-full p-2 overflow-visible group-hover:text-white group-hover:bg-primary transition-all duration-500 ease-out" />
                            <h3 id="beneficio-ecologicos" className="text-xl font-bold">Ecológicas</h3>
                            <p className="text-center text-muted-foreground" aria-labelledby="beneficio-ecologicos">
                                Materiales sostenibles y procesos que reducen el impacto ambiental.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="group rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:scale-[1.02] hover:border-primary border-transparent border">
                        <CardContent className="flex flex-col items-center space-y-4 p-6">
                            <Shield aria-label="Alta Calidad" className="h-12 w-12 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary/10 rounded-full p-2 group-hover:text-white group-hover:bg-primary transition-all duration-500 ease-out" />
                            <h3 id="beneficio-alta-calidad" className="text-xl font-bold">Alta Calidad</h3>
                            <p className="text-center text-muted-foreground" aria-labelledby="beneficio-alta-calidad">
                                Control de calidad riguroso en fábrica que garantiza excelentes acabados.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="group rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:scale-[1.02] hover:border-primary border-transparent border">
                        <CardContent className="flex flex-col items-center space-y-4 p-6">
                            <CheckCircle aria-label="Personalización" className="h-12 w-12 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary/10 rounded-full p-2 group-hover:text-white group-hover:bg-primary transition-all duration-500 ease-out" />
                            <h3 id="beneficio-personalizacion" className="text-xl font-bold">Personalización</h3>
                            <p className="text-center text-muted-foreground" aria-labelledby="beneficio-personalizacion">
                                Adaptamos cada proyecto a tus necesidades y preferencias específicas.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
};

export default BenefitsSection;