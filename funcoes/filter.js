//função filter sempre retorna uma Array
const numeros = [1,2,3,50,60,70,6,8,9,15]
//filtrando numero maior que 10 arro function
//ATENÇÃO filter espera tres paramentro valor, indice e array
const numerosFiltrados = numeros.filter((num, a, b)=>{
    
    return num > 10
});
//console.log(numerosFiltrados);

/* Forma extendida da função acima
function filtraMiorque10(numero){
    if(numero > 10){
        return numero;
    }
}
const numerosFiltrados = numeros.filter(filtraMiorque10);*/

const pessoa = [
    {nome: 'luiz', idade: 50},
    {nome: 'Antonio', idade: 20},
    {nome: 'João', idade: 15},
];



const filtraNomesMenorQ4 = pessoa.filter((valor)=>{
    if(valor.nome.length <= 4){
        return valor.nome;
    }
});

const MostraNomeComLetraZ = pessoa.filter( (valor)=>{    
      return valor.nome.toLowerCase().endsWith('z');
});

const MostraUtilmaLetraNome = pessoa.filter( (valor)=>{    
    const a = valor.nome.substr(valor.nome.length-1,valor.nome.length);
    //console.log(a)
    valor.nome = a;
    return valor.nome;
});
console.log(filtraNomesMenorQ4);
console.log(MostraNomeComLetraZ);
console.log(MostraUtilmaLetraNome);