const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`


function remplazar(elemento){
    let inputTexto = elemento.value
    inputTexto = inputTexto.split(/[^a-z\#\&]+/g) //solo admite minusculas
    inputTexto = inputTexto.join("")
    elemento.value = inputTexto
  }

function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage="none";
    inputTexto.value = TextoEncriptado;
    inputTexto.value = "";
}

function encriptar(stringEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptar;

}

function btnDesencriptar(){
    const TextoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage="none";
    inputTexto.value = "";
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptar.includes(matrizCodigo[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptar;

}

function copiar(){
mensaje.select();
navigator.clipboard.writeText (mensaje.value);
alert("Texto Copiado");
mensaje.value="";
}

