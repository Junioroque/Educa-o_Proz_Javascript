
const h2 = document.querySelector("h2")

h2.style.color = "black"
h2.style.fontSize = "50px"


const button = document.querySelector("button")

button.style.color = "brack"
button.style.fontFamily ="Verdana, Geneva, Tahoma, sans-serif"
button.style.fontWeight = "bold"
button.style.borderRadius = "20px"
button.style.border = "0px solid"
button.style.backgroundColor = "orange"
button.style.width = "150px"
//adicionar class

const userNameInput = document.querySelector("#login-usuario")
userNameInput.classList.add("correct")


const NameInput = document.querySelector("#login-senha")
NameInput.classList.add("error")

const errorMessagem = document.querySelector(".error-text-senha")
errorMessagem.classList.add("visible")
