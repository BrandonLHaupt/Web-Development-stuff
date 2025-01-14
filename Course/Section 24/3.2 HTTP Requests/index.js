import express from 'express'
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.(`/home`)
// })

app.get('/home', (req, res) => {
  res.send(`<h1>Welcome to the home page!</h1>`)
})

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the home page!</h1>`)
})

app.get('/about', (req, res) => {
  res.send(`<h1>This is the About page!</h1>`)
})

app.get('/contact', (req, res) => {
  res.send(`<h1>Welcome to the Contact page!</h1>`)
})


app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})