import MarcasCarousel from './marcas-carousel';

const MarcasSection = () => {
    return (
        <section id="marcas" className="py-12 md:py-16 bg-muted/40" aria-label="Sección de Marcas de Confianza">
            <div className="container">
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                            Nuestros Proveedores de Confianza
                        </h2>
                        <div className="mx-auto mt-2 h-1 w-12 bg-[#241f19] rounded-full"></div>
                        <p className="mt-4 text-[#241f19]/80 max-w-prose mx-auto">
                            Trabajamos con las mejores marcas para garantizar la calidad de nuestros proyectos
                        </p>
                    </div>
                    <MarcasCarousel />
                </div>
            </div>
        </section>
    )
};

export default MarcasSection;