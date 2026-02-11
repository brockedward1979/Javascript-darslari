function hisobla() {
	let mijoz = document.getElementById("ism").value;
	let summa = Number(document.getElementById("summa").value);

	default_ism.innerText = "Mijoz: " + (mijoz || "Hurmatli mijoz");

	let chegirma_narx = document.getElementById("chegirma_narx");

	let promo_msg = document.getElementById("promo_xabar");

	let narx = document.getElementById("summa").value;

	summa >= 100000 &&
		((narx = summa * 0.9),
		(chegirma_narx.innerText = "Chegirma bilan: " + narx + " so'm"),
		(promo_msg.innerText = "🎁 Tabriklaymiz! Sizga 10% chegirma berildi!"));

	summa > 0 &&
		summa < 100000 &&
		(chegirma_narx.innerText = "Jami summa: " + narx + " so'm");

	summa <= 0 &&
		((chegirma_narx.innerText = "Iltimos, to'g'ri summa kiriting!"),
		(promo_msg.innerText = ""));
}
