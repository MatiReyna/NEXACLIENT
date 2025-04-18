import { Card, CardContent } from "../ui/card";

const TestimonialsSection = () => {

    const testimonials = [
        {
            name: 'María García',
            location: 'Arguello',
            text: 'Nunca pensé que construir una casa podría ser tan rápido y sin complicaciones. El resultado final superó todas mis expectativas.'
        },
        {
            name: 'Juan Perez',
            location: 'Carlos Paz',
            text: 'El trabajo de la NEXA me ha llevado a construir una casa perfecta en mi barrio. La calidad de los materiales y el trabajo en equipo fuen los mejores que he experimentado en mi vida.'
        },
        {
            name: 'Alfredo Rodríguez',
            location: 'Cordoba',
            text: 'El equipo de NEXA nos acompañó en todo el proceso. Su profesionalidad y atención al detalle hicieron que todo fuera perfecto.'
        }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lo Que Dicen Nuestros Clientes</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Experiencias reales de quienes ya disfrutan de su casa prefabricada.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {
                        testimonials.map((testimonial, i) => (
                            <Card
                            key={i}
                            className="overflow-hidden rounded-xl shadow-md transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg"
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="h-12 w-12 rounded-full bg-muted"></div>
                                            <div>
                                            <h3 className="font-bold">{testimonial.name}</h3>
                                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">"{testimonial.text}"</p>
                                        <div className="flex">
                                            {
                                                Array(5)
                                                .fill(0)
                                                .map((_, i) => (
                                                    <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="text-yellow-500"
                                                    >
                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                    </svg>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default TestimonialsSection;