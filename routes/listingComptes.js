const express = require("express")
const router = express.Router()
const listingComptesController = require("../controllers/listingComptes")
const {ensureAuth} = require("../middleware/auth")

router.get("/", ensureAuth, listingComptesController.getComptes)
router.post("/addCompte", listingComptesController.addCompte)
router.put("/markCompteComplete", listingComptesController.markCompteComplete)
router.put("/markCompteUncomplete", listingComptesController.markCompteUncomplete)
router.delete("/deleteCompte", listingComptesController.deleteCompte)

module.exports = router