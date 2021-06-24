function insert(numeroNovo) { // Ação de quando clicar no botão inserir na calculadora.
    const num = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = num + numeroNovo
}

function clean() { // Limpar 
    document.getElementById('resultado').innerHTML = " "
}

function back() {
    const result = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = result.substring(0, result.length - 1) // vai pegar todos caracteres e diminuir 1 de acordo com o tamanho 
        //O método substring() retorna a parte da string entre os índices inicial e final.
}

function calcular() {
    const result = document.getElementById('resultado').innerHTML

    if (result) { //Se tiver número, realizar calculo.
        document.getElementById('resultado').innerHTML = eval(result) // Eval avalia a expressão
    } else {
        document.getElementById('resultado').innerHTML = 'undefined'
    }
}