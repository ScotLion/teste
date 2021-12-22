//Usase prototype quando um objeto tem um metodos igual para todos
//Ter um função que se repete cosome muito recurso.
//Usando prototype somente cria um link para o medoto 
//ou função que so ira cosumir quando for chamado

function Pessoa(nome, sobrenome){    
    this.nome = nome;
    this.sobrenome = sobrenome;       
}
//linkando o metodo a function Pessoa.
Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa("Alessandro", "Silva");
console.dir(pessoa1);
console.log(pessoa1.nomeCompleto())