const dipositAmount = document.getElementById('diposit-amount');
const dipositInput = document.getElementById('diposit-input');
const dipositBtn = document.getElementById('diposit-btn');
dipositBtn.addEventListener('click', function(){
    dipositAmount.innerText = dipositInput.value;
    dipositInput.value = '';
})