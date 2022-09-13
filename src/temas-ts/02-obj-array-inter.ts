let nombres:string[]=['mario', 'dario', 'juan'];

console.log(nombres);

let datos:(string|boolean|number)[]=['mario', 23, true, 'López'];

console.log(datos);

//Un push sirve para agregar datos
datos.push(200);
datos.push('Mario');
datos.push(false);
console.log(datos);

//Otra manera de crear arreglos
let arreglo:Array<number>=[1,2,3,4]

//Explicación de cómo definir tipo de dato para las propiedades de un objeto
const nombre1:string='ejemplo';

//Crear una intefaz, para definir los tipos de dato del objeto
interface Alumno{
    matricula:number,
    nombre:string,
    edad:number,
    email:string,
    materias?:string[]
}
//Ahora si le metemos el contenido a las propiedades del objeto
const alumno:Alumno={
    matricula:19002286,
    nombre:'Elsa',
    edad:21,
    email:'arandamendozaelsa@gmail.com',
    materias:['Inglés']
}

alumno.nombre='Felipe';
console.log(alumno);
