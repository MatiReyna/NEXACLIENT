import marca1 from '@/assets/logos/marca1.svg';
import marca2 from '@/assets/logos/marca2.svg';
import marca3 from '@/assets/logos/marca3.svg';
import marca4 from '@/assets/logos/marca4.svg';
import marca5 from '@/assets/logos/marca5.svg';
import marca6 from '@/assets/logos/marca6.svg';
import marca7 from '@/assets/logos/marca7.svg';
import marca8 from '@/assets/logos/marca8.svg';

const DEFAULT_QUOTE = 'Calidad e innovación en viviendas modulares.';

const marcas = [
    { id: 2, nombre: 'EcoMaterials', logo: marca3, activo: false, quote: DEFAULT_QUOTE },
    { id: 5, nombre: 'InnoArch', logo: marca6, activo: true, quote: DEFAULT_QUOTE },
    { id: 3, nombre: 'ModernHomes', logo: marca2, activo: true, quote: DEFAULT_QUOTE },
    { id: 8, nombre: 'PremiumStruct', logo: marca8, activo: false, quote: DEFAULT_QUOTE },
    { id: 7, nombre: 'SustainBuild', logo: marca7, activo: true, quote: DEFAULT_QUOTE },
    { id: 6, nombre: 'SmartHouse', logo: marca5, activo: false, quote: DEFAULT_QUOTE },
    { id: 1, nombre: 'TechBuild', logo: marca1, activo: true, quote: DEFAULT_QUOTE },
    { id: 4, nombre: 'GreenConstruct', logo: marca4, activo: false, quote: DEFAULT_QUOTE }
];

export default marcas;