const $term = document.querySelector('#term')
const list = () => fetch('/country').then(res => res.json())
list().then(documents => (country = documents))
let country = ''

function renderNames(names) {
  const $result = document.querySelector('#result')
  $result.innerHTML = ''
  names.forEach(name => {
    const $div = document.createElement('div')
    $div.textContent = name
    $result.appendChild($div)
  })
}

$term.addEventListener('keyup', function() {
  console.log($term.value)
  compare()
})

function compare() {
  if ($term.value) {
    let list = []
    for (let i = 0; i < country.length; i++) {
      if (country[i].name.toLowerCase().startsWith($term.value)) {
        list.push(country[i].name)
        console.log(list)
      }
    }
    renderNames(list)
  } else {
    const $result = document.querySelector('#result')
    $result.innerHTML = ''
  }
}

/*
adjust input field with spacing around it separating the results and
input field

async fetch?


*/
