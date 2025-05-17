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
            <div className="relative flex flex-col items-center w-full">
              <div className="relative z-10 -mt-16 mb-4 rounded-2xl bg-white p-1 shadow-md">
                <Avatar className="h-32 w-32 rounded-2xl">
                  <AvatarImage src={animated1} alt="Facundo Sagario" />
                  <AvatarFallback>FS</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col items-center text-center w-full px-6 pb-6">
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
            </div>
        ),
        className: "md:col-span-1 rounded-[2rem] transition-all duration-300 bg-white border border-border shadow-sm hover:shadow-md"
    }
};

export default ProfileCard;