# Simple Contact form with DB Persistence

### Introduction
This application is divided into 2 projects, frontend (react + vite) and backend (express + mysql)

### Project Support Features
* 
* Public (non-authenticated) users can access all causes on the platform
* Authenticated users can access all causes as well as create a new cause, edit their created cause and also delete what they've created.

### Installation Guide
* Clone this repository [here](https://github.com/cmadison0005/contact_form.git).
* Run npm install to install all dependencies
* Create an .env file in the ./backend folder and set your DB variables.
    ```
    DB_HOST=localhost
    DB_USER=mydbuser
    DB_PASSWORD=mydbpassword
    DB_NAME=mydbname
    DB_PORT=3306
    PORT=5000
    ```
### Usage
* `cd backend`
* `npm run dev` to start the application.
* Connect to the API using Postman on *PORT*.

### API Endpoints
| Verb | Endpoints     | Action                               |
| ---- | ------------- | ------------------------------------ |
| POST | /api/contact  | To submit a new contact              |
| GET  | /api/contacts | To retrieve all contacts submissions |

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [React](https://react.dev/) React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless".
* [Vite](https://mongoosejs.com/) Vite is a fast and flexible build tool that simplifies bundling and dev server setup for web applications.

### Authors
* [Randall Madison](https://github.com/cmadison0005)
