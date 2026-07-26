//* Element Yaratish va O'chirish API (Mutation)

// 1) document.createElement(tagName)
// 2) document.createTextNode(text)
// 3) ota_element.appendChild(childNode)
// 4) ota_element.append(childNode)
// 5) ota_element.insertBefore(childNode, referenceNode)
// 6) element.before(childNode)
// 7) element.removeChild(childNode)
// 8) element.replaceChild(newChild, oldChild)
// 9) element.remove()

//*******************************************************/





//* document.createElement(tagName)

// let yaratilganDivlar = [];


// let i = 1;
// // console.log(yangiDiv);

// let btn_plus = document.getElementById("btn_plus");
// let btn_minus = document.getElementById("btn_minus");


// btn_plus.onclick = () => {

//   let yangiDiv = document.createElement("div");
//   let otaDiv = document.createElement("div");
//   otaDiv.classList.add("otaDiv");
//   let a = document.createElement("a");
//   a.href = "https://www.google.com";
//   a.textContent = "Google";
//   yangiDiv.append(a);
//   yangiDiv.textContent = i++;
//   otaDiv.append(yangiDiv, a, " ushbu link orqali kiring");

//   document.body.appendChild(otaDiv);

//   yaratilganDivlar.push(otaDiv);
// }


// btn_minus.onclick = () => {
//   let qolganDivlar = yaratilganDivlar.pop();

//   if(qolganDivlar){
//     qolganDivlar.remove();
//   }
// }


let btn_plus = document.getElementById("btn_plus");
let btn_minus = document.getElementById("btn_minus");

let otaDiv = document.getElementById("ota");

let massiv = [];

let i = 1;


btn_plus.onclick = () => {


  let a = document.createElement("a");
  a.href = "https://www.google.com";
  a.textContent = "Google";

  let yangiDiv = document.createElement("div");
  yangiDiv.append(i,"-Salom", a);
  yangiDiv.classList.add("div_1");
  otaDiv.appendChild(yangiDiv);

  massiv.push(yangiDiv);

  i++;

}

btn_minus.onclick = () => {
  if(massiv.length > 0){
    let ochirilgani = massiv.pop();
    otaDiv.removeChild(ochirilgani);
  }
}




const obj1 = { 
  name: "Anvar",
  address: { city: "Toshkent" } 
};
const obj2 = { ...obj1 };

console.log(obj2)
// obj2.address.city = "Samarqand";

// console.log(obj1.address.city)

let a = `2 + '2' - 1`;

console.log(a)


















// // Yangi divni sahifaga chiqaramiz
// document.body.appendChild(yangiDiv);

// // Yangi divni o'zgartiramiz
// yangiDiv.textContent = "Yangi div";

// yangiDiv.className = "div"







// Nimaligi va nima ish qilishi

// Bu metod koʻrsatilgan teg nomiga (masalan: 'div', 'p', 'button') mos keladigan yangi HTML elementini noldan yaratadi. Bu bosqichda element faqat brauzer xotirasida (RAM) tugun (Node) sifatida mavjud boʻladi, lekin hali sahifada (DOM daraxtida) koʻrinmaydi.

//? Alternativi bilan farqlari, ustunliklari va kamchiliklari:

// Eng asosiy alternativi — elementning innerHTML xususiyati orqali string (matn) koʻrinishida element qoʻshishdir.

// Ustunliklari (innerHTMLga nisbatan):

// Xavfsizlik (XSS Protection): Tashqaridan (foydalanuvchidan) keladigan zararli kodlarni shunchaki matn deb biladi va xavfsizlikni taʼminlaydi. innerHTML esa zararli skriptlarni ishga tushirib yuborishi mumkin.

// Unumdorlik (Performance): Faqat bitta elementni xotirada yaratadi. innerHTML esa ota element ichidagi barcha eski elementlarni oʻchirib, qaytadan oʻqib chiqadi (re-render).

