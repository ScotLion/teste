function* FuncaoGeradora(){
    yield 'valor 1',
    yield 'valor 2', 
    yield 'valor 3'
}
const aux = FuncaoGeradora();


console.log(aux.next().value)
console.log(aux.next().value)
console.log(aux.next().value)


//usando um for para exibir os valores da function* geradora
/*for(let a of aux){
    console.log(a);
}*/


//criando um funçao geradora infinitamente

function* geraInfinitamente() {
    let i=0;
    while(true){
        yield i;
        i++;
    }
}

const gera = geraInfinitamente();
console.log(gera.next().value);
console.log(gera.next().value);
console.log(gera.next().value);
console.log(gera.next().value);
console.log(gera.next().value);
console.log(gera.next().value);
console.log(gera.next().value);
console.log(gera.next().value);
console.log(gera.next().value);

//delegando funçao geradora a outra funçao geradora
function* gerar1(){
    yield 'teste 1'
    yield 'teste 2'
    yield 'teste 3'
}

function* gerar2(){
    yield* gerar1();
    yield 'teste 4'
}

const p = gerar2()
for(let a of p){
    console.log(a);
}