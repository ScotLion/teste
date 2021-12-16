

function falaoi(){
    console.log("Oi");
}

falaoi();

//constante pode ser chamada como um uma funçao
const souUmDado = function(){
    console.log("Sou um dado")
}
//souUmDado();

//passando função como paramentro de outra função como
function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

//arrow funciton
const arrowFuncion = ()=>{
    console.log("Sou uma Arrow Function");
}
arrowFuncion();

//Dentro de um objeto eu posso ter um função como

const obj = {
    falar: function(){ console.log("Falar")}
}
obj.falar();

const obj2 = {
    falar(){ console.log("Falar")}
}
obj2.falar();
