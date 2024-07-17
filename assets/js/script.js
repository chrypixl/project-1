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

// TO BE CHANGED UPON USE
function storeResponse(response){
    // parse response
    const data = response.json();

    // Store response in local storage
    localStorage.setItem('apiResponse', JSON.stringify(data));
}