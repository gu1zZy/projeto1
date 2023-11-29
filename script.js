const inputs = document.querySelectorAll(".inputs input")
const botao = document.querySelector("button")
const resultado = document.querySelector("#resultado")
const spanErro = document.querySelector("#erro")

botao.addEventListener("click", function(){
    total = 0;
    inputs.forEach((input) => {
        let numero = parseFloat(input.value)
        total += numero
    })
    if (isNaN(total)){
        resultado.innerText = "Você colocou um texto em algum lugar ai"
    } else {
        resultado.innerText = total
    }
    
})
