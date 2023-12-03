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

function register(){
    let userIndex = localStorage.length;
    // let user = localStorage.length;
    // localStorage.user = {name: "John"};
    localStorage[`user${userIndex}`] = JSON.stringify({name: nameInput.value, email: emailInput.value, password: passwordInput.value});
    // localStorage.setItem([`name${userIndex}`, `email${userIndex}`, `password${userIndex}`], [nameInput.value, emailInput.value, passwordInput.value]);
}

signInBtn.addEventListener('click', ()=>{
    
    if(nameInput.value === '' || emailInput.value === '' || passwordInput.value === ''){
        alert('Please fill in all the blanks.');
    }else{
        register();
        window.location.href = '../index.html';
    }
});