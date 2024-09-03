let age = document.querySelector("input[name='age']"),
    resultElem = document.querySelector("#result");

document.querySelector("#check").onclick = function () {
    if (age.value >= 16) {
        resultElem.innerHTML = "Ban du tuoi lai xe";
    } else {
        resultElem.innerHTML = "Ban chua du tuoi";
    }
};
