import { useEffect, useState } from 'react';
import Button from '../ui/button';

const AdminDashboard = () => {

    const [ isAuthenticated, setIsAuthenticated ] = useState(false);

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

                <section className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition-all">
                        <h2 className="text-xl font-semibold text-[#592e83] mb-2">
                            Solicitudes de Contacto
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4">
                            Revisá los mensajes de los usuarios interesados en modelos.
                        </p>
                        <Button className="w-full">Ver solicitudes</Button>
                    </div>

                    <div className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition-all">
                        <h2 className="text-xl font-semibold text-[#592e83] mb-2">
                            Gestión de Modelos
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4">
                            Agregá, editá o eliminá modelos de casas desde esta sección.
                        </p>
                        <Button className="w-full">Administrar modelos</Button>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default AdminDashboard;