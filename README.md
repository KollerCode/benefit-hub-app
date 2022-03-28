# To-Do List App
> A simple but aesthic to-do list app. 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📖 OVERVIEW

This is a simple to-do list app created with react-bootstrap and an online API: https://jsonplaceholder.typicode.com/

## 🌟 FEATURES

-Search Bar
-Add new to-do form
-Render to-dos
-Sort ascending and descending
-Click on the to-do for more details
-Tooltips and popups
-Mark as Complete with an icon and the row will darken and the to-do will cross-out. 
-Delete with an icon

## ❔ HOW TO USE
-The search bar renders/populates the results as they are typed in the input.

-Below it, in the main section of the to-do list, is where the to-do's are rendered and new ones can be added. The to-do's are rendered via various fetch requests from `https://jsonplaceholder.typicode.com/todos`.

-A new to-do can be added to the current todo list (and fake POSTed to the api) by writing in the form and clicking the "add" button". that new todo will be added to the bottom of the list.

-To mark and PATCH it as completed, you must click on the checkmark icon. The entire row will darken and the to-do will have a strike through to indicate it is completed.

-To DELETE a to-do, simply click the red trash can icon. A tooltip will pop-up to indicate you are clicking in the right place for both of these icons (delete and complete).

-To sort the to-do's alphabetically, you can click one of the icons just below the search bar. The one with the A-Z pointing down will render them in alphabetical order. The other will do the reverse (Z-A). 

-Finally, to see details about the to-do click on the text in the row. A pop-up will appear with the information from the API about the to-do you have chosen. To return back to the todo list or homepage, click the close button.

## 👩🏽‍💻 TECH STACK
- JSX
-React-Bootstrap
-React
-CSS
-HTML

###
Thank you for your consideration! I hope you enjoy my app 

