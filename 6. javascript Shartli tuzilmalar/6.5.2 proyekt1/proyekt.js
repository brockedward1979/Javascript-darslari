


function buyurtmaniHisoblash(){

  let muqovalimi = document.getElementById("muqovalimi");
  let ranglimi = document.getElementById("ranglimi");
  let elektronKitobBormi = document.getElementById("elektronKitobBormi");



  




  let muqova_turi = document.getElementById("muqova_turi");
  let ranggi = document.getElementById("ranggi");
  let e_kitoblimi = document.getElementById("e_kitoblimi");
  let jami_summa = document.getElementById("jami_summa");


  muqova_turi.innerText = muqovalimi.checked?"Qattiq muqovali" : "Yumshoq muqovali";
  ranggi.innerText = ranglimi.checked?"Rangli":"Qora oq";
  e_kitoblimi.innerText = elektronKitobBormi.checked? "Kitob + e-kitob": "Faqat kitob";

  let summa = 50000;

  if(muqovalimi.checked){
    summa +=20000;
  }
  if(ranglimi.checked){
    summa +=15000;
  }
  if(elektronKitobBormi.checked){
    summa +=10000;
  }
  jami_summa.innerText = "Jami summa: " + summa + " so'm";

          



  




}

