console.log('fetch api pratics')

async function getData(){
const URL = 'https://jsonplaceholder.typicode.com/todos/'
  fetch(URL).then(response=> response.json()).then(data=> await setTask(data))
}
 function setTask(data){
  console.log(data)
  for (item of data ){
    setTimeout((item)=>{
      document.querySelector('#task').innerText = item.title + item.id
    },2000)
  }
}

getData()
