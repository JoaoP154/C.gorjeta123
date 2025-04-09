 let conta = 0
 let pessoas = 0
 let pocentagem = 0 

 const containput = document.querySelector("#conta")
 containput.addEventListener("input", receberValorConta)

 function receberValorConta(evento) {
    conta = Number(evento.target.value)
    calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    const paragrafoErro = document.querySelector(".pesoas .erro")
    const divErro = document.querySelector(".pesoas .input-box")

    if(evento.target.value === "0"){
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "Erro-div")
    }else{
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }

    calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input [type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPocentagem )
})

function receberPocentagem(evento) {
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value){
            botao.classList.add("botao-ativo")
        }
    })

    if(evento.target.value !== ""){
        pocentagem = parceFloat(evento.target.value) / 100
    }else{
        pocentagem = 0
    }

    calcular()
}

const botaoCustom = document.querySelector("#outra")
gorjetaInput.addEventListener("input", receberPocentagem)

function calcular() {
    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = `R$ ${(conta * porcentagem) / pessoas}.toFixed(2)`

        const strongTotal = document.querySelector(".total > strong")
        strongTotal.innerHTML = `R$ ${(conta * porcentagem) / pessoas}.toFixed(2)`
    }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar() {
    containput.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    gorjetaInput.value = ""

    gorjetaInput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"

     conta = 0
     pessoas = 0
     pocentagem = 0 
}