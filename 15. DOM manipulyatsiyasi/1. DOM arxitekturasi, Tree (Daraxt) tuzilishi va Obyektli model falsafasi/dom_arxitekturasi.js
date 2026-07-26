////?   DOM ARXITEKTURASI (Daraxt) tuzilishi va Obyektli model falsafasi ////

//* DOM da elementlar xuddi shu ko'rinishda daraxt shaklidagi obyekt ko'rinishida yaratiladi.


// let body = {
//   tagName: "body",
//   children: {
//     tagName: "div",
//     children: [
//       {
//         tagName: "p"
//       },
//       {
//         tagName: "ul",
//         children: [
//           {
//             tagName: "li",            
//           },
//           {
//             tagName: "li",            
//           },
//           {
//             tagName: "li",            
//           },
//           {
//             tagName: "li",            
//           },
//           {
//             tagName: "li",            
//           }
//         ]
//       }
//     ]
//     }

// }











//! Nima uchun kerak?

// Javascript HTML ni to'g'ridan to'g'ri tushunmaydi, lekin uni obyektga aylantirsa(yoki massivga, lekin kalit-qiymat juftligi qulay bo'lgani uchun obyektga aylantiriladi), uning ustida amallar bajara oladi

//! DOM bu Javascript obyektimi?

// Javob: YO'Q. U C++ obyekti va uning ustida Javascript amaliyot bajarishi uchun DOM API laridan foydalanadi.

//* DOM API lar:

//-----------------------------------------------------//

//* Elementlarni Qidirish API (Selectors)

// 1) getElementsByClassName()
// 2) getElementsByTagName()
// 3) getElementById()
// 4) querySelector()
// 5) querySelectorAll()




// let ota = document.querySelector("#ota")



// let btn_stil_ber = document.querySelector("#btn_stil_ber")

// btn_stil_ber.onclick = () => {
//   document.body.classList.toggle("oq_qora")
// }












































//* 1) getElementsByClassName()

//! Nima qaytaradi?

// topilsa - HTMLCollection
// topilmasa - HTMLCollection bo'sh holatda qaytaradi

// QANDAY TURDAGI KOLLEKSIYA? - DINAMIK KOLLEKSIYA

// let student_mentor = document.getElementsByClassName("student");

// console.log(student_mentor);



// let studentlar = document.getElementsByClassName("student mentor")

// console.log(studentlar)

// let massiv = Array.from(studentlar)






















/*******************************************************/

//* 2) getElementsByTagName()

//! Nima qaytaradi?

// topilsa - HTMLCollection
// topilmasa - HTMLCollection bo'sh holatda qaytaradi


// let tag_bilan = document.getElementsByTagName("*")

// console.log(tag_bilan)



// let ota = document.getElementById("ota")

// let tag_name = ota.getElementsByTagName("li")

// console.log(tag_name)













// let tag_name = document.getElementsByTagName("li");

// console.log(tag_name);

//------------------------------------------------------//

// let ota = document.getElementById("ota");

// let tag_name = ota.getElementsByTagName("li");

// console.log(tag_name);

//------------------------------------------------------//

// let hammasi = document.getElementsByTagName("*")
// console.log(hammasi)

/********************************************************/

//* 3) getElementById()

//! Nima qaytaradi?

// topilsa - element
// topilmasa - null

// let ota = document.getElementById("ota");

// console.log(ota);






/********************************************************/

//* 4) querySelector()



// bu DOM daraxti ichidan elementlarni xuddi CSS-da uslub berganimizdek, CSS selektorlari (CSS Selectors) yordamida qidirib topishga mo‘ljallangan eng zamonaviy, moslanuvchan va ko‘p qirrali API metodidir.

// SINTAKSISI:

// Metodga argument sifatida istalgan turdagi CSS selektori matn (string) ko‘rinishida beriladi. Bu yerda CSS qoidalari to‘liq amal qiladi (ya'ni nuqta ., panjara # yoki burchakli qavslar > joy-joyida yozilishi shart):


