const numeros = [1, 2, 3, 50, 60, 70, 6, 8, 9, 15];
let a = 0;
numeros.forEach((valor, indece, array)=>{
    console.log(valor);
    
    a = a + valor;
    return a;
});

console.log(`Total: ${a}`);
