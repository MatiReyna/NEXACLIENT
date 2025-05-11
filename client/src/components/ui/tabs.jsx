import { createContext, forwardRef, useContext, useState } from 'react';
import { cn } from '../../lib/utils';

const TabsContext = createContext({});

const Tabs = forwardRef(({ defaultValue, className, children, ...props }, ref) => {
    const [ value, setValue ] = useState(defaultValue);

    return (
        <TabsContext.Provider value={{ value, setValue }}>
            <div ref={ ref } className={ cn("w-full", className) } { ...props }>
                { children }
            </div>
        </TabsContext.Provider>
    )
});
Tabs.displayName = 'Tabs';

const TabsList = forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ ref }
        className={ cn("flex h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground gap-1 overflow-x-auto no-scrollbar", className) } { ...props }
    />
));
TabsList.displayName = 'TabsList';

const TabsTrigger = forwardRef(({ className, value, ...props }, ref) => {
    const context = useContext(TabsContext);
    const isActive = context.value === value;

    return (
        <button
            ref={ ref }
            className={ cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-base font-medium ring-offset-background transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                isActive
                    ? "bg-[#592e83] text-white"
                    : "hover:bg-[#592e83]/20 hover:text-[#592e83]",
                className
            ) }
            onClick={ () => context.setValue(value) } { ...props }
            role="tab"
        />
    )
});
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = forwardRef(({ className, value, ...props }, ref) => {
    const context = useContext(TabsContext);
    const isActive = context.value === value;

    if (!isActive) return null;

    return (
        <div
            ref={ ref }
            className={ cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className) } { ...props }
            role="tabpanel"
        />
    )
});
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };