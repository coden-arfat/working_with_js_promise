console.log('fetch api pratics')
const URL = 'https://jsonplaceholder.typicode.com/todos'

fetch(URL).then(response=> response.json()).then(data=> console.log(data))

