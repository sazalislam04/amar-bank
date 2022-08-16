document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // set the empty value
    depositField.value = '';
    // validation cheking
    if(isNaN(newDepositAmount)){
        alert('please provide an valid input number');
        return;
    }
    // get the deposit amount element
    const depositElement = document.getElementById('deposit-amount');
    const previousDepositAmountString = depositElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    // calculate the total amount
    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    depositElement.innerText = currentDepositAmount;

    // get the balance element and update the balane amount
    const totalBalanceElement = document.getElementById('balance');
    const previousBalanceAmountString = totalBalanceElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    // calculate the total amount in balance

    const currentBalanceAmount = previousBalanceAmount + newDepositAmount;
    totalBalanceElement.innerText = currentBalanceAmount;

});