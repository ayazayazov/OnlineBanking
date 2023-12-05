delete localStorage.data;
delete localStorage.loginUserIndex;
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
const logInBtn = document.getElementById('logInBtn');
const eyeOnOff = document.getElementById('eyeOnOff');
// let userLength = (+localStorage.userHistoryCount);
// userLength++;
let userLength = (localStorage.length-(+localStorage.userHistoryCount)-1);
console.log(userLength);
if(localStorage.length===1){
    userLength = 1;
    console.log('userlenght:', userLength);
}
if(localStorage===0){
    userLength = 0;
    console.log('userlenght:', userLength);
}
// if(!userLength){
//     userLength = 0;
//     console.log(userLength);
// }
// else if(!localStorage.userHistoryCount || localStorage.length){
//     userLength = 1;
//     console.log(userLength);
// }
const login = {
    email: function(){
        let usersEmail = [];
        for(let i=0; i<userLength; i++){
            const getUser = JSON.parse(localStorage[`user${i}`]);
            usersEmail.push(getUser.email);
            console.log(usersEmail);
        };
        return usersEmail;
    },
    password: function(){
        let usersPassword = [];
        for(let i=0; i<userLength; i++){
            const getUser = JSON.parse(localStorage[`user${i}`]);
            usersPassword.push(getUser.password);
            console.log(usersPassword);
        };
        return usersPassword;
    }
};

logInBtn.addEventListener('click', function(){
    if(emailInput.value === '' || passwordInput.value === ''){
        alert('Please type the email or password.');
    }
    else if(login.email().includes(emailInput.value) && login.password().includes(passwordInput.value)){
        let loginUserIndex = login.email().indexOf(emailInput.value);
        localStorage.loginUserIndex = loginUserIndex;
        window.location.href = './html/dashboard.html';
    }
    else{
        alert('Email or password incorrect!');
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