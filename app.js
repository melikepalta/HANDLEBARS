const express = require('express');
const app = express();
const port = 3000;

const { engine } = require('express-handlebars');

app.engine('hbs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'index',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`
}));

app.set('view engine', 'hbs');

app.use(express.static('public'));

const fakeApi = () => {
    return [
        {
            name: 'Katarina',
            lane: 'midlaner'
        },
        {
            name: 'Jayce',
            lane: 'toplaner'
        },
        {
            name: 'Heimerdinger',
            lane: 'toplaner'
        },
        {
            name: 'Zed',
            lane: 'midlaner'
        },
        {
            name: 'Azir',
            lane: 'midlaner'
        },

    ]
};

const list = true;


app.get('/', (req, res) => {
    res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: list});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});