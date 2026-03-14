let stillar = [
  {
    rang_orqasi: "#ff0000",
    rang_tekst: "white",
    radius: "0px",
  },
  {
    rang_orqasi: "#00ff00",
    rang_tekst: "yellow",
    radius: "20px",
  },
  {
    rang_orqasi: "#0000ff",
    rang_tekst: "orange",
    radius: "50px 20px",
  }
  
]


let quti = document.getElementById("quti");



const uzgartiruvchi = (indeks_nomeri) => {

  quti.style.backgroundColor = stillar[indeks_nomeri].rang_orqasi;
  quti.style.color = stillar[indeks_nomeri].rang_tekst;
  quti.style.borderRadius = stillar[indeks_nomeri].radius;

}

