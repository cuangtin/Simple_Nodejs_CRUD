
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', handlebars({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.use(morgan('combined'));

app.get('/', (req,res) => {
    res.render('home');
});
app.get('/news', (req,res) => {
    res.render('news');
});

app.listen(port, ()=> console.log(`Example app starts at localhost:${port}`));