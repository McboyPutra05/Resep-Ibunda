import { Link } from 'react-router-dom';
import { FiClock, FiHeart } from 'react-icons/fi';
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const RecipeCard = ({ recipe }) => {
  const { addToFavorites, favorites } = useContext(RecipeContext);
  const isFavorite = favorites.some(fav => fav.id === recipe.id);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Link to={`/recipe/${recipe.id}`}>
        <div className="relative pb-48 overflow-hidden">
          <img 
            className="absolute inset-0 h-full w-full object-cover" 
            src={recipe.image} 
            alt={recipe.name} 
          />
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition">
              {recipe.name}
            </h3>
          </Link>
          <button 
            onClick={() => addToFavorites(recipe)}
            className={`p-2 rounded-full ${isFavorite ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'} transition`}
          >
            <FiHeart className="text-xl" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="inline-flex items-center text-gray-600">
            <FiClock className="mr-1" />
            {recipe.time} mins
          </span>
            <div className="flex flex-wrap gap-2 justify-end">
                {recipe.categories.map((cat) => (
            <span key={cat}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            {cat}
            </span>
        ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;