import { IconArrowLeft, IconArrowRight, IconPencil, IconTrash } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBrand = ({ brands, autoplay = false }) => {

    const [ active, setActive ] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % brands.length)
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + brands.length) % brands.length)
    };

    const isActive = (index) => {
        return index === active
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000)
            return () => clearInterval(interval)
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10
    };

    return (
        <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
            {
                !brands || brands.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-60">
                        <p className="text-gray-500 dark:text-neutral-400 text-center text-sm">
                            No hay marcas registradas aún.
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                            Cuando agregues una marca, aparecerá aquí.
                        </p>
                    </div>
                ) : (
                    <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
                        <div>
                            <div className="relative h-56 w-full overflow-hidden">
                                <AnimatePresence>
                                    {
                                        brands.map((brand, index) => (
                                            <motion.div
                                                key={ brand.src }
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.9,
                                                    z: -100,
                                                    rotate: randomRotateY()
                                                }}
                                                animate={{
                                                    opacity: isActive(index) ? 1 : 0.7,
                                                    scale: isActive(index) ? 1 : 0.95,
                                                    z: isActive(index) ? 0 : -100,
                                                    rotate: isActive(index) ? 0 : randomRotateY(),
                                                    zIndex: isActive(index) ? 40 : brands.length + 2 - index,
                                                    y: isActive(index) ? [0, -80, 0] : 0
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.9,
                                                    z: 100,
                                                    rotate: randomRotateY()
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute inset-0 origin-bottom"
                                            >
                                                <img
                                                    src={ brand.src }
                                                    alt={ brand.name }
                                                    width={ 500 }
                                                    height={ 500 }
                                                    draggable={ false }
                                                    className="h-full w-full rounded-3xl object-contain object-center"
                                                />
                                            </motion.div>
                                        ))
                                    }
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between py-4">
                            <motion.div
                                key={ active }
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <h3 className="text-2xl font-bold text-black dark:text-white">
                                    { brands[active].name }
                                </h3>
                                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold hover:scale-105 ${ brands[active].activo ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800" }`}>
                                    { brands[active].activo ? "Activo" : "Inactivo" }
                                </span>
                                <div className="mt-8 flex items-center gap-2">
                                    <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition" title="Editar" aria-label="Editar marca">
                                        <IconPencil className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition" title="Eliminar" aria-label="Eliminar marca">
                                        <IconTrash className="h-5 w-5" />
                                    </button>
                                </div>
                            </motion.div>

                            <div className="flex gap-4 pt-12 md:pt-0">
                                <button
                                    onClick={ handlePrev }
                                    className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                                >
                                    <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                                </button>
                                <button
                                    onClick={ handleNext }
                                    className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                                >
                                    <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default AnimatedBrand;