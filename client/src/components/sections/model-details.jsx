import { useState } from 'react';
import Modal from '../ui/modal';
import Button from '../ui/button';
import { Check, ArrowRight, ArrowLeft, Home, Maximize2, Leaf, Zap, Droplets } from 'lucide-react';

const ModelDetails = ({ isOpen, onClose, model }) => {

    const [ activeImage, setActiveImage ] = useState(0);

    if (!model) return null;

    const images = [
        model.imageSrc,
        model.imageSrc.replace('Modelo', 'Interior'),
        model.imageSrc.replace('Modelo', 'Plano'),
        model.imageSrc.replace('Modelo', 'Jardin')
    ];

    const getFeatures = () => {
        if (model.title.includes('Moderno')) {
            return [
                { icon: <Maximize2 className="h-5 w-5 text-[#592e83]" />, text: "Amplios espacios abiertos" },
                { icon: <Home className="h-5 w-5 text-[#592e83]" />, text: "Grandes ventanales" },
                { icon: <Zap className="h-5 w-5 text-[#592e83]" />, text: "Domótica integrada" },
                { icon: <Leaf className="h-5 w-5 text-[#592e83]" />, text: "Eficiencia energética A+" }
            ]
        } else if (model.title.includes('Tradicional')) {
            return [
                { icon: <Home className="h-5 w-5 text-[#592e83]" />, text: "Diseño clásico atemporal" },
                { icon: <Maximize2 className="h-5 w-5 text-[#592e83]" />, text: "Espacios bien definidos" },
                { icon: <Droplets className="h-5 w-5 text-[#592e83]" />, text: "Materiales de alta calidad" },
                { icon: <Leaf className="h-5 w-5 text-[#592e83]" />, text: "Jardín amplio" }
            ]
        } else {
            return [
                { icon: <Leaf className="h-5 w-5 text-[#592e83]" />, text: "Materiales sostenibles" },
                { icon: <Zap className="h-5 w-5 text-[#592e83]" />, text: "Paneles solares incluidos" },
                { icon: <Droplets className="h-5 w-5 text-[#592e83]" />, text: "Sistema de recolección de agua" },
                { icon: <Home className="h-5 w-5 text-[#592e83]" />, text: "Aislamiento térmico superior" }
            ]
        }
    };

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length)
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + images.length) % images.length)
    };

    return (
        <Modal isOpen={ isOpen } onClose={ onClose } className="p-0 overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
                {/* Sección de imágenes */}
                <div className="relative lg:w-1/2">
                    <div className="aspect-video w-full overflow-hidden bg-gray-100">
                        <img
                            src={ images[activeImage] || '/placeholder.svg' }
                            alt={ `${ model.title } - Vista ${ activeImage + 1 }` }
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={ prevImage }
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors"
                            aria-label="Imagen anterior"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={ nextImage }
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors"
                            aria-label="Imagen siguiente"
                        >
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {
                                images.map((_, index) => (
                                    <button
                                        key={ index }
                                        onClick={ () => setActiveImage(index) }
                                        className={ `w-2.5 h-2.5 rounded-full transition-colors ${ index === activeImage ? 'bg-white' : 'bg-white/50' }` }
                                        aria-label={ `Ver imagen ${ index + 1 }` }
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex p-2 gap-2 bg-gray-50">
                        {
                            images.map((img, index) => (
                                <button
                                    key={ index }
                                    onClick={ () => setActiveImage(index) }
                                    className={ `w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${ index === activeImage ? 'border-[#592e83]' : 'border-transparent' }` }
                                >
                                    <img
                                        src={ img || '/placeholder.svg' }
                                        alt={ `Miniatura ${ index + 1 }` }
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))
                        }
                    </div>
                </div>

                {/* Sección de información */}
                <div className="lg:w-1/2 p-6 overflow-y-auto max-h-[70vh] lg:max-h-[90vh]">
                    <h2 className="text-2xl font-bold text-gray-900">{ model.title }</h2>
                    <p className="text-sm text-gray-500 mt-1">Ref: NEXA-{ model.title.replace(/\s+/g, '').toLowerCase() }-{ Math.floor(Math.random() * 1000) }</p>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900">Descripción</h3>
                        <p className="mt-2 text-gray-600">
                            { model.description } Diseñada para maximizar la comodidad y funcionalidad,
                            esta casa prefabricada ofrece un equilibrio perfecto entre estética y practicidad.
                            Construida con materiales de primera calidad y acabados premium.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900">Especificaciones</h3>
                        <div className="mt-2 grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Superficie</span>
                                <span className="font-medium">{ model.area }</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Habitaciones</span>
                                <span className="font-medium">{ model.rooms }</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Baños</span>
                                <span className="font-medium">{ model.rooms.split('-')[0] } completos</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Tiempo de construcción</span>
                                <span className="font-medium">3-4 meses</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900">Características</h3>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {
                                getFeatures().map((feature, index) => (
                                    <div key={ index } className="flex items-center gap-2">
                                        { feature.icon }
                                        <span className="text-gray-600">{ feature.text }</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900">Opciones de personalización</h3>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                <span className="text-gray-600">Distribución interior flexible</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                <span className="text-gray-600">Acabados y materiales a elegir</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                                <span className="text-gray-600">Posibilidad de ampliación modular</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <div className="p-4 bg-[#592e83]/10 rounded-xl">
                            <p className="text-[#592e83] font-medium">Desde <span className="text-2xl font-bold">€149.900</span></p>
                            <p className="text-sm text-gray-600 mt-1">Financiación disponible</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button className="flex-1">
                                <span className="flex items-center">
                                    Solicitar Presupuesto
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </span>
                            </Button>
                            <Button variant="outline" className="flex-1">
                                Descargar Catálogo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
};

export default ModelDetails;