const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1'
const producto = '/products'

function fetchData(urlApi,callback){
  let xhttp = new XMLHttpRequest()

  xhttp.open('GET',urlApi,true)//habilitar peticiones a la api

  xhttp.onreadystatechange = function(event){
    //0 no inicializado - 1 loading send no ejecutado - 2 send ejecutado - 3 interactuando o descargando la solicitud - 4 se completo la llamada
    if(xhttp.readyState === 4){ 
      if(xhttp.status === 200){ //status 200 de respuesta http
        callback(null,JSON.parse(xhttp.responseText))
      }else {
        const error = new Error('Error ' + urlApi)
        return callback(error,null)
      }
    }
  }
  xhttp.send()
}



fetchData(`${API}/products`,function(error1,data1){
  if(error1) return console.error(error1)
  fetchData(`${API}/products/${data1[0]?.id}`,function(error2,data2){
    if(error2) return console.error(error2)
    fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
      if(error3) return console.error(error3)
      console.log(data1[0])
      console.log(data2.title)
      console.log(data3.name)
    })
  })

})
