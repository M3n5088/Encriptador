const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");

function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(texto) {
  if (!/^[a-z ]+$/.test(texto)) {
    return ""
  }

  const regex = /[aeiou]/g;
  const correspondencias = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
  };

  function reemplazo(match) {
    return correspondencias[match];
  }

  const textoEncriptado = texto.replace(regex, reemplazo);
  return textoEncriptado;
}

function btnDesencriptar(){
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}


function desencriptar(textoEncriptado) {
  if (!/^[a-z ]+$/.test(textoEncriptado)) {
    return "";
  }

  const correspondencias = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
  };

  const regex = /ai|enter|imes|ober|ufat/g;

  function reemplazo(match) {
    return correspondencias[match];
  }

  const textoDesencriptado = textoEncriptado.replace(regex, reemplazo);
  return textoDesencriptado
}
function btnCopiar(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value="";
  alert("Texto Copiado")
}