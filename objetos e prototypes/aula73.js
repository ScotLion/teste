
//
//...(spread) e Object.assign,  ambos copia um objeto para outro como criar novos atributos
//getOwnPropertyDescriptor() é usado para ver as configura das propriedades de um objeto
//Object.keys
//Object.values
//Object.entries - exite chave e valores em array separados

const produto = {nome: 'Produto', preco: 20};
//Copiado objeto produto usando spades(...) para caneca e adicionando novo atributo
//const caneca = {...produto, estoque: 100}

//conpiando usando para copia e adiciona atributosObject.assign({}, produto, {estoque: 50});
const caneca = Object.assign({}, produto, {estoque: 50});
console.log(produto);

console.log(caneca);
//visualizando a propriedade do objeto produto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//alterando as propriedade do objeto produto
Object.defineProperties(produto, {
    nome: {configurable: false}
});
//visualizando novamente as propriedade do objeto produto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//como o atributo foi configurado para false delete NÃO vai funcinar para 'nome'
delete produto.nome;
//como o atributo foi configurado para trues delete vai funcinar para 'nome'
delete produto.preco;

console.log(produto)
