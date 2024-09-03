let number = document.querySelector("#number");
let resultElem = document.querySelector("#result");

document.querySelector("#check").onclick = function () {
    if (number.value > 0) {
        resultElem.innerHTML = "So duong";
    } else {
        resultElem.innerHTML = "";
    }
};
