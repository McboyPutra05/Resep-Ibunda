import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { FiClock, FiUsers, FiHeart } from 'react-icons/fi';

const RecipeDetail = () => {
  const { id } = useParams();
  const { recipes, favorites, addToFavorites, removeFromFavorites } = useContext(RecipeContext);
  const recipe = recipes.find(r => r.id === parseInt(id));
  
  if (!recipe) {
    return <div className="text-center py-12">Recipe not found</div>;
  }

  const isFavorite = favorites.some(fav => fav.id === recipe.id);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative pb-1/2 h-96">
          <img 
            className="absolute inset-0 h-full w-full object-cover" 
            src={recipe.image} 
            alt={recipe.name} 
          />
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{recipe.name}</h1>
            <button 
              onClick={() => isFavorite ? removeFromFavorites(recipe.id) : addToFavorites(recipe)}
              className={`p-3 rounded-full ${isFavorite ? 'text-amber-500 bg-amber-50' : 'text-gray-400 bg-gray-100 hover:text-amber-500'} transition`}
            >
              <FiHeart className="text-2xl" />
            </button>
          </div>
          
          <p className="text-gray-600 mb-6">{recipe.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
              <FiClock className="mr-2" />
              <span>{recipe.time} minutes</span>
            </div>
            <div className="flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
              <FiUsers className="mr-2" />
              <span>Serves {recipe.servings}</span>
            </div>
            <div className="flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
              <span>{recipe.difficulty}</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          
          {recipe.notes && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
              <h3 className="font-medium text-amber-800 mb-2">Chef's Notes</h3>
              <p className="text-amber-700">{recipe.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;