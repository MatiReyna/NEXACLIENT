import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconUserEdit, IconFileBroken, IconSignature, IconTableColumn, IconClipboardCopy } from '@tabler/icons-react';
import AnimatedBrand from '../ui/animated-brand';
import AnimatedTooltip from '../ui/animated-tooltip';

import marca1 from '../../../src/assets/logos/marca1.svg';
import marca2 from '../../../src/assets/logos/marca2.svg';
import marca3 from '../../../src/assets/logos/marca3.svg';

const DashboardAdmin = () => {
    const [showRatingsModal, setShowRatingsModal] = React.useState(false);

    const brands = [
        {
          id: 1,
          name: "Nexa",
          src: marca1,
          status: "active",
          quote: "Calidad e innovación en viviendas modulares."
        },
        {
          id: 2,
          name: "EcoHomes",
          src: marca2,
          status: "inactive",
          quote: "Casas ecológicas para un futuro sustentable."
        },
        {
          id: 3,
          name: "Urbania",
          src: marca3,
          status: "active",
          quote: "Urbanismo moderno y diseño vanguardista."
        },
      ];

      const equipoNexa = [
        {
          id: 1,
          name: "Facundo Sagario",
          role: "CEO",
          image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 2,
          name: "Matias Reyna",
          role: "Developer",
          image: "https://images.unsplash.com/photo-1603415526960-f8f0b4fd2b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 3,
          name: "Nicolas Sagario",
          role: "Manager Sale",
          image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        }
      ];

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
            // title: 'Gestión de Marcas',
            // description: 'Visualizá, editá o eliminá las marcas asociadas a tu catálogo de casas.',
            // header: (
            //     <div className="w-full h-full">
            //       <AnimatedBrand brands={brands} />
            //     </div>
            // ),
            // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
            title: 'Gestión de Marcas',
            description: 'Visualizá, editá o eliminá las marcas asociadas a tu catálogo de casas.',
            header: (
                <div className="w-full h-full flex items-center justify-center overflow-hidden p-2">
                    <div className="max-w-full w-full">
                        <AnimatedBrand brands={brands} />
                    </div>
                </div>
            ),
            // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
            
        },
        {
            title: "Equipo NEXA",
            description: "Conoce a los integrantes que hacen posible nuestro éxito.",
            header: (
              <div className="flex flex-col items-center justify-center w-full h-full rounded-xl bg-gray-100 dark:bg-neutral-800 p-4">
                <div className="flex justify-center">
                  <AnimatedTooltip items={equipoNexa.map(member => ({
                    id: member.id,
                    name: member.name,
                    designation: member.role,
                    image: member.image
                  }))} />
                </div>
                <button className="mt-4 text-xs px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-full animate-bounce">
                  Ver Todos
                </button>
              </div>
            ),
            icon: <IconSignature className="h-4 w-4 text-purple-500" />,
            className: "md:col-span-1 bg-white text-black hover:shadow-lg"
        },
        {
            title: 'Solicitudes de contacto',
            description: 'Gestiona fácilmente las solicitudes de contacto recibidas por modelos de casas.',
            header: (
                <div className="flex flex-col items-start justify-start w-full h-full rounded-xl bg-gray-100 p-4 dark:bg-neutral-800">
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
            title: 'Valoraciones de la página',
            description: 'Observa las opiniones recientes de los usuarios sobre los modelos y el servicio.',
            header: (
              <div className="flex flex-col items-start justify-start w-full h-full rounded-xl bg-gray-100 dark:bg-neutral-800 p-4">
                <div className="w-full flex flex-col gap-2">
                  <span className="font-semibold text-sm text-neutral-700 dark:text-neutral-100">Promedio de valoraciones</span>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-full relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-3 rounded-full bg-green-500" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-2">
                    Valoración media basada en las opiniones de los usuarios.
                  </p>
                </div>
                <button
                  onClick={() => setShowRatingsModal(true)}
                  className="text-sm mt-3 px-4 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                >
                  Ver más
                </button>
              </div>
            ),
            icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: 'Gestión de Modelos',
  description: 'Visualizá, creá o modificá modelos de casas de forma sencilla.',
  header: (
    <div className="flex flex-col items-center justify-center w-full h-full rounded-xl bg-gray-100 dark:bg-neutral-800 p-4">
      <div className="text-center">
        <h3 className="text-lg font-bold text-purple-700">Modelos actuales</h3>
        <p className="text-sm text-gray-600 dark:text-neutral-400 mt-2">
          Gestioná los modelos de casas disponibles en la plataforma.
        </p>
      </div>
      <div className="flex gap-2 mt-6">
        <button className="px-4 py-2 text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-full transition">
          Crear Modelo
        </button>
        <button className="px-4 py-2 text-xs font-semibold bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600">
          Ver Modelos
        </button>
      </div>
    </div>
  ),
  icon: <IconBoxAlignTopLeft className="h-4 w-4 text-purple-500" />,
  className: "md:col-span-2 bg-white text-black hover:shadow-lg",
        },
        {
            title: "The Spirit of Adventure",
            description: "Embark on exciting journeys and thrilling discoveries.",
            header: <Skeleton />,
            icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        }
    ];

    return (
        <>
        <BentoGrid className="max-w-6xl mx-auto px-4">
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
        {showRatingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg w-full max-w-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">Valoraciones de usuarios</h2>
                <button onClick={() => setShowRatingsModal(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">&times;</button>
              </div>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-neutral-300">
                <li className="border-b pb-2">“Muy buena atención y excelente calidad de la casa” <span className="text-green-500">★ 5</span></li>
                <li className="border-b pb-2">“Me encantó el diseño moderno, pero tardaron un poco en responder” <span className="text-yellow-500">★ 3</span></li>
                <li className="border-b pb-2">“No me convenció la atención, esperaba más profesionalismo” <span className="text-red-500">★ 2</span></li>
              </ul>
            </div>
          </div>
        )}
        </>
    )
};

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default DashboardAdmin;