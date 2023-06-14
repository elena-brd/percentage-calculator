const calculationBtn = document.getElementById('calculationBtn');

function onClick() {
    const inputPercentage = document.getElementById('percentage').value;
    const inputNumber = document.getElementById('number').value
    document.getElementById('total').value = (inputNumber / 100) * inputPercentage;
}

calculationBtn.addEventListener('click', onClick);