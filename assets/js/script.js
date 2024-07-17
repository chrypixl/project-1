const titleInputEl = document.querySelector(#title-input);
const genreInputEl = document.querySelector(#genre-input);
const authorInputEl = document.querySelector(#author-input);
const categoryInputEl = document.querySelector(#category-Input);
const API_KEY= 'f7d2a707f2mshd8b432ea1443c94p11780cjsnc498d4b63b8a'//Key for Book Finder API



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