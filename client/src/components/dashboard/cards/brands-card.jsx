import { Building } from 'lucide-react';
import { Badge } from '../../ui/badge';
import AnimatedBrand from '../../ui/animated-brand';

const BrandsCard = ({ brands }) => {
    return {
        tutle: (
            <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary">Gestión de Marcas</h3>
            </div>
        ),
        description: (
            <p className="text-sm text-muted-foreground">
                Visualizá, editá o eliminá las marcas asociadas a tu catálogo de casas.
            </p>
        ),
        header: (
            <div className="flex flex-col items-center justify-center w-full h-full rounded-xl p-5 bg-gradient-to-br from-brand-50 to-brand-100">
                <div className="text-center mb-4">
                    <Building className="h-10 w-10 text-primary mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-primary">Marcas Asociadas</h3>
                </div>
                <div className="w-full">
                    <AnimatedBrand brands={ brands } className="object-contain max-h-20 mx-auto" />
                </div>
                <div className="mt-4 text-center">
                    <Badge className="bg-brand-100 text-brand-800 rounded-lg">Total: { brands.length } marcas</Badge>
                </div>
            </div>
        ),
        className: "md:col-span-1 hover:shadow-lg rounded-2xl transition-all duration-300"
    }
};

export default BrandsCard;