let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
const eyeOnOff = document.getElementById('eyeOnOff');
const signInBtn = document.getElementById('signInBtn');

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

signInBtn.addEventListener('click', ()=>{
    
    if(nameInput.value === '' || emailInput.value === '' || passwordInput.value === ''){
        alert('Please fill in all the blanks.');
    }else{
        window.location.href = '../index.html';
    }
});