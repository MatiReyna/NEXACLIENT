import { useState } from 'react';
import Button from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ArrowRight, Bed, Ruler } from 'lucide-react';
import ModelDetails from './model-details';
import { modelos } from '../../lib/data/modelosData';

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
                    <Button className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md" variant="outline" onClick={ () => setShowDetails(true) }>
                        <span className="flex items-center group">
                            Ver Detalles
                            <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1" />
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
                    <TabsList className="grid w-full grid-cols-3 sm:grid-cols-3 overflow-x-auto">
                        <TabsTrigger value="modernos" className="data-[state=active]:bg-primary data-[state=active]:text-white min-w-[120px] hover:bg-primary/10 transition-colors duration-300">Modernos</TabsTrigger>
                        <TabsTrigger value="tradicionales" className="data-[state=active]:bg-primary data-[state=active]:text-white min-w-[120px] hover:bg-primary/10 transition-colors duration-300">Tradicionales</TabsTrigger>
                        <TabsTrigger value="ecologicos" className="data-[state=active]:bg-primary data-[state=active]:text-white min-w-[120px] hover:bg-primary/10 transition-colors duration-300">Ecológicos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="modernos" className="mt-6 animate-fade">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                modelos.filter(m => m.type === 'moderno').map((modelo, i) => (
                                    <ModelCard key={ i } { ...modelo } />
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="tradicionales" className="mt-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                modelos.filter(m => m.type === 'tradicional').map((modelo, i) => (
                                    <ModelCard key={ i } { ...modelo } />
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="ecologicos" className="mt-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                modelos.filter(m => m.type === 'ecologico').map((modelo, i) => (
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