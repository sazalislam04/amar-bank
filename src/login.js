// add event listener in button element
document.getElementById('submit-btn').addEventListener('click', function(){
        // gett the email input and get the value
    const emailField = document.getElementById('email-input');
    const email = emailField.value;
    // get the password input inside the value
    const passwordField = document.getElementById('password-input');
    const password = passwordField.value;

    // check the email and password validation and go to the next step
    if(email === 'sazal@gmail.com' && password === "sazal"){
        window.location.href = 'bank.html';
    } else{
        alert('wrong email and password');
    }
});