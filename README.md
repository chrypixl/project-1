# Book Search Application

For this project, a landing page containing a form was created. Any input field within 
the form can be filled and submitted, which will use the Book Search API to find and return 
results based on the input parameters provided by the user. The Open Library API takes 
data from those results, then finds and returns links to product pages with matching titles 
on the openlibrary.org website. All data provided by the APIs is kept in local storage 
until another search is submitted. On submit, the user is navigated to a results page 
where the application pulls selected data from local storage and generates a list card 
for each result.

Each result provides only the information expected to be most useful to the user: A book 
image(if available), title, author name, genre, and a brief description, as well as a 
button link redirecting the user to the relevant Open Library resource. The intended 
use of this application is to develop a simplified search engine while calling attention
to a valuable yet under-utilized resource for ardent readers.

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

It is done when I can select a book title from the results and I am redirected to a Open 
Library product page where I can see if the book is available for purchase.

## Roadmap

1. index.html structure -Chris
2. results.html structure -Khoi
3. CSS -Romero
4. Book Search API functions -Jarvis
5. Edit ReadMe -Chris
6. Open Library API functions -Khoi
7. Clean up CSS -
8. Clean up JavaScript -
9. Clean up HTML -

## Screenshots

Wireframes for project proposal:
![Wireframe for main project page](assets/images/Wireframe%20main.jpg)
![Wireframe for results project page](assets/images/Wireframe%20list.jpg)

Screenshots:
![]()
![]()


## Deployment

[Book Search App](index.html)
>**_Note:_** Replace index with live url once deployed.

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




---------------------------------------------
## Project Requirements

You and your group will use everything you’ve learned over the past six modules to create a real-world front-end application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:

* Use a CSS framework other than Bootstrap.

* Be deployed to GitHub Pages.

* Be interactive (i.e., accept and respond to user input).

* Use at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources).

* Must include one modal. It does not use native browser alert, confirm, or prompt functionality.

* Use client-side storage to store persistent data.

* Be responsive.

* Have a polished UI.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Individual Requirements

As an employee of your group you must:

* Communicate: You should be an active member of the Slack channel and discussion rooms. 

* Commit: Each individual should have a similar number of commits per project.

* Contribute: A minimum number of four (4) commits per person.

* Demo: Each member of the group must have a meaningful speaking role on presentation day.

* Reflect: Everyone will participate in a group "project retrospective."

## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to the deployed application and the GitHub repository

## Grading Requirements

This project is graded based on the following criteria:

### Technical Acceptance Criteria: 25%

* Satisfies the following code requirements:

  * Application uses at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources)

  * Application uses client-side storage to store persistent data.

  * Application must have at least one modal (does not use alerts, prompts, or confirm methods).

  * Application uses a CSS framework other than Bootstrap.

  * Application is interactive (accepts and responds to user input)

### Concept 10%

* Application should be a unique and novel idea.

* Your group should clearly and concisely articulate your project idea.

### Deployment: 20%

* Application deployed at live URL and loads with no errors.

* Application GitHub URL submitted.

### Repository Quality: 10%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a quality README file with description, screenshot, and link to deployed application.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application is responsive.

### Presentation 10%

* Your group should present using a slide deck.

* Every group member should speak during the presentation.

* Your presentation should follow the [Project Presentation Template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing).

### Collaboration 10%

* There are no major disparities in the number of GitHub contributions between group members.
---------------------------------------------

