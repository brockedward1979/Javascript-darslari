function tekshir() {
	let ielts = document.getElementById("ielts").value;

	let ichki = document.getElementById("ichki").value;
	let natija = document.getElementById("natija");
	let maslahat = document.getElementById("maslahat");

	if (ielts <= 9 && ichki <= 200) {
		if (ielts > 6 || ichki > 150) {
			natija.innerText =
				"Siz universitetga qabul qilindingiz";
			maslahat.src = "./assets/passing.jpg";
			
			natija.style.backgroundColor = "Orange";
			natija.style.transition = "all 2s ease-in-out";
		} else {
			natija.innerHTML = "Siz universitetga qabul qilinmadingiz";
			natija.style.backgroundColor = "Red";
			natija.style.transition = "all 2s ease-in-out";
			maslahat.src = "./assets/failing.jpg";
		}
		if(ielts == 9 || ichki == 200){
			natija.innerHTML = "Siz universitetga a'lo darajada qabul qilindingiz!";
			natija.style.backgroundColor = "Green";
			natija.style.transition = "all 2s ease-in-out";
			maslahat.src = "./assets/fantastic.gif";
			
		}
	} else {
		natija.innerHTML =
			"IELTS balli 9 dan kichik va ichki ball 200 dan kichik bo'lishi kerak!";
		maslahat.src = "./assets/error.jpg";
	}
}
