import { Users, Home, Building2  } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import animated1 from '@/assets/animated/animated1.jpg';

const ProfileCard = ({ onEditProfile }) => {
    return {
        title: (
            <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary">Perfil del Administrador</h3>
            </div>
        ),
        description: (
            <p className="text-sm text-muted-foreground">
                Visualizá y gestioná tu información personal dentro del sistema de administración.
            </p>
        ),
        header: (
            <div className="flex flex-col items-center text-center w-full h-full p-6 rounded-2xl bg-white shadow-md border border-border">
                <Avatar className="h-28 w-28 rounded-xl mb-4 shadow-md">
                    <AvatarImage src={ animated1 } alt="Facundo Sagario" />
                    <AvatarFallback>FS</AvatarFallback>
                </Avatar>
                <p className="text-primary font-semibold text-xl">Facundo Sagario</p>
                <span className="text-muted-foreground text-sm mb-4">Administrador</span>
                <div className="flex justify-center gap-6 mt-2">
                    <div className="flex items-center gap-1 text-primary">
                        <Home className="h-4 w-4" />
                        <span className="font-medium">9</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">12</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                        <Users className="h-4 w-4" />
                        <span className="font-medium">24</span>
                    </div>
                </div>
            </div>
        ),
        className: "md:col-span-1 rounded-2xl transition-all duration-300 bg-white border border-border shadow-sm hover:shadow-md"
    }
};

export default ProfileCard;