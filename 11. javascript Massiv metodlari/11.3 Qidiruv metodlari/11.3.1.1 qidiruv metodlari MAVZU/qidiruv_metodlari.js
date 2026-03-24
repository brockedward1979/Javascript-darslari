//////////?  QIDIRUV METODLARI //////////////

//* 1. find()
//* 2. findIndex()
//* 3. findLast()
//* 4. findLastIndex()
//* 5. filter()
//* 6. includes()
//* 7. indexOf()
//* 8. some()
//* 9. every()

//1. find()

// let studentlar = [
//   {
//     id: 1,
//     name: "Umidbek",
//   },
//   {
//     id: 2,
//     name: "Alisher",
//   },
//   {
//     id: 35,
//     name: "Rashidbek",
//   },
//   {
//     id: 48,
//     name: "Feruzbek",
//   },
//   {
//     id: 5,
//     name: "Shavkat",
//   },
//   {
//     id: 6,
//     name: "Ibroxim",
//   },
// ]

// let natija = studentlar.find((student) => {
//   return student.id === 4
// })

// console.log(natija);

// let natija = studentlar.findIndex((student) => {
//   return student.id === 4
// })

// if(natija == -1){
//   console.log("Bunday element mavjud emas");
// }else{

// }

// let natija = studentlar.filter((student) => {
//   return student.id%2 == 0
// })

// let natija2 = natija.find((student) => {
//   return student.id%3 == 0
// })

// console.log(natija2);

// let studentlar = [
//   {
//     id: 1,
//     name: "Umidbek",
//   },
//   {
//     id: 2,
//     name: "Alisher",
//   },
//   {
//     id: 35,
//     name: "Rashidbek",
//   },
//   {
//     id: 48,
//     name: "Feruzbek",
//   },
//   {
//     id: 115,
//     name: "Shavkat",
//   },
//   {
//     id: 609,
//     name: "Ibroxim",
//   },
// ]

// let natija = studentlar.findLast((student) => {
//   return student.id < 6
// })

// console.log(natija);

// let natija = studentlar.findLastIndex((student) =>{
//   return student.id < 6
// })

// console.log(natija);

// let sonlar  = [2026, 102, 111, 879, 23, 472, 0, 1179]

// let natija = sonlar.includes(105)

// console.log(natija);

// let ruxsat1 = ["admin", "user", "targetolog"]
// let ruxsat2 = ["admin", "targetolog"]
// let ruxsat3 = ["admin"]

// let natija1 = ruxsat1.includes("admin");

// if(natija1 == true){

// }else{

// }

// let qiymatlar = [15, 82, 33, 407, 500, 61, 7, 88, 9, 120]

// let natija = qiymatlar.indexOf(5)

// console.log(natija);

// let maxsulotlar = [
//   {
//     id: 1,
//     nomi: "X-Box",
//     narxi: 300,
//     garantiya: 2
//   },
//   {
//     id: 2,
//     nomi: "PlayStation 5",
//     narxi: 500,
//     garantiya: 1
//   },
//   {
//     id: 3,
//     nomi: "PlayStation 4",
//     narxi: 400,
//     garantiya: 1
//   },
//   {
//     id: 4,
//     nomi: "PlayStation 3",
//     narxi: 300,
//     garantiya: 1
//   },
//   {
//     id: 5,
//     nomi: "PlayStation 2",
//     narxi: 200,
//     garantiya: 1
//   },
//   {
//     id: 6,
//     nomi: "PlayStation 1",
//     narxi: 100,
//     garantiya: 1
//   },
// ]

// let natija = maxsulotlar.every((maxsulot) => {
//   return maxsulot.narxi > 99
// })

// console.log(natija);

// if(natija == true){
//   console.log("qiymati 400 somdan  ortiq maxsulotlar:")

// }

// let natija = maxsulotlar.map((maxsulot) => {
//   return maxsulot.nomi
// })

// console.log(natija)


