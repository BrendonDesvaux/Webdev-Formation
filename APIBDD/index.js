const express = require('express');
const app = express();

const mysql = require('mysql');
const connect = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'apitest'

    })
    //This code is used to allow the client to access the 'public' folder, 
    //which contains all the static files that the user can access, such as images, javascript files, and css files.
    // The 'views' folder contains all the ejs files, which are used to render the website.

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/", function(req, res) {
    res.render("homePage");
})
app.listen(8080);

connect.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connect.query("SELECT * FROM users", function(err, result) {
        if (err) throw err;
        console.log(result);
    })
})