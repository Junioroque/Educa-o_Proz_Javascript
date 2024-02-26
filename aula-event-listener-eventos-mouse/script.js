let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};


// ------ VARIAVEIS------------ //

let btnAddProduto01 = document.querySelector("#btn-adicionar-produto-01")
let btnSubtrair = document.querySelector("#btn-subtrair-produto-01")
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01")
let valorProduto01 = 11.66

// ------ FUNÇÕES -------------- //
function atualizarSubtotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + item();
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

function item() {
   if(subtotalInfo.quantidade == 0){
    return " item";
   } else if(subtotalInfo.quantidade == 1) {
    return " item"
   }else {
    return " itens"
   }
}

atualizarSubtotal()

function adicionarUm() {
  //Manipular input(add 1)
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1

  //Manipular quantidade no subTotalInf
  subtotalInfo.quantidade =  subtotalInfo.quantidade + 1 

  //Manipular o valor do subTotalInf
  subtotalInfo.valor = subtotalInfo.valor + valorProduto01

  // Atualizar a DOM
  atualizarSubtotal()
}

function removerUm() {
  if(quantidadeProduto01.value > 0 ) {
    //Manipular input(add 1)
    quantidadeProduto01.value = quantidadeProduto01.value - 1

    //Manipular quantidade no subTotalInf
    subtotalInfo.quantidade =  subtotalInfo.quantidade - 1
    
    //Manipular o valor do subTotalInf
    subtotalInfo.valor = subtotalInfo.valor - valorProduto01

    // Atualizar a DOM
    atualizarSubtotal()
  }
}


// -------EVENTO --------------//
btnAddProduto01.addEventListener("click",adicionarUm)

btnSubtrair.addEventListener("click",removerUm)