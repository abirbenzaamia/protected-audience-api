const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome the The DSP ')
})

// Serve decision-logic.js and run-ad-auction.js files
app.use(express.static('./src'))
app.use(express.static('./ads'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})