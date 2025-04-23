import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/button';
import Input from '../ui/input';

const AdminLogin = ({ onLoginSuccess }) => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const navigate = useNavigate();

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
            <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-xl bg-white border border-gray-200">
                <h2 className="text-2x1 font-bold text-center text-[#592e83]">
                    Acceso Administrador
                </h2>
                <form onSubmit={ handleSubmit } className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">
                            Correo electrónico
                        </label>
                        <Input
                            type="email"
                            placeholder="admin@nexa.com"
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">
                            Contraseña
                        </label>
                        <Input
                            type="password"
                            placeholder="******"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                            required
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