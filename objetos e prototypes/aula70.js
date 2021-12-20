const pessoa = new Object();

pessoa.nome = "Ale";
pessoa.peso = 73;
pessoa.altura = 1.73;

pessoa.IMC = function (){
   return this.peso / (this.altura * this.altura);
    
}

console.log(`Nome: ${pessoa.nome} com IMC: ${pessoa.IMC()}`)

//exibir chaves do objeto
for(let key in pessoa){
    console.log("Chaves do Objeto");
    console.log(key);
    console.log("Valor do Objeto");
    console.log(pessoa[key]);
}