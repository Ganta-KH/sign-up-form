const password = document.querySelector("#pwd");
const confirmPassword = document.querySelector("#c-pwd");
let error = document.querySelector("#error");

function checkPassword() {
    error.textContent = password.value == confirmPassword.value ? "" : "* Password de not match";
}

password.addEventListener("keyup", () => {
    if (confirmPassword.value.length != 0) checkPassword();
});

confirmPassword.addEventListener("keyup", checkPassword);


