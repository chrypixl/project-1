function createBookCard(index) { //#book is a placeholder
    let userInput = JSON.parse(localStorage.getItem(`apitotalResponse${index}`));
   console.log(userInput.title1);

    $("#book-cards").append(`
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${userInput.title1}</h3>
                <h3 class="card-author">${userInput.author1}</h3>
            </div>
            <div class="card-body">
                <h3 class="card-isbn">${userInput.previewUrl}</h3>
                <p class="card-desc">${userInput.summary1}</p>
            </div>
        </div>
    `);
};

function renderBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || []; //Choose an array in local storage from which to pull items. If the array is called books, this will work.
    const bookList = $("#book-cards");
    bookList.empty();
    books.forEach(book => {
        bookList.append(createTaskCard(book));
    });
};