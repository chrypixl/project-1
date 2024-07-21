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
    console.log(title);
    if (title== '' && genre== '' && author=='' && category == '') { //Check if this is proper syntax. Supposed to mean if all values are empty, thus their lenghts being equal to 0.
        alert('Don’t be a jerk. Please provide at least one search criteria')//By this line, the code checks if the user as put anything for the four inputs.
    }
}

const getUserRepos = async function (title, category, author, genre) {
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
                    });
            } else {
                alert(`Error:${response.statusText}`);
            }
        })
        .catch(function (error) {
            console.log('Unable to obtain results.'); //We don't need to alert the user when we can't find a book. It will be in the search results.
        });
    await getBook(0);
    await getBook(1);
    await getBook(2);
    await getBook(3);
    await getBook(4);
    window.location.href = "./results.html";
    // createBookCard(0);  This line should no longer be necessary. The function createBookCard is on results.js
};

async function getDataAPI1(index){
    await f1(index); //A timer to delay the userData long enough for the api1Response to be in local storage.
    const userData = JSON.parse(localStorage.getItem('api1Response'));
    console.log(userData);
    let title = userData.results[index].title;
    console.log(title);
    return title;
}

const getBook = async function (index) {
    let title = await getDataAPI1(index);
    const apiUrl = `https://openlibrary.org/api/books?bibkeys=title:${title}&format=json`;

    return fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
                console.log(response);
            }
            throw new Error(`Error: ${response.statusText}`);
        })
        .then(function (data) {
            // Check if title data exists in the response
            localStorage.setItem(`api2Response${index}`, JSON.stringify(data));//Added index string concatination. Not sure if we need to store all five values.
            const bookData = data[`title:${title}`];
            if (bookData) {
                if (bookData.preview_url) {
                    const previewUrl = bookData.preview_url;
                    //console.log('Preview URL:', previewUrl);
                    getDataAPITotal(index,previewUrl);//Gets the total Data of both APIs needed for the card results.
                } else {
                    console.log('No preview URL available');
                }
            } else {
                throw new Error('Book not found');
            }
        })
        .catch(function (error) {
            console.error('Error fetching book:', error);
            console.log('Unable to retrieve book details');
        });
}

function resolveAfter2Seconds(x) { //Timer Function
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }

async function f1(x) {
    const y = await resolveAfter2Seconds(x);
    console.log(y); 
  }

function getDataAPITotal(index,previewUrl){
   
   
    const userData1 = JSON.parse(localStorage.getItem('api1Response'));
    const userData2 = JSON.parse(localStorage.getItem(`api2Response${index}`));
    let title1 = userData1.results[index].title;
    let author1 = userData1.results[index].authors[0];
    let summary1 = userData1.results[index].summary;
    let totalResults = {
        title: title1,
        author: author1,
        summary: summary1,
        link: previewUrl,

    }

    console.log(`Title:`, title1);
    console.log(`Author:`, author1);
    console.log(`Summary:`, summary1);
    console.log(userData2);
    console.log(previewUrl);
    
    localStorage.setItem(`apitotalResponse${index}`, JSON.stringify(totalResults)); //Stores results in an object file in local storage. Not sure if we need it.

}

userFormEl.addEventListener('submit', formSubmitHandler);






