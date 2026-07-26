

function hisobla(birinchi, ikkinchi, callback){

  let natija = birinchi + ikkinchi;

  return callback(natija);

}

function kvadratgaKotarish(x){
  return x**2
}

function kubgaKotarish(y){
  return y**3
}




console.log(hisobla(2, 7, kvadratgaKotarish))
console.log(hisobla(2, 9, kubgaKotarish))




