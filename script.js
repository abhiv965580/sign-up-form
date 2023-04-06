const password = document.querySelector('#user-pass');
const confirmPassword = document.querySelector('#confirm-pass');
const errMsg = document.querySelector('.error-message');
const form = document.querySelector('form');

const submit = (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        password.classList.remove('success');
        confirmPassword.classList.remove('success');
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errMsg.textContent = "*Passwords do not match";
    }
    else{
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        errMsg.textContent = '';
        password.classList.add('success');
        confirmPassword.classList.add('success');
    }
}

form.addEventListener('submit', submit);
