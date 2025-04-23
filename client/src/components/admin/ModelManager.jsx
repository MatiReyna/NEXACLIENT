import { useState } from 'react';
import Button from '../ui/button';
import { Pencil, Trash, Plus } from 'lucide-react';

const MockModels = [
    {
        id: 1,
        nombre: 'Moderno XL',
        categoria: 'Moderno',
        metrosCuadrados: 120,
        habitaciones: 5,
        imagen: 'https://picsum.photos/id/10/400/300',
    },
    {
        id: 2,
        nombre: 'Casa Natural',
        categoria: 'Ecológico',
        metrosCuadrados: 100,
        habitaciones: 4,
        imagen: 'https://picsum.photos/id/100/400/300',
    },
    {
        id: 3,
        nombre: 'Casa Tradicional',
        categoria: 'Tradicional',
        metrosCuadrados: 80,
        habitaciones: 3,
        imagen: 'https://picsum.photos/id/200/400/300',
    }
];

const ModelManager = () => {

    const [ modelos, setModelos ] = useState(MockModels);

    return (
        <div className="px-4 py-10 bg-background text-foreground min-h-screen">
            <div className="max-w-6x1 mx-auto space-y-8">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2x1 md:text-3x1 font-bold text-[#592e83]">
                            Gestión de Modelos
                        </h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Visualizá, editá o eliminá modelos de casas prefabricadas.
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus size={ 18 } />
                        Crear nuevo modelo
                    </Button>
                </header>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        modelos.map((modelo) => (
                            <div
                                key={ modelo.id }
                                className="rounded-xl border bg-white shadow hover:shadow-md transition-all overflow-hidden"
                            >
                                <img
                                    src={ modelo.imagen }
                                    alt={ modelo.nombre }
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 space-y-2">
                                    <h3 className="text-xl font-semibold">{ modelo.nombre }</h3>
                                    <p className="text-sm text-muted-foreground">Categoría {modelo.categoria}</p>
                                    <p className="text-sm text-muted-foreground">
                                        { modelo.metrosCuadrados } metros cuadrados .
                                        { modelo.habitaciones } habitaciones
                                    </p>
                                    <div className="flex justify-end gap-2 mt-3">
                                        <Button size="sm" variant="outline">
                                            <Pencil className="w-4 h-4" />
                                        </Button>
                                        <Button size="sm" variant="destructive">
                                            <Trash className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default ModelManager;