import { TypewriterEffectSmooth } from '../ui/typewriter-effect';

const WelcomeBanner = () => {

    const words = [
        { text: 'Hola, 👋 ' },
        { text: 'Facundo ' },
        { text: 'al ' },
        { text: 'Dashboard de NEXA.', className: "text-primary" },
    ];

    return (
        <div className="flex flex-col items-center justify-center mb-8 mt-4 sm:mt-0 text-center" aria-label="Bienvenida al dashboard NEXA">
            <p className="text-muted-foreground text-sm mb-2">NEXA Constructora Desarrollista</p>
            <div className="text-xl sm:text-2xl md:text-3xl">
              <TypewriterEffectSmooth words={ words } />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              ¡Gestioná tus modelos, contactos y más desde un solo lugar!
            </p>
        </div>
    )
};

export default WelcomeBanner;