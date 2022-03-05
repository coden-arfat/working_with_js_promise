console.log('hello world')
const promise = new Promise((resolve,reject)=>{
  let isGood = false
  if(isGood===true){
    resolve('success promise')
  }else{
   reject('unsuccessful promise')
  }
})

promise.then((value)=>{
  console.log(value)
},(error)=>{
  console.error(error)
}).catch(
  ()=>{
    console.log('unsuccessful promise')
  }
).finally(()=>{
  console.warn('PROMISES NOT WORKING BRO')
})