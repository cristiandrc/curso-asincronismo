const promise = new Promise(function(resolve,reject){
  resolve('hey')
})


const cow = 5

const countCows = new Promise(function(resolve,reject){
  if(cow > 10){
    resolve(`We have ${cow} cows on the farm`)
  }else(
    reject('There are not cows on the farm')
  )
})

countCows
.then(console.log)
.catch(console.log)
.finally(()=> console.log('finally'))