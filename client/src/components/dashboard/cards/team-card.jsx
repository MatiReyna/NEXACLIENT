import { Users } from 'lucide-react';
import Button from '../../ui/button';
import AnimatedTooltip from '../../ui/animated-tooltip';

const TeamCard = ({ team, onViewTeam }) => {
    return {
        title: (
            <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary">Equipo NEXA</h3>
            </div>
        ),
        description: (
            <p className="text-sm text-muted-foreground">Conoce a los integrantes que hacen posible nuestro éxito.</p>
        ),
        header: (
            <div className="flex flex-col items-center justify-center w-full h-full rounded-xl py-6 px-4 bg-gradient-to-br from-brand-50 to-brand-100">
                <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">Nuestro Equipo</h3>
                    <p className="text-sm text-muted-foreground">Los profesionales detrás de NEXA</p>
                    <div className="mx-auto h-1 w-20 bg-primary rounded-full my-2" />
                </div>
                <div className="flex justify-center mb-4">
                    <AnimatedTooltip
                        items={
                            team.map((member) => ({
                                id: member.id,
                                name: member.name,
                                designation: member.role,
                                image: member.image
                            }))
                        }
                    />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Equipo compuesto por { team.length } miembros</p>
                <button onClick={ onViewTeam } className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-xl hover:scale-105 transition-all duration-300">Ver Todos</button>
            </div>
        ),
        className: "md:col-span-1 hover:shadow-lg rounded-2xl transition-all duration-300 bg-gradient-to-br from-[#fdfbff] via-[#f2ebfc] to-white"
    }
};

export default TeamCard;