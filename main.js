const myLibrary = [];
const TABLE = document.querySelector('#table-body');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function updateTable() {
    let rows = []
    myLibrary.forEach((value, index, array) => {
        console.log(value);
        let row = document.createElement('tr');

        let title = document.createElement('td');
        title.textContent = value.title;
        console.log(value.title);
        console.log(title.textContent);

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

function addBookToLibrary() {
    // TODO
}

let hol = new Book('House of Leaves', 'Mark Z. Danielewski', 709, true);
myLibrary.push(hol);
updateTable();