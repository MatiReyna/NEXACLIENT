export default function validates(objeto, type) {
    const errors = {};

    if (type === 'promos') {
        if (objeto.name?.trim().length < 4) {
            errors.name = "El nombre de la promcion debe tener por lo menos 4 letras"
        };
        if (objeto.name?.length > 100) {
            errors.name = "El nombre de la promcion es demasiado largo!"
        };
        if(!objeto.url.length){
            errors.url = "Porfavor añada una imagen"
        };
    }
    else {
        if (objeto.nameModel?.trim().length < 4) {
            errors.nameModel = "El nombre del modelo debe tener por lo menos 4 letras"
        };
        if (objeto.nameModel?.length > 100) {
            errors.nameModel = "El nombre del modelo es demasiado largo!"
        };
        if(!objeto.inside.length){
            errors.inside = "Porfavor añada por lo menos una imagen del interior"
        };
        if(!objeto.blueprints.length){
            errors.blueprints = "Porfavor añada por lo menos una imagen de los planos"
        };
        if(!objeto.offside.length){
            errors.offside = "Porfavor añada por lo menos una imagen del exterior"
        };
        if (objeto.price < 1) {
            errors.price = "Por favor determine un precio mayor a 0"
        };
        if (!/^\d+(\.\d{1,2})?$/.test(objeto.price)) {
            errors.price = "El precio puede tener hasta dos decimales";
        };
        if (objeto.rooms < 1){
            errors.rooms = "Minimo debe haber una habitacion"
        };
        if (objeto.bathroom < 1){
            errors.bathroom = "Minimo debe haber una habitacion"
        };
        if (objeto.dimensions < 1){
            errors.dimensions = "Las dimensiones del modelo no pueden ser cero"
        };
        if (objeto.description?.trim().length < 10) {
            errors.description = "Ponga alguna descripción de por lo menos 10 caracteres";
        };
    }
    return errors;
};