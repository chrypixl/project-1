const userFormEl = document.querySelector("#user-form");
const titleInputEl = document.querySelector("#title-input");
const genreInputEl = document.querySelector("#genre-input");
const authorInputEl = document.querySelector("#author-input");
const categoryInputEl = document.querySelector("#category-input");


const formSubmitHandler = function (event) {
    event.preventDefault();

    const title = titleInputEl.value.trim();
    const genre = genreInputEl.value.trim();
    const author = authorInputEl.value.trim();
    const category = categoryInputEl.value.trim();


    if (title== '' && genre== '' && author=='' && category == '') {
        alert('Don’t be a jerk. Please provide at least one search criteria')
        return;
    }
    else{
        getUserRepos(title, genre, author, category);
        console.log(title);
    }
    var element = document.querySelector(".sub-button");
    element.classList.replace("is-normal", "is-loading");
}

const getUserRepos = async function (title, category, author, genre) {
    let title2 = "title=" + title;
    let book_type = "book_type=" + genre; 
    let author2 = "author=" + author;
    let category1 = "category=" + category;
    let apiUrl = `https://book-finder1.p.rapidapi.com/api/search?`

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
                response.json()
                    .then(function (data) {
                        localStorage.setItem('api1Response', JSON.stringify(data));
                    });
            } else {
                alert(`Error:${response.statusText}`);
            }
        });
    await getBook(0);
    await getBook(1);
    await getBook(2);
    await getBook(3);
    await getBook(4);
    window.location.href = "./results.html";
};

async function getDataAPI1(index){
    await f1(index); //A timer to delay the userData long enough for the api1Response to land in local storage.
    const userData = JSON.parse(localStorage.getItem('api1Response'));
    let title = userData.results[index].title;
    return title;
}

const getBook = async function (index) {
    let title = await getDataAPI1(index);
    const apiUrl = `https://openlibrary.org/api/books?bibkeys=title:${title}&format=json`;

    return fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`Error: ${response.statusText}`);
        })
        .then(function (data) {
            localStorage.setItem(`api2Response${index}`, JSON.stringify(data));
            const bookData = data[`title:${title}`];
            if (bookData) {
                if (bookData.preview_url) {
                    const previewUrl = bookData.preview_url;
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


    
    localStorage.setItem(`apitotalResponse${index}`, JSON.stringify(totalResults));

}

userFormEl.addEventListener('submit', formSubmitHandler);


