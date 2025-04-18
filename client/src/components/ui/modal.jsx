import { useEffect, UseRef } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

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

    if (!isOpen) return null;

    return (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={ handleBackdropClick }
        >
            <div
            ref={ modalRef }
            className={ cn("bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto transform transition-all", className) }
            onClick={ (e) => e.stopPropagation() }
            >
                <button
                onClick={ onClose }
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Cerrar"
                >
                    <X className="h-5 w-5" />
                </button>
                { children }
            </div>
        </div>
    )
};

export default Modal;