const express = require('express')
const app = express()
const home = require('./routes/home');
const about = require('./routes/about');
const contact = require('./routes/contact');

app.use('/', home);
app.use('/home', home);
app.use('/about', about);
app.use('/contact', contact);

app.listen(3000, () => {
  console.log('Server running on port 3000')
})