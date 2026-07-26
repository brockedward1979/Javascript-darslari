
let ota = document.querySelector("#ota");


let btn = document.querySelector("#btn");

let bolalar = document.querySelectorAll(".bolalar");

let stil_berish = () => {
    bolalar.forEach((element) => {
    element.classList.toggle("bolaga_stil");
  }
  )
}

let body_ga = () => {
  document.body.classList.toggle("body_ga_stil");
}

btn.addEventListener("click", stil_berish);
btn.addEventListener("click", body_ga);





