import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MarcasCarousel = ({ className }) => {

    const containerRef = useRef(null);
    const [ isHovered, setIsHovered ] = useState(false);

    const marcas = [
        { nombre: "TechBuild", logo: "/placeholder.svg?height=80&width=160&text=TechBuild" },
        { nombre: "EcoMaterials", logo: "/placeholder.svg?height=80&width=160&text=EcoMaterials" },
        { nombre: "ModernHomes", logo: "/placeholder.svg?height=80&width=160&text=ModernHomes" },
        { nombre: "GreenConstruct", logo: "/placeholder.svg?height=80&width=160&text=GreenConstruct" },
        { nombre: "InnoArch", logo: "/placeholder.svg?height=80&width=160&text=InnoArch" },
        { nombre: "SmartHouse", logo: "/placeholder.svg?height=80&width=160&text=SmartHouse" },
        { nombre: "SustainBuild", logo: "/placeholder.svg?height=80&width=160&text=SustainBuild" },
        { nombre: "PremiumStruct", logo: "/placeholder.svg?height=80&width=160&text=PremiumStruct" }
    ];

    const allMarcas = [ ...marcas, ...marcas ];  // Duplicamos las marcas para crear el efecto infinito.

    useEffect(() => {
        const container = containerRef.current;
        if (!container || isHovered) return;

        let animationId;
        let position = 0;

        const animate = () => {
            position -= 0.5

            if (position <= -(marcas.length *180)) {
                position = 0
            
            }

            if (container) {
                container.style.transform = `translateX(${position}px)`;
            }
            animationId = requestAnimationFrame(animate);
        }
        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [ isHovered, marcas.length ]);

    return (
        <div
        className={cn("relative w-full overflow-hidden py-8", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <div
            ref={containerRef}
            className="flex transition-transform duration-300 ease-linear"
            style={{ width: `${allMarcas.length * 180}px` }}
            >
                {
                    allMarcas.map((marca, index) => (
                        <div
                        key={`${marca.nombre}-${index}`}
                        className="flex-shrink-0 w-[180px] px-4 transform transition-transform duration-300 hover:scale-105"
                        >
                            <div className="h-20 bg-white rounded-xl shadow-sm p-3 flex items-center justify-center border border-gray-100">
                                <img
                                src={marca.logo || "/placeholder.svg"}
                                alt={marca.nombre}
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