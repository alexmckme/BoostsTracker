const Compte = require("../models/Compte")

module.exports = {
    getComptesIndiv: async (req,res) => {
        try {
            const listeClients = await Compte.find({beneficiaireSalesSupport: req.user.userName})
            const clientsLeft = await Compte.countDocuments({beneficiaireSalesSupport: req.user.userName, completed: false})
            res.render("listingIndividuel.ejs", { clients: listeClients, leftC: clientsLeft })
        } catch(err) {
            console.log(err)
        }
    },

    markCompteComplete: async (req,res) => {
        try {
            await Compte.findOneAndUpdate({
                _id: req.body.itemFromJS
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
                _id: req.body.itemFromJS
            },{
                completed: false
            })
            console.log("Client marqué comme non traité")
            res.json("Client marqué comme non traité")
        } catch(err) {
            console.log(err)
        }
    }

}