document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    // validation check
    if(isNaN(newWithdrawAmount)){
        alert("please provide an valid input number");
        return;
    }
    // get the withdraw element
    const withdrawElement = document.getElementById('withdraw');
    const previousWithdrawAmountString = withdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // calculate balance after withdraw amount
    const totalBalanceElement = document.getElementById('balance');
    const previousBalanceAmountString = totalBalanceElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
      // amount validation
      if(newWithdrawAmount > previousBalanceAmount){
        alert('Inficent Balance');
        return;
    }
    // calculate the total withdraw amount
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawElement.innerText = totalWithdrawAmount;

    const afterWithdrawTotalBalance = previousBalanceAmount - newWithdrawAmount;
    totalBalanceElement.innerText = afterWithdrawTotalBalance;

});