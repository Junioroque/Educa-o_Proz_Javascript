
const h2 = document.querySelector("h2")

h2.style.color = "green"
h2.style.fontSize = "50px"
console.log(h2)


const button = document.querySelector("button")

button.style.color = "brack"
button.style.fontFamily ="Verdana, Geneva, Tahoma, sans-serif"
button.style.fontWeight = "bold"
button.style.borderRadius = "20px"
button.style.backgroundColor = "yellow"
button.style.width = "150px"
button.style.alignItems = "center"

//adicionar class

const userNameInput = document.querySelector("#login-usuario")
userNameInput.classList.add("input.correct")


const NameInput = document.querySelector("#login-senha")
NameInput.classList.add("input.correct")

const errorMessagem = document.querySelector(".error-text-senha")
errorMessagem.classList.add("visible")
