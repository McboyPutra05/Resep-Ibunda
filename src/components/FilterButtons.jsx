// src/components/FilterButtons.jsx

import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const categories = ['All', 'Breakfast', 'Dinner', 'Pasta', 'Healthy', 'Easy', 'Vegetarian', 'Dessert', 'Salad'];

const FilterButtons = () => {
  const { selectedCategory, setSelectedCategory } = useContext(RecipeContext);

  return (
    <div className="flex justify-center flex-wrap gap-4 mb-12">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-6 py-2 rounded-full font-medium transition duration-200 focus:outline-none ${
            selectedCategory === category
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;