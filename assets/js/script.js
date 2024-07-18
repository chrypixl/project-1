const titleInputEl = document.querySelector("#title");
const genreInputEl = document.querySelector("#genre");
const authorInputEl = document.querySelector("#author");
const categoryInputEl = document.querySelector("#category");


const formSubmitHandler = function (event) {
    event.preventDefault(); // Prevents button from refreshing the page.

    const title = titleInputEl.value.trim(); //trimmed to avoid spaces.
    const genre = genreInputEl.value.trim(); // How can the user provide more than one genre? Or are we even going to allow that?
    const author = authorInputEl.value.trim(); 
    const category = categoryInputEl.value.trim();
    
    if(title && genre && author && category == ''){ //Check if this is proper syntax. Supposed to mean if all values are empty, thus their lenghts being equal to 0.
                    alert('Don’t be a jerk. Please provide at least one search criteria')//By this line, the code checks if the user as put anything for the four inputs.
    }

    if(title)
        {
            nameInputEl.value= '';
            genreInputEl.value= '';
            authorInputEl.value= '';
            categoryInputEl.value= '';
        }


}
const getBook = function (isbn) {
    const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json`;
  
    fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Error: ${response.statusText}`);
    })
    .then(function(data) {
        // Check if ISBN data exists in the response
        const bookData = data[`ISBN:${isbn}`];
        if (bookData) {
            console.log(bookData);
        } else {
            throw new Error('Book not found');
        }
    })
    .catch(function(error) {
        console.error('Error fetching book:', error);
        alert('Unable to retrieve book details');
    });

    }
    const isbn = '9789076174198';
    getBook(isbn);

const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", function() {

});

function createBookCard(title, author, isbn, desc) { //#book is a placeholder
    $("#book").append (`
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${title}</h3>
                <h3 class="card-author">${author}</h3>
            </div>
            <div class="card-body">
                <h3 class="card-isbn">${isbn}</h3>
                <p class="card-desc">${desc}</p>
            </div>
        </div>
    `)
};

