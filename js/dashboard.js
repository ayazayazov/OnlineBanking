const logOut = document.getElementById('logOut');
const userProfile = document.getElementById('userProfile');
const balance = document.getElementById('balance');
const inputAmount = document.getElementById('inputAmount');
const cashIn = document.getElementById('cashIn');
const withdraw = document.getElementById('withdraw');
const showHistory = document.getElementById('showHistory');
const aboutContent = document.getElementById('aboutContent');
const historyContent = document.getElementById('historyContent');
const rightMenu = document.getElementById('rightMenu');
let loginUserIndex = localStorage.loginUserIndex;
let user = JSON.parse(localStorage[`user${loginUserIndex}`]);
let userHistory;
let historyIndex = 0;
if(localStorage.userHistoryCount){
    historyIndex = localStorage.userHistoryCount;
}
// console.log(user);
balance.innerHTML = user.balance;

userProfile.innerHTML = user.name;
logOut.addEventListener('click', ()=>{
    delete localStorage.loginUserIndex;
    localStorage.userHistoryCount = JSON.parse(historyIndex);
})


const payment ={
    // historyKeys: ()=>{
    //     return {
    //         type: '',
    //         amount: 0,
    //         created: new Date(),
    //     }
    // },
    historyData: [],
    date: new Date(),
    update: ()=>{
        delete localStorage[`user${loginUserIndex}`];
        localStorage[`user${loginUserIndex}`] = JSON.stringify(user);
        balance.innerHTML = user.balance;
        inputAmount.value = '';
    },
    updateUserHistory: function(){
        delete localStorage[`user${loginUserIndex}history${historyIndex}`];
        localStorage[`user${loginUserIndex}history${historyIndex}`] = JSON.stringify(userHistory);
        historyIndex++;
    },
    createUserHistory: function(){
        localStorage[`user${loginUserIndex}history${historyIndex}`] = JSON.stringify({type: '', amount: 0, created: new Date()});
    },
    cash_in: function(amount){
        if(amount > user.limit){
            return alert('You cannot enter more than the limit! Please increase the limit.');
        }else if(amount <= 0 || !amount){
            return alert('Invalid action!!!');
        }
        user.balance += amount;
        this.createUserHistory();
        userHistory = JSON.parse(localStorage[`user${loginUserIndex}history${historyIndex}`]);
        userHistory.type = 'Cash in';
        userHistory.amount = amount;
        // update userHistory
        this.updateUserHistory();
        console.log(userHistory);
        const history = {
            type: 'Cash in',
            amount: amount,
            created: this.date,
        }
        // this.history.push(this.historyKeys());
        // console.log(this.history);
        // user.push(this.history);
        this.historyData.push(history);
        console.log(this.historyData);
        console.log(user);
        this.update();
        // user.balance = JSON.stringify(tempBalance);
        // localStorage[`user${loginUserIndex}`] = JSON.stringify({balance: `${tempBalance}`});
        // localStorage.setItem(user.balance, JSON.stringify(tempBalance));
    },
    withdraw: function(amount){
        if(!amount){
            return alert('Invalid action!!!');
        }
        else if(user.balance <= 0 || user.balance < amount){
            return alert('There is not enough money in the balance.');
        }
        else if(amount > user.limit){
            return alert('You cannot withdraw more than the limit! Please increase the limit.');
        }
        user.balance -= amount;
        this.createUserHistory();
        userHistory = JSON.parse(localStorage[`user${loginUserIndex}history${historyIndex}`]);
        userHistory.type = 'Withdraw';
        userHistory.amount = amount;
        // update userHistory
        this.updateUserHistory();
        console.log(userHistory);
        const history = {
            type: 'Withdraw',
            amount: amount,
            created: this.date,
        }
        this.historyData.push(history);
        console.log(this.historyData);
        console.log(user);
        this.update();
    }
}

cashIn.addEventListener('click', ()=>{
    payment.cash_in(+inputAmount.value);
});

withdraw.addEventListener('click', ()=>{
    payment.withdraw(+inputAmount.value);
});

showHistory.addEventListener('click', ()=>{
    aboutContent.remove();
    historyContent.innerHTML = `
    <table class="styled-table" id="table">
    <thead>
        <tr>
        <th>#</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Time</th>
        </tr>
    </thead>
    <tbody id="tbody">
    </tbody>
    </table>
    `
    const historyTable = payment.historyData.map((element, index)=>{
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${element.type}</td>
            <td>${element.amount}</td>
            <td>${element.created.getDate()}.${element.created.getMonth()}.${element.created.getFullYear()}/(${element.created.getHours()}:${element.created.getMinutes()})</td>
        </tr>
        `
    }).join('');
    const tbody = document.getElementById('tbody');

    tbody.innerHTML = historyTable;
});