import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { cart } = useCart();
  const [cartArray, setCartArray] = useState(cart);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subtotalValue = calculateSubtotal(cartArray);
    const totalValue = calculateTotal(cartArray);
    setSubtotal(subtotalValue);
    setTotal(totalValue);
  }, [cartArray]);

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    const updatedCart = cartArray.filter((item) => item.id !== itemId);
    setCartArray(updatedCart);
  };

  // Function to update quantity of an item in the cart
  const updateQuantity = (itemId, quantity) => {
    const updatedCart = cartArray.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartArray(updatedCart);
  };

  return (
    <div className="container p-4 bg-[#38bdf8]">
      <div className="mt-10 bg-white p-2 mx-auto w-full flex rounded-sm">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
          {cartArray.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 bg-gray-100 p-6 rounded-lg shadow-lg">
              <FaShoppingCart className="text-6xl text-gray-400 mb-4" />
              <p className="text-xl font-semibold text-gray-600">
                Your cart is empty
              </p>
              <p className="text-gray-500">
                Browse our products and add items to your cart.
              </p>
            </div>
          ) : (
            <div className="flex">
              <ul className=" divide-y divide-gray-200">
                {cartArray.map((item, index) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    updateQuantity={updateQuantity}
                  />
                ))}
              </ul>

              <div className="w-1/2 mt-10 pl-4">
                {cartArray.length !== 0 && (
                  <div className="border p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-dashed border-gray-400 p-4 rounded-lg">
                        <p className="font-semibold">Subtotal</p>
                        <p className="text-gray-700">${subtotal}</p>
                      </div>
                      <div className="border border-dashed border-gray-400 p-4 rounded-lg">
                        <p className="font-semibold">Total</p>
                        <p className="text-gray-700">${total}</p>
                      </div>
                    </div>
                    <button
                      className="mt-4 px-4 py-2 bg-black text-white rounded-sm hover:bg-red-500"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ item, removeItem, updateQuantity }) => {
  const [productCount, setProductCount] = useState(item.quantity || 1);

  useEffect(() => {
    updateQuantity(item.id, productCount);
  }, [productCount]);

  const handleDecreaseProductCount = () => {
    if (productCount !== 1) setProductCount(productCount - 1);
  };

  const handleIncreaseProductCount = () => {
    setProductCount(productCount + 1);
  };

  return (
    <li className="flex items-center py-4 px-6">
      <div className="flex items-center w-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover mr-4 rounded"
        />
        <div className="w-2/3">
          <p className="font-semibold">{item.name}</p>
          <p className="text-gray-500">${item.currentPrice}</p>
        </div>

        <div className="flex justify-end items-center">
          <div className="border border-red-700 flex items-center">
            <button
              className="text-2xl text-green-600 cursor-pointer px-3 py-1"
              onClick={handleIncreaseProductCount}
            >
              +
            </button>
            <span className="text-lg mx-2">{productCount}</span>
            <button
              className="text-2xl text-red-600 cursor-pointer px-3 py-1"
              onClick={handleDecreaseProductCount}
            >
              -
            </button>
          </div>
          <div className="text-right ml-4 flex gap-4">
            <p className="font-semibold">${item.currentPrice * productCount}</p>
            <DeleteIcon
              onClick={() => removeItem(item.id)}
              className="cursor-pointer text-gray-500"
            />
          </div>
        </div>
      </div>
    </li>
  );
};

const calculateSubtotal = (cart) => {
  return cart.reduce(
    (acc, item) => acc + item.currentPrice * (item.quantity || 1),
    0,
  );
};

const calculateTotal = (cart) => {
  return calculateSubtotal(cart);
};

const handleCheckout = () => {
  // Implement checkout logic
};

export default Cart;
