const fraseFinal = require('./dados/fraseFinal.js');




// Função que retorna um dado aleatório de um array
//Math.random() retorna um número aleatório entre 0 e 1
//Math.floor() arredonda o número para baixo

/// Função module.exports é usada para exportar módulos em Node.js
// pegadaDadoAleatorio -> É o nome da função que retorna um dado aleatório

//return arrya[indice] -> Retorna o elemento do array no índice aleatório gerado
// arrya.length -> Retorna o tamanho do array, usado para garantir que o índice

module.exports = function pegadaDadoAleatorio(arrya) {
    const indice = Math.floor(Math.random() * arrya.length);
    return arrya[indice];
}

