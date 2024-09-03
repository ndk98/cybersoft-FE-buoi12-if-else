let age = document.querySelector("input[name='age']"),
    resultElem = document.querySelector("#result");

document.querySelector("#check").onclick = function () {
    if (age.value >= 6) {
        resultElem.innerHTML = "Du tuoi vao lop 1.";
    } else {
        resultElem.innerHTML = "";
    }
};
