import { useState } from 'react';
import Button from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ArrowRight, Bed, Ruler } from 'lucide-react';
import ModelDetails from './model-details';
import { modelosModernos, modelosTradicionales, modelosEcologicos } from '../../lib/data/modelosData';

const ModelCard = ({ title, description, area, rooms, imageSrc, imageAlt }) => {

    const [ showDetails, setShowDetails ] = useState(false);

    return (
        <>
            <Card className="overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                    <img
                        src={ imageSrc || '/placeholder.svg' }
                        alt={ imageAlt || 'Modelo de casa prefabricada' }
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{ title }</h3>
                    <p className="mt-2 text-muted-foreground min-h-[80px]">{ description }</p>
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Ruler className="h-4 w-4" />
                            { area }
                        </span>
                        <span className="flex items-center gap-1">
                            <Bed className="h-4 w-4" />
                            { rooms }
                        </span>
                    </div>
                    <Button className="mt-4 w-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-[#592e83] hover:text-white" variant="outline" onClick={ () => setShowDetails(true) }>
                        <span className="flex items-center group">
                            Ver Detalles
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </Button>
                </CardContent>
            </Card>

            <ModelDetails
                isOpen={ showDetails }
                onClose={ () => setShowDetails(false) }
                model={{ title, description, area, rooms, imageSrc, imageAlt }}
            />
        </>
    )
};

const ModelsSection = () => {
    return (
        <section id="modelos" className="py-16 md:py-24">
            <div className="container space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Modelos</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Diseños modernos y funcionales para todos los gustos y necesidades.
                    </p>
                </div>
                <Tabs defaultValue="modernos" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="modernos" className="data-[state=active]:bg-[#592e83] data-[state=active]:text-white">Modernos</TabsTrigger>
                        <TabsTrigger value="tradicionales" className="data-[state=active]:bg-[#592e83] data-[state=active]:text-white">Tradicionales</TabsTrigger>
                        <TabsTrigger value="ecologicos" className="data-[state=active]:bg-[#592e83] data-[state=active]:text-white">Ecológicos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="modernos" className="mt-6 animate-fade">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                modelosModernos.map((modelo, i) => (
                                    <ModelCard key={ i } { ...modelo } />
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="tradicionales" className="mt-6 animate-fade">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                modelosTradicionales.map((modelo, i) => (
                                    <ModelCard key={ i } { ...modelo } />
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="ecologicos" className="mt-6 animate-fade">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                modelosEcologicos.map((modelo, i) => (
                                    <ModelCard key={ i } { ...modelo } />
                                ))
                            }
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
};

export default ModelsSection;