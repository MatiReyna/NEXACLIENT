import { Home, ChevronDown, Eye } from 'lucide-react';
import Button from '../../ui/button';
import Badge from '../../ui/badge';

const PublishedModelsCard = ({ models, onViewAllModels }) => {
    return {
        title: (
            <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary">Modelos publicados</h3>
            </div>
        ),
        description: (
            <p className="text-sm text-muted-foreground">
                Mirá un resumen de los modelos mostrados actualmente en la página.
            </p>
        ),
        header: (
            <div className="flex flex-col items-center justify-between w-full h-full rounded-xl p-5 bg-gradient-to-br from-brand-50 to-brand-100">
                <div className="text-center w-full mb-3">
                    <h3 className="text-lg font-semibold text-primary mb-1">Modelos Destacados</h3>
                    <p className="text-sm text-muted-foreground">Nuestros diseños más populares</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-3">
                    {
                        models.slice(0, 3).map((modelo, i) => (
                            <div key={ i } className="bg-white border border-muted p-3 rounded-xl shadow-sm flex flex-col h-full hover:shadow-md transition-all relative group">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-8 w-8 rounded-full bg-brand-200 flex items-center justify-center flex-shrink-0">
                                        <Home className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <p className="font-bold text-sm text-brand-800 line-clamp-1">{ modelo.nombre }</p>
                                        <Badge className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full">Popular</Badge>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-3 flex-grow">{ modelo.descripcion }</p>
                                <p className="text-[11px] text-muted-foreground mt-2">⏱️ 6 meses | 🧭 132 visitas</p>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
                                    <Eye className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Button variant="ghost" size="sm" onClick={ onViewAllModels }>
                    Ver todos los modelos <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
            </div>
        ),
        className: "md:col-span-2 hover:shadow-lg rounded-2xl transition-all duration-300 bg-gradient-to-br from-[#fefbff] via-[#f2ebfc] to-white"
    }
};

export default PublishedModelsCard;