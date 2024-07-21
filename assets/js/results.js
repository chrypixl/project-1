function createBookCard(book) {
   

    const bookList = document.getElementById("book-cards");

    let card = document.createElement("div");
    card.classList.add("card");
    bookList.appendChild(card)

    card.innerHTML =
        `<div class="book-card"> 
             <div class="card-header"> 
                 <h3 class="card-title">${book.title}</h3>
                <h3 class="card-author">${book.author}</h3>
             </div>
             <hr style="height: 1px; background-color: grey"/>
            <div class="card-body">
                <p class="card-desc">${book.summary}</p>
                
             </div>
            <div class="card-footer">
                <a class="card-url button is-white is-normal has-text-centered" href="${book.link}" target="_blank" rel="noopener noreferrer">Available</a>
            </div>
         </div>`
                       
    
};


function renderBooks() {

const book1 = JSON.parse(localStorage.getItem(`apitotalResponse0`)) || [];
const book2 = JSON.parse(localStorage.getItem(`apitotalResponse1`)) || [];
const book3 = JSON.parse(localStorage.getItem(`apitotalResponse2`)) || [];
const book4 = JSON.parse(localStorage.getItem(`apitotalResponse3`)) || [];
const book5 = JSON.parse(localStorage.getItem(`apitotalResponse4`)) || [];


createBookCard(book1);
createBookCard(book2);
createBookCard(book3);
createBookCard(book4);
createBookCard(book5);

localStorage.clear();

};

function doSomething() {
console.info("DOM loaded");
}

if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", function()
{
renderBooks();
});
} else {
doSomething();
}
