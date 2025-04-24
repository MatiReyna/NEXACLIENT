import React from 'react';
import marcas from '../../lib/marcasData';

const MarcasManager = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#592e83]">
                Gestión de Marcas
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
                Visualizá las marcas asociadas actualmente a la plataforma. Esta
                sección está pensada para administrar logos y nombres de empresas aliadas.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {
                    marcas.map((marca, index) => (
                        <div
                            key={ index }
                            className="flex flex-col items-center justify-center border rounded-lg bg-muted p-4 shadow hove:shadow-md transition"
                        >
                            <img
                                src={ marca.logo }
                                alt={ marca.nombre }
                                className="h-12 object-contain mb-2"
                            />
                            <span className="text-sm font-medium">{ marca.nombre }</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default MarcasManager;