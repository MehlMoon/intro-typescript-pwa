//Interfaz Producto
export interface Producto{
    desc:string;
    precio:number;
}

//Objeto Telefono
const telefono:Producto={
    desc:'Noki',
    precio:2345
}

//Objeto Tablet
const tablet:Producto={
    desc:'Ipad Air',
    precio:10500
}

function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{ //Un for que pasa por cada uno de los objetos
        total += producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono,tablet];
const IVATot=calcularIVA(articulos1);
console.log(`IVA: ${IVATot}`);

//Lo mismo pero generamos un arreglo para regresar más de un valor
export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{ //Los objetos se desestructuran con llaves
        total+=precio;
    })
    return[total, total*0.16];
}

const articulos2=[telefono,,tablet];
const[total,iva]=calcularIVA2(articulos2);
console.log(`Total: ${total} \n IVA: ${iva}`);