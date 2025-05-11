import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const AnimatedBrand = ({ brands, className }) => {

    const [ currentIndex, setCurrentIndex ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [brands.length]);

    return (
        <div className="flex flex-wrap justify-center items-center gap-6">
            {
                brands.map((brand, index) => (
                    <motion.div
                        key={ brand.id }
                        initial={{ opacity: 0.5, scale: 0.9 }}
                        animate={{
                            opacity: index === currentIndex ? 1 : 0.5,
                            scale: index === currentIndex ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.5 }}
                        className={ cn(
                            "flex flex-col items-center justify-center p-4 rounded-lg bg-background/80 shadow-sm transition-all",
                            className,
                        ) }
                    >
                        <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-2">
                            <span className="text-xl font-bold text-primary">{ brand.name.charAt(0) }</span>
                        </div>
                        <span className="text-sm font-medium">{ brand.name }</span>
                    </motion.div>
                ))
            }
        </div>
    )
};

export default AnimatedBrand