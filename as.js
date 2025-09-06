let inp = document.querySelector("#inp");
let click = document.querySelector("#click");
let as = document.querySelectorAll(".as");


click.addEventListener("click", function () {
    let str = inp.value
    let strLen = str.length;
    let strUp = str.toUpperCase();
    let strLc = str.toLowerCase();
    let mid = Number(Math.floor(strLen / 2));
    let mkc = String(str[mid])

    let vCount = 0;
    let cCount = 0;
    let space = 0;
    let word = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
            vCount++;
        }
        else if (str[i] == " ") {
            space++;
        }
        else {
            cCount++;
        }
        console.log(str[i]);
    }
    let result = "";
    let capitalizeNext = false;
    let check = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " " || str[i] === "_" || str[i] === "-") {
            capitalizeNext = true;
            check = str[i];
        } else {
            if (capitalizeNext) {
                result += str[i].toUpperCase();
                capitalizeNext = false;
                if (check === " ")
                    word++;
            } else {
                if (result === "") {
                    result += str[i].toLowerCase();
                    word = 1;
                } else {
                    result += str[i];
                }
            }
        }
    }
    const ob = [strLen, strUp, strLc, mkc, vCount, cCount, result, word];
    const na = ["Length : ", "Upper Case : ", "Lower Case : ", "Middle Char : ", "Vowel Count : ", "Consonants : ", "Camel Case : ", "Words : "];
    for (let i = 0; i < as.length; i++) {
        as[i].textContent = na[i] + ob[i];
    }
})