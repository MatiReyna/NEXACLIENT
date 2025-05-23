import { Star } from 'lucide-react';
import Button from '../../ui/button';
import { Progress } from '../../ui/progress';

const RatingsCard = ({ ratings, renderStars, onViewAllRatings }) => {
    return {
        title: (
            <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary">Valoraciones de la página</h3>
            </div>
        ),
        description: (
            <p className="text-sm text-muted-foreground">
                Observa las opiniones recientes de los usuarios sobre los modelos y el servicio.
            </p>
        ),
        header: (
            <div className="flex flex-col items-center justify-between w-full h-full rounded-xl p-5 bg-gradient-to-br from-brand-50 to-brand-100">
                <div className="text-center w-full mb-3">
                    <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-2xl font-bold text-primary">4.2</span>
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <span className="text-sm text-muted-foreground">Promedio de valoraciones</span>
                    <Progress value={84} className="h-2 mt-2" />
                </div>

                <div className="space-y-3 w-full mb-3">
                    {
                        ratings.slice(0, 2).map((rating, i) => (
                            <div key={ i } className="bg-white border border-muted rounded-xl p-3 shadow-sm hover:shadow-md transition-all">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <span className="font-medium">{ rating.author }</span>
                                        <span className="text-xs text-muted-foreground">{ rating.date }</span>
                                    </div>
                                    <div className="flex">{ renderStars(rating.rating) }</div>
                                </div>
                                <p className="text-sm mt-2 text-muted-foreground line-clamp-2">{ rating.text }</p>
                            </div>
                        ))
                    }
                </div>

                <button onClick={ onViewAllRatings } className="px-4 py-2 text-sm font-medium transition-all duration-300 bg-white border border-[#592e83] text-[#592e83] hover:bg-[#592e83]/10 rounded-xl hover:scale-105 hover:shadow mb-2">
                    <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" /> Ver todas las valoraciones
                    </span>
                </button>
            </div>
        ),
        className: "md:col-span-1 hover:shadow-lg rounded-2xl transition-all duration-300 bg-gradient-to-br from-[#fefbff] via-[#f2ebfc] to-white"
    }
};

export default RatingsCard;