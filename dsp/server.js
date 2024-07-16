const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome the The DSP ')
})

// Serve decision-logic.js and run-ad-auction.js files
app.use(express.static('./src'))
app.use(express.static('./ads'))

app.use(cors());

app.get('/.well-known/interest-group/permissions', (req, res) => {
  res.json({
    joinAdInterestGroup: true,
    leaveAdInterestGroup: true,
  });
});

app.get('/.well-known/privacy-sandbox-attestations.json', (req, res) => {
  res.json({
    "privacy_sandbox_api_attestations": [
      {
        "attestation_parser_version": "2",
        "attestation_version": "1",
        "privacy_policy": [],
        "ownership_token": "q2KA5o3efBQVJoZo13gt7JLG6w326siWv22j4kRbkClPYEyJ5TTojdaw6JYUUehr",
        "issued_seconds_since_epoch": 1720451668,
        "enrollment_id": "5FUNX",
        "enrollment_site": "https://protected-audience-api-dsp.onrender.com/",
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
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})