// Oson boshqaruv: Yaratilgan zahoti unga .addEventListener() yoki .style orqali toʻgʻridan-toʻgʻri JS da bogʻlanish mumkin.

// Kamchiliklari:

// Agar juda katta va ichma-ich joylashgan murakkab HTML tuzilmani yaratmoqchi boʻlsangiz, kod juda koʻpayib ketadi va oʻqish qiyinlashadi.

// Real Use Case (Qayerda ishlatiladi?)
// Dinamik roʻyxatlar: Foydalanuvchi "Vazifa qoʻshish" (Todo list) tugmasini bosganda yangi qator yaratishda.

// Modallar va Ogohlantirishlar: Sahifada toʻsatdan chiquvchi (Pop-up) oyna yoki xabarnomalarni JS orqali yaratishda.

// Xotirada yangi <div> yaratamiz

// let xabarBloki = document.createElement("div");

// // Uni bezatamiz (klass va matn beramiz)
// xabarBloki.className = "alert alert-success";
// xabarBloki.textContent = "Muvaffaqiyatli bajarildi!";


// // Hozircha bu div sahifada ko'rinmaydi, u faqat xotirada (JS'da) bor.
// console.log(xabarBloki); // <div>Muvaffaqiyatli bajarildi!</div>


//! Birdaniga ko'p element yarata olamizmi?

// Ha, albatta bo'ladi.

//? DocumentFragment usuli (Eng professional usul)

// DocumentFragment — bu xotiradagi virtual (ko‘rinmas) DOM konteyneridir. Siz barcha elementlarni avval shu virtual konteynerga yig‘asiz va oxirida uni sahifaga bir marta qo‘shasiz. Brauzer sahifani faqat bir marta yangilaydi.

// Nima ish qilishi: Xotirada vaqtinchalik quti yaratadi.

// Real Use Case: Bazadan (API) 100 ta mahsulot ro‘yxati kelsa, ularni bir vaqtda ekranga chiqarish.

// 1. Virtual konteyner (fragment) yaratamiz
// const fragment = document.createDocumentFragment();
// const ul = document.getElementById("mevalar-royxati"); // Mavjud ota element

// const mevalar = ["Olma", "Banan", "Gilos", "Anor", "O'rik"];

// // 2. Sikl yordamida ko'p element yaratamiz
// mevalar.forEach(mevaNomi => {
//     let li = document.createElement("li");
//     li.textContent = mevaNomi;
    
//     // Elementni sahifaga emas, FRAGMENT ichiga qo'shib boramiz
//     fragment.appendChild(li); 
// });

// // 3. Oxirida tayyor fragmentni bitta buyruq bilan sahifaga qo'shamiz
// ul.appendChild(fragment);




//? element.append() usuli (Eng qisqa va zamonaviy usul)


// Agar sizda elementlar soni aniq va cheklangan bo‘lsa (masalan, 3-4 ta alohida turli elementlar), ularni massivga yig‘ib, append() yoki before() / after() yordamida birdaniga qo‘shib yuborishingiz mumkin.

// Nima ish qilishi: Vergul bilan ajratilgan barcha elementlarni birdaniga qabul qiladi.

// Real Use Case: Dinamik ravishda bitta blok, uning ichiga sarlavha va tugmani birdaniga joylashtirish.

// 1. Bir nechta elementlarni yaratamiz
// const div = document.createElement("div");
// const h2 = document.createElement("h2");
// h2.textContent = "Yangi Maqola";

// const p = document.createElement("p");
// p.textContent = "Maqola matni shu yerda joylashadi...";

// const btn = document.createElement("button");
// btn.textContent = "O'qish";

// // 2. append() yordamida hammasini bir vaqtda div ichiga qo'shamiz
// div.append(h2, p, btn);

// // 3. Divni sahifaga chiqaramiz
// document.body.appendChild(div);



//? insertAdjacentHTML() usuli (Matn/String orqali tezkor yaratish)

