const parkingCtrl = {}

const Parking = require('../models/Parking')

parkingCtrl.getParkings = async (req, res) => {
    const parkings = await Parking.find()
    res.json(parkings)
};

parkingCtrl.createParking = async (req, res) => {
    const newParking = new Parking(req.body);

    await newParking.save();

    res.send({message: "Parking Created"});
};

parkingCtrl.getParking = async (req, res) => {
    console.log(req.params)
    const parking = await Parking.findById(req.params.id);
    res.send(parking);
};

parkingCtrl.editParking = async (req, res) => {
    await Parking.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: "Parking Updated"})
};

parkingCtrl.deleteParking = async (req, res) => {
    await Parking.findByIdAndDelete(req.params.id)
    res.json({status: "Parking Deleted"})
};

module.exports = parkingCtrl;