function tekshirish() {
	let ism = document.getElementById("ism").value;
	let parol = document.getElementById("parol").value;
	let xatoJoyi = document.getElementById("xabar");

	xatoJoyi.innerHTML = ""; // Oldingi xabarlarni tozalash

	// 1-shart
	if (ism === "") {
		xatoJoyi.innerHTML += "⚠️ Ism bo'sh bo'lmasligi kerak!<br>";
	}

	// 2-shart
	if (parol.length < 6) {
		xatoJoyi.innerHTML += "⚠️ Parol kamida 6 ta belgi bo'lsin!<br>";
	}

	// 3-shart (va uning else qismi)
	if (parol === "123456") {
		xatoJoyi.innerHTML += "⚠️ Bu parol juda oddiy!";
	} else {
		console.log("Parol 123456 emas, xavfsizlik o'rtacha.");
	}
}
