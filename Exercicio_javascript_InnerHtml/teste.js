let titulo = document.getElementById("titulo")

titulo.innerText = "Javacript Do Zero";

let lista_ordenada = document.getElementById("lista-ordenada");

lista_ordenada.innerHTML = 
`   <h3>Indice</h3>
    <ol>
    <li>Tutorial</li>
    <li>O que Javascript</li>
    <li>Manipulando Javascript</li>
    <li>Exercícios</li>
    </ol>
`

let nao_ordenada = document.getElementById("lista-nao-ordenada");

nao_ordenada.innerHTML = 
`   <h3>Links de navegação</h3>
    <ul>
    <li><a href="https://prozeducacao.com.br">Prozeducação</a></li>
    <li><a href="https://prozeducacao.com.br">Conteudo da proz</a></li>
    <li><a href="https://prozeducacao.com.br">Tutorial</a></li>
   </ul>
`