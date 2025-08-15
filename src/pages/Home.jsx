import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import SearchBar from '../components/SearchBar';
import FilterButtons from '../components/FilterButtons';
import RecipeCard from '../components/RecipeCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const { recipes, loading } = useContext(RecipeContext);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Discover Delicious Recipes</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find the perfect recipe for any occasion. Search by name, ingredients, or dietary preferences.
        </p>
      </div>
      
      <SearchBar />
      <FilterButtons />
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
      
      {!loading && recipes.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700">No recipes found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Home;