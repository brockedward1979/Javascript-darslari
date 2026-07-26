////? ITERATSIYA VA CHIQARISH METODLARI ////

//*1. forEach(fn)
//    Har bir element uchun fn ni chaqiradi, qaytarish qiymati yo'q.
//*2. entries()
//    Indeks-qiymat juftlari iteratorini qaytaradi.
//*3. keys()
//    Indekslar iteratorini qaytaradi.
//*4. values()
//    Qiymatlar iteratorini qaytaradi.
//*5. join(sep?)
//    Elementlarni ajratuvchi bilan birlab string qaytaradi.
//*6. toString()
//    Massivni vergul bilan ajratilgan stringga o'tkazadi.
//*7. toLocaleString()
//    Lokal formatga mos string qaytaradi.

//***************************************************************/

//? forEach(fn) metodi

// forEach() metodi - bu massiv elementlari ustida birma-bir harakat qilish uchun ishlatiladi.

//! Nima qaytaradi?

//! Hech qanday qiymat qaytarmaydi. Faqatgina aytilgan buyruqni bajaradi. Ya'ni buning natijasini o'zgaruvchida saqlab qayta-qayta ishlata olmaymiz.

// let divlar = document.getElementsByClassName("divlar");



// let massiv = Array.from(divlar);

// massiv.forEach((element) => {
//   element.style.border = "3px solid green";
//   element.style.padding = "10px";
//   element.style.borderRadius = "10px";

// }
// )







// let tugmalar = document.getElementsByClassName("btn");

// console.log(tugmalar)

// let massiv = Array.from(tugmalar);

// console.log(massiv)

// massiv.forEach((element) => {
//   element.style.border = "3px solid green";
//   element.style.padding = "10px";
//   element.style.borderRadius = "10px";
// }
// )

// let studentlar_div = document.getElementsByClassName("studentlar");

// let massiv = Array.from(studentlar_div);

// let btn = document.getElementById("btn");

// setInterval(() => {
//   massiv.forEach((element) => {
//     element.classList.toggle("bg-color");
//   });
// }, 1000);

//************************************************************* */

//? entries() metodi









// let massiv = ["Umidbek", "Sobirjon", "Feruzbek", "Rashidbek", "Shavkat"];

// let natija = massiv.entries();

// console.log(natija.next().value)
// console.log(natija.next().value)
// console.log(natija.next().value)
// console.log(natija.next().value)
// console.log(natija.next().value)
// console.log(natija.next().value)

// let studentlar = ["Umidbek", "Sobirjon", "Feruzbek", "Rashidbek", "Shavkat"];

// let natija = studentlar.entries();

// for(let student of natija){
//   console.log(student)
// }

// let btn = document.getElementById("btn");
// let malumot = document.getElementById("malumot");

// let studentlar = ["Umidbek", "Sobirjon", "Feruzbek", "Rashidbek", "Shavkat"];

// let natija = studentlar.keys();

// btn.onclick = () =>{

//   malumot.innerText = natija.next().value

// }

// let massiv = ["Umidbek", "Sobirjon", "Feruzbek", "Rashidbek", "Shavkat"];

// [0, "Umidbek"]; // bu yerda kalit 0, qiymat "Umidbek". Entries esa bu ikki qiymat saqlangan massiv.
// [1, "Sobirjon"];
// [2, "Feruzbek"];
// [3, "Rashidbek"];
// [4, "Shavkat"];

// let natija = massiv.entries();

// for (let element of natija) {
//   console.log(element);
// }

// let btn = document.getElementById("btn");
// let malumotlar = document.getElementById("malumotlar");

// let natija = massiv.entries();

// btn.onclick = () =>{
//   malumotlar.innerText = natija.next().done;
// }

// let massiv = ["Umidbek", "Sobirjon", "Feruzbek", "Rashidbek", "Shavkat"];

// let natija = massiv.values();

// console.log(natija);

// let btn = document.getElementById("btn");
// let malumotlar = document.getElementById("malumotlar");

// btn.onclick = () => {
//   malumotlar.innerText = natija.next().value;
// };




// let divlar = document.getElementsByClassName("bola");

// let massiv = Array.from(divlar);
// let ota = document.getElementById("ota");

// btn.onclick = () => {
  
//    ota.classList.toggle("bg-color");
//    ota.style.transition = "2s all";
   
  
// }









