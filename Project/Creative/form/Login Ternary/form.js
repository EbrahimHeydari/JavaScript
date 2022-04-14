var form = document.getElementsByClassName('form')[0];
var button = document.getElementById('send');

function resetClass(element, className) {
    element.classList.remove(className);
}

document.getElementsByClassName('show-signup')[0].addEventListener('click', function () {
    resetClass(form, 'signin');
    resetClass(form, 'reset');
    form.classList.add('signup');
    button.innerText = 'Sign Up';
})

document.getElementsByClassName('show-signin')[0].addEventListener('click', function () {
    resetClass(form, 'signup');
    resetClass(form, 'reset');
    form.classList.add('signin');
    button.innerText = 'Sign In';
})

document.getElementsByClassName('show-reset')[0].addEventListener('click', function () {
    resetClass(form, 'signup');
    resetClass(form, 'signin');
    form.classList.add('reset');
    button.innerText = 'Reset Password';
})