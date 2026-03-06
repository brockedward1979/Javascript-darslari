

let content = document.getElementById("content");
let btn = document.getElementById("btn");
let btn_yuqot = document.getElementById("btn_yuqot");


content.innerHTML = "";




  btn.onclick = function korsat(){

    

    for(let i = 1; i < 16; i++){
  
      setTimeout(() => {
      content.innerHTML += `<img class="rasmlar" src="./coffee/coffee${i}.jpg" alt="rasm${i}">`
    }, i*300);
    }
 
    
  }
  




btn_yuqot.onclick = function yuqot(){

  for(let i = 1; i < 10; i++){

    content.innerHTML = "";
  }
  
}

