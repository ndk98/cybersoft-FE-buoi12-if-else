let total = document.querySelector("input[name='total']"),
    resultElem = document.querySelector("#result");

document.querySelector("#check").onclick = function () {
    if (total.value > 500) {
        let bonus = (20 * total.value) / 100;
        resultElem.innerHTML = `Ban duoc giam 20% la ${bonus} USD`;
    } else {
        resultElem.innerHTML = "";
    }
};
