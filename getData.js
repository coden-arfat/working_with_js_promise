/* note this method is useful when you working node , you can't see output in browser console 


const data = require('./Data.json');
console.log(data.arfat);

*/

/* 

let display data in browser console 

*/


fetch('Data.json')
.then(response => response.json())
.then((data)=>{
  let em =document.querySelector('#em')
   em.innerText=` hello i am  ${data.arfat.FullName} i am come Data.json file ` 
   console.log(data.arfat)
})