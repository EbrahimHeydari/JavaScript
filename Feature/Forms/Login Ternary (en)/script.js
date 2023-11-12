let form = document.querySelector('.form')
let button = document.getElementById('send')

const resetClass = (element, className) => {
  element.classList.remove(className)
}

document.querySelector('.show-signup').addEventListener('click', () => {
  resetClass(form, 'signin')
  resetClass(form, 'reset')
  form.classList.add('signup')
  button.innerText = 'Sign Up'
})

document.querySelector('.show-signin').addEventListener('click', () => {
  resetClass(form, 'signup')
  resetClass(form, 'reset')
  form.classList.add('signin')
  button.innerText = 'Sign In'
})

document.querySelector('.show-reset').addEventListener('click', () => {
  resetClass(form, 'signup')
  resetClass(form, 'signin')
  form.classList.add('reset')
  button.innerText = 'Reset Password'
})