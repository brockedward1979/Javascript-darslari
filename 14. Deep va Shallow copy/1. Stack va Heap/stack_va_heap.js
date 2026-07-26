////////////?      STACK VA HEAP       //////////////

//* Stack - Bu operativ xotiraning (RAM) qat'iy tartibga ega bo'lgan, kichik va daxshatli darajada tez ishlaydigan virtual qismidir.

//* Heap - 


//*Javascriptdagi ma'lumot turlari:

// primitive

// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. bigint
// 7. symbol

//-----------

// reference turlar

// 8. object

    // -object
    // -array
    // -function



    // function qoshish(x, y){
    //   return x + y
    // }

    // console.log(qoshish.length)







// let user1 = { ism: "Ali", yosh: 25 };
// let user2 = user1;

// console.log(user1 == user2);


// let user1 = { ism: "Ali", yosh: 25 };
// let user2 = { ism: "Ali", yosh: 25 };

// console.log(user1 == user2);



// let student = {
//   ismi: "Aslbek",
//   qiziqqishlari: ["Dizayn", "Frontend", "Backend"]
// }



// let copy = {...student}

// console.log(copy)

// copy.ismi = "xxxxxxxxxxxxxx"

// console.log(student)



// let student = {
//   ismi: "Aslbek",
//   qiziqqishlari: ["Dizayn", "Frontend", "Backend"]
// }

// let copy = JSON.parse(JSON.stringify(student))

// console.log(copy)

// copy.ismi = "xxxxxxxxxxxxxx"
// copy.qiziqqishlari = "mmmmmmmmmmmmmm"

// console.log(student)


// let student = {
//   ismi: "Aslbek",
//   qiziqqishlari: ["Dizayn", "Frontend", "Backend"]
// }

// let copy = structuredClone(student)

// copy.qiziqqishlari = []

// console.log(copy)
// console.log(student)


// function ozgartir(user){
//   user.ismi = "Ali"
// }

// let student = {
//   ismi: "Aslbek",
//   qiziqqishlari: ["Dizayn", "Frontend", "Backend"]
// }


// ozgartir(student)

// console.log(student)


// let id = Symbol("id")
// let id2 = Symbol("id")

// console.log(id == id2)


// let student = {
//   [id]: 3,
//   [id2]: 1,
//   ismi: "Aslbek",
//   qiziqqishlari: ["Dizayn", "Frontend", "Backend"],
// }

// console.log(student)




// let student = {
//   ismi: "Aslbek",
//   maktabi: "11-son",
// }

// let yangi = student

// yangi.maktabi = "100-son"

// console.log(student)
// console.log(yangi)


// let a = 15;

// let b = a;

// a = 20;

// console.log(b)




// let massiv1 = [1, 2, 5]









// let yangi_massiv = massiv1

// yangi_massiv[0] = 100

// console.log(massiv1)




// let student = {
//   ismi: "Sobirjon",
//   yoshi: 16,
//   maktabi: "6-son",
//   qiziqqishlari: ["Dizayn", "Frontend", "Backend"],
// }




// Shallow Copy



// let copy = {...student}


// copy.qiziqqishlari[0] = "77777777777"

// console.log(student)
// console.log(copy)




// let student = {
//   ismi: "Sobirjon",
//   qiziqqishlari: ["Dizayn", "Frontend", "Backend"],
// }

// let copy = JSON.parse(JSON.stringify(student))




// copy.qiziqqishlari[0] = "77777777777777"

// console.log(student)
// console.log(copy)



// let student = {
//   ismi: undefined,
//   qiziqishlari: ["dizayn", "frontend", "backend"],
//   sana: new Date(),
// }


// let copy = structuredClone(student)

// console.log(student)
// console.log(copy)



// obyekt(reference) tur

// let student = {
//     ismi: "Kumushoy",
//     maktabi: "9-maktab",
//     qiziqishlari: ["ona-tili", "ingliz-tili", "informatika"]
// }


// // primitiv(sodda) tur

// let sport_boyicha_qiziqishi = "Volleybol"



// let a = 10;   //1x002

// let b = a     //1x003

// console.log(b)


// let student = {
//     ismi: "Kumushoy",
//     dugonasi: "Saida"
// }

// console.log(student.length)



// let massiv = [2026, 15, "Hello"]

// console.log(massiv.length)



// function hisobla(x, y){
//     return x + y
// }

// console.log(hisobla.length)

// //* hisobla - STACK da


// // (x, y){
// //     return x + y  -  HEAP da
// // }











// student - STACK da saqlanadi

// {
//   ismi: "Kumushoy",    // HEAP da
//   dugonasi: "Saida"
// }


// let copy = student

// console.log(copy)

// copy.ismi = "X"

// console.log(copy)
// console.log(student)



// let student = {
//     ismi: "Ferzubek",
//     maktabi: "28-maktab",
//     qiziqishlari: ["Unity", "Unreal-Engine", "Sketch"]
// }


// let copy = {...student}

// copy.ismi = "Behruz"

// console.log(copy)



// console.log(student)


//? SHALLOW COPY - SAYOZ NUSXA

// let student = {
//     ismi: "Kumushoy",
//     qiziqishlari: ["Dizayn", "Python", "Unity"]
// }


// let nusxa = {...student}

// nusxa.qiziqishlari[0] = "111"
// nusxa.qiziqishlari[1] = "222"
// nusxa.qiziqishlari[2] = "333"

// console.log(nusxa)

// console.log(student)

//? DEEP COPY

// let student = {
//     ismi: undefined,
//     maktabi: "5-maktab",
//     qiziqishlari: {
//         sport: "Basketbol",
//         IT_boyicha: "Dizayn",
//         video_oyinlar: "PUBG"
//     }, 
//     sana: new Date()
// }

// let nusxa = JSON.parse(JSON.stringify(student))

// console.log(nusxa)

// nusxa.qiziqishlari.sport = "SHAXMAT"

// console.log(student)



// let student = {
//     ismi: "Saida",
//     qiziqishlari: ["Ingliz", "IT", "Ona-tili"]
// }



// let nusxa = structuredClone(student)

// console.log(nusxa)


// let aslbek = {
//     ismi: "Aslbek",
//     maktabi: "9-maktab",
// }

// let sobirjon = {
//     ismi: "Sobirjon",
//     maktabi: "15-maktab"
// }

// let studentlar = [aslbek, sobirjon]

// let yangi_massiv = studentlar.map((student) => {
//     return student
// }
// )

// console.log(yangi_massiv)


// yangi_massiv[0].ismi = "Hasanboy"

// console.log(aslbek.ismi)















let student = {
    ismi: "Suhrob",
    yoshi: 16,
    qiziqishlari:{
        sport: "futbol",
        dasturlash: "HTML, CSS, JS",
        til: "Ingliz tili"
    }
}




let nusxa = structuredClone(student)

nusxa.qiziqishlari.sport = "Basketbol"

console.log(student)





// let nusxa = JSON.parse(JSON.stringify(student))
// undefined - o'chirib yuboradi
// funksiya  - o'chirib yuboradi
// Date  - vaqt o'zgargan holatda olinadi(nusxa va asl nusxa orasida forq bo'ladi)
























































