import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

import marca1 from '@/assets/logos/marca1.svg';
import marca2 from '@/assets/logos/marca2.svg';
import marca3 from '@/assets/logos/marca3.svg';
import marca4 from '@/assets/logos/marca4.svg';
import marca5 from '@/assets/logos/marca5.svg';
import marca6 from '@/assets/logos/marca6.svg';
import marca7 from '@/assets/logos/marca7.svg';
import marca8 from '@/assets/logos/marca8.svg';

const MarcasCarousel = ({ className }) => {

    const containerRef = useRef(null);
    const [ isHovered, setIsHovered ] = useState(false);

    const marcas = [
        { nombre: 'TechBuild', logo: marca1 },
        { nombre: 'EcoMaterials', logo: marca3 },
        { nombre: 'ModernHomes', logo: marca2 },
        { nombre: 'GreenConstruct', logo: marca4 },
        { nombre: 'InnoArch', logo: marca6 },
        { nombre: 'SmartHouse', logo: marca5 },
        { nombre: 'SustainBuild', logo: marca7 },
        { nombre: 'PremiumStruct', logo: marca8 }
    ];

    const allMarcas = [ ...marcas, ...marcas ];  // Duplicamos las marcas para crear el efecto infinito.

    useEffect(() => {
        const container = containerRef.current;
        if (!container || isHovered) return;

        let animationId;
        let position = 0;

        const animate = () => {
            position -= 0.5

            if (position <= -(marcas.length * 180)) {
                position = 0;
                container.style.transition = 'none'
            } else {
                container.style.transition = 'transform 0.3s linear'
            }

            if (container) {
                container.style.transform = `translateX(${ position }px)`;
            }
            animationId = requestAnimationFrame(animate);
        }
        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isHovered, marcas.length]);

    return (
        <div
            className={ cn("relative w-full overflow-hidden py-8", className) }
            onMouseEnter={ () => setIsHovered(true) }
            onMouseLeave={ () => setIsHovered(false) }
        >
            <div
                ref={ containerRef }
                className="flex transition-transform duration-300 ease-linear"
                style={{ width: `${ allMarcas.length * 180 }px` }}
            >
                {
                    allMarcas.map((marca, index) => (
                        <div
                            key={ `${ marca.nombre }-${ index }` }
                            className="flex-shrink-0 w-[160px] sm:w-[180px] px-4 transform transition-transform duration-500 hover:scale-105"
                        >
                            <div className="h-20 bg-[#faf6fe] rounded-xl shadow-sm p-3 flex items-center justify-center border border-[#e7dbf9]">
                                <img
                                    src={ marca.logo || '/placeholder.svg' }
                                    alt={ marca.nombre }
                                    aria-label={ marca.nombre }
                                    loading="lazy"
                                    title={ marca.nombre }
                                    className="max-h-14 w-auto object-contain"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
    )
};

export default MarcasCarousel;