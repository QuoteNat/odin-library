const myLibrary = [];
const TABLE = document.querySelector("#table-body");

const formDialog = document.querySelector("#add-book-dialog");
const submitButton = document.querySelector("#submit");
const showFormBtn = document.querySelector("#new-book");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function updateTable() {
  let rows = [];
  myLibrary.forEach((value, index, array) => {
    let row = document.createElement("tr");

    let title = document.createElement("td");
    title.textContent = value.title;

    let author = document.createElement("td");
    author.textContent = value.author;

    let pages = document.createElement("td");
    pages.textContent = value.pages;

    let read = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = value.read;
    checkbox.addEventListener("click", () => {
      value.read = checkbox.checked;
    });
    read.appendChild(checkbox);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove Book";
    removeButton.dataset.index = index;
    removeButton.addEventListener("click", () => {
      myLibrary.splice(removeButton.dataset.index, 1);
      updateTable();
    });

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);
    row.appendChild(removeButton);
    rows.push(row);
  });

  TABLE.replaceChildren(...rows);
}

let hol = new Book("House of Leaves", "Mark Z. Danielewski", 709, true);
myLibrary.push(hol);
updateTable();

submitButton.addEventListener("click", (event) => {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pageInput = document.querySelector("#numpages");
  const readInput = document.querySelector("#read");

  if (titleInput.value === "") {
    titleInput.setCustomValidity("The book can't have an empty title.");
    return;
  }

  // Technically speaking, it's possible for books to not have authors or known authors, so I'm allowing empty string for that edge case specifically.

  if (pageInput.value === "") {
    pageInput.setCustomValidity(
      "There needs to be a value for number of pages."
    );
    return;
  }

  let read = readInput.checked;
  let title = titleInput.value;
  let author = authorInput.value;
  let numPages = pageInput.value;

  let book = new Book(title, author, numPages, read);
  myLibrary.push(book);
  formDialog.close();
  updateTable();
  event.preventDefault();
});

showFormBtn.addEventListener("click", () => {
  formDialog.showModal();
});
