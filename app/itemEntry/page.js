'use client'

import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import { Provider } from 'react-redux';
import { stores } from '../store';

export default function AddItem() {
  const [formData, setFormData] = useState({
    name: '',
    category: 'pizza',
    price: '',
    description: '',
    ingredients: '',
    isFeatured: false
  });
  const [imagePreview, setImagePreview] = useState(null);
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
        setImagePreview(reader.result);
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
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send data to your backend
      alert('Item added successfully!');
      console.log('Form data:', { ...formData, image: imagePreview ? 'uploaded' : null });
      // Reset form after submission
      setFormData({
        name: '',
        category: 'pizza',
        price: '',
        description: '',
        ingredients: '',
        isFeatured: false
      });
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <Provider store={stores}>

    <div className="min-h-screen bg-gray-100">
      
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-pizza-red mb-6">Add New Menu Item</h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              {/* Image Upload */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Item Image</label>
                <div className="flex items-center space-x-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg w-32 h-32 flex items-center justify-center overflow-hidden">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400">Preview</span>
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

              {/* Basic Info */}
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
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description*</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full p-2 border rounded ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Ingredients</label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Comma separated ingredients"
                ></textarea>
              </div>

              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="isFeatured"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleChange}
                  className="h-4 w-4 text-pizza-red focus:ring-pizza-red border-gray-300 rounded"
                />
                <label htmlFor="isFeatured" className="ml-2 block text-gray-700">
                  Feature this item on homepage
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-pizza-red text-white rounded hover:bg-red-800"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
    </Provider>

  );
}