
class Carro{ // classe Carro


        marca
        cor
        modelo
        gasto_medio_km
        constructor(marca, cor, gasto_medio_km){ // metodo construtor

            this.marca = marca;
            this.cor = cor;
            this.gasto_medio_km = gasto_medio_km;


        }
        calcularGastoDePercurso( distanciaKM, precoCombustivel){

            return distanciaKM * this.gasto_medio_km * precoCombustivel;



        }

} //  final da classe Carro

const carro = new Carro('BMW', 'Branco-Preto', 1/12);

console.log(carro.calcularGastoDePercurso(70, 5));



//5km gasta 2litros de gasolina saber quantos ele gasta em 1

