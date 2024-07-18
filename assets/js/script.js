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

    getUserRepos(title,genre,author,category);
    
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


const getUserRepos = function (title, genre, author, category) {
    const title2 = "title=" + title;
    const book_type = "genre=" + genre;
    const author2 = "author=" + author;
    const category2 = "category" + category;



    const apiUrl = `https://book-finder1.p.rapidapi.com/api/search?${title2}&${author2}&${book_type}&${category}&results_per_page=5&page=1`;
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


getUserRepos("Harry Potter", "Science Fiction & Fantasy", "J K Rolling", "Fiction");//test DELETE LATER

const isbn = '9789076174198';//test value DELETE LATER
getBook(isbn); //test DELETE LATER
