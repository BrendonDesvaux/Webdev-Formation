// import express framework
const express = require('express');

// create an instance of express
const app = express();

// set a port to listen to
const port = 8080;

// import users data
const userData = require('./users.json');

// This function is called when the server starts. The code inside the function executes when the server starts.
// The function is called 'listen'. It is passed two arguments: the port number and a function.
// The function passed to 'listen' is called an 'anonymous function'. It does not have a name.
// The anonymous function logs a message to the console. The message includes the port number.
// The message is used for debugging.
// The code inside the anonymous function will execute when the server starts.

app.listen(port, () => { console.log(`App running on http://localhost:${port}`) });

// This code is used to display the user data in json format

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => {
        res.status(200).json(userData)
    })
    // POST request to add a new user
app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(200).json(userData)
})

//This code is used to get a user by ID. 
//The user is found by the ID number in the request parameters. 
//It then returns the user in JSON format.

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = userData.find(users => user.id === id)
    res.status(200).json(user)
})