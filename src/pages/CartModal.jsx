import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

const CartModal = ({ isOpen, onClose, cartItems, updateQuantity, removeItem }) => {

  const handleQuantityChange = (index, quantity) => {
    // Ensure quantity is at least 1
    const newQuantity = Math.max(1, quantity);
    updateQuantity(index, newQuantity);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price.replace('$', ''));
      return acc + itemPrice * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral-900 bg-opacity-20 z-40"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 sm:w-1/5 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="pt-8 pb-8 p-3 flex justify-center items-center bg-ingrain-color-orange">
          <div className="absolute left-3">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-2xl font-extrabold"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          <h2 className="text-xl font-semibold text-center aesthet-nova-h1">
            Cart
          </h2>
        </div>
        <div className="p-4 overflow-y-auto" style={{ maxHeight: '75vh'}}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="mb-4 flex items-center border-b last:border-b-0 pb-4 relative">
                  <button
                    onClick={() => removeItem(index)}
                    className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <h3 className="text-lg font-semibold aesthet-nova-h1">{item.name}</h3>
                      <p className="text-gray-500 aesthet-nova-h3 ">Size: {item.size}</p>
                      <div className="flex items-center">
                      <label htmlFor={`quantity-${index}`} className="mr-2 text-gray-500 aesthet-nova-h3">Quantity:</label>
                        <input
                          type="number"
                          id={`quantity-${index}`}
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                          className="w-16 p-2 border rounded"
                          min="1"
                        />
                      </div>
                    </div>
                    <p className="font-semibold aesthet-nova-h2">{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold aesthet-nova-h1">Subtotal:</span>
            <span className="text-lg font-semibold aesthet-nova-h2">${calculateSubtotal()}</span>
          </div>
          <button className="w-full py-2 bg-neutral-950 text-ingrain-color-orange text-xl rounded hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
