const myLibrary = [];
const TABLE = document.querySelector('#table-body');

const formDialog = document.querySelector('#add-book-dialog')
const submitButton = document.querySelector("#submit");
const showFormBtn = document.querySelector('#new-book');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function updateTable() {
    let rows = []
    myLibrary.forEach((value, index, array) => {
        let row = document.createElement('tr');

        let title = document.createElement('td');
        title.textContent = value.title;

        let author = document.createElement('td');
        author.textContent = value.author;

        let pages = document.createElement('td');
        pages.textContent = value.pages;

        let read = document.createElement('td');
        read.textContent = value.read;

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(read);
        rows.push(row);
    })

    TABLE.replaceChildren(...rows);
}

let hol = new Book('House of Leaves', 'Mark Z. Danielewski', 709, true);
myLibrary.push(hol);
updateTable();

submitButton.addEventListener('click', (event) => {
    const titleInput = document.querySelector('#title');
    let title = titleInput.value;

    const authorInput = document.querySelector('#author');
    let author = authorInput.value;

    const pageInput = document.querySelector('#numpages');
    let numPages = pageInput.value;

    const readInput = document.querySelector('#read');
    let read = readInput.checked;

    let book = new Book(title, author, numPages, read);
    myLibrary.push(book);
    formDialog.close();
    updateTable();
    event.preventDefault();
});

showFormBtn.addEventListener('click', () => {
    formDialog.showModal();
})