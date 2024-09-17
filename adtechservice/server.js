// import { create } from 'express-handlebars'

const express = require('express')
const { engine } = require('express-handlebars');

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Welcome the The DSP ')
// })

// Serve decision-logic.js and run-ad-auction.js files
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));


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

// permission policy for run ad auction 
app.use('/ssp',(req, res, next) => {
  res.set('Permissions-Policy', 'run-ad-auction=*');
  // Proceed to the next middleware or route handler
  next();
});

// permission policy for run ad auction 
app.use('/dsp/bidding-logic.js', (req, res, next) => {
  res.setHeader('Ad-Auction-Allowed', 'true');  // Set the required header
  next();  // Continue to serve the script
});
app.use('/ssp/run-ad-auction', (req, res, next) => {
  res.setHeader('Ad-Auction-Allowed', 'true');  // Set the required header
  next();  // Continue to serve the script
});



app.get('/.well-known/interest-group/permissions', (req, res) => {
  res.json({
    joinAdInterestGroup: true,
    leaveAdInterestGroup: true,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

