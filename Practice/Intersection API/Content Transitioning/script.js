// First we select the element we want to hello
const target = document.querySelector('.animated-text')

// Next we want to create a function that will be called when that element is intersected
function handleIntersection(entries) {
	console.log(entries)
	// The callback will return an array of entries, even if you are only observing a single item
	entries.map(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible')
		} else {
			entry.target.classList.remove('visible')
		}
	})
}

// Next we instantiate the observer with the function we created above. 
// This takes an optional configuration
// object that we will use in the other examples.
const observer = new IntersectionObserver(handleIntersection)

// Finally start observing the target element
observer.observe(target)
