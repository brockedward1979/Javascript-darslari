let student = {
	ismi: "Alisher",
	familiyasi: "Valiyev",
	yoshi: 20,
	id: 2026,

	hisobla(){
		console.log(this);
	}
}

let yangi = {
	ismi: "Muhammadjon",
	familiyasi: "Otabekov"
}

let btn = document.getElementById("btn");
let btn_ikkinchi = document.getElementById("btn_ikkinchi");

btn.onclick = student.hisobla;

btn_ikkinchi.onclick = student.hisobla;




