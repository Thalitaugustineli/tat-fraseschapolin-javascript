
// Importando módulos necessários -> para gerar dados aleatórios
// Importando o módulo pegadaDadoAleatorio.js que contém a função para pegar um
const pegadaDadoAleatorio = require('./pegadaDadoAleatorio.js');

// Importando os dados necessários
// Importando os vilões, objetos e frases clássicas do Chapolin
const viloes = require('./dados/viloes.js');
const objetos = require('./dados/objetos.js');
const frasesClassicas = require('./dados/frasesClassicas.js');
const fraseFinal = require('./dados/fraseFinal.js');

// 
function chapolin() {
    const DOIS_SEGUNDOS = 2000; // Definindo um atraso de 2 segundos
console.log('');
console.log('Mais rápido que uma tartaruga!');
console.log('Mais forte que um rolo compressor!');
console.log('Mais ágil que uma lebre!');
console.log('Ele é o...');
    setTimeout(() => { // Atrasando a mensagem para criar suspense

    console.log('');
    console.log('CHAPOLIN COLORADO!');

        setTimeout(() => {
            console.log('');
            console.log('Quem não conhece o Chapolin Colorado?');
            console.log('O herói mais atrapalhado da televisão brasileira!');
            console.log('Ele sempre está pronto para ajudar, mesmo que suas soluções sejam um pouco... peculiares.');
            console.log('');
            console.log('Vejamos alguns dados aleatórios sobre o Chapolin Colorado:');
            console.log('');
            setTimeout(() => { // Atrasando a mensagem para criar mais suspense
    
                    // Pegando um vilão aleatóri
                    console.log(`Hoje, o Chapolin enfrenta o vilão: ${pegadaDadoAleatorio(viloes)}`);
                    
                    // Pegando um objeto aleatório
                    console.log(`Ele usa seu famoso objeto: ${pegadaDadoAleatorio(objetos)}`);
                    
                    // Pegando uma frase clássica aleatória
                    console.log(`E não podemos esquecer de sua famosa frase: "¨${pegadaDadoAleatorio(frase)}"`);
                    setTimeout(() => { // Atrasando a mensagem para criar mais suspense
                        console.log('');
                        console.log(pegadaDadoAleatorio(fraseFinal));
    
                    }, DOIS_SEGUNDOS); // Terceiro atraso para criar mais suspense
    
                }, DOIS_SEGUNDOS); // Segundo atraso para criar mais suspense
    
            }, DOIS_SEGUNDOS); // Primeiro atraso para criar suspense
    
        }, DOIS_SEGUNDOS); // Fechando o primeiro setTimeout
    }

    chapolin(); // Chamando a função chapolin para iniciar o programa