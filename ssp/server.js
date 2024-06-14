const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Welcome the The SSP ')
})

// Serve decision-logic.js and run-ad-auction.js files
app.use(express.static('./src'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



