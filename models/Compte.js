const mongoose = require("mongoose")

const CompteSchema = new mongoose.Schema({
    beneficiaireID: {
        type: String,
        required: true,
    },
    beneficiaireName: {
        type: String,
        required: true,
    },
    beneficiaireSalesSupport: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: false,
    }
    }
)


module.exports = mongoose.model("Compte", CompteSchema, "comptesCollection")