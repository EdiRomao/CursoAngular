
class Combustivel{


    preco
    litro
    km
    constructor(preco, litro, km){

        this.preco = preco;
        this.km = km;
        this.litro = litro;    

    }
    Mensagem(){

        this.litro = this.km * 0.4;

        console.log(' O Sr gasta por KM',this.litro);
    }




}
const combustivel = new Combustivel(500, 3,5);

combustivel.Mensagem();