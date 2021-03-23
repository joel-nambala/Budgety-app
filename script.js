// 'use strict';

let budgetTotal, expenseTotal, balance;

// call the init function
init();

// show the date
const showDate = () => {
    // 1. Get the date
    let today = new Date();

    // 2. Set the date
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    // 3. Diplay to the UI
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.querySelector('.date').textContent = `${day} ${months[month]}, ${year}`;

}

// call the show date function
showDate();


// setting up event listeners

// budget button event listener
document.querySelector('.budget-button').addEventListener('click', () => {
    // 1. Get the budget input from the user
    let budgetValue = document.querySelector('.budget-value').value;
    
    if(budgetValue !== '' && budgetValue > 0){
        // 2. Add the budget value to the budget total
        budgetTotal = budgetValue;
        budgetValue.value = '';
        // 3. Display to the UI
        document.querySelector('.budget-total').textContent = budgetTotal;
        
    } else {
        errorMsg();    
    }

    

});

// expense button event listener
document.querySelector('.expense-button').addEventListener('click', () => {
    // 1. Get the expense value from the user
    let expenseValue = document.querySelector('.expense-value').value;
    
    if(expenseValue !== '' && expenseValue > 0) {
        // 2. Add the expense value to the expense total value
        expenseTotal += Number(expenseValue);

        // 3. Display the expense value to the UI
        document.querySelector('.expense-total').textContent = expenseTotal;

        // 4. Calculate the balance
        balance = budgetTotal - expenseTotal;
        
        // 5. Display the balance to the UI
        if (balance > 0) {
            document.querySelector('.balance-total').textContent = balance;
        } else {
            // alert(`You have a debt of ${balance}`);
            document.querySelector('.info-msg').style.display = 'block';
            setTimeout(() => document.querySelector('.info-msg').remove(), 4000);
            document.querySelector('.info-msg').textContent = `You have a debt of ${balance}`;
        };
    } else {
        errorMsg();
    };

});

// remove and add an error message
function errorMsg() {
    let msg = document.querySelector('.error-msg');
    msg.style.display = 'block';
    setTimeout(() => msg.remove(), 4000);

};


// setting up an initial function
function init() {

    budgetTotal = 0;
    expenseTotal = 0;
    balance = 0;

    document.querySelector('.budget-total').textContent = 0;
    document.querySelector('.expense-total').textContent = 0;
    document.querySelector('.balance-total').textContent = 0;
    document.querySelector('.error-msg').style.display = 'none';
    document.querySelector('.info-msg').style.display = 'none';

};