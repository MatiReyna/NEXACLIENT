import { useEffect, useState } from 'react';
import Button from '../ui/button';
import ModelManager from './ModelManager';

const AdminDashboard = () => {

    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ view, setView ] = useState('home');

    useEffect(() => {
        const auth = localStorage.getItem('admin-auth');
        setIsAuthenticated(auth === 'true');
    }, []);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <div className="text-center text-muted-foreground text-lg font-semibold">
                    No tenés acceso. Por favor ingresá desde el formulario de administrador.
                </div>
            </div>
        )
    }

    if (view === 'modelos') {
        return <ModelManager />
    }

    return (
        <div className="min-h-screen px-4 py-10 bg-background text-foreground">
            <div className="max-w-6xl mx-auto space-y-10">
                <header className="space-y-2">
                    <h1 className="text-3xl font-bold text-[#592e83]">
                        Panel de Administración
                    </h1>
                    <p className="text-muted-foreground">
                        Bienvenido al dashboard. Desde aquí podés gestionar tu contenido.
                    </p>
                </header>

                <section className="grid md:grid-cols-4 md:grid-rows-5 gap-6">
                    <div className="col-span-4 md:col-span-2 row-span-5 bg-white border rounded-xl p-6 shadow hover:shadow-lg transition-all space-y-4">
                        <h2 className="text-xl foont-semibold text-[#692e83] mb-2">
                            Solicitudes de Contacto
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-left text-muted-foreground">
                                        <th className="py-2 pr-4">Fecha</th>
                                        <th className="py-2 pr-4">Nombre</th>
                                        <th className="py-2 pr-4">Correo</th>
                                        <th className="py-2">Modelo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            fecha: '2023-01-01',
                                            nombre: 'Matias Reyna',
                                            correo: 'matias@nexa.com',
                                            modelo: 'Casa Natural'
                                        },
                                        {
                                            fecha: '2023-01-02',
                                            nombre: 'Ana Pérez',
                                            correo: 'ana@nexa.com',
                                            modelo: 'Casa Tradicional'
                                        },
                                        {
                                            fecha: '2023-01-03',
                                            nombre: 'Juan Pérez',
                                            correo: 'juan@nexa.com',
                                            modelo: 'Casa Tradicional'
                                        },
                                        {
                                            fecha: '2023-01-04',
                                            nombre: 'Juan Pérez',
                                            correo: 'juan@nexa.com',
                                            modelo: 'Casa Tradicional'
                                        },
                                        {
                                            fecha: '2023-01-05',
                                            nombre: 'Carlas Méndez',
                                            correo: 'carlas@nexa.com',
                                            modelo: 'Casa Natural'
                                        },
                                        {
                                            fecha: '2023-01-06',
                                            nombre: 'Carlas Méndez',
                                            correo: 'carlas@nexa.com',
                                            modelo: 'Casa Natural'
                                        }
                                    ].map((item, idx) => (
                                        <tr key={ idx } className="border-b last:border-none">
                                            <th className="py-2 pr-4">{ item.fecha }</th>
                                            <td className="py-2 pr-4">{ item.nombre }</td>
                                            <td className="py-2 pr-4">{ item.correo }</td>
                                            <td className="py-2">{ item.modelo }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Button className="w-full mt-2">Ver todos</Button>
                    </div>

                    <div className="col-span-4 md:col-span-2 row-span-2 md:col-start-3 bg-white border rounded-xl p-6 shadow hover:shadow-lg transition-all space-y-4">
                        <h2 className="text-xl font-semibold text-[#592e83] mb-2">
                            Mi Perfil
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4">
                            Modifica tu información personal y datos de acceso.
                        </p>
                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Nombre Completo"
                                className="w-full px-3 py-2 border rounded-md text-sm"
                            />
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full px-3 py-2 border rounded-md text-sm"
                            />
                            <input
                                type="password"
                                placeholder="Nueva contraseña"
                                className="w-full px-3 py-2 border rounded-md text-sm"
                            />
                            <Button className="w-full">Actualizar perfil</Button>
                        </div>
                    </div>

                    <div className="col-span-4 md:col-span-2 row-span-3 md:col-start-3 md:row-start-3 bg-white border rounded-xl p-6 shadow hover:shadow-lg transition-all space-y-4">
                        <h2 className="text-xl font-semibold text-[#592e83] mb-2">
                            Gestión de Modelos
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4">
                            Agregá, editá o eliminá modelos de casas desde esta sección.
                        </p>
                        <Button className="w-full" onClick={ () => setView('modelos') }>
                            Administrar modelos
                        </Button>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#592e83] mb-4">
                        Modelos actuales
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            {
                                id: 1,
                                nombre: 'Moderno XL',
                                categoria: 'Moderno',
                                metrosCuadrados: 120,
                                habitaciones: 5,
                                imagen: 'https://picsum.photos/id/10/400/300',
                            },
                            {
                                id: 2,
                                nombre: 'Casa Natural',
                                categoria: 'Ecológico',
                                metrosCuadrados: 100,
                                habitaciones: 4,
                                imagen: 'https://picsum.photos/id/100/400/300',
                            },
                            {
                                id: 3,
                                nombre: 'Casa Tradicional',
                                categoria: 'Tradicional',
                                metrosCuadrados: 80,
                                habitaciones: 3,
                                imagen: 'https://picsum.photos/id/200/400/300',
                            }
                        ].map((modelo) => (
                            <div
                                key={ modelo.id }
                                className="rounded-lg border bg-white shadow-sm overflow-hidden"
                            >
                                <img
                                    src={ modelo.imagen }
                                    alt={ modelo.nombre }
                                    className="w-full h-36 object-cover"
                                />
                                <div className="p-3 space-y-1">
                                    <h3 className="text-base font-semibold">{ modelo.nombre }</h3>
                                    <p className="text-sm text-muted-foreground">
                                        { modelo.metrosCuadrados } metros cuadrados . { modelo.habitaciones } habs.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
};

export default AdminDashboard;