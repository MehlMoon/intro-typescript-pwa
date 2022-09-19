//Importar y Exportar Métodos o Funciones de archivos diferentes

import { calcularIVA2, Producto } from "./05-desestructurar-funciones";

const tiendaProductos:Producto[] = [
    {
        desc: 'Telefono1',
        precio: 4300
    },
    {
        desc: 'Telefono2',
        precio: 5800
    },
    {
        desc: 'Telefono3',
        precio: 222
    },
];
const [total1,iva1]=calcularIVA2(tiendaProductos);
console.log(`Total: ${total1} \n IVA: ${iva1}`);