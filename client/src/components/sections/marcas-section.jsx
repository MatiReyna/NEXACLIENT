import MarcasCarousel from './marcas-carousel';

const MarcasSection = () => {
    return (
        <section className="bg-[#f5f5f5] py-12 md:py-16" aria-label="Sección de Marcas de Confianza">
            <div className="container">
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nuestros Proveedores de Confianza</h2>
                        <p className="mt-2 text-[#241f19]/80">Trabajamos con las mejores marcas para garantizar la calidad de nuestros proyectos</p>
                    </div>
                    <MarcasCarousel />
                </div>
            </div>
        </section>
    )
};

export default MarcasSection;