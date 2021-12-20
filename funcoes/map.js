const numeros = [1,2,3,50,60,70,6,8,9,15];
const numeroEmdorbro = numeros.map((valor) =>{return valor * 2});
console.log(numeroEmdorbro)

const pessoa = [
    {nome: 'luiz', idade: 50},
    {nome: 'Antonio', idade: 20},
    {nome: 'João', idade: 15},
];

const retornandoSomenteIdade = pessoa.map((valor) => {return {idade: valor.idade}})

/* adiciona um chave e valor
const retornandoSomenteIdade = pessoa.map((valor) => {
    valor.id = a;
    return valor;
})
*/
//retornando somente o nome das pessoas
const SomenteNomedaPessoas = pessoa.map((valor) => {
    return valor.nome;
});
console.log(SomenteNomedaPessoas);
console.log(retornandoSomenteIdade);