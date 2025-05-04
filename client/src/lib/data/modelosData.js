import moderno1 from '@/assets/models/moderno1.png';
import moderno2 from '@/assets/models/moderno2.png';
import moderno3 from '@/assets/models/moderno3.png';

const THREE_ROOMS = '3 habitaciones';

export const modelos = [
    {
        title: 'Modelo Alaska',
        description: 'Diseño cálido con detalles de madera y cocina integrada.',
        area: '41 m²',
        rooms: '1 habitaciones',
        bathrooms: '1 baño',
        imageSrc: moderno2,
        imageAlt: 'Modelo Alaska',
        type: 'tradicional'
    },
    {
        title: 'Modelo California',
        description: 'Diseño sustentable con materiales reciclables y paneles solares.',
        area: '65 m²',
        rooms: '2 habitaciones',
        bathrooms: '1 baño',
        imageSrc: moderno2,
        imageAlt: 'Modelo California',
        type: 'ecologico'
    },
    {
        title: 'Modelo Florida',
        description: 'Diseño contemporáneo con amplios espacios y grandes ventanales.',
        area: '80 m²',
        rooms: THREE_ROOMS,
        bathrooms: '2 baños',
        imageSrc: moderno1,
        imageAlt: 'Modelo Florida',
        type: 'moderno'
    },
    {
        title: 'Modelo Hawaii',
        description: 'Casa clásica de un piso, ideal para familia numerosa.',
        area: '47 m²',
        rooms: '2 habitaciones',
        bathrooms: '1 baño',
        imageSrc: moderno3,
        imageAlt: 'Modelo Hawaii',
        type: 'tradicional'
    },
    {
        title: 'Modelo Indiana',
        description: 'Estilo minimalista con toques cálidos y gran iluminación natural.',
        area: '62 m²',
        rooms: THREE_ROOMS,
        bathrooms: '2 baños',
        imageSrc: moderno2,
        imageAlt: 'Modelo Indiana',
        type: 'moderno'
    },
    {
        title: 'Modelo Kansas',
        description: 'Vivienda ecológica con techos verdes y aislación térmica.',
        area: '56 m²',
        rooms: THREE_ROOMS,
        bathrooms: '2 baños',
        imageSrc: moderno1,
        imageAlt: 'Modelo Kansas',
        type: 'ecologico'
    },
    {
        title: 'Modelo Oregon',
        description: 'Equilibrio entre elegancia y funcionalidad en un espacio abierto.',
        area: '73 m²',
        rooms: THREE_ROOMS,
        bathrooms: '2 baños',
        imageSrc: moderno3,
        imageAlt: 'Modelo Oregon',
        type: 'moderno'
    },
    {
        title: 'Modelo Texas',
        description: 'Diseño funcional para convivencias cómodas y privadas.',
        area: '79 m²',
        rooms: THREE_ROOMS,
        bathrooms: '2 baños',
        imageSrc: moderno1,
        imageAlt: 'Modelo Texas',
        type: 'tradicional'
    },
    {
        title: 'Modelo Washington',
        description: 'Integración armónica con el entorno natural y bajo consumo.',
        area: '91 m²',
        rooms: THREE_ROOMS,
        bathrooms: '2 baños',
        imageSrc: moderno3,
        imageAlt: 'Modelo Washington',
        type: 'ecologico'
    }
];