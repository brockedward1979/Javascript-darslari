

let tanlov = document.getElementById("tanlov")
let miqdor = document.getElementById("miqdor")
let btn = document.getElementById("btn")
let natija = document.getElementById("natija")

btn.onclick = () =>{

  

  let ovqatlar = {
    ovqat1: {nomi: "Pitsa", narxi: 10000},
    ovqat2: {nomi: "Shashlik", narxi: 15000},
    ovqat3: {nomi: "Somsa", narxi: 12000},
    ovqat4: {nomi: "Kebab", narxi: 20000},
  }


  natija.innerHTML = `
  <h1>Ovqat nomi: ${ovqatlar[tanlov.value].nomi}</h1>
  <hr>
  <p>Ovqat narxi: ${ovqatlar[tanlov.value].narxi}</p>
  <p>Jami summa: ${ovqatlar[tanlov.value].narxi * miqdor.value}</p>
  `







}




