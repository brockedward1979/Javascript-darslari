function hisobla() {
	let miqdor = Number(document.getElementById("miqdor").value);
	let valyutalar = document.getElementById("valyutalar");
	let natija = document.getElementById("natija");
	let asosiy_valyuta = document.getElementById("asosiy_valyuta");
	let natija_box = document.getElementById("natija_box");

	natija_box.style.gap = "10px";
	natija_box.style.backgroundColor = "#e00000";
	natija_box.style.alignItems = "flex-start";

	let tanlanganValyuta = valyutalar.value;

	switch (tanlanganValyuta) {
		case "USD":
			asosiy_valyuta.innerText = miqdor + " USD";
			natija.innerText = miqdor * 12850 + " UZS";

			break;
		case "EUR":
			asosiy_valyuta.innerText = miqdor + " EUR";
			natija.innerText = miqdor * 13900 + " UZS";
			break;
		case "RUB":
			asosiy_valyuta.innerText = miqdor + " RUB";
			natija.innerText = miqdor * 145 + " UZS";
			break;
	}
}
