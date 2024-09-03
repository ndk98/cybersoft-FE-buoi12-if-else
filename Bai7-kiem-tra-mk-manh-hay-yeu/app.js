let password = document.querySelector("input[name='password']");
let resultElem = document.querySelector("#result");

document.querySelector("#check").onclick = function () {
    if (password.value.length < 8) {
        resultElem.innerHTML = "Mật khẩu không đủ mạnh";
    } else {
        resultElem.innerHTML = "";
    }
};
