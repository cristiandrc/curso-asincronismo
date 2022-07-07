function* gen(){
  yield 1
  yield 2
  yield 3
  yield 4
}

const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next()) 




function* iterate(array){
  for(let value of array){
    yield value
  }
}

const it = iterate(['cristian','ana','lucia','Mile'])

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())