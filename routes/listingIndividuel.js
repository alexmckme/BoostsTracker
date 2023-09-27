const express = require("express")
const router = express.Router()
const listingIndividuelController = require("../controllers/listingIndividuel")
const {ensureAuth} = require("../middleware/auth")

router.get("/", ensureAuth, listingIndividuelController.getComptesIndiv)
router.put("/markCompteComplete", listingIndividuelController.markCompteComplete)
router.put("/markCompteUncomplete", listingIndividuelController.markCompteUncomplete)
module.exports = router