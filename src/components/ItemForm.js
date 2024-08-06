import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
    const [itemName, setItemName] = useState('');
    const [itemCategory, setItemCategory] = useState('Produce');

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent form from causing a page reload
        const newItem = {
            id: uuid(),
            name: itemName,
            category: itemCategory,
        };
        onItemFormSubmit(newItem);
        setItemName('');        // Reset name for next input
        setItemCategory('Produce'); // Reset category to default for next input
    };

    return (
        <form className="NewItem" onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    name="name" 
                    value={itemName} 
                    onChange={e => setItemName(e.target.value)} 
                />
            </label>
            <label>
                Category:
                <select 
                    name="category" 
                    value={itemCategory} 
                    onChange={e => setItemCategory(e.target.value)}
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </label>
            <button type="submit">Add to List</button>
        </form>
    );
}

export default ItemForm;