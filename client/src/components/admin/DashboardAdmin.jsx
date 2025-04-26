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
        title: 'Solicitudes de contacto',
        description: 'Gestiona fácilmente las solicitudes de contacto recibidas por modelos de casas.',
        header: (
            <div className="flex flex-col items-start justify-start w-full h-full rounded-xl bg-gray-100 p-4 dark:bg-neutral-800">
                <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Últimas solicitudes</p>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded-lg p-2 shadow-sm">
                        <span className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Juan Pérez</span>
                        <span className="text-xs text-purple-600 font-semibold bg-purple-100 px-2 py-0.5 rounded-full">Casa Moderno</span>
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                    <div className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded-lg p-2 shadow-sm">
                        <span className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Ana Pérez</span>
                        <span className="text-xs text-purple-600 font-semibold bg-purple-100 px-2 py-0.5 rounded-full">Casa Tradicional</span>
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                    <div className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded-lg p-2 shadow-sm">
                        <span className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Carlos Méndez</span>
                        <span className="text-xs text-purple-600 font-semibold bg-purple-100 px-2 py-0.5 rounded-full">Casa Natural</span>
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                </div>
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
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