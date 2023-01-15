const express = require('express')
const app = express()
const about = require('./routes/about');
const contact = require('./routes/contact');

app.use('/about', about);
app.use('/contact', contact);

app.use('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})