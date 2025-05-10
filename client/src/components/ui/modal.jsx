import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Modal = ({ isOpen, onClose, children, className }) => {

    const modalRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        };

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose]);

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose()
        }
    };

    return (
        <AnimatePresence>
            {
                isOpen && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={ handleBackdropClick }
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            ref={ modalRef }
                            className={ cn("bg-white rounded-2xl shadow-xl w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[90vh] sm:h-auto overflow-auto overscroll-contain scroll-smooth transform transition-transform duration-300 scale-100 opacity-100", className) }
                            onClick={ (e) => e.stopPropagation() }
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                            <button
                                onClick={ onClose }
                                className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary-foreground transition-colors"
                                aria-label="Cerrar"
                            >
                                <X className="h-5 w-5" />
                            </button>
                            { children }
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
};

export default Modal;