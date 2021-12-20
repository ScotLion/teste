//metodo splice
// obs metodo splicce remove os elemento e reetorna uma array
//           -5              -4          -3       -2         -1                
//            1               2           3        4           5
const a = ['Alessandro', 'Erilene', 'Menino', 'pessoa1', 'pessoa2']
//sera armazendo e m b os indice removidos
// Number.MAX_VALUE retorna o maior numero possivel
//const b = a.splice(1, Number.MAX_VALUE);
// splice remove itens apartir de um inicio ate uma quantidade de
                //inicio    QTD     seusa um terceiro paramentro ele subistitu o elemento removido
const b = a.splice(  1   ,   2,     'Luiz' );


console.log(b)
console.log(a)


