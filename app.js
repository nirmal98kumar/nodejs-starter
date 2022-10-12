const express = require("express")
const app = express()   //load express application to variable

const port = 3000

const router = express.Router()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//router can be used for modularity
router.get('/', (req, res) => {
  res.send('Birds home page')
})

app.listen(port, () => {
  consoe.log(`Example app listening on port ${port}`)
})
