const titleInputEl = document.querySelector('#title-input');
const genreInputEl = document.querySelector('#genre-input');
const authorInputEl = document.querySelector('#author-input');
const categoryInputEl = document.querySelector('#category-input');
const API_KEY= 'f7d2a707f2mshd8b432ea1443c94p11780cjsnc498d4b63b8a'//Key for Book Finder API



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
    const genre2 = "genre=" + genre;
    const author2 = "author" + author;
    const category2 = "category" + category;

    console.log(title2);



    const apiUrl = `https://book-finder1.p.rapidapi.com/api/search?${title2}&results_per_page=5&page=1`;
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
            displayRepos(data, title);
          });
        } else {
          alert(`Error:${response.statusText}`);
        }
      })
      .catch(function (error) {
        alert('Unable to obtain results.');
      });

};

getUserRepos(`test`,`test2`,`test3`,`test4`);


