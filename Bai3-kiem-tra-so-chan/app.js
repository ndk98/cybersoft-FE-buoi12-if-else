let number = document.querySelector("input[name='number']"),
    resultElem = document.querySelector("#result");

document.querySelector("#check").onclick = function () {
    if (number.value % 2 == 0) {
        resultElem.innerHTML = "So chan";
    } else {
        resultElem.innerHTML = "";
    }
};
