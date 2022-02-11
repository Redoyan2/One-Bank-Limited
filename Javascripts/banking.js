
const dipositAmount = document.getElementById('diposit-amount');
const dipositInput = document.getElementById('diposit-input');
const dipositBtn = document.getElementById('diposit-btn');
const widowAmount = document.getElementById('widow-amount');
const widowInput = document.getElementById('widow-input');
const widowBtn = document.getElementById('widow-btn');
const balanceAmount = document.getElementById('balance-amount');




dipositBtn.addEventListener('click', function () {
    dipositAmount.innerText = parseFloat(dipositInput.value) + parseFloat(dipositAmount.innerText);
    balanceAmount.innerText = parseFloat(balanceAmount.innerText) + parseFloat(dipositInput.value);
    dipositInput.value = '';
})



widowBtn.addEventListener('click', function () {
    widowAmount.innerText = parseFloat(widowInput.value) + parseFloat(widowAmount.innerText);
    balanceAmount.innerText = parseFloat(balanceAmount.innerText) - parseFloat(widowInput.value);
    widowInput.value = '';
})

