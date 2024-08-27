const textarea = document.querySelector(".texto_encriptador");
const mensaje = document.querySelector(".resultado_encriptado");

function botonEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundimage = "none";
}

function encriptar(stringEncriptado){
  let matrizcodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for(let i=0; i < matrizcodigo.length; i++){
    if(stringEncriptado.includes(matrizcodigo[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
    }
    return stringEncriptado;
  }
  

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizcodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
  
    for(let i=0; i < matrizcodigo.length; i++){
      if(stringDesencriptado.includes(matrizcodigo[i][1])){
        stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
      }
     
    }
    return stringDesencriptado;
}
