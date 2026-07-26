
console.log("1-oddiy kod ishga tushdi");

setTimeout(() => {
  console.log("setTimeout ichidagi kod ishga tushdi");
}, 3000);

console.log("2-oddiy kod ishga tushdi");

setInterval(() => {
  console.log("setInterval ichidagi kod ishga tushdi");
}, 3000);

let kino1 = {
  nomi: "Avengers",
  sana: 2012,
  reyting: 8.5,
};

let kino2 = {
  nomi: "Shum bola",
  sana: 2012,
  reyting: 8.5,
};



// Eski uslub
function faylniOqish( (kino) =>{
  console.log("Kino ma'lumotlari:", kino);
});

