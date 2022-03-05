console.log('hello world')

const promise = new Promise((resolve,reject)=>{

  let isGood = true
  if(isGood=true){
    resolve('success promise')
  }else{
   reject('unsuccessful promise')
  }
})