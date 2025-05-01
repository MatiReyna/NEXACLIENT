import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/button';
import Input from '../ui/input';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';

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
        <HeroHighlight containerClassName="min-h-screen flex items-center justify-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-xl md:text-2xl font-semibold text-center text-[#241f19] max-w-xl mx-auto mb-8 px-4 leading-relaxed"
            >
              Accedé a tu dashboard para ver datos de tu página y{ " " }
              <Highlight className="text-[#241f19]">modificarla a tu gusto</Highlight>.
            </motion.h1>
            <div className="relative w-full max-w-md p-8 space-y-6 rounded-lg shadow-xl bg-white border border-[#e7dbf9] z-10">
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
        </HeroHighlight>
    )
};

export default AdminLogin;