import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ArrowRight, Bed, Ruler, Clock } from 'lucide-react';
import ModelDetails from './model-details';
import { modelos } from '@/lib/data/modelosData';

const ModelCard = React.memo(({ title, description, area, rooms, imageSrc, imageAlt, index }) => {

    const [ showDetails, setShowDetails ] = useState(false);

    return (
        <>
            <Card className="overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:ring-2 hover:ring-primary/40">
                <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                    <img
                        src={ imageSrc || '/placeholder.svg' }
                        alt={ imageAlt || 'Modelo de casa prefabricada' }
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{ title }</h3>
                      {
                        index % 3 === 0 && (
                          <span className="rounded-full bg-green-600 text-white px-3 py-1 text-xs font-semibold">
                            Más Vendido
                          </span>
                        )
                      }
                      {
                        index % 3 === 1 && (
                          <span className="rounded-full bg-violet-500 text-white px-3 py-1 text-xs font-semibold">
                            Popular
                          </span>
                        )
                      }
                    </div>
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
                    <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Construcción: 3-4 meses</span>
                    </div>
                    <button
                        className="mt-4 inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium transition-all duration-300 bg-primary text-white rounded-xl hover:scale-105 hover:shadow-lg group"
                        onClick={ () => setShowDetails(true) }
                    >
                        <span className="flex items-center justify-center">
                            Ver Detalles
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                    </button>
                </CardContent>
            </Card>

            <ModelDetails
                isOpen={ showDetails }
                onClose={ () => setShowDetails(false) }
                model={{ title, description, area, rooms, imageSrc, imageAlt }}
            />
        </>
    )
});

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
                    <TabsList className="flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-3 gap-2 justify-center">
                        <TabsTrigger
                            value="modernos"
                            aria-label="Ver modelos modernos"
                            className="border border-[#241f19]/10 rounded-md data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-b-4 data-[state=active]:border-white min-w-[120px] hover:bg-primary/10 transition-colors duration-300"
                        >
                            Modernos
                        </TabsTrigger>
                        <TabsTrigger
                            value="tradicionales"
                            aria-label="Ver modelos tradicionales"
                            className="border border-[#241f19]/10 rounded-md data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-b-4 data-[state=active]:border-white min-w-[120px] hover:bg-primary/10 transition-colors duration-300"
                        >
                            Tradicionales
                        </TabsTrigger>
                        <TabsTrigger
                            value="ecologicos"
                            aria-label="Ver modelos ecológicos"
                            className="border border-[#241f19]/10 rounded-md data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-b-4 data-[state=active]:border-white min-w-[120px] hover:bg-primary/10 transition-colors duration-300"
                        >
                            Ecológicos
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="modernos" className="mt-6 animate-fade">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                modelos.filter(m => m.type === 'moderno').map((modelo, i) => (
                                    <ModelCard key={ i } index={ i } { ...modelo } />
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="tradicionales" className="mt-6 animate-fade">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                modelos.filter(m => m.type === 'tradicional').map((modelo, i) => (
                                    <ModelCard key={ i } index={ i } { ...modelo } />
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="ecologicos" className="mt-6 animate-fade">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                modelos.filter(m => m.type === 'ecologico').map((modelo, i) => (
                                    <ModelCard key={ i } index={ i } { ...modelo } />
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