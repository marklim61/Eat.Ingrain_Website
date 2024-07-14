import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import sample_merch from '../assets/sample_merch.jpg';
import { Tooltip } from 'react-tooltip'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$25.00',
    description: 'Im a product detail. Im a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what theyre getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.',
    image: sample_merch,
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$30.00',
    description: 'Im a product detail. Im a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.',
    image: sample_merch,
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$20.00',
    description: 'Description of Product 3',
    image: sample_merch,
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$35.00',
    description: 'Description of Product 4',
    image: sample_merch,
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  },
];

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
  };

  const handleBuyNow = () => {
    // Buy now functionality
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-ingrain-board-color p-8 rounded-lg drop-shadow-xl max-w-4xl w-full m-48">
        <div className="flex flex-col md:flex-row">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full md:w-1/2 object-contain mb-4 rounded md:mb-0 md:mr-8 bg-ingrain-board-color border-ingrain-color-orange border-2" 
          />
          <div className="flex flex-col w-full">
            <h1 className="text-3xl font-bold mb-2 aesthet-nova">{product.name}</h1>
            <p className="text-xl font-semibold mb-2 aesthet-nova-h1">{product.price}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="size" className="mr-2 aesthet-nova-h2">Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="p-2 border rounded w-full"
              >
                <option value="" disabled>Select</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2 aesthet-nova-h2">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-16 p-2 border rounded"
                min="1"
              />
            </div>
            <div className="flex flex-col mb-8">
              <button
                onClick={handleAddToCart}
                className={`addToCartTooltip w-full py-2 rounded mb-1 text-lg ${selectedSize ? 'bg-neutral-950 text-ingrain-color-orange' : 'bg-neutral-950 text-ingrain-color-orange cursor-not-allowed'}`}
                disabled={!selectedSize}
                >
                Add to Cart
              </button>
              {!selectedSize && (
                <Tooltip anchorSelect=".addToCartTooltip" place="right">
                  Select a size to add to Shopping Cart!
                </Tooltip>
              )}
              <button 
                onClick={handleBuyNow} 
                className={`buyNowTooltip w-full py-2 rounded mt-1 text-lg ${selectedSize ? 'bg-ingrain-color-orange' : 'bg-ingrain-color-orange cursor-not-allowed'}`}
                disabled={!selectedSize}
              >
                Buy Now
              </button>
              {!selectedSize && (
                <Tooltip anchorSelect=".buyNowTooltip" place="right">
                  Select a size to buy!
                </Tooltip>
              )}
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-semibold aesthet-nova-h1">PRODUCT INFO</div>
              <div className="collapse-content text-lg aesthet-nova-h2">
                <p>{product.description}</p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-semibold aesthet-nova-h1">Return and Refund Policy</div>
              <div className="collapse-content aesthet-nova-h2">
                <p>Details about the return and refund policy...</p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-semibold aesthet-nova-h1">Shipping Information</div>
              <div className="collapse-content aesthet-nova-h2">
                <p>Details about shipping information...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
