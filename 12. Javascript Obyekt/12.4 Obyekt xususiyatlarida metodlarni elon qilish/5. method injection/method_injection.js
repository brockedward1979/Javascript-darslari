

let kino1 = {
  nomi: "Interstellar",
  rejissyor: "Christopher Nolan",
  yili: 2014,
  rasm: "./Movies/Interstellar.jpg",
  description: "Interstellar - bu 2014-yilda chiqarilgan ilmiy fantastika filmi bo'lib, rejissyor Christopher Nolan tomonidan yaratilgan. Filmda, insoniyatning kelajagi xavf ostida bo'lgan bir vaqtda, bir guruh astronavtlar yangi yashash joyi topish uchun kosmosga sayohat qilishadi. Filmda vaqt, sevgi, va insoniyatning omon qolishi kabi mavzular o'rganiladi. Interstellar o'zining vizual effektlari, musiqasi va chuqur hikoyasi bilan tanilgan va ko'plab mukofotlarga sazovor bo'lgan. "
}

let kino2 = {
  nomi: "Inception",
  rejissyor: "Christopher Nolan",
  yili: 2010,
  rasm: "./Movies/Inception.jpg",
  description: "Inception - bu 2010-yilda chiqarilgan ilmiy fantastika filmi bo'lib, rejissyor Christopher Nolan tomonidan yaratilgan. Filmda, Dom Cobb ismli bir jinoyatchi, odamlarning tushlariga kirib, ularning sirlarini o'g'irlash yoki yangi g'oyalarni ekish uchun maxsus texnologiyani ishlatadi. Cobb va uning jamoasi, bir biznesmenning onasining merosini boshqarish uchun kerakli ma'lumotlarni olish uchun murakkab bir vazifani bajarishga harakat qilishadi. Filmda tushlar, vaqt va haqiqat kabi mavzular o'rganiladi. Inception o'zining murakkab hikoyasi, vizual effektlari va musiqasi bilan tanilgan va ko'plab mukofotlarga sazovor bo'lgan."
}

let kino3 = {
  nomi: "Gravity",
  rejissyor: "Alfonso Cuarón",
  yili: 2013,
  rasm: "./Movies/Gravity.jpg",
  description: "Gravity - bu 2013-yilda chiqarilgan ilmiy fantastika filmi bo'lib, rejissyor Alfonso Cuarón tomonidan yaratilgan. Filmda, ikki astronavt, Dr. Ryan Stone va Matt Kowalski, kosmosda texnik nosozlik tufayli o'zlarini xavf ostida topishadi. Ular omon qolish uchun bir-birlariga yordam berishlari kerak. Filmda kosmosning go'zalligi va xavflari, insoniyatning omon qolishi uchun kurashishi kabi mavzular o'rganiladi. Gravity o'zining vizual effektlari, musiqasi va kuchli aktyorlik bilan tanilgan va ko'plab mukofotlarga sazovor bo'lgan."
}




let UI_chizish = {
  btn_1: document.getElementById("btn_1"),
  btn_2: document.getElementById("btn_2"),
  btn_3: document.getElementById("btn_3"),
  content: document.getElementById("content"),

  chizish:function(kino){
  UI_chizish.content.innerHTML = `
  <h2>Kino nomi: ${kino.nomi}</h2>
  <hr>
  <img src=${kino.rasm} class="rasm">
  <p>${kino.description}</p>
  `
  }

}

UI_chizish.btn_1.onclick = function(){
  UI_chizish.chizish(kino1)
}

UI_chizish.btn_2.onclick = function(){
  UI_chizish.chizish(kino2)
}

UI_chizish.btn_3.onclick = function(){
  UI_chizish.chizish(kino3)
}



UI/UX