import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

const MarcasCarousel = ({ className }) => {

    const containerRef = useRef(null);
    const [ isHovered, setIsHovered ] = useState(false);

    const marcas = [
        { nombre: 'TechBuild', logo: '/src/assets/logos/marca1.svg' },
        { nombre: 'EcoMaterials', logo: '/src/assets/logos/marca3.svg' },
        { nombre: 'ModernHomes', logo: '/src/assets/logos/marca2.svg' },
        { nombre: 'GreenConstruct', logo: '/src/assets/logos/marca4.svg' },
        { nombre: InnoArch, logo: '/src/assets/logos/marca6.svg' },
        { nombre: 'SmartHouse', logo: '/src/assets/logos/marca5.svg' },
        { nombre: 'SustainBuild', logo: '/src/assets/logos/marca7.svg' },
        { nombre: 'PremiumStruct', logo: '/src/assets/logos/marca8.svg' }
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
                position = 0

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
                            key={ `${marca.nombre}-${index}` }
                            className="flex-shrink-0 w-[180px] px-4 transform transition-transform duration-300 hover:scale-105"
                        >
                            <div className="h-20 bg-white rounded-xl shadow-sm p-3 flex items-center justify-center border border-gray-100">
                                <img
                                    src={ marca.logo || '/placeholder.svg' }
                                    alt={ marca.nombre }
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