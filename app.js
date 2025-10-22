import express from 'express';

const app = express();

const PORT = 3000;

// Enable static file serving
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}index.html`);

});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


//confirmation" route
app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`)

})

//POST ROUTE

app.post('/submit-order', (req, res) => {
    console.log(req.body);

// create a JSON object to store the data
const appointmentSchedule = {
  fname: req.body.fname,
  lname: req.body.lname,
  email: req.body.email,
  datein: req.body.datein,
  timein: req.body.timein,  
 
};

// Add order to array
appointments.push(appointmentSchedule);
console.log(appointments);



})
