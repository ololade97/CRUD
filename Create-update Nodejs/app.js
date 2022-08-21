const express = require("express"); //think of express as shortcuts of getting things done.
const app = express();
const morgan = require("morgan");

app.use(express.json());

//Middlewares

//Middleware - always put middleware at the top
app.use(express.json());

app.use(morgan("dev"));

//Create your own middleware

app.use((req, res, next) => {
  console.log("Hellow from the middleware😍");
  next();
});

//To add time when any reuest is made
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Router

//SERVER

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
