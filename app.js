const express = require('express')

const app = express();


app.use(express.static('public') )

//ROUTES

app.get('/', (request, response, next) => {
    console.log(request)

    console.log(__dirname )
    response.sendFile(__dirname + '/public/views/index.html')
})


app.get('/about', (request, response, next) => {
    console.log(request)

    response.sendFile(__dirname + '/public/views/about.html')
})


// start the server 

app.listen(3000, ()=> {
    console.log('server connected')
})