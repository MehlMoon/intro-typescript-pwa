//Práctica 1
//Corregir los errores

//Primero necesitamos crear una interfaz para definir el tipado de datos
interface Direccion {
    calle: string;
    estado: string;
    pais: string;
}

interface AlumnoUTL {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => void;
}


const alumnoUTL: AlumnoUTL = {
    nombre: 'Elsa',
    edad: 21,
    direccion: {
        calle: 'Jerez de Cartagena',
        pais: 'MX',
        estado: 'GTO',
    },
    mostrarDireccion() {
        return this.nombre + this.edad + this.direccion.estado + this.direccion.pais + this.direccion.calle;
    }
}

const direccion = alumnoUTL.mostrarDireccion();
console.log(direccion);