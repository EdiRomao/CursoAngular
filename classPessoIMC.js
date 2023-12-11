class Pessoa{

    nome
    altura
    peso

    constructor(nome, peso, altura, IMC){

            this.nome = nome;
            this.altura = altura;
            this.peso = peso;

            
    }
    CalcularIMC(){
        return this.peso / ( this.altura * this.altura);
    }
    ClassificarIMC(){

        const imc = this.CalcularIMC();

        if (imc < 18.5) {
            console.log(' Abaixo do peso');
            
            
        } else if ( imc >= 18.5 && imc < 25) {
            console.log(' Peso normal');
            
            
        }else if (imc >= 25 && imc < 30) {
            console.log('Acima do Peso');
            
        }else if (imc >=  30 && imc < 40 ) {
            console.log('Obeso');
            
        }else{
            console.log('Obesidade Grave');
            
        }
    }
    caro ={

        cor : 12,
        per :'feijão'
    }
    
}

const pessoa1 = new Pessoa('Edmilson',1.75,70).ClassificarIMC();


