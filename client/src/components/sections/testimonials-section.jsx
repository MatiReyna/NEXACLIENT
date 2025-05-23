import { Card, CardContent } from '../ui/card';
import { Pencil } from 'lucide-react';
import Modal from '../ui/modal';
import { useState } from 'react';
import human1 from '@/assets/testimonials/human1.jpg';
import human2 from '@/assets/testimonials/human2.jpg';
import human3 from '@/assets/testimonials/human3.jpg';

const TestimonialsSection = () => {

    const [ open, setOpen ] = useState(false);

    const testimonials = [
        {
            name: 'María García',
            location: 'San Roque, Córdoba',
            text: 'Nunca pensé que construir una casa podría ser tan rápido y sin complicaciones. El resultado final superó todas mis expectativas.',
            image: human1
        },
        {
            name: 'Juan Perez',
            location: 'Carlos Paz, Córdoba',
            text: 'Gracias a NEXA construí la casa perfecta en mi barrio. La calidad de los materiales y el profesionalismo del equipo fueron excepcionales.',
            image: human2
        },
        {
            name: 'Norma Rodríguez',
            location: 'Alta Córdoba, Cordoba',
            text: 'El equipo de NEXA nos acompañó en todo el proceso. Su profesionalidad y atención al detalle hicieron que todo fuera perfecto.',
            image: human3
        }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Lo Que Dicen Nuestros Clientes</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Experiencias reales de quienes ya disfrutan de su casa prefabricada.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {
                        testimonials.map((testimonial, i) => (
                            <Card
                                key={ i }
                                className="group overflow-hidden rounded-xl shadow-md border border-[#e7dbf9] bg-gradient-to-br from-[#f2ebfc] to-[#ebe2f9] transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg"
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={ testimonial.image }
                                                alt={`Foto de ${ testimonial.name }`}
                                                className="h-12 w-12 rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-primary/30"
                                            />
                                            <div>
                                                <h3 className="font-bold">{ testimonial.name }</h3>
                                                <p className="text-sm text-muted-foreground">{ testimonial.location }</p>
                                            </div>
                                        </div>
                                        <p className="text-[#241f19]/80 italic text-sm md:text-base">{ testimonial.text }</p>
                                        <div className="flex">
                                            {
                                                Array(5)
                                                    .fill(0)
                                                    .map((_, i) => (
                                                        <svg
                                                            key={ i }
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="text-yellow-500 transition-colors duration-300 group-hover:text-yellow-400"
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
                <div className="text-center pt-8">
                    <button
                        onClick={ () => setOpen(true) }
                        aria-label="Agregar un nuevo testimonio"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-white bg-primary rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:animate-bounce-slow"
                    >
                        <Pencil className="w-5 h-5" />
                        Agregar Testimonio
                    </button>
                    <Modal isOpen={ open } onClose={ () => setOpen(false) }>
                        <div className="text-center space-y-4 p-6">
                            <h3 className="text-2xl font-semibold text-primary">¡Muy pronto!</h3>
                            <p className="text-muted-foreground">Pronto vas a poder escribirnos tu comentario directamente desde aquí.</p>
                        </div>
                    </Modal>
                </div>
            </div>
        </section>
    )
};

export default TestimonialsSection;