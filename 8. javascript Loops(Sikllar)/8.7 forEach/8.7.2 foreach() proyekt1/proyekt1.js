// 1. Filmlar ma'lumotlari (Rasm manzili sifatida ixtiyoriy rasmlar qo'yilgan)
const kinolar = [
	{ nomi: "One flew over the cuckoo's nest", janr: "Psixologik drama", rasm: "kinolar/Jack Nicholson.jpg" },
	{ nomi: "Good will hunting", janr: "Psixologik drama", rasm: "kinolar/Good will hunting.jpg" },
	{ nomi: "Harry Potter", janr: "Fantasy", rasm: "kinolar/Harry Potter.jpg" },
	{ nomi: "Dune", janr: "Sci-Fi", rasm: "kinolar/Dune.jpg" },
];

// 2. Jadvalning ichki qismini (tbody) ushlaymiz
const jadvalTanasi = document.getElementById("table_datalar");

let btn = document.getElementById("btn");


// 3. forEach yordamida jadval qatorlarini yig'amiz
let jadvalKontenti = "";


btn.onclick = function() {
	kinolar.forEach(function qidir(kino, index, movies) {
		// index + 1 orqali 1, 2, 3... tartib raqamlarini chiqaramiz
		jadvalKontenti = jadvalKontenti + `
				<tr>
						<td>${index + 1}</td>
						<td><img src="${kino.rasm}" alt=""></td>
						<td>${kino.nomi}</td>
						<td>${kino.janr}</td>
						
				</tr>
		`;
	});
	
	// 4. Tayyor qatorlarni bittada jadvalga joylaymiz
	jadvalTanasi.innerHTML = jadvalKontenti;
};	


