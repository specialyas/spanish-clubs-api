const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000


app.use(cors())

const clubs = {
    'real madrid': {
    'name': 'Real Madrid Club de Fútbol',
    'nickname': 'Los Blancos (The Whites)',
    'age':  120,
    'stadium': 'Santiago Bernabéu',
    'president': 'Florentino Pérez',
    'head coach': 'Carlo Ancelotti'
    },
    'barcelona': {
    'name': 'Futbol Club Barcelona',
    'nickname': 'Barça or Blaugrana',
    'age':   122,
    'stadium': 'Camp Nou',
    'president': 'Joan Laporta',
    'head coach': 'Xavi'
    },
    'atletico madrid': {
    'name': 'Club Atlético de Madrid',
    'nickname': 'Colchoneros (Mattress Makers)',
    'age':   119,
    'president': 'Enrique Cerezo',
    'stadium': 'Wanda Metropolitano',
    'head coach': 'Diego Simeone'
    },
    'sevilla ': {
    'name': 'Sevilla Fútbol Club',
    'nickname': 'Los Nervionenses',
    'age':   132,
    'president': 'José Castro Carmona',
    'stadium': 'Estadio Ramón Sánchez Pizjuán',
    'head coach': 'Julen Lopetegui'
    },
    'unknown': {
        age: 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const clubName = request.params.name.toLowerCase(); 
    if (clubs[clubName]){
        response.json(clubs[clubName])
    }else {
        response.json(clubs['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! go catch it`)
})  