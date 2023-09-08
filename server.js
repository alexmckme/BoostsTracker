const express = require("express")
const app = express()
const PORT = 8000
const path = require('path')


const rappers = {
    "21 savage":{
        "age": 30,
        "birthName": "Shéyaa Bin Abraham-Joseph",
        "birthLocation": "London, England"
    },
    "chance the rapper":{
        "age": 29,
        "birthName": "Chancelor Bennett",
        "birthLocation": "Chicago, Illinois"
    },
    "dylan":{
        "age": 29,
        "birthName": "Dylan",
        "birthLocation": "Dylan"
    }
}


app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"))
})


app.get("/api", (request, response) => {
    response.json(rappers)
})

app.get("/api/:rapperName", (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers["dylan"])
    }
})



app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}!`)
})