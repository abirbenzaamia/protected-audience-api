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
// app.use('/ssp',(req, res, next) => {
//   res.setHeader('Ad-Auction-Allowed', 'true');
//   // Proceed to the next middleware or route handler
//   next();
// });
// app.use('/ssp/decision-logic.js',(req, res, next) => {
//   res.setHeader('Ad-Auction-Allowed', 'true');
//   // Proceed to the next middleware or route handler
//   next();
// });
// app.use('/dsp/bidding-logic.js',(req, res, next) => {
//   res.setHeader('Ad-Auction-Allowed', 'true');
//   // Proceed to the next middleware or route handler
//   next();
// });



// Define a route

app.get('/.well-known/interest-group/permissions', (req, res) => {
  res.json({
    joinAdInterestGroup: true,
    leaveAdInterestGroup: true,
  });
});


app.get('/.well_known/privacy-sandbox-attestations.json', (req, res) => {
  res.json(
    {
      "privacy_sandbox_api_attestations": [
        {
          "attestation_parser_version": "2",
          "attestation_version": "1",
          "privacy_policy": [],
          "ownership_token": "q2KA5o3efBQVJoZo13gt7JLG6w326siWv22j4kRbkClPYEyJ5TTojdaw6JYUUehr",
          "issued_seconds_since_epoch": 1720451668,
          "enrollment_id": "5FUNX",
          "enrollment_site": "https://www.greensandbox.fr/",
          "platform_attestations": [
            {
              "platform": "chrome",
              "attestations": {
                "attribution_reporting_api": {
                  "ServiceNotUsedForIdentifyingUserAcrossSites": true
                },
                "topics_api": {
                  "ServiceNotUsedForIdentifyingUserAcrossSites": true
                },
                "protected_audience_api": {
                  "ServiceNotUsedForIdentifyingUserAcrossSites": true
                }
              }
            },
            {
              "platform": "android",
              "attestations": {}
            }
          ]
        }
      ]
    }
  );
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

