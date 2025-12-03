// Criar uma calculadora de partidas ranqueadas e determinar o nível do jogador

// Se vitórias for menor do que 10 = Casual
// Se vitórias for entre 11 e 20 = Prata
// Se vitórias for entre 21 e 50 = Ouro
// Se vitórias for entre 51 e 80 = AK
// Se vitórias for entre 81 e 90 = Águia
// Se vitórias for entre 91 e 100= Supremo
// Se vitórias for maior ou igual a 101 = Global


let victorys = 120
let defeat = 5
let draw = 10
let saldo = victorys - defeat - draw

let rank = function(victorys){
    let patente = ""
    
    switch(true){
    
        case ( victorys <= 10):
            patente = "Casual player"
        break
        case (victorys >= 11 && victorys <= 20):
            patente = "Prata"
            break
        case (victorys >= 21 && victorys <= 50 ):
            patente = "Ouro"
            break
        case (victorys >= 51 && victorys <= 80):
            patente = "AK"
            break
        case (victorys >= 81 && victorys <= 90):
            patente = "Águia"
            break
        case (victorys >= 91 && victorys <= 100):
            patente = "Supremo"
            break
        case (victorys  >= 101):
            patente = "Global"
            break

        default:
            patente = "Jogar a MD10"
            break
    }

    return patente

}

console.log(rank(saldo))
