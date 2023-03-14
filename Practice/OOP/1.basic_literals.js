// Object literal
const book1 = {
	title: 'book one',
	author: 'john doe',
	year: 2013,
	getSummery: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`
	},
}

const book2= {
	title: 'book two',
	author: 'john doe',
	year: 2016,
	getSummery: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`
	},
}

console.log('book 1 values:', Object.values(book1))
console.log('book 1 keys:', Object.keys(book1))
console.log(book1.getSummery())
