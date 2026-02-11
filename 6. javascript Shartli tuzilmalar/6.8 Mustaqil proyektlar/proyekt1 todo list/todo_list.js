


let tanlov = document.getElementById("tanlov");
let miqdor = document.getElementById("miqdor");
let btn = document.getElementById("btn");
let list = document.getElementById("list");


function qoshish() {
	

	list.innerHTML = list.innerHTML + '<div>' + tanlov.value + " - " + miqdor.value + '</div>';
}