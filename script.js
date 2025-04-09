 let conta = 0
 let pessoas = 0
 let pocentagem = 0 

 const containput = document.querySelector("#conta")
 containput.addEventListener("input", receberValorConta)

 function receberValorConta(evento) {
    conta = Number(evento.target.value)
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
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input [type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPocentagen )
})

function receberPocentagen(evento) {
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

    console.log(pocentagem)
}

const botaoCustom = document.querySelector("#outra")
gorjetaInput.addEventListener("input", receberPocentagen)