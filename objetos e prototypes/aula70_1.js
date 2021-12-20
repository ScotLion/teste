//Factory function 

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa("Alessandro", "Silva");
console.log(p1.nomeCompleto())

// Constructor functions / classes
function Pessoa(nome, idade){
 this.nome = nome;
 this.idade = idade;
    //posso congelar o this nao instacia podera ser alterada isso pode ser perigoso pois torna impossivel a alteração do objeto
 Object.freeze(this)
}
// o que a palava new FAZ?
// 1 - cria um objeto vazio {}
// 2 - atrela a palavra this a variavel instaciadora  (a <- this)
// 3 retorna automaticamente o this

const a = new Pessoa("Ale", 28);
//mesmo eu atribuido maria como nome Ale permanece pois o objeto esta congelado
//ATENÇÃO a constante a aponta para um endereço de memoria exemplo a.nome, a.idades
//Não é possivel altera a constante exemplo a = "felipe", mais e possivel alterar o valore exemplo a.nome="felipe"

Object.freeze(a);
a.nome = "Maria";
console.log(a);