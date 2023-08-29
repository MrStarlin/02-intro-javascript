//Objeto literal es {} al declarar un valor (const o let).

const persona = {
    nombre: 'Frak',
    apellido: 'Duran',
    edad: 25,
    //Objeto dentro de un objeto.
    habilidades: {
        PC: 'avanzada',
        laptop: 'media'
    }
};

// La manera correcta de copiar la informacion del primer objeto es con tres puntos (...) seguido del nombre del valor declarado (en este caso persona2).
const persona2 = {...persona};
//y de esta forma puedo modificar los valores especificos que quiero que se cambien.
persona2.nombre = 'Starlin';


console.table( persona );
console.table( persona2 );