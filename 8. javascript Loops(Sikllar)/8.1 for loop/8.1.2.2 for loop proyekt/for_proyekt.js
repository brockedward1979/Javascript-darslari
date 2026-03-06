


let btn = document.getElementById("btn");
let rasm_div = document.getElementById("rasm_div");

let content = document.getElementById("content");






btn.onclick = function korsat(){

  for (let i = 1; i < 100; i++) {
    content.innerHTML += `<img src="../8.1.2 for loop proyekt1/images/coffee${i}.jpg" class="rasmlar">`;
  }
}