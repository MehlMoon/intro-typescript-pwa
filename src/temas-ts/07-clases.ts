//Clases

class Persona{ //Tenemos Public y Private (Están en Public por default)
    private nombre:string;
    edad:number;

    constructor(a:string, b:number){ //Hacer un constructor antes, nos ahorramos definirlos y podemos hacerlos desde el new
        this.nombre=a;
        this.edad=b;
    }

    setNombre(a:string){
        this.nombre=a;
    }

    private imprimirPersona(){
        console.log(`Nombre: ${this.nombre} /n Edad: ${this.edad}`)
    }

    metodoAlterno(){ //Metodo alterno para las privadas
        this.imprimirPersona();
    }
}

//Instancia de la clase para poderla usar

let persona1:Persona;
persona1=new Persona('Rafael', 23);
//Lo mismo que arriba pero en una línea xd
let persona2=new Persona('Elsa', 21);

//Este es el paso que ahorramos con el constructor
persona1.setNombre('Rafael');
persona1.edad=23;
persona1.metodoAlterno();

//Manda a llamar el método imprimirPersona de la clase Persona
//persona1.imprimirPersona();

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }

    imprimir(){
        console.log(`El valor es: ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();