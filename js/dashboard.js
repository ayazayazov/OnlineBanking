const namePlace = document.getElementById('namePlace');
const logOut = document.getElementById('logOut');
const username = document.getElementById('username');

let loginUserIndex = localStorage.loginUserIndex;

console.log(`Login user index: ${loginUserIndex}`);

let user = JSON.parse(localStorage[`user${loginUserIndex}`]);

console.log(`User name: ${user.name}\nUser email: ${user.email}\nUser password: ${user.password}`);

username.innerHTML = user.name;

// namePlace.innerHTML = user.password;
logOut.addEventListener('click', ()=>{
    delete localStorage.loginUserIndex;
})