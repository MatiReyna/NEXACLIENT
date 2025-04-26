import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconUserEdit, IconFileBroken, IconSignature, IconTableColumn, } from '@tabler/icons-react';

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
                        className={ i === 0 ? "md:col-span-1 bg-gradient-t-br from-purple-400 to-purple-600 dark:form-purple-700 dark:to-purple-800 text-white" : i === 3 || i === 6 ? 'md:col-span-2' : '' }
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
                    className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                />
                <p className="mt-3 text-white font-semibold text-lg">Facundo Sagario</p>
                <button className="mt-2 px-4 py-1 text-sm rounded-full bg-white text-purple-700 font-medium shadow hover:bg-purple-100 transition">
                    Editar Perfil
                </button>
            </div>
        ),
        icon: <IconUserEdit className="h-4 w-4 text-white" />,
        className: "md:col-span-1 bg-gradient-to-br from-purple-400 to-purple-600 dark:form-purple-700 dark:to-purple-800 text-white"
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
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
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