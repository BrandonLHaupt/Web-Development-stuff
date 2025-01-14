import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Hello World!`);
});

//  () => is called anonymouys function
// in ES6 it is also called an arrow function
app.listen(port, () => {
  // Call back function that is triggered when the server is setup and will trigger this function
  console.log(`server is running on port ${port}`);
});
