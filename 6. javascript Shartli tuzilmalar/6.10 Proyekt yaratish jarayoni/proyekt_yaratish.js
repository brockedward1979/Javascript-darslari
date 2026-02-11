let btn = document.getElementById("btn");
let natija = document.getElementById("natija");
let input = document.getElementById("input");
let natija2 = document.getElementById("natija2");
let natija3 = document.getElementById("natija3");

let son = 100;

btn.onclick = function hammasini_hisobla() {
	
	oshirish();
	kopaytirish();
	ayirish();

};



// 

function oshirish() {
	natija.innerText = "Natija:" + (son + Number(input.value)) + " UZS";
	natija.style.backgroundColor = "green";
}

function kopaytirish(){
	natija2.innerText = "Natija:" + (son * Number(input.value)) + " UZS";
	natija2.style.backgroundColor = "orange";
}

function ayirish(){
	natija3.innerText = "Natija:" + (son - Number(input.value)) + " UZS";
	natija3.style.backgroundColor = "red";
}
