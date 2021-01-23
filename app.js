var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const usersRouter = require('./Routes/usersRoutes')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', usersRouter);
app.post('/create', usersRouter);
app.use("/", usersRouter);
app.use("/users", usersRouter);



app.listen(3000);
console.log("Listening to PORT 3000");