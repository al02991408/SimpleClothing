const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.addClothingItem = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { name, description, price, imageUrl } = req.body;

    if (!name || !description || !price || !imageUrl) {
        return res.status(400).send('Missing required fields');
    }

    const clothingItem = {
        name,
        description,
        price,
        imageUrl,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    try {
        const docRef = await admin.firestore().collection('clothingItems').add(clothingItem);
        return res.status(201).send(`Clothing item created with ID: ${docRef.id}`);
    } catch (error) {
        console.error('Error adding clothing item:', error);
        return res.status(500).send('Internal Server Error');
    }
});

exports.getClothingItems = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).send('Method Not Allowed');
    }

    try {
        const snapshot = await admin.firestore().collection('clothingItems').get();
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching clothing items:', error);
        return res.status(500).send('Internal Server Error');
    }
});