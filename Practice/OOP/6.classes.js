class Book {
	constructor(title, author, year) {
		this.title = title
		this.author = author
		this.year = year
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`
	}

	getAge() {
		const years = new Date().getFullYear() - this.year
		return `${this.year} is ${years} years old`
	}

	revise(newYear) {
		this.year = newYear
		this.revised = true
	}

	static topBookStore() {
		return 'Barnes & Noble'
	}
}

// Instantiate Object
const book1 = new Book('Book one', 'John doe', 2014)

console.log(book1.getSummary())
console.log(book1)
book1.revise(2012)
console.log(book1)

console.log(Book.topBookStore())
