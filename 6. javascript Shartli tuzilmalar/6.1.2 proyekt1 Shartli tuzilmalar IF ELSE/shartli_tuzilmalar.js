






function tekshir(){


	
let ielts = document.getElementById("ielts").value;
let ichki_ball = document.getElementById("ichki_ball").value;

let natija = document.getElementById("natija");
let rasm = document.getElementById("rasm");


if(ielts <0 || ielts > 9 || ichki_ball < 0 || ichki_ball > 200){
	natija.innerText = "Iltimos, to'g'ri qiymat kiriting! (IELTS: 0-9, Ichki: 0-200)";

	rasm.src = "./rasmlar/error.jpg";	
	natija.style.backgroundColor = "OrangeRed";
	
}
else{
	if(ielts >= 6.5 || ichki_ball >= 180){
		natija.innerText = "Tabriklaymiz, siz ishga qabul qilindingiz!";
		rasm.src = "./rasmlar/passed.jpg";
	}
	else{
		natija.innerText = "Afsuski, siz ishga qabul qilinmadingiz.";
		rasm.src = "./rasmlar/fail.jpg";
	}
}




}











