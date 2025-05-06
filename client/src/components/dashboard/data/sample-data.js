export const marcas = [
    { id: 1, name: 'Marca 1', logo: '/placeholder.svg?height=100&width=100' },
    { id: 2, name: 'Marca 2', logo: '/placeholder.svg?height=100&width=100' },
    { id: 3, name: 'Marca 3', logo: '/placeholder.svg?height=100&width=100' },
    { id: 4, name: 'Marca 4', logo: '/placeholder.svg?height=100&width=100' },
]

export const modelos = [
    {
        id: 1,
        nombre: 'Casa Moderna',
        descripcion: 'Diseño contemporáneo con lineas limpias y espacios abiertos.',
        categoria: 'Moderno',
    },
    {
        id: 2,
        nombre: 'Casa Tradicional',
        descripcion: 'Estilo clásico con detalles arquitectónicos atemporales.',
        categoria: 'Tradicional',
    },
    {
        id: 3,
        nombre: 'Casa Ecológica',
        descripcion: 'Diseño sostenible con materiales reciclables y paneles solares.',
        categoria: 'Ecológica',
    },
    {
        id: 4,
        nombre: 'Casa Natural',
        descripcion: 'Integración con el entorno natural y materiales sostenibles.',
        categoria: 'Ecológica',
    },
    {
        id: 5,
        nombre: 'Casa Minimalista',
        descripcion: 'Espacios simples y funcionales con lo esencial.',
        categoria: 'Moderno',
    },
    {
        id: 6,
        nombre: 'Casa Colonial',
        descripcion: 'Diseño con detalles de madera y cocina integrada.',
        categoria: 'Tradicional',
    }
]

export const equipoNexa = [
    {
        id: 1,
        name: 'Facundo Sagario',
        role: 'CEO',
        image: '/placeholder.svg?height=200&width=200',
    },
    {
        id: 2,
        name: 'Matias Reyna',
        role: 'Developer Engineer',
        image: '/placeholder.svg?height=200&width=200',
    },
    {
        id: 3,
        name: 'Nicolas Sagario',
        role: 'Sales Manager',
        image: '/placeholder.svg?height=200&width=200',
    },
]

export const contactRequests = [
    { name: 'Juan Pérez', email: 'juan@email.com', modelo: 'Casa Moderno', status: 'new' },
    { name: 'Ana Pérez', email: 'ana@email.com', modelo: 'Casa Tradicional', status: 'pending' },
    { name: 'Carlos Méndez', email: 'carlos@email.com', modelo: 'Casa Natural', status: 'closed' },
]

export const ratings = [
    { text: 'Muy buena atención y excelente calidad de la casa', rating: 5, author: 'María González', date: '15/04/2024' },
    { text: 'Me encantó el diseño moderno, pero tardaron un poco en responder', rating: 3, author: 'Roberto Sánchez', date: '10/04/2024' },
    { text: 'No me convenció la atención, esperaba más profesionalismo', rating: 2, author: 'Laura Martínez', date: '05/04/2024' },
    { text: 'Excelente servicio, muy recomendable', rating: 5, author: 'Carlos Rodríguez', date: '01/04/2024' },
    { text: 'Buena relación calidad-precio', rating: 4, author: 'Ana López', date: '28/03/2024' },
]

export const getStatusColor = (status) => {
    switch (status) {
        case 'new':
            return 'bg-brand-500'
        case 'pending':
            return 'bg-yellow-500'
        case 'closed':
            return 'bg-red-500'
        default:
            return 'bg-gray-500'
    }
}

export const getStatusText = (status) => {
    switch (status) {
        case 'new':
            return 'Nuevo'
        case 'pending':
            return 'Pendiente'
        case 'closed':
            return 'Cerrado'
        default:
            return 'Desconocido'
    }
}