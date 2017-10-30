const $term = document.querySelector('#term')
const list = () => fetch('/country').then(res => res.json())
// const country = {
//   name: 'null'
// }

$term.addEventListener('keyup', function() {
  console.log($term.value)
  // list()
  //   .then(documents => (country.name = documents))
  //   .then(documents => console.log(document.body.name))

  // list().then(res => console.log($term.value))
})
