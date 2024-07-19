const userFormEl = document.querySelector("#user-form");
const titleInputEl = document.querySelector("#title-input");
const genreInputEl = document.querySelector("#genre-input");
const authorInputEl = document.querySelector("#author-input");
const categoryInputEl = document.querySelector("#category-input");


const formSubmitHandler = function (event) {
    event.preventDefault(); // Prevents button from refreshing the page.

    const title = titleInputEl.value.trim(); //trimmed to avoid spaces.
    const genre = genreInputEl.value.trim(); // How can the user provide more than one genre? Or are we even going to allow that?
    const author = authorInputEl.value.trim();
    const category = categoryInputEl.value.trim();

    getUserRepos(title, genre, author, category);

    if (title && genre && author && category == '') { //Check if this is proper syntax. Supposed to mean if all values are empty, thus their lenghts being equal to 0.
        alert('Don’t be a jerk. Please provide at least one search criteria')//By this line, the code checks if the user as put anything for the four inputs.
    }
   //window.location.href = "./results.html";
}

const getUserRepos = function (title, category, author, genre) {
    let title2 = "title=" + title;
    let book_type = "book_type=" + genre; //Might want to change. Although it seems this might have been unnecessary. I generated a link with Fiction not needing a book_type= before it. DELETE BEFORE FINAL SUBMISSION!
    let author2 = "author=" + author;
    let category1 = "category=" + category;
    let apiUrl = `https://book-finder1.p.rapidapi.com/api/search?`
    //`https://book-finder1.p.rapidapi.com/api/search?${title2}&${author2}&${book_type}&${category1}&results_per_page=5&page=1`

    if (title) {
        apiUrl = apiUrl + title2 + `&`;
    }
    if (author) {
        apiUrl = apiUrl + author2 + `&`;
    }
    if (genre) {
        apiUrl = apiUrl + book_type + `&`;
    }
    if (category) {
        apiUrl = apiUrl + category1 + `&`;
    }
    apiUrl = apiUrl + `results_per_page=5&page=1`;
    const options =
    {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f7d2a707f2mshd8b432ea1443c94p11780cjsnc498d4b63b8a',
            'x-rapidapi-host': 'book-finder1.p.rapidapi.com'
        }
    };

    fetch(apiUrl, options)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json()
                    .then(function (data) {
                        
                        console.log(data);
                        // Store in local storage
                        localStorage.setItem('api1Response', JSON.stringify(data));
                        getDataAPI1()
                    });
            } else {
                alert(`Error:${response.statusText}`);
            }
        })
        .catch(function (error) {
            alert('Unable to obtain results.');
        });

};

function getDataAPI1(index){
    const userData = JSON.parse(localStorage.getItem('api1Response'));
    let title = userData.results[index].title;
    console.log(title);
}

const getBook = function (isbn) {
    const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json`;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                return response.json();
            }
            throw new Error(`Error: ${response.statusText}`);
        })
        .then(function (data) {
            // Check if ISBN data exists in the response
            localStorage.setItem('api2Response', JSON.stringify(data));
            const bookData = data[`ISBN:${isbn}`];
            if (bookData) {
                //console.log(bookData);
                if (bookData.preview_url) {
                    const previewUrl = bookData.preview_url;
                    console.log('Preview URL:', previewUrl);
                } else {
                    console.log('No preview URL available');
                }
            } else {
                throw new Error('Book not found');
            }
        })
        .catch(function (error) {
            console.error('Error fetching book:', error);
            alert('Unable to retrieve book details');
        });

}



function createBookCard(title, author, isbn, desc) { //#book is a placeholder
    $("#book").append(`
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

userFormEl.addEventListener('submit', formSubmitHandler);



// Upon call this should change the website to the results page
//window.location.href = "./results.html"
const isbn = '9789076174198';//test value DELETE LATER
getBook(isbn); //test DELETE LATER




