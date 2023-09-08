const express = require("express")
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 3000
const path = require('path')
const cors = require("cors")
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const password = encodeURIComponent("g.ma2ELZvEnY5.j")

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

let db,
    dbConnectionStr = `mongodb+srv://mlexka:${password}@boostsapi.n4a9b0m.mongodb.net/?retryWrites=true&w=majority`,
    dbName = 'boostsApi'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })


app.get('/',async (request, response)=>{
    const listeClients = await db.collection('idClients').find().toArray()
    const clientsLeft = await db.collection('idClients').countDocuments({completed: false})
    response.render('index.ejs', { clients: listeClients, leftC: clientsLeft })
})

app.post('/addClient', (request, response) => {
    db.collection('idClients').insertOne({
        beneficiaireID: request.body.beneficiaireID,
        beneficiaireName: request.body.beneficiaireName,
        beneficiaireSalesSupport: request.body.beneficiaireSalesSupport,
        completed: false})
        .then(result => {
            console.log('Client ajouté')
            response.redirect('/')
        })
        .catch(error => console.error(error))
})

app.put('/markBeneficiaireIDComplete', (request, response) => {
    db.collection('idClients').updateOne({beneficiaireID: request.body.itemFromJS},{
        $set: {
            completed: true
        }
    },{
        sort: {_id: -1},
        upsert: false
    })
        .then(result => {
            console.log('compte traité')
            response.json('compte traité')
        })
        .catch(error => console.error(error))

})

app.put('/markBeneficiaireIDUnComplete', (request, response) => {
    db.collection('idClients').updateOne({beneficiaireID: request.body.itemFromJS},{
        $set: {
            completed: false
        }
    },{
        sort: {_id: -1},
        upsert: false
    })
        .then(result => {
            console.log('compte non traité')
            response.json('compte non traité')
        })
        .catch(error => console.error(error))

})

app.delete('/deleteBeneficiaireID', (request, response) => {
    db.collection('idClients').deleteOne({beneficiaireID: request.body.itemFromJS})
        .then(result => {
            console.log('client supprimé')
            response.json('client supprimé')
        })
        .catch(error => console.error(error))

})




app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})