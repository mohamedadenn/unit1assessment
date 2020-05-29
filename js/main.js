let counter = 0
let display = 0

let buttons = document.querySelectorAll('button')
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let inputValue = document.querySelector("input");
let displayText = document.querySelector("p");



incrementNum();

function incrementNum() {
    buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            if (event.target == plusButton) {
                number = parseInt(inputValue.value, 10);
                display = counter += number;
                displayText.textContent = display;
                console.log(display)
            } else if (event.target == minusButton) {
                number = parseInt(inputValue.value, 10);
                display = counter -= number;
                displayText.textContent = display;
                console.log(display)
            }
        });

    });
}