import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconUserEdit, IconFileBroken, IconSignature, IconTableColumn, IconClipboardCopy } from '@tabler/icons-react';

const BentoGridDemo = () => {
    return (
        <BentoGrid className="max-w-4xl mx-auto">
            {
                items.map((item, i) => (
                    <BentoGridItem
                        key={ i }
                        title={ item.title }
                        description={ item.description }
                        header={ item.header }
                        icon={ item.icon }
                        className={ item.className || (i === 3 || i === 6 ? 'md:col-span-2' : '') }
                    />
                ))
            }
        </BentoGrid>
    )
};

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
    {
        title: 'Perfil del Administrador',
        description: 'Visualiza tu perfil, edita tus datos personales y mantené tu información actualizada.',
        header: (
            <div className="flex flex-col items-center justify-center w-full h-full rounded-xl">
                <img
                    src="https://picsum.photos/id/10/400/300"
                    alt="Avatar"
                    className="w-20 h-20 rounded-full border-4 border-black shadow-md"
                />
                <p className="mt-3 text-black font-semibold text-lg">Facundo Sagario</p>
                <button className="mt-2 px-4 py-1 text-sm rounded-full">
                    <IconUserEdit className="h-4 w-4 text-black" />
                </button>
            </div>
        ),
        // icon: <IconUserEdit className="h-4 w-4 text-black" />,
        className: "md:col-span-1 bg-white text-black hover:shadow"
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        // title: 'Solicitudes de contacto',
        description: 'Gestiona fácilmente las solicitudes de contacto recibidas por modelos de casas.',
        header: (
            <div className="flex flex-col items-start justify-start w-full h-full rounded-xl bg-gray-100 p-4 dark:bg-neutral-800">
                <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Solicitudes de contacto</p>
                <div className="w-full flex flex-col gap-2">
                    {[
                        { name: 'Juan Pérez', email: 'juan@email.com', modelo: 'Casa Moderno' },
                        { name: 'Ana Pérez', email: 'ana@email.com', modelo: 'Casa Tradicional' },
                        { name: 'Carlos Méndez', email: 'carlos@email.com', modelo: 'Casa Natural' },
                    ].map(({ name, email, modelo }, i) => (
                        <div key={ i } className="grid grid-cols-4 items-center bg-white dark:bg-neutral-900 rounded-lg px-3 py-2 shadow-sm text-xs gap-2">
                            <span className="text-neutral-800 dark:text-neutral-100">{ name }</span>
                            <span className="text-neutral-500 dark:text-neutral-400">{ email }</span>
                            <span className="text-center text-purple-600 font-semibold bg-purple-100 px-2 py-0.5 rounded-full">{ modelo }</span>
                            <div className="flex justify-center">
                                <span className={ `w-2 h-2 rounded-full ${ i === 0 ? 'bg-green-500' : i === 1 ? 'bg-yellow-500' : 'bg-red-500' }` }></span>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center mt-3 w-full">
                        <button className="animate-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-neutral-500 dark:text-white"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        ),
        // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    }
];

export default BentoGridDemo;