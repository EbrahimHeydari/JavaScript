function getText() {
  fetch('text.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data
      document.getElementById('output').dir = 'rtl'
    })
    .catch(error => console.log(error))
}

function getJson() {
  fetch('post.json')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li> <p>${post.body}</p>`
      })
      document.getElementById('output').innerHTML = output
      document.getElementById('output').dir = 'ltr'
    })
    .catch(error => console.log(error))
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let output = '';
      data.find(user => {
        output += `<li>${user.login}</li>`
      })
      document.getElementById('output').innerHTML = output
    })
    .catch(error => console.log(error))
}

document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getExternal)