// Agar sizga JS obyektlari (Node) shart bo‘lmasa va shunchaki HTML kodini matn ko‘rinishida yozib, tezda ko‘p element yaratmoqchi boʻlsangiz, bu usul juda qulay.

// Nima ish qilishi: HTML matnini (string) to‘g‘ridan-to‘g‘ri DOM elementlariga aylantirib joylashtiradi.

// Real Use Case: Katta va ichma-ich joylashgan HTML bloklarini (masalan, tayyor kartochka shablonlarini) tezkor yaratish.


// const konteyner = document.getElementById("kontent");

// // Ko'p elementli HTML matni (Template Literals orqali)
// const ko'pElementlar = `
//     <div class="card">
//         <h3>Mahsulot Nomi</h3>
//         <p>Narxi: 100$</p>
//         <button>Sotib olish</button>
//     </div>
// `;

// // 'beforeend' - konteyner ichiga, oxiriga birdaniga joylashtiradi
// konteyner.insertAdjacentHTML("beforeend", ko'pElementlar);


//*******************************************************/

//* document.createTextNode(text)

// Nima ish qilishi: Ichida faqat xom matn bo'lgan obyekt (Text Node) yaratadi.

// Real Misol: Biror paragraf ichidagi mavjud matnga qo'shimcha matn bo'lagini ulamoqchimiz.

// let p = document.createElement("p");
// p.textContent = "Asosiy matn. "; // Birinchi matn

// // Alohida matnli tugun yaratamiz
// let qoshimchaMatn = document.createTextNode("Bu esa JS orqali kelgan qo'shimcha.");

// // Uni paragraf ichiga qo'shamiz
// p.appendChild(qoshimchaMatn);
// console.log(p.innerHTML); // "Asosiy matn. Bu esa JS orqali kelgan qo'shimcha."

// Alternativ (textContent): Bugungi kunda bu metod o'rniga shunchaki p.textContent += "..." deb ketish ancha oson va ko'p ishlatiladi.

//*************************************************/

//* ota_element.appendChild(childNode)

// Nima ish qilishi: Bolani ota element ichiga, eng oxiriga joylashtiradi.

// Real Misol: Chat ilovasida yangi xabar kelganda uni ro'yxatning oxiriga qo'shish.

// Alternativ (append): chatOynasi.append(yangiXabar, " (Hozir keldi)") — append metodi bir vaqtning o'zida ham element, ham matn qo'sha oladi, appendChild esa faqat bitta element qabul qiladi.

//*************************************************/

//* ota_element.insertBefore(childNode, referenceNode)

// Nima ish qilishi: Bolani ota ichidagi muayyan elementdan oldinga suqib qo'shadi.

// Real Misol: Yangiliklar saytida yangi chiqgan muhim xabarni eski xabarlarning eng tepasiga (boshiga) qo'shish.

// HTML: <div id="lenta"><div id="eski-post">Eski xabar</div></div>
// let lenta = document.getElementById("lenta");
// let eskiPost = document.getElementById("eski-post");

// // Yangi post yaratamiz
// let shoshilinchXabar = document.createElement("div");
// shoshilinchXabar.textContent = "Tezkor yangilik: Erta bahor keldi!";

// // Uni lentaning ichiga, lekin eskiPost'dan OLDINGA joylashtiramiz
// lenta.insertBefore(shoshilinchXabar, eskiPost);

//*************************************************/

//* element.before(childNode)

// Nima ish qilishi: Elementning tashqarisidan, uning shundoq tepasiga narsa qo'shadi (Ota elementni topish shart emas).

// Real Misol: Foydalanuvchi formani to'ldirayotganda, inputning shundoq tepasida qizil xatolik matnini chiqarish.

// // HTML: <input id="parol" type="password">
// let parolInput = document.getElementById("parol");

// let xatolik = document.createElement("span");
// xatolik.style.color = "red";
// xatolik.textContent = "Parol juda qisqa!";

