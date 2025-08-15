import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(RecipeContext);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Favorite Recipes</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {favorites.length > 0 
            ? "Your saved recipes collection" 
            : "You haven't saved any recipes yet"}
        </p>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map(recipe => (
            <div key={recipe.id} className="relative">
              <RecipeCard recipe={recipe} />
              <button
                onClick={() => removeFromFavorites(recipe.id)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition"
                aria-label="Remove from favorites"
              >
                <FiHeart className="text-xl fill-current text-red-500" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-block p-6 bg-blue-50 rounded-full mb-4">
            <FiHeart className="text-4xl text-blue-600" />
          </div>
          <h3 className="text-xl font-medium text-gray-700">No favorites yet</h3>
          <p className="text-gray-500 mt-2 mb-6">
            Discover recipes and add them to your favorites!
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Browse Recipes
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;