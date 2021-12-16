// retorno de função

function criaPessoa(nome, sobrenome){
    return{nome, sobrenome}
}

const p1 = criaPessoa("Alessandro", "Silva");
const p2 = criaPessoa("Erilene", "Alves");

console.log(p1, p2);
console.log(p1.nome, p2.nome);

//retornando uma função dentro de outra função
function inicioFrase(inicio){
    function fimFrase(fim){
        return inicio + " " + fim;
    }
    return fimFrase;
}
const olaMundo = inicioFrase("Ola");
console.log(olaMundo("Mundo"));

