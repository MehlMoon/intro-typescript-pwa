//Desetructuración de Objetos y Arreglos

//Una interfaz dentro de una interfaz permite definir variables dentro de variables
//Por ejemplo aquí estamos haciendo Detalles para meterla dentro de Reproductor
interface Detalles{
    autor:string;
    year:number;
}

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles; //Aquí metemos los valores de la interfaz Detalles
}

const reproductor:Reproductor={
    volumen:90,
    segundo:66,
    cancion:'Las Mañanitas',
    detalles:{
        autor:'Cepillin',
        year:1999,
    },
}

console.log(`El volumen del valor actual es:  ${reproductor.volumen}`);
console.log(`El segundo del valor actual es:  ${reproductor.segundo}`);
console.log(`La canción actual es:  ${reproductor.cancion}`);
console.log(`El autor de la canción es:  ${reproductor.detalles.autor}`);
console.log(`El año de la canción es:  ${reproductor.detalles.year}`);

//Ahora sí vamos a la desestructuración (entrar a la propiedad sin depender del objeto)

//Hacemos esto para hablar del objeto y abajo invocamos sus propiedades
const{volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles;

console.log(`El volumen del valor actual es:  ${volumen}`);
console.log(`El segundo del valor actual es:  ${segundo}`);
console.log(`La canción actual es:  ${cancion}`);
console.log(`El autor de la canción es:  ${detalles.autor}`);
console.log(`El año de la canción es:  ${detalles.year}`);

//Imprimir posiciones de un arreglo
const dbz:string[]=['Goku', 'Vegeta', 'Yamcha', 'Trunks'];
console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);
console.log('Personaje 4: ', dbz[3]);

const[p1,p2,p3,p4]=dbz; //Se pueden omitir, pero es necesario colocar un espacio
//const[p1,,p3,p4]=dbz; Por ejemplo aquí omitiríamos el p2
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
console.log('Personaje 4: ', p4);