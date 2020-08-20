const express = require('express')
const database = require('./database')
const app = express()
const port = 3000

app.get('/_health_check', (req, res) => {
  return res.send({message: 'ok'})
})

app.get('/test_sequelize', async (req, res) => {
  try {
    await database.sequelize.authenticate();
    console.log('Connection has been established successfully.');

    return res.send({message: 'ok'})
  } catch (error) {
    console.error('Unable to connect to the database:', error);

    return res.send({message: 'Unable to connect to the database'})
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})