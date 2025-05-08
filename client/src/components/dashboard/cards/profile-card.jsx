import { Users, Home, Building2  } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import Button from '../../ui/button';
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
            <div className="flex flex-col items-center justify-center w-full h-full rounded-xl p-6 sm:p-7 bg-gradient-to-br from-[#f9f6fc] via-[#f2ebfc] to-white">
                <Avatar className="h-20 w-20 border-4 border-background shadow-xl mb-3">
                    <AvatarImage src={ animated1 } alt="Facundo Sagario" />
                    <AvatarFallback>FS</AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <p className="text-primary font-semibold text-xl">Facundo Sagario</p>
                    <span className="text-muted-foreground text-sm">Administrador</span>
                </div>
                <button
                    onClick={ onEditProfile }
                    className="px-6 py-3 text-sm font-medium transition-all duration-300 bg-white border border-[#592e83] text-[#592e83] hover:bg-[#592e83]/10 rounded-xl hover:scale-105 hover:shadow mb-2"
                    aria-label="Editar perfil del administrador"
                >
                    Editar
                </button>
                <div className="grid grid-cols-3 w-full gap-2">
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80 transition-all hover:scale-105">
                        <Home className="h-4 w-4 text-primary mb-1" />
                        <span className="text-xl font-bold text-primary">9</span>
                        <span className="text-xs text-muted-foreground">Modelos</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80 transition-all hover:scale-105">
                        <Building2 className="h-4 w-4 text-primary mb-1" />
                        <span className="text-xl font-bold text-primary">12</span>
                        <span className="text-xs text-muted-foreground">Marcas</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80 transition-all hover:scale-105">
                        <Users className="h-4 w-4 text-primary mb-1" />
                        <span className="text-xl font-bold text-primary">24</span>
                        <span className="text-xs text-muted-foreground">Contactos</span>
                    </div>
                </div>
            </div>
        ),
        className: "md:col-span-1 hover:shadow-lg hover:-translate-y-1 rounded-2xl transition-all duration-300 bg-gradient-to-br from-[#f9f6fc] via-[#f2ebfc] to-white"
    }
};

export default ProfileCard;