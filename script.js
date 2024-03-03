password = document.querySelector('input[name="password"]');
confirmPassword = document.querySelector('input[name="confirmPassword"]');
errorMessage = document.querySelector('#errorMessage');
createAccountButton = document.querySelector('button[type="submit"]');


function validatePassword() 
{
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.style.color = 'red';
    } else {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        errorMessage.style.color = 'transparent';
    }
}

confirmPassword.addEventListener('input', validatePassword);
password.addEventListener('input', validatePassword);

createAccountButton.addEventListener('click', function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        validatePassword();
    }
});