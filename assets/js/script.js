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

    getUserRepos(title, genre, author, category);

    if (title && genre && author && category == '') { //Check if this is proper syntax. Supposed to mean if all values are empty, thus their lenghts being equal to 0.
        alert('Don’t be a jerk. Please provide at least one search criteria')//By this line, the code checks if the user as put anything for the four inputs.
    }

    if (title) {
        nameInputEl.value = '';
        genreInputEl.value = '';
        authorInputEl.value = '';
        categoryInputEl.value = '';
    }


}

//Naming conventions are to be changed
const storeResponse1 = function (response) {
    //parse
    const data = response.json();

    // Store in local storage
    localStorage.setItem('api1Response', JSON.stringify(data));
}

const getUserRepos = function (title, category, author, genre) {
    const title2 = "title=" + title;
    const book_type = "book_type=" + genre; //Might want to change. Although it seems this might have been unnecessary. I generated a link with Fiction not needing a book_type= before it. DELETE BEFORE FINAL SUBMISSION!
    const author2 = "author=" + author;
    const category1 = "category=" + category;



    const apiUrl = `https://book-finder1.p.rapidapi.com/api/search?${title2}&${author2}&${book_type}&${category1}&results_per_page=5&page=1`;
    const options = {
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

                    });
            } else {
                alert(`Error:${response.statusText}`);
            }
        })
        .catch(function (error) {
            alert('Unable to obtain results.');
        });

};

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

getUserRepos("Harry Potter", "Science Fiction & Fantasy", "J K Rolling", "Fiction");//test DELETE LATER



// Upon call this should change the website to the results page
//window.location.href = "./results.html"
const isbn = '9789076174198';//test value DELETE LATER
getBook(isbn); //test DELETE LATER
    
    
    
    
    