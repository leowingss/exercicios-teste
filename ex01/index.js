let valores = [8, 4, 6, 9, 2, 5, 10, 7, 1, 3]

function ordenarNumeros(a, b) {
    return a - b
}

function imprimirNumeros() {}

valores.sort(ordenarNumeros)

for (let i = 0; i < valores.length; i++) {
    let valoresOrdenados = valores[i] + ''
    console.table(valoresOrdenados)
}

imprimirNumeros()