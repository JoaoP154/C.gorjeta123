let conta = 0
let pessoas = 0
let porcentagem = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)
    calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    const paragrafoErro = document.querySelector("#erro")
    const divErro = document.querySelector("#erro-div")

    if (evento.target.value === "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "Erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }

    calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(evento) {
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if (botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })

    if (evento.target.value !== "") {
        porcentagem = parseFloat(evento.target.value) / 100
    } else {
        porcentagem = 0
    }

    calcular()
}

const botaoCustom = document.querySelector("#outra")
botaoCustom.addEventListener("input", evento => {
    porcentagem = parseFloat(evento.target.value) / 100 || 0
    calcular()
})

function calcular() {
    if (conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        const strongTotal = document.querySelector(".total > strong")

        strongGorjetaTotal.innerHTML = `R$ ${((conta * porcentagem) / pessoas).toFixed(2)}`
        strongTotal.innerHTML = `R$ ${((conta * (1 + porcentagem)) / pessoas).toFixed(2)}`
    }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar() {
    containput.value = ""
    pessoasInput.value = ""
    botaoCustom.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"

    conta = 0
    pessoas = 0
    porcentagem = 0
}
