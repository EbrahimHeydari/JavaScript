const target = document.querySelector('.section:last-child')

const options = {
	threshold: 1,
}

function handleIntersection(entries) {
	entries.map(entry => {
		if (entry.isIntersecting) {
			console.log('Log event and unobserve')
      // stop observing target
			observer.unobserve(target)
		}
	})
}

const observer = new IntersectionObserver(handleIntersection, options)

observer.observe(target)
