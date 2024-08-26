
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}


function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}


function copyToClipboard() {
    const outputText = document.getElementById("output-text").textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    });
}


function handleEncryption() {
    const inputText = document.getElementById("input-text").value;
    if (validateInput(inputText)) {
        const encryptedText = encryptText(inputText);
        document.getElementById("output-text").textContent = encryptedText;
    } else {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
    }
}


function handleDecryption() {
    const inputText = document.getElementById("input-text").value;
    if (validateInput(inputText)) {
        const decryptedText = decryptText(inputText);
        document.getElementById("output-text").textContent = decryptedText;
    } else {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
    }
}


function validateInput(text) {
    return /^[a-z\s]*$/.test(text); // Solo permite letras minúsculas y espacios
}


document.getElementById("encrypt-btn").addEventListener("click", handleEncryption);
document.getElementById("decrypt-btn").addEventListener("click", handleDecryption);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
