function rot13(str) {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
        let ascii_value = str.charCodeAt(i)
        if (65 <= ascii_value && ascii_value <= 90) {
            let decoded_ascii_value = (ascii_value - 65 + 13) % 26 + 65
            decoded += String.fromCharCode(decoded_ascii_value)
        } else if (97 <= ascii_value && ascii_value <= 122) {
            let decoded_ascii_value = (ascii_value - 97 + 13) % 26 + 97
            decoded += String.fromCharCode(decoded_ascii_value)
        } else {
            decoded += str[i]
        }
    }
    return decoded;
}

// Tests below
/*
console.log(rot13("SERR PBQR PNZC"))  // should decode to the string FREE CODE CAMP
console.log(rot13("SERR CVMMN!"))  // should decode to the string FREE PIZZA!
console.log(rot13("SERR YBIR?"))  // should decode to the string FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))  // should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
