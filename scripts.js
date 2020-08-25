function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.id = 0;
}



const shelf = document.querySelector('.library-shelf');
let myBooks = [];

function addBookToLibrary(){
	shelf.innerText = "";

	bookID = 0;
	myBooks.forEach(book => {
		book.id = bookID;
		bookID += 1;

		let delBtn = document.createElement('i');
		delBtn.className += "delete-book-button fas fa-times-circle"
		delBtn.addEventListener('click', function(){
			deleteBook(this.parentNode.lastChild.innerText);
			addBookToLibrary();
		});

		let bookDiv = document.createElement('div');
		bookDiv.className += "book"

		let bookTitleDiv = document.createElement('div');
		bookTitleDiv.className += 'book-title';
		bookTitleDiv.innerText = book.title;

		let bookAuthorDiv = document.createElement('div');
		bookAuthorDiv.className += 'book-author';
		bookAuthorDiv.innerText = book.author;

		let bookPagesDiv = document.createElement('div');
		bookPagesDiv.className += 'book-pages';
		bookPagesDiv.innerText = `${book.pages} pages`

		let bookIDDiv = document.createElement('div');
		bookIDDiv.className += 'book-id';
		bookIDDiv.innerText = book.id + 1;

		bookDiv.appendChild(delBtn);
		bookDiv.appendChild(bookTitleDiv);
		bookDiv.appendChild(bookAuthorDiv);
		bookDiv.appendChild(bookPagesDiv);
		bookDiv.appendChild(bookIDDiv);
		shelf.appendChild(bookDiv);
	})
}


let menuBtn = document.querySelector('.menu-show');
let submitBtn = document.querySelector('.add-btn');
let newMenuTitle = document.querySelector('.title-input')
let newMenuAuthor = document.querySelector('.author-input')
let newMenuPages = document.querySelector('.pages-input')
let newMenuRead = document.querySelector('.read-input')

menuBtn.addEventListener('click', function(){
	document.querySelector('.new-book-menu').style.display = 'block';
	menuBtn.style.display = 'none';
});

submitBtn.addEventListener('click', function(){

	let newTitle = newMenuTitle.value;
	let newAuthor = newMenuAuthor.value;
	let newPages = newMenuPages.value;
	let newRead = newMenuRead.checked;

	if (!checkErrors(newTitle, newAuthor, newPages)){
		let newBook = new Book(newTitle, newAuthor, newPages, newRead);
		myBooks.push(newBook);
	}


	document.querySelector('.new-book-menu').style.display = 'none';
	menuBtn.style.display = 'block';
	addBookToLibrary();
	clearMenu();
})

function checkErrors(title, author, pages){
	if (title == "" || author == "" || isNaN(pages)){
		alert("Invalid Entry");
		return true;
	}
	else return false;
}

function clearMenu(){
	newMenuTitle.value = "";
	newMenuAuthor.value = "";
	newMenuPages.value = "";
	newMenuRead.checked = "";
}

function deleteBook(id){
	myBooks.splice(id-1, 1);
}








let theHobbit = new Book('The Hobbit', "JRR Tolkien", 296, false);
myBooks.push(theHobbit);
let theHobbit2 = new Book('Harry Potter', "JK Rowling", 1001, false);
myBooks.push(theHobbit2);
let theHobbit3 = new Book('The Gunslinger', "Stephen King", 321, false);
myBooks.push(theHobbit3);
let theHobbit4 = new Book('Green Eggs and Ham', "Dr. Seuss", 296, false);
myBooks.push(theHobbit4);
addBookToLibrary();


