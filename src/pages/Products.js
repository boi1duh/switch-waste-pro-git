import React, { useState, useEffect } from "react";
import { Button, Card } from "../components/ui";
import logger from "../utils/logger";
import Modal from "../components/ui/Modal"; // Assuming Modal component exists
import { products } from "../constants/ProductData";
import Hero from "../components/ui/Hero";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("switchWasteCart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      logger.error("Failed to load cart from localStorage:", error);
      setCart([]);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("switchWasteCart", JSON.stringify(cart));
  }, [cart]);

  // Escape key to close popup
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isPopupOpen) {
        setIsPopupOpen(false);
        setSelectedProduct(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isPopupOpen]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const categories = ["all", "bins", "safety", "disposal", "recycling", "collection"];
  
 const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openProductPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Hero
        title="Our Products"
        subtitle="High-quality waste management products for safety and compliance."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back2.jpg`}
      />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-lg shadow">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
          </div>
           {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="p-4">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  onError={(e) => { e.target.src = '/placeholder-image.png'; }} // Fallback for broken images
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description.substring(0, 100)}...</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">R {product.price.toLocaleString()}</p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => openProductPopup(product)}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  <Button
                    onClick={() => addToCart(product)}
                    size="sm"
                    className="flex-1"
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Cart Summary */}
          {totalItems > 0 && (
            <div className="bg-white p-4 rounded-lg shadow mb-8">
              <h2 className="text-xl font-semibold mb-2">Cart Summary</h2>
              <p>{totalItems} item(s) in cart</p>
              <Button
                onClick={() => setShowOrderForm(true)}
                className="mt-2"
              >
                View Cart & Order
              </Button>
            </div>
          )}

          {/* Product Detail Popup */}
          <Modal isOpen={isPopupOpen} onClose={closePopup}>
            {selectedProduct && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.alt}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold">Specifications:</h3>
                  <p>{selectedProduct.specifications}</p>
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-4">R {selectedProduct.price.toLocaleString()}</p>
                <Button
                  onClick={() => {
                    addToCart(selectedProduct);
                    closePopup();
                  }}
                  className="w-full mb-2"
                >
                  Add to Cart
                </Button>
                <Button onClick={closePopup} variant="outline" className="w-full">
                  Close
                </Button>
              </div>
            )}
          </Modal>

          {/* Order Form Placeholder - Expand as needed */}
          {showOrderForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
                <h2 className="text-xl font-semibold mb-4">Order Cart</h2>
                <ul>
                  {cart.map(item => (
                    <li key={item.id} className="flex justify-between mb-2">
                      <span>{item.name} x {item.quantity}</span>
                      <span>R {(item.price * item.quantity).toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold mt-4">Total: R {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</p>
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => { setOrderSuccess(true); setShowOrderForm(false); }}>Place Order</Button>
                  <Button onClick={() => setShowOrderForm(false)} variant="outline">Cancel</Button>
                </div>
                {orderSuccess && <p className="text-green-600 mt-2">Order placed successfully!</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

};

export default Products;