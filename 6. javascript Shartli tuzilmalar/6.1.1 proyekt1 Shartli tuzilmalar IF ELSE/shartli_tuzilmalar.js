function tekshir() {
	let ielts = document.getElementById("input1").value;
	let ichki = document.getElementById("input2").value;
	let natija = document.getElementById("natija");
	let rasm = document.getElementById("rasm");

	if (ielts >= 0 && ielts <= 9 && ichki >= 0 && ichki <= 200) {
		if (ielts >= 6.5 || ichki >= 180) {
			natija.innerText = "Siz ishga qabul qilindingiz!";
			natija.style.backgroundColor = "LightGreen";
			natija.style.color = "white";
			natija.style.textAlign = "center";
			natija.style.transition = " all 2s ease-in-out";
			rasm.src = "./assets/passing.jpg";
		} else {
			natija.innerText = "Afsuski, siz ishga qabul qilinmadingiz.";
			rasm.src = "./assets/failing.jpg";
			natija.style.backgroundColor = "Tomato";
		}

		if (ielts == 9 || ichki == 200) {
			natija.innerText = "Siz ishga a'lo darajada qabul qilindingiz! ";
			natija.style.backgroundColor = "Gold";
			natija.style.color = "black";
			rasm.src = "./assets/fantastic.gif";
		}
	}
	else{
		natija.innerText = "Iltimos, to'g'ri qiymat kiriting! (IELTS: 0-9, Ichki: 0-200)";
		natija.style.backgroundColor = "OrangeRed";
		rasm.src = "./assets/error.jpg";
	}
}
