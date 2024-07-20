function createBookCard(book) { //Creates a card as a list item each time the function runs.
   
//    
//     if (allPosts.length > 0) {

//     for (var i = 0; i < allPosts.length; i++) {
//         let post = allPosts[i];
//         let newDiv = document.createElement('div');
//         newDiv.classList.add("post-container");
//         allPostsDiv.appendChild(newDiv);
//         
//                            "<p class='title'>" + post.title + "</p>" + '<hr/>' +
//                            "<p class='textarea'>Text:" + post.content + "</p>" +
//                            "<p class='username'>@" + post.user + "</p>";
//     }

// } else {

//     allPostsDiv.innerHTML = ""; 
// }
// 
        const bookList = document.getElementById("book-cards");

        let card = document.createElement('div');           //<div class="card"></div>
        card.classList.add("card");
        bookList.appendChild(card)
        
        let cardHeader = document.createElement('div');
        cardHeader.classList.add("card-header");
        card.appendChild(cardHeader);

        let cardTitle = document.createElement('h3');
        cardTitle.classList.add("card-title");
        cardHeader.appendChild(cardTitle);

        let cardAuthor = document.createElement('h3');
        cardAuthor.classList.add("card-author");
        cardHeader.appendChild(cardAuthor);

        let cardBody = document.createElement('div');
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        let cardDesc = document.createElement('p');
        cardDesc.classList.add("card-desc");
        cardBody.append(cardDesc);

        let cardUrl = document.createElement('a');
        cardUrl.classList.add("card-url");
        cardUrl.setAttribute("href", book.link);
        cardBody.append(cardUrl);

        
};
//    card.innerHTML = 
//             `<div class="card"> //newDiv
//                 <div class="card-header"> //newDiv2
//                     <h3 class="card-title">${book.title}</h3>
//                     <h3 class="card-author">${book.author}</h3>
//                 </div>
//                 <div class="card-body">
//                     <p class="card-desc">${book.summary}</p>
//                     <a class="card-url" href="${book.link}">Available</a>
//                 </div>
//             </div>`;


function renderBooks() {
    const books = JSON.parse(localStorage.getItem('apitotalResponse0')) || []; //Chooses array in local storage and gets each object in the array.
    createBookCard(books[0]);

    // const bookList = $("#book-cards");
    // bookList.empty();
    //const bookList = document.getElementById("#book-cards");
    
    //document.createElement("")


    // books.forEach(book => { //For loop runs createBookCard for each object in the array, appends to container with the id: book-cards.
    //     bookList.appendChild(createBookCard(book));
    // });
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
    // `DOMContentLoaded` has already fired
    doSomething();
  }

 

/*
    Tested the code but returned no results, was not redirected to the results page.
    Application shows that only api1Response returned results. Console errors listed below for reference.
    I tested the code above and it seems to work on its own, so I believe the errors are in the
    script.js page.

    script.js:82 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'results')
    at getDataAPI1 (script.js:82:26)
    at getBook (script.js:88:17)
    at getUserRepos (script.js:71:11)
    at HTMLFormElement.formSubmitHandler (script.js:16:5)
*/