import { Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import Button from '@/ui/button';

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
                    variant="outline"
                    size="sm"
                    className="rounded-full mb-3"
                >
                    Editar
                </Button>
                <div className="grid grid-cols-3 w-full gap-2">
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80">
                        <span className="text-xl font-bold text-primary">9</span>
                        <span className="text-xs text-muted-foreground">Modelos</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80">
                        <span className="text-xl font-bold text-primary">12</span>
                        <span className="text-xs text-muted-foreground">Marcas</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-background/80">
                        <span className="text-xl font-bold text-primary">24</span>
                        <span className="text-xs text-muted-foreground">Contactos</span>
                    </div>
                </div>
            </div>
        ),
        className: "md:col-span-1 hover:shadow-lg rounded-2xl transition-all duration-300"
    }
};

export default ProfileCard;