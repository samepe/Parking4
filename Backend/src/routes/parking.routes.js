const {Router} = require('express');
const router = Router()

const parkingCtrl = require("../controllers/parking.controller.js")

router.get("/", parkingCtrl.getParkings);
router.post("/", parkingCtrl.createParking);
router.get("/:id", parkingCtrl.getParking);
router.put("/:id", parkingCtrl.editParking);
router.delete("/:id", parkingCtrl.deleteParking);

module.exports = router

