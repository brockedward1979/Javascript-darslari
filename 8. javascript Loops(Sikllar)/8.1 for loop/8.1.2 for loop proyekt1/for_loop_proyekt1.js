const showBtn = document.getElementById("showBtn");
const galleryGrid = document.getElementById("galleryGrid");

showBtn.onclick = function () {
	let imagesHTML = ""; // Rasmlar jamlanmasi uchun bo'sh joy
	let rasmSoni = 100; // Papkangizda nechta rasm bo'lsa shuncha yozing

	// FOR sikli orqali rasm teglarini matn ko'rinishida yig'amiz
	for (let i = 1; i <= rasmSoni; i++) {
		// Papkadagi yo'l: images/1.jpg, images/2.jpg va hokazo
		imagesHTML += `<img src="images/coffee${i}.jpg" alt="Rasm ${i}">`;
	}

	// Tayyor matnni bir marta HTML ichiga joylaymiz
	galleryGrid.innerHTML = imagesHTML;
};

let i = 0;
for (let i = 0; i < 10; i++) {
	console.log(`salom bolalar ${i}`);
}
