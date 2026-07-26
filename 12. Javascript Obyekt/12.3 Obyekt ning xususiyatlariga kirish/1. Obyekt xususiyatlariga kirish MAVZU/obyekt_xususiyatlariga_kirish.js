////?  OBYEKT NING XUSUSIYATLARIGA KIRISH  ////

// Obyekt kalitlariga kirish uchun 2 usul mavjud

// 1. Dot notation (nuqta bilan)
// 2. Bracket notation ([] bilan)

//-------------------------------------------------------------//

//* 1-usul. Dot notation (nuqta bilan)



// let student = {
// 	ismi: "Saida",
// 	yoshi: 16,
// 	manzili: "Yangiariq"
// }


// console.log(student.ismi)




// let student = {
// 	[nomi]: "Umidbek", 
// 	yoshi: 21,
// 	hisobla: function (){
// 		return (this.yoshi)*5
// 	}
// }

// console.log(student);

// console.log(student.hisobla())


// nomi - kalit        qiymati - "Umidbek"
// yoshi - kalit       qiymati - 21

// kalitda string, 

// let student = {
// 	ismi: "Umidbek",
// 	yoshi: 21
// }

// console.log(student.ismi)












// let foydalanuvchi = {
// 	nomi: "Umidbek",
// 	yoshi: 21,
// };

// console.log(foydalanuvchi.yoshi); // Natija: 21
// console.log(foydalanuvchi.nomi); // Natija: Umidbek

//-------------------------------------------------------------//

//* 2-usul. Bracket notation ([] bilan)






















// let kalit = "yoshi"



// let student = {
// 	"ismi": "Umidbek",
// 	"yoshi": 21
// }	

// console.log(student[kalit])


// let kalit = "ismi"
// let qiymat = "Umidbek"

// let student = {
// 	[kalit]: qiymat,
// 	yoshi: 21
// }



// console.log(student["ismi"])















// Bu usul o'zgaruvchilarni obyektning xususiyatlariga kirish uchun ishlatiladi.

// let student = {
// 	nomi: "Umidbek",
// 	yoshi: 21,
// };

// console.log(student["nomi"]); // Natija: Umidbek
// console.log(student["yoshi"]); // Natija: 21

//-------------------------------------------------------------//


// let tanlov = "Lavash"

// let oquvchi = {

// 	Lavash: "Lavash",
// 	Somsa: "So'msa"

// }

// console.log(oquvchi[tanlov])

