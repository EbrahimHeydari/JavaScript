// Object of protos
const bookProtos = {
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`
	},
	getAge: function () {
		const years = new Date().getFullYear() - this.year
		return `${this.year} is ${years} years old`
	},
}

// Create Object
const book1 = Object.create(bookProtos, {
	title: { value: 'Book one' },
	author: { value: 'John doe' },
	year: { value: 2015 },
})

console.log(book1)
