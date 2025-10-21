import express from 'express';

const app = express();

app.use(express.static('public'));

//Allow the app to parse form data
app.use(express.urlencoded({extended:true}));

const orders = [];

const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/home.html`);

});