function createBookCard(book) { //Creates a card as a list item each time the function runs.
    return `<li class="card">
                <div class="card-header">
                    <h3 class="card-title">${book.title}</h3>
                    <h3 class="card-author">${book.author}</h3>
                </div>
                <div class="card-body">
                    <p class="card-desc">${book.summary}</p>
                    <a class="card-url" href="${book.link}">Available</a>
                </div>
            </li>`;
};

function renderBooks() {
    const books = JSON.parse(localStorage.getItem('apitotalResponse')) || []; //Chooses array in local storage and gets each object in the array.
    const bookList = $("#book-cards");
    bookList.empty();
    books.forEach(book => { //For loop runs createBookCard for each object in the array, appends to ul with the id: book-cards.
        bookList.append(createBookCard(book));
    });
};

$(document).ready(function() {
    renderBooks();
}); //Runs the above functions when the page loads.

/*
    Tested the code but returned no results, was not redirected to the results page.
    Application shows that only api1Response returned results. Console errors listed below for reference.
    I tested the code above and it seems to work on its own, so I believe the errors are in the
    script.js page.

    script.js:82 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'results')
    at getDataAPI1 (script.js:82:26)
    at getBook (script.js:88:17)
    at getUserRepos (script.js:71:11)
    at HTMLFormElement.formSubmitHandler (script.js:16:5)
*/