import express from 'express';

const app = express();

const PORT = 3000;

// Enable static file serving
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/index.html`);

});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});