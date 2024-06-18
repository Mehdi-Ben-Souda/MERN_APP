
const { PORT } = require('../config');
const refillNotification = require('../models/refillNotification');
const { BoxByProdId } = require('./boxController');
const { getRackById } = require('./rackController');


// Create a refill notification
const createRefillNotification = async (req, res) => {
    
    try {
        const { title, message } = req.body;

        prodid=req.body.product;
        rackid=req.body.rack;
        quantity=req.body.quantity;


        const box = await BoxByProdId(prodid);
        //pour l'instant je travail juste avec l'id du rack que e met dans le boxid
        const newNotification = new refillNotification({box:prodid,rack:rackid,quantity:quantity });
        newNotification.save().then((notification)=>{
            res.status(201).json(notification);
        }).catch((error)=>{
            res.status(500).json({ error: 'Failed to create refill notification' });
            console.log(`j'ai reçu une req pour 3`);
            console.log(box);
        })

    } catch (error) {
        res.status(500).json({ error: 'Failed to create refill notification' });
        console.log(`j'ai reçu une req pour 1`);
        console.log(box);
    }
};

// Read all refill notifications
const getAllRefillNotifications = async (req, res) => {
    try {
        const notifications = await refillNotification.find();
        console.log(notifications)
        const updatedNotifications = await Promise.all(notifications.map(async (notification) => {
            const boxResponse = await fetch(`http://localhost:${PORT}/rawMaterials/${notification.box}`);
            const boxData = await boxResponse.json();
            console.log(boxData);
            const rackResponse = await fetch(`http://localhost:${PORT}/rack/${notification.rack}`);
            const rackData = await rackResponse.json();
            return {
                product: boxData.name,
                barrcode: boxData.barreCode,
                rack: rackData.address,
                quantity: notification.quantity
            };
            
        }));
        res.status(200).json(updatedNotifications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch refill notifications' });
    }
};

// Read a single refill notification by ID
const getRefillNotificationById = async (req, res) => {
    try {
        const { id } = req.params;
        const notification = await refillNotification.findById(id);
        if (!notification) {
            return res.status(404).json({ error: 'Refill notification not found' });
        }
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch refill notification' });
    }
};

// Update a refill notification by ID
const updateRefillNotificationById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, message } = req.body;
        const updatedNotification = await refillNotification.findByIdAndUpdate(
            id,
            { title, message },
            { new: true }
        );
        if (!updatedNotification) {
            return res.status(404).json({ error: 'Refill notification not found' });
        }
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update refill notification' });
    }
};

// Delete a refill notification by ID
const deleteRefillNotificationById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNotification = await refillNotification.findByIdAndDelete(id);
        if (!deletedNotification) {
            return res.status(404).json({ error: 'Refill notification not found' });
        }
        res.status(200).json({ message: 'Refill notification deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete refill notification' });
    }
};



module.exports = {
    createRefillNotification,
    getAllRefillNotifications,
    getRefillNotificationById,
    updateRefillNotificationById,
    deleteRefillNotificationById,
};