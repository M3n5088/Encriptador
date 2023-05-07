const textArea=document.querySelector("text-area");
const mensaje=document.querySelector("mensaje");

function btnEncriptar(){
  const textoEncriptado = encriptarTexto(textArea.value);
  mensaje.value = textoEncriptado;
  mensaje.value = "";
  mensaje.Style.backgroundImage = "none";
}

function encriptarTexto(texto) {
  // Validamos que el texto solo contenga minúsculas sin caracteres especiales
  if (!/^[a-z ]+$/.test(texto)) {
    return "";
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

function desencriptarTexto(textoEncriptado) {
  // Validamos que el texto encriptado solo contenga minúsculas sin caracteres especiales
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
  return textoDesencriptado;
}