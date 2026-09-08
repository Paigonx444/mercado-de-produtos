const produtos = [5, 3.50, 4.80, 8.90, 7.32];

const button = document.querySelector("button")
const inputCodigo = document.getElementById("codigo")
const input_quantidade = document.getElementById("quantidade")

const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularValor)

function calcularValor() {
    // pegar o valor da input, verificar se algum valor digitado e calcular a fatura

    if ( inputCodigo.value === "" ||  inputCodigo.value > 5 || inputCodigo.value < 1 || input_quantidade.value === "") {
        alert("Digite um valor válido!")
        return
    }
    else {
        const codigo = inputCodigo.value - 1
        const quantidadeComprada = input_quantidade.value
        const valorPagar = produtos[codigo] * quantidadeComprada
        const valorPagarConvertido = valorPagar.toLocaleString("pt-BR", {style: "currency", currency: "BRL" })
        paragrafoResultado.textContent = `
        Valor a ser pago = ${valorPagarConvertido}
        `
    }

    inputCodigo.value = ""
    input_quantidade.value = ""
}