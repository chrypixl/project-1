# Book Search Application

For this project, a landing page containing a form was created. Any input field within 
the form can be filled and submitted, which will use the Book Search API to find and return 
results based on the input parameters provided by the user. The Open Library API takes 
data from those results, then finds and returns links to product pages with matching titles 
on the openlibrary.org website. On submit, the user is navigated to a results page 
where the application pulls selected data from local storage and generates a list card 
for each result. All data provided by the APIs is removed from local storage once the 
results are generated.

Each result provides only the information expected to be most useful to the user: A title, 
author name, and a brief description, as well as a button link redirecting the user to 
the relevant Open Library resource. The intent of this application is to develop a simplified 
search engine while calling attention to a valuable yet under-utilized resource for 
ardent readers.

## User Story

As a shopper,
I want to be able to find the right book and learn where to purchase it as a gift.
As an avid reader,
I want to be able to find more books published by my favorite author.
As a student,
I want to be able to search nonfiction books for educational materials.

## Acceptance Criteria

It is done when I search for books using the 'Title' criterion and I am presented with a 
list of books that have the exact same title.

It is done when I search for books using the 'Genre' criterion and I am presented with a 
list of books that fit the selected genre.

It is done when I search for a book using the 'Author' criterion and I am presented a list 
of books written by the author.

It is done when I search for a book by 'Category' and I am presented a list of books that 
fit the correct category- either Fiction or Non-fiction.

It is done when I can select a title from the results and I am redirected to an Open 
Library product page if the book is available.

## Screenshots

Wireframes for project proposal:
![Wireframe for main project page](assets/images/Wireframe%20main.jpg)
![Wireframe for results project page](assets/images/Wireframe%20list.jpg)

Screenshots:
![Main Page](assets/images/Main%20Page%20Screenshot.jpg)
![Results Page](assets/images/Results%20Page%20Screenshot.jpg)


## Deployment

[Book Search App](https://chrypixl.github.io/project-1/)

The main webpage contains a simple form. Only one data field requires a value in 
order to submit. Type an author name or title in the appropriate field, or you 
can choose a genre or category from the appropriate dropdown menu. Click the submit
button. You will be redirected to the 'Results' page and a list of search results 
will be generated. Each result contains a block of information containing a title, 
the author's name, the genre, ISBN, and a brief description. On the right side of
the result card you will also see a link which will take you to the book's product
page in openlibrary.org.

If you would like to submit another search, simply click the back button in the header
to return to the form page.

## Authors

Chris Moore
Chris Romero
Jarvis Washington
Khoi Mai

## License

MIT License
Copyright (c) 2024 Chris Moore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Acknowledgments
 
[ReadMe Editor] (https://readme.so/editor)
CSS Framework: [Bulma] (https://bulma.io/)
First API: [Book Finder API] (https://rapidapi.com/dfskGT/api/book-finder1/playground/apiendpoint_2a269296-a7e8-42f3-a340-f1ff49d5fd74)
Second API: [Open Library API] (https://openlibrary.org/dev/docs/api/search)
[Header Icon Source] (https://www.designspiration.com/save/128121226714223/)
