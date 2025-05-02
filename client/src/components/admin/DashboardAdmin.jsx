import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { IconBoxAlignRightFilled, IconUserEdit } from '@tabler/icons-react';
import AnimatedBrand from '../ui/animated-brand';
import AnimatedTooltip from '../ui/animated-tooltip';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
import marcas from '../../lib/data/marcasData';
import { modelos } from '../../lib/data/modelosData';

import animated2 from '../../../src/assets/animated/animated2.jpg';
import animated1 from '../../../src/assets/animated/animated1.jpg';
import animated4 from '../../../src/assets/animated/animated4.jpg';

const DashboardAdmin = () => {

  const [ showRatingsModal, setShowRatingsModal ] = React.useState(false);
  const [ showProfileModal, setShowProfileModal ] = React.useState(false);
  const [ showTeamModal, setShowTeamModal ] = React.useState(false);
  const [ showCreateModelModal, setShowCreateModelModal ] = React.useState(false);
  const [ showAllModelsModal, setShowAllModelsModal ] = React.useState(false);

  const equipoNexa = [
    {
      id: 1,
      name: 'Facundo Sagario',
      role: 'CEO',
      image: animated2
    },
    {
      id: 2,
      name: 'Matias Reyna',
      role: 'Developer Engineer',
      image: animated1
    },
    {
      id: 3,
      name: 'Nicolas Sagario',
      role: 'Sales Manager',
      image: animated4
    }
  ];

  const words = [
    { text: 'Bienvenido, ' },
    { text: 'Facundo ' },
    { text: 'al ' },
    { text: 'Dashboard de NEXA.', className: "text-primary" },
  ];

  const items = [
    {
      title: (
        <h3 className="text-lg font-bold text-primary">Perfil del Administrador</h3>
      ),
      description: (
        <p className="text-sm text-[#241f19]/80">
          Visualizá y gestioná tu información personal dentro del sistema de administración.
        </p>
      ),
      header: (
        <div className="flex flex-col items-center justify-center w-full h-full rounded-xl pb-4 gap-2">
          <img
            src={ animated2 }
            alt="Avatar"
            className="w-24 h-24 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
          />
          <p className="text-primary font-semibold text-xl">Facundo Sagario</p>
          <button
            onClick={ () => setShowProfileModal(true) }
            aria-label="Editar perfil"
            className="mt-3 px-5 py-2 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
          >
            <IconUserEdit className="h-4 w-4" />
          </button>
        </div>
      ),
      className: "md:col-span-1 bg-[#e7dbf9] text-[#241f19] hover:shadow-lg rounded-xl border border-[#d5bef4] transition-all duration-300"
    },
    {
      title: 'Gestión de Marcas',
      description: 'Visualizá, editá o eliminá las marcas asociadas a tu catálogo de casas.',
      header: (
        <div className="w-full h-full flex items-center justify-center p-6 min-h-[200px] overflow-hidden">
          <div className="w-full max-w-full overflow-x-auto">
            <AnimatedBrand
              brands={ marcas }
              className="object-contain max-h-20 mx-auto"
            />
          </div>
        </div>
      ),
      className: "md:col-span-1 bg-[#e7dbf9] text-[#241f19] hover:shadow-lg rounded-xl border border-[#e7dbf9] transition-all duration-300"
    },
    {
      title: (
        <h3 className="text-lg font-bold text-primary">Equipo NEXA</h3>
      ),
      description: (
        <p className="text-sm text-[#241f19]/80">
          Conoce a los integrantes que hacen posible nuestro éxito.
        </p>
      ),
      header: (
        <div className="flex flex-col items-center justify-center w-full h-full rounded-xl bg-[#d5bef4] pb-4 gap-2 px-4">
          <div className="flex justify-center">
            <AnimatedTooltip items={ equipoNexa.map(member => ({
              id: member.id,
              name: member.name,
              designation: member.role,
              image: member.image
            })) } />
          </div>
          <button
            onClick={ () => setShowTeamModal(true) }
            className="mt-3 px-4 py-2 text-sm bg-primary text-white rounded-full hover:bg-primary/90 transition"
          >
            Ver Todos
          </button>
        </div>
      ),
      className: "md:col-span-1 text-[#241f19] hover:shadow-lg rounded-xl border border-[#bb94ec] transition-all duration-300"
    },
    {
      title: 'Solicitudes de contacto',
      description: 'Gestiona fácilmente las solicitudes de contacto recibidas por modelos de casas.',
      header: (
        <div className="flex flex-col items-start justify-start w-full h-full rounded-xl bg-[#faf6fe] border border-[#e7dbf9] p-6 dark:bg-neutral-800">
          {/* <h3 className="text-lg font-semibold text-primary mb-4">Solicitudes recientes</h3> */}
          <div className="w-full flex flex-col gap-2">
            {[
              { name: 'Juan Pérez', email: 'juan@email.com', modelo: 'Casa Moderno' },
              { name: 'Ana Pérez', email: 'ana@email.com', modelo: 'Casa Tradicional' },
              { name: 'Carlos Méndez', email: 'carlos@email.com', modelo: 'Casa Natural' },
            ].map(({ name, email, modelo }, i) => (
              <div key={ i } className="grid grid-cols-4 items-center bg-white dark:bg-neutral-900 rounded-lg px-4 py-3 shadow-sm text-sm gap-2">
                <span className="text-[#241f19]">{ name }</span>
                <span className="text-[#241f19]/70">{ email }</span>
                <span className="text-center text-purple-600 font-semibold bg-purple-100 px-2 py-0.5 rounded-full">{ modelo }</span>
                <div className="flex justify-center">
                  <span className={`w-2 h-2 rounded-full ${ i === 0 ? 'bg-green-500' : i === 1 ? 'bg-yellow-500' : 'bg-red-500' }`}></span>
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
      )
    },
    {
      title: (
        <h3 className="text-lg font-bold text-primary">Valoraciones de la página</h3>
      ),
      description: (
        <p className="text-sm text-[#241f19]/80">
          Observa las opiniones recientes de los usuarios sobre los modelos y el servicio.
        </p>
      ),
      header: (
        <div className="flex flex-col justify-between w-full h-full rounded-xl bg-[#f2ebfc] border border-[#e7dbf9] p-6 dark:bg-neutral-800 overflow-hidden gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-sm text-[#241f19]">Promedio de valoraciones</span>
            <div className="w-full bg-[#e7dbf9] h-3 rounded-full relative overflow-hidden">
              <div className="absolute left-0 top-0 h-3 rounded-full bg-[#8b4cd1]" style={{ width: '90%' }}></div>
            </div>
            <p className="text-sm text-[#241f19]/80">
              Valoración media basada en las opiniones de los usuarios.
            </p>
          </div>
          <button
            onClick={() => setShowRatingsModal(true)}
            className="px-4 py-2 text-sm bg-primary text-white rounded-full hover:bg-primary/90 transition"
          >
            Ver más
          </button>
        </div>
      )
    },
    {
      title: 'Gestión de Modelos',
      description: 'Visualizá, creá o modificá modelos de casas de forma sencilla.',
      header: (
        <div className="flex flex-col w-full h-full rounded-xl p-6 gap-4">
          <h3 className="text-xl font-bold text-primary flex items-center gap-2">🏠 Modelos</h3>
          <div className="flex flex-col text-sm text-[#241f19]/80 gap-1">
            <span><strong>9</strong> Modelos registrados</span>
            <span><strong>3</strong> Categorías disponibles</span>
          </div>
          <button
            onClick={ () => setShowCreateModelModal(true) }
            className="mt-4 px-4 py-2 text-sm bg-primary text-white rounded-full hover:bg-primary/90 transition"
          >
            Crear Modelo
          </button>
        </div>
      ),
      className: "md:col-span-1 bg-[#faf6fe] text-[#241f19] hover:shadow-lg rounded-xl border border-[#e7dbf9] transition-all duration-300",
    },
    {
      title: 'Modelos publicados',
      description: 'Mirá un resumen de los modelos mostrados actualmente en la página.',
      header: (
        <div className="flex flex-col items-start justify-start w-full h-full rounded-xl bg-[#faf6fe] border border-[#e7dbf9] p-6 dark:bg-neutral-800">
          <h3 className="text-lg font-semibold text-primary mb-4">Modelos publicados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {
              modelos.slice(0, 3).map((modelo, i) => (
                <div key={ i } className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-sm text-sm">
                  <p className="font-bold text-[#241f19]">{ modelo.nombre }</p>
                  <p className="text-[#241f19]/70">{ modelo.description }</p>
                </div>
              ))
            }
          </div>
          <div className="flex justify-center mt-3 w-full">
            <button onClick={ () => setShowAllModelsModal(true) } className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-neutral-500 dark:text-white">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <HeroHighlight containerClassName="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center mb-8 mt-4">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-sm mb-2">
          NEXA Constructora Desarrollista
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>

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
      {
        showRatingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg w-full max-w-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">Valoraciones de usuarios</h2>
                <button onClick={ () => setShowRatingsModal(false) } className="text-gray-500 hover:text-gray-800 dark:hover:text-white">&times;</button>
              </div>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-neutral-300">
                <li className="border-b pb-2">“Muy buena atención y excelente calidad de la casa” <span className="text-green-500">★ 5</span></li>
                <li className="border-b pb-2">“Me encantó el diseño moderno, pero tardaron un poco en responder” <span className="text-yellow-500">★ 3</span></li>
                <li className="border-b pb-2">“No me convenció la atención, esperaba más profesionalismo” <span className="text-red-500">★ 2</span></li>
              </ul>
            </div>
          </div>
        )
      }
      {
        showProfileModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg max-w-sm w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold text-primary">Edición de Perfil</h4>
                <button
                  onClick={ () => setShowProfileModal(false) }
                  className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
                >
                  &times;
                </button>
              </div>
              <p className="text-sm text-[#241f19]/80">
                En breve vas a poder modificar tu nombre y contraseña desde aquí.
              </p>
            </div>
          </div>
        )
      }
      {
        showTeamModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg max-w-2xl w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold text-primary">Equipo NEXA</h4>
                <button
                  onClick={ () => setShowTeamModal(false) }
                  className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
                >
                  &times;
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                  equipoNexa.map(member => (
                    <div key={ member.id } className="flex items-center justify-between p-4 rounded-lg bg-[#f2ebfc] border border-[#e7dbf9]">
                      <div className="flex items-center gap-3">
                        <img src={ member.image } alt={ member.name } className="w-12 h-12 rounded-full object-cover shadow" />
                        <div>
                          <p className="font-semibold text-[#241f19]">{ member.name }</p>
                          <p className="text-sm text-[#241f19]/70">{ member.role }</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs bg-primary text-white rounded-full hover:bg-primary/90 transition">Editar</button>
                        <button className="px-3 py-1 text-xs bg-red-500 text-white rounded-full hover:bg-red-600 transition">Eliminar</button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
      {
        showCreateModelModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg max-w-sm w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold text-primary">Crear Modelo</h4>
                <button
                  onClick={ () => setShowCreateModelModal(false) }
                  className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
                >
                  &times;
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {
                modelos.map((modelo, i) => (
                  <div key={ i } className="bg-[#f2ebfc] border border-[#e7dbf9] p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-[#241f19]">{ modelo.nombre }</p>
                    <p className="text-sm text-[#241f19]/80">{ modelo.descripcion }</p>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
        )
      }
      {
        showAllModelsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg max-w-3xl w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold text-primary">Todos los Modelos</h4>
                <button
                  onClick={ () => setShowAllModelsModal(false) }
                  className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
                >
                  &times;
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                  modelos.map((modelo, i) => (
                    <div key={ i } className="bg-[#f2ebfc] border border-[#e7dbf9] p-4 rounded-lg shadow-sm">
                      <p className="font-bold text-[#241f19]">{ modelo.nombre }</p>
                      <p className="text-sm text-[#241f19]/80">{ modelo.descripcion }</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
    </HeroHighlight>
  )
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default DashboardAdmin;