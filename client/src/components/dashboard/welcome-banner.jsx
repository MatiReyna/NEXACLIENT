import { TypewriteEffectSmooth } from '../ui/typewriter-effect';

const WelcomeBanner = () => {

    const words = [
        { text: 'Hola, ' },
        { text: 'Facundo ' },
        { text: 'al ' },
        { text: 'Dashboard de NEXA.', className: "text-primary" },
    ];

    return (
        <div className="flex flex-col items-center justify-center mb-8">
            <p className="text-muted-foreground text-sm mb-2">NEXA Constructora Desarrollista</p>
            <TypewriteEffectSmooth words={ words } />
        </div>
    )
};

export default WelcomeBanner;