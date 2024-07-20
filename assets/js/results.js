function createBookCard(book) { //Creates a card as a list item each time the function runs.
   

        const bookList = document.getElementById("book-cards");

        let card = document.createElement("div");           //<div class="card"></div>
        card.classList.add("card");
        bookList.appendChild(card)

        card.innerHTML =
            `<div class="card"> 
                 <div class="card-header"> 
                     <h3 class="card-title">${book.title}</h3>
                    <h3 class="card-author">${book.author}</h3>
                 </div>
                <div class="card-body">
                    <p class="card-desc">${book.summary}</p>
                    <a class="card-url" href="${book.link}">Available</a>
                 </div>
             </div>`
                           
        
};


function renderBooks() {
    
    const book1 = JSON.parse(localStorage.getItem(`apitotalResponse0`)) || []; //Chooses array in local storage and gets each object in the array.
    const book2 = JSON.parse(localStorage.getItem(`apitotalResponse1`)) || [];
    const book3 = JSON.parse(localStorage.getItem(`apitotalResponse2`)) || [];
    const book4 = JSON.parse(localStorage.getItem(`apitotalResponse3`)) || [];
    const book5 = JSON.parse(localStorage.getItem(`apitotalResponse4`)) || [];

    
    createBookCard(book1);
    createBookCard(book2);
    createBookCard(book3);
    createBookCard(book4);
    createBookCard(book5);

};

function doSomething() {
    console.info("DOM loaded");
  }

  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", function()
{
    renderBooks(); //Runs the above functions when the page loads.
});
  } else {
    // DOMContentLoaded has already fired
    doSomething();
  }

