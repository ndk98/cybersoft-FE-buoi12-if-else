let productSoldCount = document.querySelector(
        "input[name='product-sold-count']"
    ),
    unitPrice = document.querySelector("input[name='unit-price']"),
    resultElem = document.querySelector("#result");

document.querySelector("#check").onclick = function () {
    if (productSoldCount.value > 100) {
        let total =
            parseInt(productSoldCount.value) *
            Number(unitPrice.value).toFixed(2);
        let bonus = (10 * total) / 100;
        resultElem.innerHTML = `Ban duoc thuong ${bonus}`;
    } else {
        resultElem.innerHTML = "";
    }
};
