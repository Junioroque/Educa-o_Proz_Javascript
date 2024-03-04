const voltar = document.querySelector("a");

document.addEventListener("keyup", (e) => {
    console.log(e.key);
    console.log(e.code);
  
     if(e.code == "Backspace") {
      voltar.click() 
     }
  })