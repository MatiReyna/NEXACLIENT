import { Users, Home, Building2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import animated1 from '@/assets/animated/animated1.jpg';

const ProfileCard = () => {
  return {
    header: (
      <div className="flex flex-col items-center w-full bg-white rounded-[2rem] shadow-md border border-border p-6">
        <div className="w-full -mt-16 flex justify-center">
          <Avatar className="h-40 w-40 rounded-[2rem] shadow-md border-4 border-white">
            <AvatarImage src={animated1} alt="Facundo Sagario" />
            <AvatarFallback>FS</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center mt-4 space-y-1">
          <h3 className="text-xl font-semibold text-primary">Facundo Sagario</h3>
          <p className="text-muted-foreground text-sm">Administrador</p>
        </div>
        <div className="flex justify-center gap-6 mt-4">
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
    className: "md:col-span-1"
  };
};

export default ProfileCard;