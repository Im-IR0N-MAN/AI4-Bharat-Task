
# Project Title

AI4Bharat Task

## Hosted link
https://ai-4-bharat-task.vercel.app/

## Setup Instructions
* Installation : Use `npm install` command in the terminal to install all the required repositories.
* Running the app : To run the app use `npm start` command.
* Building the app : To build this project use  `npm run build` 
## Observations On The Process 
* For this task I needed to create a web application using react and redux to show some data in tabular form.
* First I divided this task in parts 
    1. Making an API call.
    2. Storing the data into redux store.
    3. Showing that data in tabular form.
    4. If any row in the table is clicked then there should be a popup model. 
    5. Modal can be closed using cross button, clicking on backdrop or by pressing express.
    6. Implementing some other features like searching, sorting, filtering, etc.
    7. Make the webpage look userfriendly.

* So I implimented rtk query to load and store data while loading the webpage in redux store.
* for a Good, fiture rich and user friendly table I Used material Ui, which has a high quality and easy to use collection of components. 
* created a Model my self to which data is passed as soon as some row is clicked and the model is displayed.
* on doing any clicking on backdrop or cross button or pressing esc the data is cleared and model is gon.

