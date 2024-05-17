import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import LoginSignupPage from './LoginSignUpPage';

const Navbar = () => {
  const navigation = [
    { name: 'Home', link: '/', current: true },
    { name: 'About', link: '/about', current: false },
    { name: 'Shop', link: '/shop', current: false },
    { name: 'Service', link: '/service', current: false },
    { name: 'Contact', link: '/contact', current: false },
    { name: 'My HP Account', link: '/', current: false },
  ];
  const [navItems, setNavItems] = useState(navigation);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLinkClick = (index) => {
    const updatedNavItems = navItems.map((item, i) => ({
      ...item,
      current: i === index,
    }));
    setNavItems(updatedNavItems);
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <nav className="w-full">
      <div className="flex items-center justify-around px-2 py-3 ">
        {/* Logo */}
        <div>
          <img
            src="https://i.ibb.co/FW9Br64/hp-logo-removebg-preview.png"
            alt="HP Logo"
            className="h-12"
          />
        </div>

        {/* Center Div - Links */}
        <div className="hidden sm:flex space-x-6">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-900 transition duration-300"
          >
            Explore
          </Link>
          <Link
            to="/shop"
            className="text-gray-800 hover:text-gray-900 transition duration-300"
          >
            Shop
          </Link>
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-900 transition duration-300"
          >
            Support
          </Link>
        </div>

        {/* ---- CART & Login/Signup ---- */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <FaShoppingCart
            className="text-gray-800 text-2xl cursor-pointer hover:text-gray-900 transition duration-300"
            onClick={navigateToCart}
          />

          {cart.length > 0 && (
            <span className="absolute top-[18px] right-[310px] -mt-1 -mr-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cart.length}
            </span>
          )}

          {/* Login/Signup */}
          <button
            className="text-white bg-black px-4 py-2 rounded-sm hover:bg-blue-600 transition duration-300"
            onClick={handleShowLoginModal}
          >
            Login / Signup
          </button>
          <LoginSignupPage
            showModal={showLoginModal}
            hideModal={handleCloseLoginModal}
          />
        </div>
      </div>

      <ul className=" flex items-center justify-center space-x-6 bg-black px-2 py-3">
        {navItems.map(({ name, link, current }, index) => (
          <li key={name}>
            <Link
              to={link}
              className={`text-white hover:text-gray-300 ${
                current
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-[#38bdf8] hover:text-white hover:rounded-md'
              } px-3 py-2 text-sm font-medium`}
              aria-current={current ? 'page' : undefined}
              onClick={() => handleLinkClick(index)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
