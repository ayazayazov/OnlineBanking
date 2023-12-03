delete localStorage.data;
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
const logInBtn = document.getElementById('logInBtn');
const eyeOnOff = document.getElementById('eyeOnOff');

const login = {
    email: function(){
        let usersEmail = [];
        for(let i=0; i<localStorage.length; i++){
            const getUser = JSON.parse(localStorage[`user${i}`]);
            usersEmail.push(getUser.email);
        };
        return usersEmail;
    },
    password: function(){
        let usersPassword = [];
        for(let i=0; i<localStorage.length; i++){
            const getUser = JSON.parse(localStorage[`user${i}`]);
            usersPassword.push(getUser.password);
        };
        return usersPassword;
    }
};


// function emailFun(){
//     let users = [];
//     for(let i=0; i<localStorage.length; i++){
//         const getUser = JSON.parse(localStorage[`user${i}`]);
//         users.push(getUser.email);
//     };
//     return users;
// };
// console.log(emailFun());

// if(emailFun().includes("ayazayazov@gmail.com")){
//     console.log('true');
// }


// emailFun();
// console.log(emailFun());
// let i=2;
// let getUser = JSON.parse(localStorage[`user${i}`]);
// console.log(getUser.name);
// console.log(getUser.email);
// console.log(getUser.password);
// console.log(emailFun());
// console.log(user.email);

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
        // window.location.href = './html/dashboard.html';
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