const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail == 'lavlu@gmail.com' && userPassword == 'lavlu') {
        console.log('clicked button');
        document.location.href = 'banking.html';
    }
    else {
        alert('Incorrect Password!!!!!!');
    }
})