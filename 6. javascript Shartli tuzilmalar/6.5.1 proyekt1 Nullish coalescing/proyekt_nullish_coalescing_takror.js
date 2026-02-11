let mahsulotlar = [];

function buyurtmani_rasmiylashtir() {



  let muqovaQattiqmi = document.getElementById("muqovaQattiqmi").checked; // boshida tanlanmay turgani uchun FALSE

  let ranglimi = document.getElementById("ranglimi").checked; // boshida tanlanmay turgani uchun FALSE

  let eKitobBormi = document.getElementById("eKitobBormi").checked; // boshida tanlanmay turgani uchun FALSE

  let jami_summa = 100000;

  jami_summa = jami_summa + (muqovaQattiqmi ? 20000 : 0);
  jami_summa = jami_summa + (ranglimi ? 15000 : 0);
  jami_summa = jami_summa + (eKitobBormi ? 10000 : 0);


  let muqovaTuri = document.getElementById("muqovaTuri");
  let ranggi = document.getElementById("ranggi");
  let paketTuri = document.getElementById("paketTuri");
  let qogozTuri = document.getElementById("qogozTuri");
  let narxi = document.getElementById("narxi");



  muqovaTuri.innerText = muqovaQattiqmi? "Qattiq":"Yumshoq";
  ranggi.innerText = ranglimi? "Rangli":"Qora-oq";
  paketTuri.innerText = eKitobBormi? "Qog'oz + E-kitob bilan":"Faqat qog'oz kitob";
  qogozTuri.innerText = qogozTuri.value;
  narxi.innerText = jami_summa;


  


  
}
