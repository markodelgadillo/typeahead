const { MongoClient } = require('mongodb')

module.export = MongoClient.connect('mongodb://localhost/library', function (err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const country = db.collection('country')

  country.deleteMany()

  country.insertMany(
    [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ]
  )
  db.close()
})

/* notes
- database with array
- string.prototype.indexOf()
- id #term for search term
- toLowerCase
- charAt?
- array.filter(word => {
    if (word.indexOf('T')===0})

- search function to mongodb
- use delay search upon key press (debouncing)
- begins search after two letters inputted
- on key down event listener
-
