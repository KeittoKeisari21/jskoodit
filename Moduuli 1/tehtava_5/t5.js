function kv(vuosi){
  if (vuosi % 400 === 0){
    return true;
  }
  if (vuosi % 100 === 0){
    return false;
  }
  return vuosi % 4 === 0;
}

function katso(){
  let vuosi = prompt("Anna vuosi");
  vuosi = parseInt(vuosi);
  let resultElement = document.getElementById('result')
  if (kv(vuosi)){
    resultElement.innerHTML = vuosi + " On karkausvuosi";
  } else {
    resultElement.innerHTML = vuosi + " Ei ole karkausvuosi";
  }
}