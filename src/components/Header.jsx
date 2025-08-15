import { Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiHome } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Resep Ibunda</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-200 transition">
              <FiHome className="text-lg" />
              <span>Home</span>
            </Link>
            <Link to="/favorites" className="flex items-center space-x-1 hover:text-blue-200 transition">
              <FiHeart className="text-lg" />
              <span>Favorites</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;