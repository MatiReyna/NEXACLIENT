import { cn } from '@/lib/utils';

// BentoGrid: recibe children (elementos a renderizar dentro del grid).
const BentoGrid = ({ className, children }) => {
    return (
        <div className={ cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max", className) }>
            { children }
        </div>
    )
};

// BentoGridItem: representa cada caja individual dentro del grid.
const BentoGridItem = ({ className, title, description, header, icon, children, rowSpan = 1, colSpan = 1, ...props }) => {
    return (
        <div className={ cn(
            "row-span-1 rounded-[2.5rem] group/bento overflow-hidden border border-border bg-white shadow-md transition-all duration-300 hover:shadow-md hover:-translate-y-1",
            rowSpan > 1 && `md:row-span-${ rowSpan }`,
            colSpan > 1 && `md:col-span-${ colSpan }`,
            className
        ) }
            { ...props }
        >
            { header && <div className="flex-1">{ header }</div> }
            <div className={ cn("p-6", !header && "pt-6") }>
                {
                    title && (
                        <div className="flex items-center justify-between gap-2">
                            <div className="text-lg font-semibold">{ title }</div>
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