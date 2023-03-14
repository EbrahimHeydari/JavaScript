// Constructor
function Book(title, author, year) {
	this.title = title
	this.author = author
	this.year = year

	this.getSummery = () => {
		return `${this.title} was written by ${this.author} in ${this.year}`
	}
}

// Instatiate objects
const book1 = new Book('Book one', 'John Doe', 2013)
const book2 = new Book('Book two', 'Jane Doe', 2016)

console.log(book2.getSummery())
console.log(book2)
