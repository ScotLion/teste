function Produto(nome, valor, estoque){
        this.nome = nome;
        this.valor = valor;
        //defineProperty recebe o Objeto, a chave do objeto e as configurações do objeto {}
        Object.defineProperty(this, 'estoque', {
            // enumerable é usado para visibilidade do atributo estoque
            enumerable: true,
            value: estoque, 
            //writable permite alterar ou nao o valor de estoque
            writable: false,
            configurable: true //permite a chave estoque ser reconfigurada exemplo o atributo nao pode ser deletado
        })

        //defineProperties recebe o objeto, a chave{} e cada chave possui suas configurações
        Object.defineProperties(this, {
            //Chave: {configurações}
            valor: {
            // enumerable é usado para visibilidade do atributo estoque
            enumerable: true,
            value: valor, 
            //writable permite alterar ou nao o valor de estoque
            writable: false,
            configurable: true //permite a chave estoque ser reconfigurada exemplo o atributo nao pode ser deletado
            },
        
            nome: {},
        })

    }

const p1 = new Produto("Manteiga", 2.50, 10);
console.log(p1)

