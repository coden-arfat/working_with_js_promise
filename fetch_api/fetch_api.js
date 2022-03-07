console.log('fetch api pratics')
const URL = 'https://jsonplaceholder.typicode.com/todos/1'

fetch(URL).then(response=> response.json()).then(data=> console.log(data))

