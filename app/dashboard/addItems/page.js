
'use client'

import React, { useState, useRef, useEffect } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';

function AddItems() {
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: 'pizza',
    price: '',
    description: '',
    isFeatured: false,
    image: null
  });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const categories = [
    { value: 'pizza', label: 'Pizza' },
    { value: 'sides', label: 'Sides' },
    { value: 'drinks', label: 'Drinks' },
    { value: 'desserts', label: 'Desserts' }
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.price || isNaN(formData.price)) newErrors.price = 'Valid price is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveToLocalStorage = (newItem) => {
    try {
      const existingItems = JSON.parse(localStorage.getItem('menuItems')) || [];
      
      if (isEditing) {
        // Update existing item
        const updatedItems = existingItems.map(item => 
          item.id === currentItemId ? { ...newItem, id: currentItemId } : item
        );
        localStorage.setItem('menuItems', JSON.stringify(updatedItems));
      } else {
        // Add new item
        const itemWithId = {
          ...newItem,
          id: Date.now().toString()
        };
        const updatedItems = [...existingItems, itemWithId];
        localStorage.setItem('menuItems', JSON.stringify(updatedItems));
      }
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (saveToLocalStorage(formData)) {
        alert(`Item ${isEditing ? 'updated' : 'added'} successfully!`);
        resetForm();
        setShowAddItemModal(false);
      } else {
        alert(`Failed to ${isEditing ? 'update' : 'save'} item. Please try again.`);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      category: 'pizza',
      price: '',
      description: '',
      isFeatured: false,
      image: null
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
    setIsEditing(false);
    setCurrentItemId(null);
  };

  const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
  
  const removeItem = (id) => {
    // if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedItems = menuItems.filter(item => item.id !== id);
      localStorage.setItem('menuItems', JSON.stringify(updatedItems));
      // Force re-render by setting state
      setFormData({...formData});
    // }
  };

  const editItem = (id) => {
    const itemToEdit = menuItems.find(item => item.id === id);
    if (itemToEdit) {
      setFormData({
        id: itemToEdit.id,
        name: itemToEdit.name,
        category: itemToEdit.category,
        price: itemToEdit.price,
        description: itemToEdit.description,
        isFeatured: itemToEdit.isFeatured || false,
        image: itemToEdit.image || null
      });
      setIsEditing(true);
      setCurrentItemId(id);
      setShowAddItemModal(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Menu Items</h2>
        <button
          onClick={() => {
            resetForm();
            setShowAddItemModal(true);
          }}
          className="bg-pizza-red text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Add New Item
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {menuItems.map(item => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.image && (
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{item.category}</td>
              <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{item.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. {item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex space-x-2">
                  <button
                    onClick={() => editItem(item.id)}
                    className="text-gray-400 hover:text-blue-500"
                    title="Edit"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-pizza-red"
                    title="Delete"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Item Modal */}
      {showAddItemModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{isEditing ? 'Edit' : 'Add New'} Menu Item</h3>
              <button
                onClick={() => {
                  resetForm();
                  setShowAddItemModal(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Item Image</label>
                    <div className="flex items-center space-x-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg w-32 h-32 flex items-center justify-center overflow-hidden">
                        {formData.image ? (
                          <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-gray-400">No Image</span>
                        )}
                      </div>
                      <div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleImageChange}
                          accept="image/*"
                          className="hidden"
                          id="imageUpload"
                        />
                        <label
                          htmlFor="imageUpload"
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded cursor-pointer"
                        >
                          Choose Image
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Category*</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Price (Rs.)*</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowAddItemModal(false);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-pizza-red text-white rounded hover:bg-red-800"
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