// // Inputning shundoq tepasiga (tashqarisidan) xatolikni joylashtiramiz
// parolInput.before(xatolik);

// insertBefore bilan farqi: insertBefore ishlashi uchun parolInput.parentNode.insertBefore(xatolik, parolInput) deb yozish kerak edi. before() esa ancha qisqa va qulay.

//*************************************************/

//* element.removeChild(childNode)

// Nima ish qilishi: Ota element ichidan ko'rsatilgan bolani o'chiradi va o'chirilgan elementni qaytaradi.

// Real Misol: Savatdan mahsulotni o'chirish, lekin "Bekor qilish (Undo)" funksiyasi uchun uni xotirada saqlab qolish.

// // HTML: <ul id="savat"><li id="kitob">Kitob</li></ul>
// let savat = document.getElementById("savat");
// let kitob = document.getElementById("kitob");

// // Mahsulotni o'chiramiz va uni 'ochirilganMahsulot' o'zgaruvchisiga olib qo'yamiz
// let ochirilganMahsulot = savat.removeChild(kitob);

// // Agar foydalanuvchi "Adashib o'chirdim, qaytar" tugmasini bossa:
// // savat.appendChild(ochirilganMahsulot); // element yana joyiga qaytadi

//*************************************************/

//* element.replaceChild(newChild, oldChild)

// Nima ish qilishi: Ota ichidagi eski elementni yangisiga almashtiradi.

// Real Misol: Saytda oddiy matn turibdi, "Tahrirlash" tugmasi bosilganda u inputga aylanib qolishi kerak.


// // HTML: <div id="blok"><span id="eski-matn">Jonibek</span></div>
// let blok = document.getElementById("blok");
// let eskiMatn = document.getElementById("eski-matn");

// // Yangi input elementini yaratamiz
// let yangiInput = document.createElement("input");
// yangiInput.value = eskiMatn.textContent; // Ichiga eski matnni yozib qo'yamiz

// // Almashtiramiz: ota.replaceChild(yangi, eski)
// blok.replaceChild(yangiInput, eskiMatn);

//**************************************************/

//* element.remove()

// Nima ish qilishi: Elementning o'zini sahifadan butkul o'chirib tashlaydi (Ota element shart emas).

// Real Misol: Reklama banneridagi "X" (Yopish) tugmasi bosilganda bannerni yo'qotish.

// // HTML: <div id="banner">Katta reklama <button id="yopish">X</button></div>
// let banner = document.getElementById("banner");
// let yopishTugmasi = document.getElementById("yopish");

// yopishTugmasi.onclick = () => {
//     // Bannerni sahifadan butkul o'chirib tashlaymiz
//     banner.remove(); 
// };

// removeChild bilan farqi: removeChild metodida biz banner.parentNode.removeChild(banner) deb yozishga majbur bo'lardik. remove() esa hech qanday otasiz, to'g'ridan-to'g'ri elementning o'zini o'chiradi.


























// let ul1 = document.createElement("ul");

// let button = document.createElement("button");
// let button_text = document.createTextNode("qo'shish");
// button.appendChild(button_text);
// let input = document.createElement("input");
// input.type = "text";

// let h1 = document.createElement("h1");
// let h1_text = document.createTextNode("Todo List");
// h1.appendChild(h1_text);

// let anchor = document.createElement("a");
// let anchor_text = document.createTextNode("Google");
// anchor.appendChild(anchor_text);
// anchor.href = "https://www.google.com";

// document.body.appendChild(input);
// document.body.appendChild(button);
// document.body.appendChild(ul1);




// button.onclick = () => {
//   let li = document.createElement("li");

//   let li_text = document.createTextNode(input.value);
//   li.appendChild(li_text);

//   ul.appendChild(li);
//   input.value = "";

//   document.body.insertBefore(h1, ul);
//   h1.before(anchor)

//   h1.after(button, input);

  
  
// }
