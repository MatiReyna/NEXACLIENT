import { useState } from "react";
import Button from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ArrowRight } from "lucide-react";
import ModelDetails from "./model-details";

const ModelCard = ({ title, description, area, rooms, imageSrc, imageAlt }) => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
        <Card className="overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                <img
                src={ imageSrc || "/placeholder.svg" }
                alt={ imageAlt }
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            <CardContent className="p-6">
            <h3 className="text-xl font-bold">{ title }</h3>
            <p className="mt-2 text-muted-foreground">{ description }</p>
            <div className="mt-4 flex justify-between text-sm">
            <span>Desde { area }</span>
            <span>{ rooms }</span>
            </div>
            <Button className="mt-4 w-full" variant="outline" onClick= { () => setShowDetails(true) }>
                <span className="flex items-center">
                Ver Detalles
                <ArrowRight className="ml-2 h-4 w-4" />
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
                <TabsTrigger value="modernos">Modernos</TabsTrigger>
                <TabsTrigger value="tradicionales">Tradicionales</TabsTrigger>
                <TabsTrigger value="ecologicos">Ecológicos</TabsTrigger>
                </TabsList>
                <TabsContent value="modernos" className="mt-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            [1, 2, 3].map((i) => (
                                <ModelCard
                                key={ i }
                                title={ `Modelo Moderno ${i}` }
                                description="Diseño contemporáneo con amplios espacios y grandes ventanales."
                                area="90m²"
                                rooms="2-3 habitaciones"
                                imageSrc={ `/placeholder.svg?height=300&width=500&text=Modelo+Moderno+${i}` }
                                imageAlt={ `Modelo Moderno ${i}` }
                                />
                            ))
                        }
                    </div>
                </TabsContent>
                <TabsContent value="tradicionales" className="mt-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            [1, 2, 3].map((i) => (
                                <ModelCard
                                key={ i }
                                title={ `Modelo Tradicional ${i}` }
                                description="Diseño tradicional con espacios pequeños y ventanas pequeñas."
                                area="90m²"
                                rooms="2-3 habitaciones"
                                imageSrc={ `/placeholder.svg?height=300&width=500&text=Modelo+Tradicional+${i}` }
                                imageAlt={ `Modelo Tradicional ${i}` }
                                />
                            ))
                        }
                    </div>
                </TabsContent>
                <TabsContent value="ecologicos" className="mt-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            [1, 2, 3].map((i) => (
                                <ModelCard
                                key={ i }
                                title={ `Modelo Ecológico ${i}` }
                                description="Diseño ecológico con espacios grandes y ventanas grandes."
                                area="90m²"
                                rooms="2-3 habitaciones"
                                imageSrc={ `/placeholder.svg?height=300&width=500&text=Modelo+Ecol%C3%B3gico+${i}` }
                                imageAlt={ `Modelo Ecológico ${i}` }
                                />
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