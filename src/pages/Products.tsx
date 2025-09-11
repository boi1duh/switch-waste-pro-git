import React, { useState, useEffect, memo, useMemo, useCallback } from "react";
import type { CartItem, QuoteFormData } from "../types";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const Products = memo(() => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("switchWasteCart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart) as CartItem[];
      setCart(parsedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("switchWasteCart", JSON.stringify(cart));
  }, [cart]);

  const products: CartItem[] = [
    // Waste Bins & Containers
    {
      id: 1,
      name: "240L Wheelie Bin - General Waste",
      category: "bins",
      price: 1250,
      image: "/assets/Products/240l-red-general-waste-recycling-trash-wheelie-bin-whandle_wheels.png",
      description: "Durable 240L wheelie bin for general waste collection. Made from high-density polyethylene with reinforced wheels.",
      specifications: "Capacity: 240L, Material: HDPE, Color: Green, Wheels: 200mm",
      alt: "240L wheelie bin for general waste collection",
      quantity: 0
    },
    {
      id: 2,
      name: "120L Recycling Bin - Multi-Compartment",
      category: "bins",
      price: 850,
      image: "/assets/Products/120L_recycling_bin.png",
      description: "Multi-compartment recycling bin for paper, plastic, and glass separation. Ideal for offices and residential complexes.",
      specifications: "Capacity: 120L, Compartments: 3, Material: Plastic, Color: Blue/Green/White",
      alt: "Multi-compartment recycling bin for waste separation",
      quantity: 0
    },
    {
      id: 3,
      name: "Medical Waste Container - 20L",
      category: "bins",
      price: 450,
      image: "/assets/Products/20L_sharps_medical_waste container.jpg",
      description: "Sharps and medical waste container with biohazard labeling. SANS compliant for healthcare facilities.",
      specifications: "Capacity: 20L, Material: Puncture-resistant plastic, Color: Red, SANS Approved",
      alt: "Medical waste container for healthcare facilities",
      quantity: 0
    },
    {
      id: 4,
      name: "Industrial Waste Skip - 6m³",
      category: "bins",
      price: 8500,
      image: "/assets/Products/6m_large_industrial_waste_skip.png",
      description: "Large industrial waste skip for construction and commercial waste. Heavy-duty construction with lifting points.",
      specifications: "Capacity: 6m³, Material: Steel, Color: Orange, Weight: 450kg",
      alt: "Industrial waste skip for construction sites",
      quantity: 0
    },

    // Safety Equipment
    {
      id: 5,
      name: "Nitrile Safety Gloves - Box of 100",
      category: "safety",
      price: 280,
      image: "/assets/Products/Nirile_safety_gloves.png",
      description: "Disposable nitrile examination gloves. Powder-free, ambidextrous design for medical and general use.",
      specifications: "Material: Nitrile, Size: Medium, Quantity: 100 pairs, Powder-free, CE Certified",
      alt: "Nitrile safety gloves for medical and general use",
      quantity: 0
    },
    {
      id: 6,
      name: "Safety Goggles - Anti-Fog",
      category: "safety",
      price: 95,
      image: "/assets/Products/safety_glasses.jpg",
      description: "Anti-fog safety goggles with adjustable strap. Provides eye protection during waste handling operations.",
      specifications: "Material: Polycarbonate, Anti-fog coating, Adjustable strap, EN166 Certified",
      alt: "Anti-fog safety goggles for eye protection",
      quantity: 0
    },
    {
      id: 7,
      name: "Disposable Coveralls - Type 5/6",
      category: "safety",
      price: 150,
      image: "/assets/Products/disposable _coveralls.png",
      description: "Type 5/6 disposable coveralls for protection against hazardous substances. Ideal for waste handling.",
      specifications: "Material: SMS Fabric, Size: Large, Protection: Type 5/6, Quantity: 1 piece",
      alt: "Disposable coveralls for hazardous waste handling",
      quantity: 0
    },
    {
      id: 8,
      name: "Respirator Mask - N95",
      category: "safety",
      price: 65,
      image: "/assets/Products/mask_n95.png",
      description: "N95 respirator mask for protection against airborne particles during waste processing.",
      specifications: "Type: N95, Material: Non-woven fabric, Adjustable straps, Nose clip included",
      alt: "N95 respirator mask for airborne particle protection",
      quantity: 0
    },

    // Disposal Equipment
    {
      id: 9,
      name: "Sharps Disposal Container - 5L",
      category: "disposal",
      price: 85,
      image: "/assets/Products/5l_sharps_container.jpg",
      description: "Puncture-resistant sharps container for safe disposal of needles and medical sharps.",
      specifications: "Capacity: 5L, Material: Plastic, Color: Yellow, Locking lid, Biohazard labeled",
      alt: "Sharps disposal container for medical waste",
      quantity: 0
    },
    {
      id: 10,
      name: "Pharmaceutical Waste Container - 10L",
      category: "disposal",
      price: 120,
      image: "/assets/Products/pharmacuitcal_waste_container.png",
      description: "Secure pharmaceutical waste container with child-resistant and tamper-evident features.",
      specifications: "Capacity: 10L, Material: HDPE, Color: White, Child-resistant, Tamper-evident",
      alt: "Pharmaceutical waste container with security features",
      quantity: 0
    },
    {
      id: 11,
      name: "Hazardous Waste Drum - 200L",
      category: "disposal",
      price: 650,
      image: "/assets/Products/200l_waste_drums.png",
      description: "UN certified hazardous waste drum for chemical and toxic waste storage and transport.",
      specifications: "Capacity: 200L, Material: Steel, UN Certified, Color: Yellow, Bung openings: 2\"",
      alt: "Hazardous waste drum for chemical storage",
      quantity: 0
    },
    {
      id: 12,
      name: "Document Shredding Bags - Pack of 50",
      category: "disposal",
      price: 180,
      image: "/assets/Products/Confidential-Document-Bag-Shopify.png",
      description: "Security document shredding bags for confidential waste. Cross-cut shredding capability.",
      specifications: "Capacity: 50 bags, Security Level: P-4, Material: Plastic, Size: A4 compatible",
      alt: "Document shredding bags for confidential waste",
      quantity: 0
    },

    // Recycling Containers
    {
      id: 13,
      name: "Plastic Recycling Bin - 240L",
      category: "recycling",
      price: 1100,
      image: "/assets/Products/240l-red-general-waste-recycling-trash-wheelie-bin-whandle_wheels.png",
      description: "Dedicated plastic recycling container with clear labeling and weather-resistant design.",
      specifications: "Capacity: 240L, Material: HDPE, Color: Blue, Weather-resistant, Recycling labeled",
      alt: "Plastic recycling bin with weather-resistant design",
      quantity: 0
    },
    {
      id: 14,
      name: "Glass Recycling Container - 120L",
      category: "recycling",
      price: 750,
      image: "/assets/Products/120L_glass_waste_container.png",
      description: "Specialized glass recycling container with reinforced base to prevent breakage.",
      specifications: "Capacity: 120L, Material: Plastic, Color: Green, Reinforced base, Glass labeled",
      alt: "Glass recycling container with reinforced base",
      quantity: 0
    },
    {
      id: 15,
      name: "Paper Recycling Station - 360L",
      category: "recycling",
      price: 1450,
      image: "/assets/Products/360L_reacycling_station.jpg",
      description: "Multi-compartment paper recycling station for different paper types and confidential documents.",
      specifications: "Capacity: 360L, Compartments: 2, Material: Plastic, Color: White, Lockable",
      alt: "Paper recycling station with multiple compartments",
      quantity: 0
    },
    {
      id: 16,
      name: "Organic Waste Bin - 80L",
      category: "recycling",
      price: 420,
      image: "/assets/Products/80L_organic_waste_bin.png",
      description: "Compostable organic waste container with carbon filter to control odors.",
      specifications: "Capacity: 80L, Material: Plastic, Color: Brown, Carbon filter, Compost labeled",
      alt: "Organic waste bin with odor control",
      quantity: 0
    },

    // Collection Equipment
    {
      id: 17,
      name: "Heavy-Duty Waste Sack - 100L",
      category: "collection",
      price: 25,
      image: "/assets/Products/Heavy_duty _waste_Sack.png",
      description: "Heavy-duty waste collection sacks with reinforced seams and handles.",
      specifications: "Capacity: 100L, Material: HDPE, Thickness: 50 micron, Quantity: 1 sack",
      alt: "Heavy-duty waste collection sack",
      quantity: 0
    },
    {
      id: 18,
      name: "Trolley Collection System",
      category: "collection",
      price: 2850,
      image: "/assets/Products/mobile_waste_trolly.png",
      description: "Mobile waste collection trolley system for efficient multi-bin collection.",
      specifications: "Capacity: 4 x 120L bins, Material: Steel, Wheels: 150mm, Handle height: Adjustable",
      alt: "Mobile waste collection trolley system",
      quantity: 0
    },
    {
      id: 19,
      name: "Lifting Equipment - Hydraulic Bin Lifter",
      category: "collection",
      price: 12500,
      image: "/assets/Products/hydraulic_bin_lifter.png",
      description: "Hydraulic bin lifting equipment for safe and efficient waste collection operations.",
      specifications: "Lift capacity: 300kg, Power: Hydraulic, Controls: Manual, Safety features: Auto-lock",
      alt: "Hydraulic bin lifting equipment for waste collection",
      quantity: 0
    },
    {
      id: 20,
      name: "GPS Tracking Device for Collection Vehicles",
      category: "collection",
      price: 2500,
      image: "/assets/Products/gps_tracking_device.png",
      description: "GPS tracking device for waste collection vehicles with real-time monitoring capabilities.",
      specifications: "Features: Real-time tracking, Battery: 7 days, Connectivity: GSM, Reports: Daily",
      alt: "GPS tracking device for waste collection vehicles",
      quantity: 0
    },

    // Specialty Equipment
    {
      id: 21,
      name: "Medical Waste Incinerator - Portable",
      category: "specialty",
      price: 45000,
      image: "/assets/Products/Capture-incerator.jpg-1.jpeg",
      description: "Portable medical waste incinerator for on-site treatment of healthcare waste.",
      specifications: "Capacity: 50kg/hour, Fuel: Diesel, Temperature: 800°C, Portable design",
      alt: "Portable medical waste incinerator",
      quantity: 0
    },
    {
      id: 22,
      name: "Waste Compactor - 10m³",
      category: "specialty",
      price: 85000,
      image: "/assets/Products/industrial_waste compactor.png .png",
      description: "Industrial waste compactor for volume reduction of general and commercial waste.",
      specifications: "Capacity: 10m³, Compaction ratio: 4:1, Power: Electric, Control: Automatic",
      alt: "Industrial waste compactor for volume reduction",
      quantity: 0
    },
    {
      id: 23,
      name: "Air Quality Monitor - Waste Facilities",
      category: "specialty",
      price: 3200,
      image: "/assets/Products/air_quality_monitor.png",
      description: "Air quality monitoring device for waste processing facilities with real-time data.",
      specifications: "Sensors: VOC, PM2.5, CO2, Connectivity: WiFi, Battery: Rechargeable, Display: LCD",
      alt: "Air quality monitor for waste processing facilities",
      quantity: 0
    },
    {
      id: 24,
      name: "Radiation Detection Equipment",
      category: "specialty",
      price: 5800,
      image: "/assets/Products/Radiation_detection.png",
      description: "Portable radiation detection equipment for monitoring radioactive waste materials.",
      specifications: "Detection range: 0.1μSv/h - 10Sv/h, Display: Digital, Alarm: Audible/visual, Battery: 8 hours",
      alt: "Radiation detection equipment for radioactive waste",
      quantity: 0
    },

    // Cleaning & Maintenance
    {
      id: 25,
      name: "Biohazard Spill Kit",
      category: "cleaning",
      price: 350,
      image: "/assets/Products/Biohazard-Spill-Kit.png",
      description: "Complete biohazard spill cleanup kit for medical and laboratory facilities.",
      specifications: "Contents: Absorbents, disinfectant, PPE, disposal bags, Instructions included",
      alt: "Biohazard spill cleanup kit",
      quantity: 0
    },
    {
      id: 26,
      name: "Industrial Cleaning Supplies Set",
      category: "cleaning",
      price: 480,
      image: "/assets/Products/industrial_cleaning_supplies.png",
      description: "Comprehensive cleaning supplies set for waste handling equipment and facilities.",
      specifications: "Contents: Degreasers, disinfectants, brushes, gloves, microfiber cloths",
      alt: "Industrial cleaning supplies set",
      quantity: 0
    },
    {
      id: 27,
      name: "Odor Control System - 50L",
      category: "cleaning",
      price: 1200,
      image: "/assets/Products/50L-odor-control-system_png.jpg",
      description: "Automated odor control system for waste storage and processing areas.",
      specifications: "Capacity: 50L, Coverage: 500m², Runtime: 30 days, Refillable",
      alt: "Automated odor control system",
      quantity: 0
    },
    {
      id: 28,
      name: "Pest Control Supplies Kit",
      category: "cleaning",
      price: 290,
      image: "/assets/Products/pest_control_supplies_kit.png",
      description: "Pest control supplies for waste management facilities and collection equipment.",
      specifications: "Contents: Traps, baits, repellents, safety equipment, usage instructions",
      alt: "Pest control supplies kit for waste facilities",
      quantity: 0
    }
  ];

  const categories: Category[] = useMemo(() => [
    {
      id: "all",
      name: "All Products",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: "bins",
      name: "Waste Bins",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    {
      id: "safety",
      name: "Safety Equipment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414A1 1 0 0121 12v4a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4-8a2 2 0 114 0m4-8a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: "disposal",
      name: "Disposal Equipment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      )
    },
    {
      id: "recycling",
      name: "Recycling Containers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: "collection",
      name: "Collection Equipment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414A1 1 0 0121 12v4a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4-8a2 2 0 114 0m4-8a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: "specialty",
      name: "Specialty Equipment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: "cleaning",
      name: "Cleaning & Maintenance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
        </svg>
      )
    }
  ], []);

  const filteredProducts = useMemo(() => products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [selectedCategory, searchTerm]);

  const addToCart = useCallback((product: CartItem) => {
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
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, [removeFromCart]);

  const getTotalPrice = useMemo(() => {
    return cart.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);
  }, [cart]);

  const handleQuoteSubmit = useCallback(async (formData: QuoteFormData) => {
    setIsLoading(true);

    const quoteDetails = {
      customer: formData,
      items: cart,
      quoteRequestDate: new Date().toISOString(),
      urgency: formData.urgency,
      organizationType: formData.organizationType,
      preferredContact: formData.preferredContact
    };

    try {
      // Simulate API call - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would integrate with EmailJS or your backend service
      console.log("Quote request submitted:", quoteDetails);

      setOrderSuccess(true);
      setCart([]);
      setShowOrderForm(false);
    } catch (error) {
      console.error("Quote request submission failed:", error);
      alert("Failed to submit quote request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-white shadow-sm py-8">
        {/* Grey overlay for consistency with Home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Waste Management Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional waste management equipment and supplies for healthcare facilities, commercial businesses, and residential complexes.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-12">
        {/* Grey overlay for consistency with Home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-w-4 aspect-h-3 sm:aspect-h-2 md:aspect-h-3 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    crossOrigin="anonymous"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="text-xs text-gray-500 mb-4">
                    <strong>Specifications:</strong> {product.specifications}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Add to Quote Request
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-gray-800">
                Cart ({cart.reduce((total: number, item: CartItem) => total + item.quantity, 0)} items)
              </span>
              <span className="text-sm text-gray-600">
                Request a quote for selected items
              </span>
            </div>
            <button
              onClick={() => setShowOrderForm(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Request a Quote</h2>

              {/* Quote Request Summary */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Selected Products</h3>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 text-red-600 hover:text-red-800"
                          aria-label="Remove item"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-center text-gray-600">
                    <p>A detailed quote will be sent to your email within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Quote Request Form */}
              <QuoteRequestForm onSubmit={handleQuoteSubmit} isLoading={isLoading} />

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setShowOrderForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {orderSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 text-center max-w-md w-full">
            <div className="text-6xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Quote Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your quote request. We'll send a detailed quotation to your email within 24 hours with pricing and delivery information.
            </p>
            <button
              onClick={() => setOrderSuccess(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

// Quote Request Form Component
const QuoteRequestForm = memo(({ onSubmit, isLoading }: { onSubmit: (data: QuoteFormData) => Promise<void>; isLoading: boolean; }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    organizationType: "",
    urgency: "normal",
    additionalRequirements: "",
    preferredContact: "email"
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }, [formData]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  }, [formData, onSubmit]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company/Organization *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-1">
            Organization Type
          </label>
          <select
            id="organizationType"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select type</option>
            <option value="healthcare">Healthcare Facility</option>
            <option value="commercial">Commercial Business</option>
            <option value="industrial">Industrial</option>
            <option value="municipal">Municipal/Government</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
            Urgency Level
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="normal">Normal (2-3 weeks)</option>
            <option value="urgent">Urgent (1 week)</option>
            <option value="rush">Rush (3-5 days)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Requirements
        </label>
        <textarea
          id="additionalRequirements"
          name="additionalRequirements"
          rows={3}
          value={formData.additionalRequirements}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Please specify any additional requirements, delivery preferences, or special considerations"
        />
      </div>

      <div>
        <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Contact Method
        </label>
        <select
          id="preferredContact"
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Submitting Quote Request..." : "Request Quote"}
      </button>
    </form>
  );
});

QuoteRequestForm.displayName = 'QuoteRequestForm';

export default Products;