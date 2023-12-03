let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
const logInBtn = document.getElementById('logInBtn');
const eyeOnOff = document.getElementById('eyeOnOff');

logInBtn.addEventListener('click', function(){
    if(emailInput.value === '' || passwordInput.value === ''){
        alert('Please type the email or password.');
    }else{
        window.location.href = './html/dashboard.html';
    }
});

eyeOnOff.addEventListener('click', ()=>{
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        eyeOnOff.classList.remove('eyeOff');
        eyeOnOff.classList.add('eyeOn');
    }else{
        passwordInput.type = 'password';
        eyeOnOff.classList.remove('eyeOn');
        eyeOnOff.classList.add('eyeOff');
    }
});