

let student1 = {
	ismi: "Saida",
	familiyasi: "Sultonova",

	qiziqishlari: {
		sport: ["Football", "Basketball", "Tennis"],

		muzik: ["Piano", "Guitar", "Violin"],

		fanlar: ["Matematika", "Ingliz tili"]
	},

	manzili: {
		mahalla: "Tagan mahallasi",
		qishloq: "Tagan qishlog'i",
		tuman: "Yangiariq",
		viloyat: "Xorazm"
	},
	rasmlari: {
		rasm1: "./rasmlar/student1.jpg",
		rasm2: "./rasmlar/student1000.png"
	}
}


let student2 = {
	ismi: "Nurbek",
	familiyasi: "Shuhratov",

	qiziqishlari: {
		sport: ["Football", "Basketball", "Tennis"],

		muzik: ["Piano", "Guitar", "Violin"],

		fanlar: ["Matematika", "Ingliz tili"]
	},

	manzili: {
		mahalla: "Tagan mahallasi",
		qishloq: "Tagan qishlog'i",
		tuman: "Yangiariq",
		viloyat: "Xorazm"
	},
	// rasmlari: {
	// 	rasm1: "./rasmlar/student2.jpg",
	// 	rasm2: "./rasmlar/student1000.png"
	// }
}










let ui_chizish = {

	btn1: document.getElementById("btn1"),
	btn2: document.getElementById("btn2"),
	malumot: document.getElementById("malumot"),

	chizish(student){

		let rasm = student.rasmlari?.rasm1 ?? "./rasmlar/default picture.jpg";

		this.malumot.innerHTML = `
		<h2>ismi: ${student.ismi}</h2>
		<h2>familiyasi: ${student.familiyasi}</h2>
		<hr>
		<p>viloyati: ${student.manzili.viloyat}</p>
		<p>tumani: ${student.manzili.tuman}</p>
		<hr>
		<h3>qiziqishlari: ${student.qiziqishlari?.sport?.[0]}</h3>
		<img src="${rasm}" class="rasm">
		`
	}
}

ui_chizish.btn1.onclick = function(){
	ui_chizish.chizish(student1)
}
ui_chizish.btn2.onclick = function(){
	ui_chizish.chizish(student2)
}