//! Nima qaytaradi?

// topilsa - element
// topilmasa - null

// "main-list" ID'li ul ichidagi, "disabled" klasi bo'lmagan, birinchi li elementini topadi:
// const specialLi = document.querySelector('ul#main-list > li:not(.disabled)');

// Inputlar ichidan aynan turi 'password' bo'lgan birinchisini topadi:
// const passwordInput = document.querySelector('input[type="password"]');


// let query_bilan = document.querySelectorAll("#ota>.mentor")


// query_bilan.forEach((element) => {
//   element.style.backgroundColor = "green"
// }
// )


// let kerakli_element = document.getElementsByClassName("student")

// for(item of kerakli_element){
//   item.style.backgroundColor = "orangeRed"
// }
















/*********************************************************/

//* 5) querySelectorAll()

// document.querySelectorAll() — bu DOM daraxti ichidan berilgan CSS selektoriga mos keladigan barcha elementlarni qidirib topish uchun ishlatiladigan eng kuchli va universal API metodidir.

// querySelectorAll() butun daraxtni oxirigacha aylanib chiqadi (DFS algoritmi yordamida) va mos kelgan barcha elementlar to'plamini yig'ib qaytaradi.

// masalan:

// Sahifadagi barcha ".box" klasiga ega elementlarni topadi
// const boxes = document.querySelectorAll('.box');

// "main-menu" ichidagi barcha faol (active) bo'lgan li elementlarini topadi
// const activeItems = document.querySelectorAll('ul#main-menu > li.active');

//! Nima qaytaradi?

// topilsa - NodeList
// topilmasa - NodeList bo'sh holatda qaytaradi

// Eng katta ustunligi forEach metodi bor.

// QANDAY TURDAGI KOLLEKSIYA? - STATIC KOLLEKSIYA



//? NodeList va HTMLCollection farqlari:

// let ota = document.getElementById("ota");

// console.log(ota.children)

// console.log(ota.childNodes)






















//-----------------------------------------------------//

//* Element Yaratish va O'chirish API (Mutation)

// 1) document.createElement(tagName)
// 2) document.createTextNode(text)
// 3) element.appendChild(childNode)
// 4) element.insertBefore(childNode, referenceNode)
// 5) element.removeChild(childNode)
// 6) element.replaceChild(newChild, oldChild)
// 7) element.remove()

//-----------------------------------------------------//

//* Tarkib va Matn bilan Ishlash API (Content)

// 1) element.textContent
// 2) element.innerText
// 3) element.innerHTML
// 4) element.outerHTML

//-----------------------------------------------------//

//* Atributlar va Klaslar API (Attributes & Classes)

// 1) element.getAttribute(attributeName)
// 2) element.setAttribute(attributeName, attributeValue)
// 3) element.removeAttribute(attributeName)
// 4) element.hasAttribute(attributeName)
// 5) element.classList.add(className)
// 6) element.classList.remove(className)
// 7) element.classList.toggle(className)
// 8) element.classList.contains(className)

//-----------------------------------------------------//

//* Navigatsiya API (Traversing)

// 1) element.parentNode
// 2) element.children
// 3) element.firstElementChild
// 4) element.lastElementChild
// 5) element.nextElementSibling
// 6) element.previousElementSibling

//-----------------------------------------------------//

//* Hodisalar bilan Ishlash API (Events)

// 1) element.addEventListener(eventType, callback, options)
// 2) element.removeEventListener(eventType, callback)
// 3) element.dispatchEvent(event)

//-----------------------------------------------------//

//* O'lcham va Geometriya API (Geometry & Scrolling)

// 1) element.getBoundingClientRect()
// 2) element.clientWidth
// 3) element.clientHeight
// 4) element.offsetWidth
// 5) element.offsetHeight
// 6) element.scrollTop
// 7) element.scrollLeft
// 8) element.scrollTo(x, y)
// 9) element.scrollBy(x, y)

//-----------------------------------------------------//
