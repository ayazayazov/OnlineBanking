let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
const eyeOnOff = document.getElementById('eyeOnOff');
const signInBtn = document.getElementById('signInBtn');

let userLength = (localStorage.length-(+localStorage.userHistoryCount)-1);

console.log(userLength);
if(!userLength)
    userLength = 0;

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

function register(){
    let userIndex = userLength;
    localStorage[`user${userIndex}`] = JSON.stringify({name: nameInput.value, email: emailInput.value, password: passwordInput.value, balance: 0, limit: 2000});
}

signInBtn.addEventListener('click', ()=>{
    
    if(nameInput.value === '' || emailInput.value === '' || passwordInput.value === ''){
        alert('Please fill in all the blanks.');
    }else{
        register();
        window.location.href = '../index.html';
    }
});