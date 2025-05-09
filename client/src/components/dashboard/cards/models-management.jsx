import { Home, Plus, Building2, Leaf } from 'lucide-react';
import Button from '../../ui/button';
import { Separator } from '../../ui/separator';

const ModelsManagementCard = ({ onCreateModel }) => {
    return {
        title: (
            <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary">Gestión de Modelos</h3>
            </div>
        ),
        description: (
            <p className="text-sm text-muted-foreground">Visualizá, creá o modificá modelos de casas de forma sencilla.</p>
        ),
        header: (
            <div className="flex flex-col items-center justify-between w-full h-full rounded-xl p-6 sm:p-7 bg-gradient-to-br from-[#faf6fe] via-[#f2ebfc] to-white">
                <div className="text-center w-full mb-3">
                    <Home className="h-8 w-8 text-primary mx-auto mb-1" />
                    <h3 className="text-lg font-semibold text-primary">Modelos</h3>
                    <div className="flex justify-center items-center gap-3 mt-2">
                        <div className="flex flex-col items-center">
                            <span className="text-xl font-bold text-primary">9</span>
                            <span className="text-xs text-muted-foreground">Total</span>
                        </div>
                        <Separator orientation="vertical" className="h-8" />
                        <div className="flex flex-col items-center">
                            <span className="text-xl font-bold text-primary">3</span>
                            <span className="text-xs text-muted-foreground">Categorías</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 w-full mb-3">
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80 transition-transform duration-200 hover:scale-105">
                        <Home className="h-5 w-5 text-brand-500 mb-1" />
                        <span className="text-lg font-bold text-brand-500">3</span>
                        <span className="text-xs text-muted-foreground">Modernos</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80 transition-transform duration-200 hover:scale-105">
                        <Building2 className="h-5 w-5 text-brand-600 mb-1" />
                        <span className="text-lg font-bold text-brand-600">4</span>
                        <span className="text-xs text-muted-foreground">Clásicos</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80 transition-transform duration-200 hover:scale-105">
                        <Leaf className="h-5 w-5 text-brand-700 mb-1" />
                        <span className="text-lg font-bold text-brand-700">2</span>
                        <span className="text-xs text-muted-foreground">Naturales</span>
                    </div>
                </div>

                <button onClick={ onCreateModel } className="px-4 py-2 text-sm font-medium transition-all duration-300 bg-primary text-white rounded-xl hover:scale-105 hover:shadow-md">
                    <Plus className="mr-1 h-4 w-4" /> Crear Modelo
                </button>
            </div>
        ),
        className: "md:col-span-1 hover:shadow-lg rounded-2xl transition-all duration-300 bg-gradient-to-br from-[#faf6fe] via-[#f2ebfc] to-white"
    }
};

export default ModelsManagementCard;