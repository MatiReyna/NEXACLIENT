import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/button';
import Input from '../ui/input';

const AdminLogin = ({ onLoginSuccess }) => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const navigate = useNavigate();

    // ⚠️ Login hardcodeado solo para pruebas. Reemplazar por autenticación real.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'administrador@nexa.com' && password === 'nexa123') {
            localStorage.setItem('admin-auth', 'true')
            setError('')
            navigate("/administrador/dashboard");
        } else {
            setError('Credenciales inválidas. Intentá de nuevo.')
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-xl bg-white border border-[#e7dbf9]">
                <h2 className="text-2xl font-bold text-center text-primary">
                    Acceso Administrador
                </h2>
                <form onSubmit={ handleSubmit } className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-[#241f19]/80">
                            Correo electrónico
                        </label>
                        <Input
                            type="email"
                            placeholder="admin@nexa.com"
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-[#241f19]/80">
                            Contraseña
                        </label>
                        <Input
                            type="password"
                            placeholder="******"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    {
                        error && (
                            <p className="text-sm text-red-500 font-medium text-center">
                                { error }
                            </p>
                        )
                    }
                    <Button type="submit" className="w-full mt-2">
                        Acceder
                    </Button>
                </form>
            </div>
        </div>
    )
};

export default AdminLogin;