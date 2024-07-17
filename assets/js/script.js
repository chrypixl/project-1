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

//Naming conventions are to be changed
const storeResponse1 = function (response){
    //parse
    const data = response.json();

    // Store in local storage
    localStorage.setItem('api1Response', JSON.stringify(data));
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

// Upon call this should change the website to the results page
//window.location.href = "./results.html"