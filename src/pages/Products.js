import React, { useState, useEffect } from "react";
import { Button, Card } from "../components/ui";
import logger from "../utils/logger";
import Modal from "../components/ui/Modal";
import { products } from "../constants/ProductData";
import Hero from "../components/ui/Hero";
import SEO from "../components/SEO";
import useForm from "../hooks/useForm";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState('');
  const [orderError, setOrderError] = useState('');
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

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Form validation for the order form
  const validateOrder = (values) => {
    const errors = {};
    if (!values.name?.trim()) errors.name = 'Name is required';
    if (!values.email?.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';
    if (!values.address?.trim()) errors.address = 'Delivery address is required';
    return errors;
  };

  // Initialize order form with useForm hook
  const {
    values: orderValues,
    errors: orderErrors,
    touched: orderTouched,
    isSubmitting: isOrderSubmitting,
    handleChange: handleOrderChange,
    handleBlur: handleOrderBlur,
    handleSubmit: handleOrderSubmit,
  } = useForm(
    { name: '', email: '', phone: '', address: '' },
    validateOrder
  );

  // Order form submission handler
  const onOrderSubmit = async (formValues) => {
    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }

    const orderData = {
      ...formValues,
      'form-name': 'product-order',
      'cart-contents': JSON.stringify(cart),
      'cart-total': cartTotal.toFixed(2),
    };

    try {
      await fetch("/", {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(orderData),
      });
      setOrderSuccess('Order placed successfully! We will contact you shortly to confirm.');
      setOrderError('');
      setCart([]); // Clear cart on successful submission
      setTimeout(() => setShowOrderForm(false), 4000);
    } catch (error) {
      setOrderError('Failed to place order. Please try again or contact us directly.');
      throw error;
    }
  };

  return (
    <>
      <SEO
        title="Products | Waste Management Products & Supplies"
        description="Browse our range of waste management products including bins, safety equipment, disposal containers, and recycling solutions for healthcare and commercial use."
        keywords="waste management products, medical waste bins, safety equipment, disposal containers, recycling bins, Johannesburg waste supplies"
        canonical="/products"
      />
      <Hero
        title="Our Products"
        subtitle="High-quality waste management products for safety and compliance."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/product.png`}
      />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-lg shadow-md">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-48"
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
              <Card key={product.id} className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={`${process.env.PUBLIC_URL}/${product.image}`}
                  alt={product.alt}
                  className="w-full h-64 object-cover rounded-md mb-4"
                  onError={(e) => { e.target.onerror = null; e.target.src=`${process.env.PUBLIC_URL}/assets/product.png`; }}
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
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold mb-2">Cart Summary</h2>
              <p className="mb-2">{totalItems} item(s) in cart</p>
              <p className="text-lg font-bold mb-4">Total: R {cartTotal.toLocaleString()}</p>
              <Button
                onClick={() => setShowOrderForm(true)}
                className="w-full md:w-auto"
              >
                View Cart & Order
              </Button>
            </div>
          )}

          {/* Product Detail Popup */}
          <Modal isOpen={isPopupOpen} onClose={closePopup}>
            {selectedProduct && (
              <div className="max-w-md">
                <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
                <img
                  src={`${process.env.PUBLIC_URL}/${selectedProduct.image}`}
                  alt={selectedProduct.alt}
                  onError={(e) => { e.target.onerror = null; e.target.src=`${process.env.PUBLIC_URL}/assets/product.png`; }}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <p className="text-gray-600 mb-4 leading-relaxed">{selectedProduct.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Specifications:</h3>
                  <p className="text-sm text-gray-600">{selectedProduct.specifications}</p>
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-4">R {selectedProduct.price.toLocaleString()}</p>
                <div className="flex gap-2 mb-4">
                  <Button
                    onClick={() => {
                      addToCart(selectedProduct);
                      closePopup();
                    }}
                    className="flex-1"
                  >
                    Add to Cart
                  </Button>
                  <Button onClick={closePopup} variant="outline" className="flex-1">
                    Close
                  </Button>
                </div>
              </div>
            )}
          </Modal>

          {/* Order Form Modal */}
          {showOrderForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4">Complete Your Order</h2>
                {orderSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {orderSuccess}
                  </div>
                )}
                {orderError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {orderError}
                  </div>
                )}

                {!orderSuccess && (
                  <>
                    <div className="mb-4 border-b pb-4">
                      <h3 className="text-lg font-medium mb-2">Order Summary</h3>
                      {cart.map(item => (
                        <div key={item.id} className="flex justify-between text-sm mb-1">
                          <span>{item.name} x {item.quantity}</span>
                          <span>R {(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))}
                      <p className="font-bold text-right mt-2 text-lg">Total: R {cartTotal.toLocaleString()}</p>
                    </div>

                    <form name="product-order" method="POST" data-netlify="true" onSubmit={(e) => handleOrderSubmit(onOrderSubmit)(e)} className="space-y-4">
                      <input type="hidden" name="form-name" value="product-order" />
                      <input type="hidden" name="cart-contents" value={JSON.stringify(cart)} />
                      <input type="hidden" name="cart-total" value={cartTotal.toFixed(2)} />

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                        <input type="text" name="name" value={orderValues.name} onChange={handleOrderChange} onBlur={() => handleOrderBlur('name')}
                          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${orderErrors.name && orderTouched.name ? 'border-red-500' : 'border-gray-300'}`} />
                        {orderErrors.name && orderTouched.name && <p className="text-red-500 text-xs mt-1">{orderErrors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                        <input type="email" name="email" value={orderValues.email} onChange={handleOrderChange} onBlur={() => handleOrderBlur('email')}
                          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${orderErrors.email && orderTouched.email ? 'border-red-500' : 'border-gray-300'}`} />
                        {orderErrors.email && orderTouched.email && <p className="text-red-500 text-xs mt-1">{orderErrors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" name="phone" value={orderValues.phone} onChange={handleOrderChange} onBlur={() => handleOrderBlur('phone')}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address *</label>
                        <textarea name="address" rows="3" value={orderValues.address} onChange={handleOrderChange} onBlur={() => handleOrderBlur('address')}
                          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${orderErrors.address && orderTouched.address ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                        {orderErrors.address && orderTouched.address && <p className="text-red-500 text-xs mt-1">{orderErrors.address}</p>}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button type="submit" disabled={isOrderSubmitting} className="flex-1">
                          {isOrderSubmitting ? 'Placing Order...' : 'Place Order'}
                        </Button>
                        <Button onClick={() => setShowOrderForm(false)} variant="outline" className="flex-1">
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </>
                )}
                {orderSuccess && (
                  <Button onClick={() => { setShowOrderForm(false); setOrderSuccess(''); }} className="mt-4 w-full">
                    Close
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;