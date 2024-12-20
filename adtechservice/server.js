// import { create } from 'express-handlebars'

const express = require('express')
const { engine } = require('express-handlebars');

const app = express()
const port = 3000

app.use((req, res, next) => {
  res.setHeader('Supports-Loading-Mode', 'fenced-frame');
  next();
});

app.use((req, res, next) => {
  res.setHeader('Ad-Auction-Allowed', 'true');
  next();
});

// Serve decision-logic.js and run-ad-auction.js files
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the JSON file
// app.get('/privacy-sandbox-attestations', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'privacy-sandbox-attestations.json'));
// });

// Configure handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views')

// run the app 
app.get('/', (req, res) => {
  res.send('Welcome the the AdTech Service ')
})


// to run join interest group script
app.get('/dsp', (req, res) => {
  res.render('joinIG', {layout : 'index'});
})
// to run join interest group script
app.get('/ssp', (req, res) => {
  res.render('adAuction', {layout : 'index'});
})


// Define a route

app.get('/.well-known/interest-group/permissions', (req, res) => {
  res.json({
    joinAdInterestGroup: true,
    leaveAdInterestGroup: true,
  });
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

