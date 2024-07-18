const userFormEl= document.querySelector("#user-form");
const titleInputEl = document.querySelector("#title-input");
const genreInputEl = document.querySelector("#genre-input");
const authorInputEl = document.querySelector("#author-input");
const categoryInputEl = document.querySelector("#category-input");


const formSubmitHandler = function (event) {
    event.preventDefault(); // Prevents button from refreshing the page.

    let title = titleInputEl.value.trim(); //trimmed to avoid spaces.
    let genre = genreInputEl.value.trim(); // How can the user provide more than one genre? Or are we even going to allow that?
    let author = authorInputEl.value.trim(); 
    let category = categoryInputEl.value.trim();

    
    if(title && genre && author && category == ''){ //Check if this is proper syntax. Supposed to mean if all values are empty, thus their lenghts being equal to 0.
                    alert('Don’t be a jerk. Please provide at least one search criteria')//By this line, the code checks if the user as put anything for the four inputs.
    }
    else{
        getUserRepos(title, category, author, genre);

    }
        
}

//Naming conventions are to be changed
const storeResponse1 = function (response){
    //parse
    const data = response.json();

    // Store in local storage
    localStorage.setItem('api1Response', JSON.stringify(data));
}

const getUserRepos = function (title, category, author, genre) { 
    
    let title2 = "title=" + title;
    let book_type = "book_type=" + genre; //Might want to change. Although it seems this might have been unnecessary. I generated a link with Fiction not needing a book_type= before it. DELETE BEFORE FINAL SUBMISSION!
    let author2 = "author=" + author;
    let category1 = "category=" + category;



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
            localStorage.setItem('data',JSON.stringify(data)); //Store results in local storage.

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


userFormEl.addEventListener('submit', formSubmitHandler);




// Upon call this should change the website to the results page
//window.location.href = "./results.html"
const isbn = '9789076174198';//test value DELETE LATER
getBook(isbn); //test DELETE LATER


