let valores = [8, 4, 6, 9, 2, 5, 10, 7, 1, 3]

function ordenarNumeros(a, b) {
    return a - b
}

function imprimirNumeros() {

    for (let i = 0; i < valores.length; i++) {
        let valoresOrdenados = valores[i] + ''
        let tabela = {
            numeros: valoresOrdenados
        }
        console.table(tabela)
    }

}

valores.sort(ordenarNumeros)


imprimirNumeros()