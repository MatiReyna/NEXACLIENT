import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = {
    variant: {
        default: "bg-primary text-white hover:bg-primary/90 hover:animate-bounce-slow gap-2",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "white-outline": "btn-white-outline",
    },
    size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-6 py-3 text-lg",
        icon: "h-10 w-10",
    }
};

const Button = forwardRef(({ className, variant = 'default', size = 'default', loading = false , asChild = false, ...props }, ref) => {

    const variantClasses = buttonVariants.variant[variant] || buttonVariants.variant.default;
    const sizeClasses = buttonVariants.size[size] || buttonVariants.size.default;
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-transform duration-300 hover:scale-105 hover:shadow-lg";

    return (
        <button
            type={ props.type || "button" }
            className={ cn(baseClasses, variantClasses, sizeClasses, className) }
            ref={ ref }
            aria-busy={ loading }
            { ...props }
        >
            {
                loading && (
                    <svg className="animate-spin mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="status" aria-label="loading">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                )
            }
            { props.children }
        </button>
    )
});

Button.displayName = 'Button';

export default Button;
export { buttonVariants };