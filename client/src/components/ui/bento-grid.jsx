import { cn } from '@/lib/utils';

// BentoGrid: recibe children (elementos a renderizar dentro del grid).
const BentoGrid = ({ className, children }) => {
    return (
        // <div className={ cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className) }>
        //     { children }
        // </div>
        <div className={ cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max", className) }>
            { children }
        </div>
    )
};

// BentoGridItem: representa cada caja individual dentro del grid.
const BentoGridItem = ({ className, title, description, header, icon, children, rowSpan = 1, colSpan = 1, ...props }) => {
    return (
        // <div className={ cn(`group/bento shadow-input row-span-${rowSpan} col-span-${colSpan} flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none`, className) }>
        //     { header }
        //     <div className="transition duration-200 group-hover/bento:translate-x-2">
        //         { icon }
        //         <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
        //             { title }
        //         </div>
        //         <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
        //             { description }
        //         </div>
        //     </div>
        // </div>
        <div className={ cn(
            "row-span-1 rounded-xl group/bento overflow-hidden border bg-background shadow-sm",
            rowSpan > 1 && `md:row-span-${ rowSpan }`,
            colSpan > 1 && `md:col-span-${ colSpan }`,
            className
        ) }
            { ...props }
        >
            { header && <div className="flex-1">{ header }</div> }
            <div className="p-6 pt-0">
                {
                    title && (
                        <div className="flex items-center justify-between gap-2">
                            <div>{ title }</div>
                            { icon && <div>{ icon }</div> }
                        </div>
                    )
                }
                { description && <div className="mt-2 text-muted-foreground">{ description }</div> }
                { children }
            </div>
        </div>
    )
};

export { BentoGrid, BentoGridItem };