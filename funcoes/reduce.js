//reduce função principal fazer operações e reduzir o array
const numeros = [1, 2, 3, 50, 60, 70, 6, 8, 9, 15]
/*
const reduzir = numeros.reduce(function (acumulador, valor, indice, array){
    console.log(acumulador)
}, 5);*/

const retonarPar = numeros.reduce(function (acumulador, valor){
    if(valor % 2 === 0){
        acumulador.push(valor)
    }
        return acumulador;        
    
},[ ])
console.log(retonarPar)


const pessoa = [
    {nome: "Alessandro", idade: 28},
    {nome: "Erilene", idade: 25}
];

const pessoMaisVelha = pessoa.reduce(function(acumulador, valor){
   
    if(acumulador.idade > valor.idade) return acumulador;

    
})

console.log(pessoMaisVelha)
