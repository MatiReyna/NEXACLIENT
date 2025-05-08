import { Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import Button from '../../ui/button';

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
            <div className="flex flex-col items-center justify-center w-full h-full rounded-xl p-5 bg-gradient-to-br from-brand-50 to-brand-100">
                <Avatar className="h-20 w-20 border-4 border-background shadow-xl mb-3">
                    <AvatarImage src="/placeholder.svg?height=200&width=200" alt="Facundo Sagario" />
                    <AvatarFallback>FS</AvatarFallback>
                </Avatar>
                <div className="text-center mb-3">
                    <p className="text-primary font-semibold text-xl">Facundo Sagario</p>
                    <span className="text-muted-foreground text-sm">Administrador</span>
                </div>
                <Button
                    onClick={ onEditProfile }
                    className="px-6 py-3 text-sm font-medium transition-all duration-300 bg-white border border-[#592e83] text-[#592e83] hover:bg-[#592e83]/10 rounded-xl hover:scale-105 hover:shadow mb-3"
                    aria-label="Editar perfil del administrador"
                >
                    Editar
                </Button>
                <div className="grid grid-cols-3 w-full gap-2">
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80 transition-all hover:scale-105">
                        <span className="text-xl font-bold text-primary">9</span>
                        <span className="text-xs text-muted-foreground">Modelos</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80 transition-all hover:scale-105">
                        <span className="text-xl font-bold text-primary">12</span>
                        <span className="text-xs text-muted-foreground">Marcas</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80 transition-all hover:scale-105">
                        <span className="text-xl font-bold text-primary">24</span>
                        <span className="text-xs text-muted-foreground">Contactos</span>
                    </div>
                </div>
            </div>
        ),
        className: "md:col-span-1 hover:shadow-lg hover:-translate-y-1 rounded-2xl transition-all duration-300"
    }
};

export default ProfileCard;