import express from 'express';

const app = express();

const PORT = 3010;

const appointments = [];

// Enable static file serving
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/index.html`);

});



//admin route
app.get('/admin', (req, res) => {

    res.send(appointments);
})

//POST ROUTE

app.post('/submit-app', (req, res) => {
const currentDate = new Date();
const currentTime = `${currentDate.getTime()}`;
// create a JSON object to store the data
const appointmentSchedule = {
  fname: req.body.fname,
  lname: req.body.lname,
  datein: req.body.datein,
  timein: req.body.timein,
  submission_time: currentTime
 };

// Add order to array
appointments.push(appointmentSchedule);
console.log(appointments);

res.sendFile(`${import.meta.dirname}/confirmation.html`);

})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});