const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()
const seed = require('./seed.js')
app.use(express.static('./public'))

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const country = db.collection('country')

  app.get('/country', function(req, res) {
    console.log('Getting stuff...')
    country
      .find({}, { _id: 0 })
      .toArray()
      .then(response => res.json(response))
  })

  app.listen(7000, function() {
    console.log('Listening on port 7000.')
  })
})
