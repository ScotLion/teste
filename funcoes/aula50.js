function funcao(){
    console.log("Ola mundo")
}
funcao("valor", 1, 2);

//1 - a função com palavra function tem um paramentro especial chamado arguments
function funcao2(){
    console.log(arguments)
    console.log(arguments[0])
}
funcao2("valor 10", 1, 2);

//soma usando for Antigo
function funcao3(){
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i]
    }
    console.log("Soma:" + total);
}
funcao3(1, 2, 3, 4,5);

//soma usando for Novo
function funcao4(){
    let total = 0;
    for(let arg of arguments){
        total += arg;
    }
    console.log("Soma For novo:" + total);
}
funcao4(1, 2, 3, 4,5);

//função com paramentro
function soma(a=0, b=0){
    console.log(a + b);
}
soma(4);

//usando undefined para usar o valor de iniciazação do parametro
function soma2(a=0, b=3, c=0){
    console.log(a + b + c);
}
soma2(4, undefined, 10);

//passando objeto como paramentro
function nomeObjeto({nome, idade}){
    console.log(nome, idade);
}
nomeObjeto({nome: "Alessandro", idade: 28});

//passando Array como paramentro
function nomeArray([nome, idade]){
    console.log(nome, idade);
}
nomeArray(["Alessandro", 25]);

// usando rest operato (...numeros)
//arguments de functions e rest operator tem mesma utilidade

function somaNova(operador, inicio, ...numeros){
    console.log("Atenção o ...numero pega os resto dos paramentro passado na função!");
    console.log(operador, inicio, numeros)
    for(let num of numeros){
        if(operador === "+"){inicio = inicio + num};
        if(operador === "-"){inicio = inicio - num};
        if(operador === "*"){inicio = inicio * num};
        if(operador === "/"){inicio = inicio / num};
    }
    console.log("Somando: "+inicio);
}
somaNova("-", 0, 1,2,3,4);

//observação sobre uso for in e for of
//usando for in vc visualiza os inidices
function forin(...num){
   console.log("ForIN")
    for(let numero in num){
       console.log(numero);
   }
}
forin(10,15,30)
//usando o for of vc visualiza os valores
function forof(...num){
    console.log("ForOF")
    for(let numero of num){
        console.log(numero);
    }
 }
 forof(10,15,30)
