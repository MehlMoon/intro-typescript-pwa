//Pedir dos numero y calcular la multiplicacion de esas sumas
//N1 base y se debe sumar la cantidad de veces de N2 metodos privados y publicos

export class Numeros{
    private n1:number;
    private n2:number;

    setN1(a:number){
        this.n1=a;
    }

    setN2(b:number){
        this.n1=b;
    }

    private multiplicacion(): number{
        let total=0
        for(let i=1; i<=this.n2;i++){
            total = total+this.n1
        }
        return total
    }

    getResultadoMulti(): void {
        console.log(this.multiplicacion());
      } 
}