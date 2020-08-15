const express = require('express')
const app = express()
const port = 3000

app.get('/_health_check', (req, res) => {
  res.send({message: 'ok'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})