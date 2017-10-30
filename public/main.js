const $term = document.querySelector('#term')
const list = () => fetch('/country').then(res => res.json())
let country = ''

function renderName(name) {
  const $result = document.querySelector('#result')
  $result.textContent = name
}

function compare(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ($term.value === arr[i].name) {
      renderName(arr[i].name)
    }
  }
}

$term.addEventListener('keyup', function() {
  console.log($term.value)

  list().then(documents => (country = documents))
  // .then(documents => console.log(documents.length))
  // .then(console.log(country))
  // .then(documents => renderName(documents[i].name))
  // .then(documents => (country = documents))

  // for (let i = 0; i < list.length; i++) {
  //   if () // compare $term.value with names on list
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
*/
