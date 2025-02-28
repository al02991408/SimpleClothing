// backend/src/controllers/index.js
const ClothingItem = require('../models/index');

// Get all clothing items
const getAllClothingItems = async (req, res) => {
    try {
        const items = await ClothingItem.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a clothing item by ID
const getClothingItemById = async (req, res) => {
    try {
        const item = await ClothingItem.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new clothing item
const createClothingItem = async (req, res) => {
    const newItem = new ClothingItem(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a clothing item
const updateClothingItem = async (req, res) => {
    try {
        const updatedItem = await ClothingItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a clothing item
const deleteClothingItem = async (req, res) => {
    try {
        const deletedItem = await ClothingItem.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllClothingItems,
    getClothingItemById,
    createClothingItem,
    updateClothingItem,
    deleteClothingItem,
};