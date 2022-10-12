const express = require("express")
const app = express()   //load express application to variable

const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.listen(port, () => {
  consoe.log(`Example app listening on port ${port}`)
})
