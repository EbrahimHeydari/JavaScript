const searchWrapper = document.querySelector('.search-input')
const inputBox = searchWrapper.querySelector('input')
const suggBox = searchWrapper.querySelector('.autocom-box')
const icon = searchWrapper.querySelector('.icon')
let linkTag = searchWrapper.querySelector('a')
let webLink
import suggestions from './suggestion.js'

const showSuggestions = list => {
	let listData

	if (!list.length) {
		let userValue = inputBox.value
		listData = `<li>${userValue}</li>`
	} else {
		listData = list.join('')
	}
	suggBox.innerHTML = listData
}

// if user press any key and release
inputBox.onkeyup = event => {
	let userData = event.target.value // user entered data
	let emptyArray = []

	// if (userData || event.key == 'Enter') {
	if (userData) {
		icon.onclick = () => {
			webLink = `https://www.google.com/search?q=${userData}`
			linkTag.setAttribute('href', webLink)
			linkTag.click()
		}
		emptyArray = suggestions.filter(data => {
			// filtering array value and user characters to lowercase and
			// return only those words which are start with user enetered chars
			return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
		})

		emptyArray = emptyArray.map(data => {
			// passing return data inside li tag
			return (data = `<li>${data}</li>`)
		})

		searchWrapper.classList.add('active') // show autocompelete box
		showSuggestions(emptyArray)
		let allList = suggBox.querySelectorAll('li')

		for (let i = 0; i < allList.length; i++) {
			// adding onclick attribute in all li tag
			allList[i].setAttribute('onclick', 'select(this)')
		}
	} else {
		searchWrapper.classList.remove('active') // hide autocomplete
	}
}
