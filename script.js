const aumento = [0.2, 0.15, 0.1, 0.05]

const salario = document.getElementById("salario")
const botao = document.querySelector('button')

let salarioNovoP = document.getElementById("novo-salario");
let aumentoP = document.getElementById("aumento");
let porcentagemP = document.getElementById("porcentagem");

botao.addEventListener("click", calcular)

function calcular() {
    
    const salarioN = Number(salario.value)

    let porcentagem
    if (salarioN <= 1000.00) {
        porcentagem = aumento[0]
    }
    else if (salarioN <= 3000.00) {
        porcentagem = aumento[1]
    }
    else if (salarioN <= 8000.00) {
        porcentagem = aumento[2]
    }
    else {
        porcentagem = aumento[3]
    }

    let porcentagemCorreta = porcentagem * 100
    let diferenca_aumento = salarioN * porcentagem
    let salarioNovo = salarioN + diferenca_aumento

    salarioNovoP.innerText = `Novo Salario = ${salarioNovo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
    aumentoP.innerText = `Aumento = ${diferenca_aumento.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
    porcentagemP.innerText = `Porcentagem = ${porcentagemCorreta}%`
}