const dnasync = ()=>{
  return new Promise((resolve,reject)=>{
    (true) ? setTimeout(() => resolve('async!'),2000) : reject(new Error('Error'))
  })
}

const anotherFn = async () =>{
  const something = await dnasync()
  console.log(something)
  console.log('hola que tal')
  const something2 = await dnasync()
  console.log(something)
  console.log('hola que tal2')

}

console.log('Before')
anotherFn()
console.log('after')