// Constructor
function Book(title, author, year) {
	this.title = title
	this.author = author
	this.year = year
}

// getSummary
Book.prototype.getSummery = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`
}

// getAge
Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year
	return `${this.year} is ${years} years old`
}

// Magazine Constructor
function Magazine(title, author, year, month) {
	Book.call(this, title, author, year) // extends alternative

	this.month = month
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype)

// Instantiate Magazine Object
const maq1 = new Magazine('Mag one', 'John doe', 2018, 'June')

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine

console.log(maq1)
console.log(maq1.getSummery())
