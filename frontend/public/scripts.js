// This file contains the JavaScript code for the frontend application, handling user interactions and making API calls to the backend.

document.addEventListener('DOMContentLoaded', () => {
    const clothingList = document.getElementById('clothing-list');
    const addClothingForm = document.getElementById('add-clothing-form');

    // Fetch clothing items from the backend
    const fetchClothingItems = async () => {
        try {
            const response = await fetch('/api/clothing');
            const data = await response.json();
            renderClothingItems(data);
        } catch (error) {
            console.error('Error fetching clothing items:', error);
        }
    };

    // Render clothing items in the DOM
    const renderClothingItems = (items) => {
        clothingList.innerHTML = '';
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price}`;
            clothingList.appendChild(listItem);
        });
    };

    // Add a new clothing item
    addClothingForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(addClothingForm);
        const newItem = {
            name: formData.get('name'),
            price: formData.get('price'),
        };

        try {
            const response = await fetch('/api/clothing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
            if (response.ok) {
                fetchClothingItems();
                addClothingForm.reset();
            } else {
                console.error('Error adding clothing item:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding clothing item:', error);
        }
    });

    // Initial fetch of clothing items
    fetchClothingItems();
});