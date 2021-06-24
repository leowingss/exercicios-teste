const prompt = require('prompt-sync')()
const clc = require("cli-color");

function pedirIdade() {
    const idade = parseInt(prompt('Digite sua idade: '))
    return idade
}

function verificarIdade() {
    const idade = pedirIdade()
    if (idade >= 18) {
        console.log(clc.green.underline("Permissão concedida"))
    } else {
        console.log(clc.red.redBright.underline("Sem permissão"))
    }
}

verificarIdade()