// Init Classes
const github = new Github
const ui = new UI

const searchBar = document.getElementById('searchUser')

searchBar.addEventListener('blur', event => {
  const userText = event.target.value

  if (userText.trim() !== '')
    github.getUser(userText)
      .then(data => {
        console.log(data)
        if (data.profile.message === 'Not Found')
          ui.showAlert('User not found', 'alert alert-danger')
          
        else {
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
      })
      .catch(error => ui.showAlert(error.message, 'alert alert-danger'))

  else
    ui.clearProfile()
})