class Heroi{
    nome;
    idade;
    tipo;
    ataque;

    atacar (){
        switch (this.tipo){
            case "mago":
                this.ataque = "magia";
                break;
            case "guerreiro":
                this.ataque = "espada";
                break;
            case "monge":
                this.ataque = "artes marciais";
                break;
            case "ninja":
                this.ataque = "shuriken";
                break;
        }
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
    }
}

const guerreiro = new Heroi();
    guerreiro.nome = "Surubabu";
    guerreiro.idade = 48;
    guerreiro.tipo = "guerreiro";
    guerreiro.atacar();


const monge = new Heroi();
    monge.nome = "Zulu";
    monge.idade = 95;
    monge.tipo = "monge";
    monge.atacar();

const ninja = new Heroi();
    ninja.nome = "Jack Bon de Briga";
    ninja.idade = 25;
    ninja.tipo = "ninja";
    ninja.atacar();