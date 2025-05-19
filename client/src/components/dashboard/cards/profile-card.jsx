import { Users, Home, Building2, CheckCircle, UserCog } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import animated1 from '@/assets/animated/animated1.jpg';

const ProfileCard = () => {
  return {
    header: (
      <div className="w-full overflow-hidden">
        <div className="w-full px-2 pt-2">
          <div className="rounded-[2rem] overflow-hidden shadow-md">
            <img
              src={animated1}
              alt="Facundo Sagario"
              className="w-full h-72 object-cover rounded-[2rem]"
            />
          </div>
        </div>
        <div className="px-6 pt-2 pb-6 flex flex-col items-center text-center space-y-2">
          <h3 className="text-[15px] font-medium text-primary flex items-center justify-center gap-1">
            Facundo Sagario <CheckCircle className="w-[14px] h-[14px] text-green-500" />
          </h3>
          <p className="text-sm text-muted-foreground">
            Administrador general del panel de NEXA.
          </p>
          <div className="flex justify-center gap-6 text-sm text-primary mt-2">
            <div className="flex items-center gap-1">
              <Home className="w-[14px] h-[14px]" />
              <span>9</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 className="w-[14px] h-[14px]" />
              <span>12</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-[14px] h-[14px]" />
              <span>24</span>
            </div>
          </div>
          <button
            className="mt-4 px-6 py-2 rounded-full shadow-inner bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 text-sm font-medium flex items-center justify-center gap-2 transition"
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