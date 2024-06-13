
const refillNotification = require('../models/refillNotification')

// Create a refill notification
const createRefillNotification = async (req, res) => {
    try {
        const { title, message } = req.body;
        const newNotification = new refillNotification({ title, message });
        await newNotification.save();
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create refill notification' });
    }
};

// Read all refill notifications
const getAllRefillNotifications = async (req, res) => {
    try {
        const notifications = await refillNotification.find();
        res.status(200).json(notifications);
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