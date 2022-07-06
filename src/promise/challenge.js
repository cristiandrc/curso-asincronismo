import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
  return fetch(urlApi)
}

// fetchData(`${API}/products`)
// .then((response => response.json()))
// .then(console.log)
// .catch(console.log)


fetchData(`${API}/products`)
.then(response => response.json())
.then(product => {
  // console.log(product[0])
  return fetchData(`${API}/products/${product[0].id}`)
})
.then(response => response.json())
.then(product => {
  return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(console.log)
.catch(console.log)
.finally(()=> console.log('terminamos'))
