const Rack = require('../models/rack'); // Assurez-vous que le chemin est correct

// Créer un rack
exports.createRack = async (req, res) => {
    const rack = new Rack(req.body);
    try {
        await rack.save();
        res.status(201).send(rack);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Lire un rack
exports.getRack = async (req, res) => {
    try {
        const rack = await Rack.findById(req.params.id).populate('boxes.box');
        if (!rack) {
            return res.status(404).send();
        }
        res.send(rack);
    } catch (error) {
        res.status(500).send();
    }
};

exports.getRackById = async (id) => {
    try {
        const rack = await Rack.findById(id).populate('boxes.box');
        if (!rack) {
            return null;
        }
        return rack;
    } catch (error) {
        return null;
    }
};


// Lire tous les racks
exports.getRacks = async (req, res) => {
    try {
        const racks = await Rack.find();
        res.send(racks);
    } catch (error) {
        res.status(500).send();
    }
};

// Mettre à jour un rack
exports.updateRack = async (req, res) => {
    try {
        const rack = await Rack.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!rack) {
            return res.status(404).send();
        }
        res.send(rack);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Supprimer un rack
exports.deleteRack = async (req, res) => {
    try {
        const rack = await Rack.findByIdAndDelete(req.params.id);
        if (!rack) {
            return res.status(404).send();
        }
        res.send(rack);
    } catch (error) {
        res.status(500).send();
    }
};


// Ajouter une boîte à un rack
exports.addBox = async (req, res) => {
    try {
        const rack = await Rack.findOne({ address: req.params.adress });
        console.log(rack);
        /*for (let i = 0; i < rack.boxes.length; i++) {
            if (rack.boxes[i].box == req.body.box_id) {
                rack.boxes[i].quantity += parseInt( req.body.quantity);
                await rack.save();
                res.send(rack);
                return 
            }
        }
        rack.boxes.push({ box: req.body.box, quantity: req.body.quantity });
        await rack.save();*/
        res.send(rack);
    } catch (error) {
        res.status(400).send(error);
    }
};

