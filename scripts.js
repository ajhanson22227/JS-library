function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}



const shelf = document.querySelector('.library-shelf');
let myBooks = [];
let myLibrary = []


function displayLibrary(){
	shelf.innerText = "";

	myBooks.forEach((book, index) => {
		book.id = index;

		let delBtn = document.createElement('i');
		delBtn.className += "delete-book-button fas fa-times-circle"
		delBtn.addEventListener('click', function(){
			deleteBook(this.parentNode.lastChild.innerText);
			displayLibrary();
		});

		let bookDiv = document.createElement('div');
		bookDiv.className += "book"

		let bookTitleDiv = document.createElement('div');
		bookTitleDiv.className += 'book-title';
		bookTitleDiv.innerText = book.title;

		let bookAuthorDiv = document.createElement('div');
		bookAuthorDiv.className += 'book-author';
		bookAuthorDiv.innerText = `by ${book.author}`;

		let bookPagesDiv = document.createElement('div');
		bookPagesDiv.className += 'book-pages';
		bookPagesDiv.innerText = `${book.pages} pages`


		let bookReadDiv = document.createElement('div');
		bookReadDiv.className += 'book-read';
		if (book.read) bookReadDiv.innerText = 'Read';
		else bookReadDiv.innerText = 'Unread';
		bookReadDiv.addEventListener('click', function(){
			changeBookRead(book);
			bookReadDiv.innerText = changeBookReadDiv(book);
		})


		let bookIDDiv = document.createElement('div');
		bookIDDiv.className += 'book-id hidden';
		bookIDDiv.innerText = book.id + 1;

		bookDiv.appendChild(delBtn);
		bookDiv.appendChild(bookTitleDiv);
		bookDiv.appendChild(bookAuthorDiv);
		bookDiv.appendChild(bookPagesDiv);
		bookDiv.appendChild(bookReadDiv);
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
	displayLibrary();
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

function changeBookRead(book){
	book.read = !book.read;
}

function changeBookReadDiv(book){
	if (book.read) return 'Read'
	else return 'Unread';
}






let theHobbit = new Book('The Hobbit', "JRR Tolkien", 310, false);
myBooks.push(theHobbit);
let theHobbit2 = new Book('Harry Potter', "JK Rowling", 309, false);
myBooks.push(theHobbit2);
let theHobbit3 = new Book('The Gunslinger', "Stephen King", 300, false);
myBooks.push(theHobbit3);
let theHobbit4 = new Book('Green Eggs and Ham', "Dr. Seuss", 62, false);
myBooks.push(theHobbit4);
displayLibrary();


