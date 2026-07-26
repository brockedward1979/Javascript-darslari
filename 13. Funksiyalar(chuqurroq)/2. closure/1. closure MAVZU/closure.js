////////////? CLOSURE //////////////

//* Closure (yopilma) — bu JavaScript’dagi shunday xususiyatki, ichki funksiya o‘zi yaratilgan tashqi muhitdagi o‘zgaruvchilarni, tashqi funksiya ishini yakunlab bo‘lgandan keyin ham "eslab qoladi".

// Sodda qilib aytganda: Funksiya + uning atrofidagi ma'lumotlar = Closure.

// let x = 15;

// function hisobla(a, b){


//   return a + b + x;
// }

// x = 100


// console.log(hisobla(2, 5))







// function tashqi(){

//   let x = 15;

//   function ichki(){
//     console.log(x);
//   }

//   return ichki;
// }


// let hisobla = tashqi();

// hisobla()

// x = 100

// hisobla()


















// function tashqi(){


//   let x = 15;

//   function ichki(){
//     console.log(x);
//     x++;
//   }

//   return ichki;

// }




// let natija = tashqi();

// console.log(natija);

// natija()
// natija()
// natija()

//*real misol:

// "use strict"

// let balans = 2000000

// function pulYechish(miqdor){

//   balans = balans - miqdor
//   return "qolgan qoldiq:" + balans
// }

// console.log(pulYechish(1500000))
// console.log(pulYechish(300000))

// balans = 3000000

// console.log(pulYechish(200000))

//************************************************* */

// "use strict"


// function qoldiqBer(){

//   let balans = 2000000

//   function pulYechish(miqdor){

//     balans = balans - miqdor
//     return "qolgan qoldiq:" + balans
//   }

//   return pulYechish


// }

// let qoldiq = qoldiqBer()

// console.log(qoldiq(1500000))

// balans = 3000000

// console.log(qoldiq(200000))





// function qoldiqniBer(){


//   let qoldiq = 3000000

//   function pulYechish(miqdor){

//     qoldiq = qoldiq - miqdor

//     return qoldiq
//   }

//   return pulYechish
// }

// // let qoldiq = qoldiqniBer()

// let natija = qoldiqniBer()

// console.log(natija(1500000))
// console.log(natija(500000))


// qoldiq = 5000000

// console.log(natija(200000))