const ActionButon = document.querySelector('#Action');
const checkedButton = document.querySelector("#buttonChecked")


ActionButon.addEventListener("submit", function(e) {
    e.preventDefault()

    const CheckedMessage = checkedButton

    CheckedMessage.textContent = "Liked 👍"
})
