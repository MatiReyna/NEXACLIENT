import { Card, CardContent } from "../ui/card";
import { Clock, Leaf, Shield, CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
    return (
        <section id="beneficios" className="bg-muted py-16 md:py-24 rounded-t-3xl">
            <div className="container space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Beneficios de Construir con NEXA
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Descubre por qué somos líderes en el desarrollo de proyectos inmobiliarios.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                        <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <Clock className="h-12 w-12 text-[#592e83]" />
                        <h3 className="text-xl font-bold">Construcción Rápida</h3>
                        <p className="text-center text-muted-foreground">
                        Reducimos el tiempo de construcción hasta en un 70% comparado con métodos tradicionales.
                        </p>
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                        <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <Leaf className="h-12 w-12 text-[#592e83]" />
                        <h3 className="text-xl font-bold">Ecológicas</h3>
                        <p className="text-center text-muted-foreground">
                        Materiales sostenibles y procesos que reducen el impacto ambiental.
                        </p>
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                        <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <Shield className="h-12 w-12 text-[#592e83]" />
                        <h3 className="text-xl font-bold">Alta Calidad</h3>
                        <p className="text-center text-muted-foreground">
                        Control de calidad riguroso en fábrica que garantiza excelentes acabados.
                        </p>
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                        <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <CheckCircle className="h-12 w-12 text-[#592e83]" />
                        <h3 className="text-xl font-bold">Personalización</h3>
                        <p className="text-center text-muted-foreground">
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