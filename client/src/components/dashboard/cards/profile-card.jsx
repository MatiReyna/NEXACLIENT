import { Users, Home, Building2, CheckCircle, UserCog } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import animated1 from '@/assets/animated/animated1.jpg';

const ProfileCard = () => {
  return {
    header: (
      <div className="max-w-xs w-full bg-white rounded-[2rem] shadow-md overflow-hidden border border-border mx-auto">
        <img
          src={animated1}
          alt="Facundo Sagario"
          className="w-full h-64 object-cover rounded-t-[2rem]"
        />
        <div className="p-6 text-center space-y-2">
          <h3 className="text-lg font-semibold text-primary flex items-center justify-center gap-1">
            Facundo Sagario <CheckCircle className="w-4 h-4 text-green-500" />
          </h3>
          <p className="text-sm text-muted-foreground">
            Administrador general del panel de NEXA.
          </p>
          <div className="flex justify-center gap-6 text-sm text-primary mt-2">
            <div className="flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>9</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              <span>12</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>24</span>
            </div>
          </div>
          <button
            className="mt-4 px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 text-sm font-medium flex items-center justify-center gap-2 transition"
          >
            <UserCog className="w-4 h-4" />
            Editar
          </button>
        </div>
      </div>
    ),
    className: "md:col-span-1"
  };
};

export default ProfileCard;