// import { create } from 'express-handlebars'

const express = require('express')
const { engine } = require('express-handlebars');

const app = express()
const cors = require('cors');
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Welcome the The DSP ')
// })


// Serve decision-logic.js and run-ad-auction.js files
app.use(cors());
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

app.get('/dsp', (req, res) => {
  res.render('joinIG', {layout : 'index'});
})

app.get('/ssp', (req, res) => {
  res.render('adAuction', {layout : 'index'});
})

app.get('/.well-known/interest-group/permissions', (req, res) => {
  res.json({
    joinAdInterestGroup: true,
    leaveAdInterestGroup: true,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use(express.static('./public/ads'))
