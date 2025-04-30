import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Input = forwardRef(({ className, type = 'text', error = false, ...props }, ref) => {
    return (
        <input
            type={ type }
            className={ cn(
                "flex h-10 w-full rounded-xl border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                error ? "border-red-500 focus-visible:ring-red-500" : "border-input focus-visible:ring-ring",
                className
            ) }
            ref={ ref }
            { ...props }
        />
    )
});
Input.displayName = 'Input';

export default Input;