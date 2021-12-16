function criaPessoa(nome, sobrenome, pPeso, pAltura){
    return{
        nome, sobrenome,
        fala(assunto){
            return `${nome} ${sobrenome}: ${assunto}`;
        },
        altura: pAltura,
        peso: pPeso,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        //(get) Getter faz um função se torna um atributo
        get message(){
            console.log("Olá sou uma função se passando por atributo");
        },
        //(set) setter função se torna atributo e recebe paramentro
        set messager(msg){
            msg = msg.split(" ");
        }
    };
}

const f1 = criaPessoa("Alessandro", "Silva", 70, 1.7)
console.log(f1.fala("Ola, tudo bem?"))
console.log(f1.imc());
console.log(f1.message)
console.log(message = "Alessandro da Silva Lima");