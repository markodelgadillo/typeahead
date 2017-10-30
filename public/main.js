const $term = document.querySelector('#term')
const list = () => fetch('/country').then(res => res.json())
list().then(documents => (country = documents))
let country = ''

function renderName(name) {
  const $result = document.querySelector('#result')
  $result.textContent = name
}

// function compare(arr) {
//   arr = country
//   for (let i = 0; i < arr.length; i++) {
//     if ($term.value === arr[i].name.toLowerCase()) {
//       renderName(arr[i].name)
//     }
//   }
// }

$term.addEventListener('keyup', function() {
  console.log($term.value)
  compareThree()
})

// test
// function compareTwo(letters) {
//   arr = country
//   for (let i = 0; i < arr.length; i++) {
//     let name = arr[i].name
//     for (let j = 0; j < name.length; j++) {
//       if ((letters = characters)) {
//         renderName(name)
//       }
//     }
//   }
// }

function compareThree(arr) {
  arr = country
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase().startsWith($term.value)) {
      renderName(arr[i].name)
    }
  }
}

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
