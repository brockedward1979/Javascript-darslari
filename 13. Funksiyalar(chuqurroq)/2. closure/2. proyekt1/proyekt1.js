

function savatYarat(){

  let savat = [];

  function qoshish(malumot){
    savat.push(malumot);
  }

  function korsatish(){
    return savat;
  }

  return {
    qoshish,
    korsatish
  }
}

let korzinka = savatYarat();

let qoshish = korzinka.qoshish;
let korsatish = korzinka.korsatish;

let btn_qoshish = document.getElementById("btn_qoshish");
let btn_korsatish = document.getElementById("btn_korsatish");

btn_qoshish.onclick = qoshish("olma");
btn_korsatish.onclick = korsatish;


qoshish("olma");
qoshish("anor");
qoshish("qovun");


