

let btn_ochish = document.getElementById("btn_ochish");
let btn_yopish = document.getElementById("btn_yopish");
let dialog = document.getElementById("dialog");

btn_ochish.onclick = () => {
  dialog.showModal();
};

btn_yopish.onclick = () => {
  dialog.close();
};  