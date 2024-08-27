const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    if (textArea.value.trim() === "") {
        alert("El campo de texto está vacío. Por favor, ingresa un texto.");
        return;
    }
    const textoEncriptado = encriptar(textArea.value);
    if (textoEncriptado !== undefined) { 
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        document.querySelector(".texto-info").style.display = "none"; 
    }
}

function btnDesencriptar(){
    if (textArea.value.trim() === "") {
        alert("El campo de texto está vacío. Por favor, ingresa un texto.");
        return;
    }
    const textoDesencriptado = desencriptar(textArea.value);
    if (textoDesencriptado !== undefined) { 
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        
    }
}

function validarTexto(texto){
    const contieneMayusculas = /[A-Z]/.test(texto);
    const contieneAcentosOCaracteresEspeciales = /[^a-z\s]/.test(texto);

    if (contieneMayusculas) {
        alert("El texto solo debe contener letras minúsculas.");
        return false;
    }

    if (contieneAcentosOCaracteresEspeciales) {
        alert("El texto solo debe contener letras minusculas sin acentos y sin caracteres especiales.");
        return false;
    }

    return true;
}

function encriptar(stringEncriptada){
    if (!validarTexto(stringEncriptada)) {
        return undefined;
    }

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    if (!validarTexto(stringDesencriptada)) {
        return undefined;
    }

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto(){
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado en portapales");
}