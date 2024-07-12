function criptografar() {
    text = document.getElementById("theText").value
    encryptMsg(text, 5)
}

function encryptMsg(str, shift) {
    let encreptedStr = ' ';

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // uppercase letters
            encreptedStr += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // lowercase letters
            encreptedStr += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            // non-alphabetic characters
            encreptedStr += str.charAt(i);
        }
    }
    document.getElementById("result").innerText = encreptedStr
}
