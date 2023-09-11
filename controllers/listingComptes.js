const Compte = require("../models/Compte")

module.exports = {
    getComptes: async (req,res) => {
        try {
            const listeClients = await Compte.find()
            const clientsLeft = await Compte.countDocuments({completed: false})
            res.render("compte.ejs", { clients: listeClients, leftC: clientsLeft })
        } catch(err) {
            console.log(err)
        }
    },

    addCompte: async (req,res) => {
        try {
            await Compte.create({
                beneficiaireID: Number(req.body.beneficiaireID),
                beneficiaireName: req.body.beneficiaireName,
                beneficiaireSalesSupport: req.body.beneficiaireSalesSupport,
                completed: false
            })
            console.log("Client ajouté !")
            res.redirect("/listingComptes")
        } catch(err) {
            console.log(err)
        }
    },

    markCompteComplete: async (req,res) => {
        try {
            await Compte.findOneAndUpdate({
                beneficiaireID: req.body.itemFromJS
            },{
                completed: true
            })
            console.log("Client traité")
            res.json("Client traité")
        } catch(err) {
            console.log(err)
        }
    },

    markCompteUncomplete: async (req,res) => {
        try {
            await Compte.findOneAndUpdate({
                beneficiaireID: req.body.itemFromJS
            },{
                completed: false
            })
            console.log("Client marqué comme non traité")
            res.json("Client marqué comme non traité")
        } catch(err) {
            console.log(err)
        }
    },

    deleteCompte: async (req,res) => {
        try {
            await Compte.findOneAndDelete({
                beneficiaireID: req.body.itemFromJS
            })
            console.log("Client supprimé !")
            res.json("Client supprimé !")
        } catch(err) {
            console.log(err)
        }
    }
}