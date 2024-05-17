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
      <div className=" flex items-center justify-around px-2 py-3 ">
        {/* Logo */}
        <div>
          <img
            src="https://i.ibb.co/FW9Br64/hp-logo-removebg-preview.png"
            alt="HP Logo"
            className="h-12"
          />
        </div>

        {/* Links */}
        <div className="flex space-x-6">
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

        {/* ---- CART ---- */}
        <div className="flex items-center space-x-4 relative">
          <FaShoppingCart
            className="text-gray-800 text-2xl cursor-pointer hover:text-gray-900 transition duration-300"
            onClick={navigateToCart}
          />

          {cart.length > 0 && (
            <span className="absolute top-[-10px] right-[-10px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
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

      <ul className="flex items-center justify-center space-x-6 bg-black px-2 py-3">
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

// import React, { useState } from 'react';
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LoginSignupPage from './LoginSignUpPage';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { FaShoppingCart } from 'react-icons/fa';

// const navigation = [
//   { name: 'HOME', href: '/', current: true },
//   { name: 'ABOUT', href: '/about', current: false },
//   { name: 'SHOP', href: '/shop', current: false },
//   { name: 'SERVICE', href: '/service', current: false },
//   { name: 'CONTACT', href: '/contact', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   const [navItems, setNavItems] = useState(navigation);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   const handleShowLoginModal = () => {
//     setShowLoginModal(true);
//   };

//   const handleCloseLoginModal = () => {
//     setShowLoginModal(false);
//   };

//   const handleLinkClick = (index) => {
//     const updatedNavItems = navItems.map((item, i) => ({
//       ...item,
//       current: i === index,
//     }));
//     setNavItems(updatedNavItems);
//   };

//   const navigateToCart = () => {
//     navigate('/cart');
//   };

//   return (
//     <div className="navbar-wrapper fixed top-0 w-full z-50 bg-white">
//       <Disclosure as="nav">
//         {({ open }) => (
//           <>
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//               <div className="relative flex h-16 items-center justify-between">
//                 <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                   {/* Mobile menu button */}
//                   <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//                 <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                   <div className="hidden sm:ml-6 sm:block">
//                     <div className="flex space-x-4">
//                       {navItems.map((item, index) => (
//                         <Link
//                           key={item.name}
//                           to={item.href}
//                           className={classNames(
//                             item.current
//                               ? 'bg-gray-900 text-white'
//                               : 'hover:bg-[#38bdf8] hover:text-white hover:rounded-md',
//                             'px-3 py-2 text-sm font-medium',
//                           )}
//                           aria-current={item.current ? 'page' : undefined}
//                           onClick={() => handleLinkClick(index)}
//                         >
//                           {item.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute inset-y-0 right-0 flex gap-5 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                   <div className="relative">
//                     <FaShoppingCart
//                       className="text-2xl cursor-pointer"
//                       onClick={navigateToCart}
//                     />
//                     {cart.length > 0 && (
//                       <span className="absolute top-[-10px] right-[-10px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
//                         {cart.length}
//                       </span>
//                     )}
//                   </div>
//                   <AccountCircleIcon
//                     style={{
//                       marginRight: '15px',
//                       height: '2rem',
//                       width: '2rem',
//                       cursor: 'pointer',
//                     }}
//                     onClick={handleShowLoginModal}
//                   />
//                   <LoginSignupPage
//                     showModal={showLoginModal}
//                     hideModal={handleCloseLoginModal}
//                   />
//                 </div>
//               </div>
//             </div>

//             <Disclosure.Panel className="sm:hidden">
//               <div className="space-y-1 px-2 pb-3 pt-2">
//                 {navItems.map((item, index) => (
//                   <Disclosure.Button
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className={classNames(
//                       item.current
//                         ? 'bg-gray-900 text-white'
//                         : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'block rounded-md px-3 py-2 text-base font-medium',
//                     )}
//                     aria-current={item.current ? 'page' : undefined}
//                     onClick={() => handleLinkClick(index)}
//                   >
//                     {item.name}
//                   </Disclosure.Button>
//                 ))}
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//     </div>
//   );
// }
