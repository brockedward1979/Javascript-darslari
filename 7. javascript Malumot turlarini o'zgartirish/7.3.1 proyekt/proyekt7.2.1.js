let minus_btn = document.getElementById("minusBtn");
let plus_btn = document.getElementById("plusBtn");
let input = document.getElementById("input");
let natija = document.getElementById("natija");

input.value = 0;


iphone28 = {
	narxi: 1200,
	ranggi: "ko'k",
	qolgani: 5
}


let narx = iphone28.narxi;





let skladdagi_miqdor = iphone28.qolgani;







plus_btn.onclick = function oshirish() {

	let skladdagidan_oshdimi = input.value >= skladdagi_miqdor; // boolean qiymat qaytaradi

	if(skladdagidan_oshdimi) {

	
	
	}
	
	else{
		input.value = Number(input.value) + 1;
	
	}

	natija.innerText = input.value*narx + " USD";
	
};


















minus_btn.onclick = function kamaytirish() {
	if (input.value == 0) {

	} else {
		input.value = Number(input.value) - 1;
		
	}

	natija.innerText = input.value*narx + " USD";
};
