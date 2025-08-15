import { createContext, useState, useEffect } from 'react';
import { mockRecipes } from '../data/mockData.js';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [allRecipes] = useState(mockRecipes || []);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('recipe-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    localStorage.setItem('recipe-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const filteredRecipes = allRecipes.filter(recipe => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const matchesSearch =
      recipe.name.toLowerCase().includes(lowerSearchTerm) ||
      (recipe.ingredients && recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerSearchTerm)));

    const matchesCategory =
      selectedCategory === 'all' ||
      (recipe.categories && recipe.categories.includes(selectedCategory));

    return matchesSearch && matchesCategory;
  });

  const addToFavorites = (recipe) => {
    if (!favorites.some(fav => fav.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFromFavorites = (recipeId) => {
    setFavorites(favorites.filter(recipe => recipe.id !== recipeId));
  };

  return (
    <RecipeContext.Provider value={{
      recipes: filteredRecipes,
      favorites,
      searchTerm,
      setSearchTerm,
      selectedCategory,
      setSelectedCategory,
      addToFavorites,
      removeFromFavorites
    }}>
      {children}
    </RecipeContext.Provider>
  );
};