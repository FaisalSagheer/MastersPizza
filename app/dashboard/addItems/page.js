
'use client'

import React, { useState, useRef } from 'react';
import { FiTrash2, FiEdit, FiPlus, FiRefreshCw } from 'react-icons/fi';

function AddItems() {
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'pizza',
    price: '',
    description: '',
    image: null,
  });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const categories = [
    { value: 'pizza', label: 'Pizza' },
    { value: 'sides', label: 'Sides' },
    { value: 'drinks', label: 'Drinks' },
    { value: 'desserts', label: 'Desserts' },
  ];

  // Load items from localStorage (or return empty array)
  const getMenuItems = () => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('menuItems')) || [];
    }
    return []; // Fallback for SSR
  };

  const saveMenuItems = (items) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('menuItems', JSON.stringify(items));
    }
  };

 
  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    if (!formData.name.trim()) {
      setErrors({ name: 'Name is required' });
      return;
    }
    if (!formData.price || isNaN(formData.price)) {
      setErrors({ price: 'Enter a valid price' });
      return;
    }

    const items = getMenuItems();
    let updatedItems;

    if (isEditing) {
      // Update existing item
      updatedItems = items.map((item) =>
        item.id === currentItemId ? { ...formData, id: currentItemId } : item
      );
    } else {
      // Add new item
      updatedItems = [...items, { ...formData, id: Date.now().toString() }];
    }

    saveMenuItems(updatedItems);
    alert(isEditing ? '✅ Item updated!' : '✅ Item added!');
    closeModal();
  };

  // Edit an item
  const editItem = (id) => {
    const item = getMenuItems().find((item) => item.id === id);
    if (item) {
      setFormData({
        name: item.name,
        category: item.category,
        price: item.price,
        description: item.description,
        image: item.image,
      });
      setIsEditing(true);
      setCurrentItemId(id);
      setShowAddItemModal(true);
    }
  };

  // Delete an item
  const deleteItem = (id) => {
    if (window.confirm('Delete this item?')) {
      const updatedItems = getMenuItems().filter((item) => item.id !== id);
      saveMenuItems(updatedItems);
      alert('🗑️ Item deleted.');
      // Force re-render
      setFormData({ ...formData });
    }
  };

  // Close modal & reset form
  const closeModal = () => {
    setShowAddItemModal(false);
    setIsEditing(false);
    setFormData({
      name: '',
      category: 'pizza',
      price: '',
      description: 'No Description',
      image: null,
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const menuItems = getMenuItems();

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Menu Items</h2>
        <div className="flex space-x-2">
         
          <button
            onClick={() => setShowAddItemModal(true)}
            className="flex items-center px-3 py-2 bg-pizza-red text-white rounded hover:bg-red-700"
          >
            <FiPlus className="mr-1" /> Add Item
          </button>
        </div>
      </div>

      {menuItems.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          <p>No items yet. Click "Add Item" to start.</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  )}
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2 capitalize">{item.category}</td>
                <td className="px-4 py-2">Rs. {item.price}</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => editItem(item.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Add/Edit Modal */}
      {showAddItemModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">
                {isEditing ? 'Edit Item' : 'Add New Item'}
              </h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1">Item Image</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Price (Rs.)*</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows="3"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pizza-red text-white rounded hover:bg-red-700"
                >
                  {isEditing ? 'Update' : 'Add'} Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddItems;