// delete pop push shift unshift slice split join

//operações basicas com arrays

const nomes = ['Alessandro', 'Erilene', 'Menino']
//substituindo um valor no indice
nomes[2] = 'Cachorro Menino';
console.log(nomes)
//adcionando um indice com
nomes[3] = 'exemplo'
console.log(nomes)
//deletando um valor no indice
delete nomes[0]
console.log(nomes)

//remover ultimo elemento
const exemplo = ['Alessandro', 'Erilene', 'Menino'];
exemplo.pop();
console.log(exemplo)
//copia de um arrays
const pessoa =['pessoa1', 'pessoa2'];
const p = pessoa;
console.log(pessoa);
//atenção a operação pop() afeta a constante pesso
p.pop();
console.log(pessoa);

const pessoa2 =['pessoa1', 'pessoa2'];
const q = [...pessoa2];
console.log(pessoa2);
//atenção a operação pop() NÂO afeta a constante pesso pois foi utilizado ...pessoa
q.pop();
console.log(pessoa2);


const nomes1 = ['Alessandro', 'Erilene', 'Menino'];
console.log(nomes1);
//pop remove do final
const removido = nomes1.pop();
//shift remove do inicio
const removidoInicio = nomes1.shift();

console.log("Removido do final: "+removido);
console.log("Removido do inicio: "+removidoInicio);

//push adiciona um valor no final do array
nomes1.push('Fulano');
nomes1.push('Teemo')
console.log(nomes1);

//unshift para adiciona no inico do array
nomes1.unshift('Jose');
console.log(nomes1)

// slice pra fatiar array
const c = nomes1.slice(1,3)
console.log(c)

//separando string e transfomando em array
const personas = 'alessando, erilene, maria, alexandre'
const aux = personas.split(',')
console.log(aux)

const personas2 = ['alessando', 'erilene', 'maria', 'alexandre']
const aux2 = personas2.join(' ')
console.log(aux2)
