export const products = [
  // Waste Bins & Containers
  {
    id: 1,
    name: "240L Wheelie Bin - General Waste",
    category: "bins",
    price: 1250,
    image: `${process.env.PUBLIC_URL}/assets/Products/240l-red-general-waste-recycling-trash-wheelie-bin-whandle_wheels.png`,
    description: "Durable 240L wheelie bin for general waste collection. Made from high-density polyethylene with reinforced wheels.",
    specifications: "Capacity: 240L, Material: HDPE, Color: Green, Wheels: 200mm",
    alt: "240L wheelie bin for general waste collection"
  },
  {
    id: 2,
    name: "120L Recycling Bin - Multi-Compartment",
    category: "bins",
    price: 850,
    image: `${process.env.PUBLIC_URL}/assets/Products/120L_recycling_bin.png`,
    description: "Multi-compartment recycling bin for paper, plastic, and glass separation. Ideal for offices and residential complexes.",
    specifications: "Capacity: 120L, Compartments: 3, Material: Plastic, Color: Blue/Green/White",
    alt: "Multi-compartment recycling bin for waste separation"
  },
  {
    id: 3,
    name: "Medical Waste Container - 20L",
    category: "bins",
    price: 450,
    image: `${process.env.PUBLIC_URL}/assets/Products/20L_sharps_medical_waste_container.jpg`,
    description: "Sharps and medical waste container with biohazard labeling. SANS compliant for healthcare facilities.",
    specifications: "Capacity: 20L, Material: Puncture-resistant plastic, Color: Red, SANS Approved",
    alt: "Medical waste container for healthcare facilities"
  },
  {
    id: 4,
    name: "Industrial Waste Skip - 6m³",
    category: "bins",
    price: 8500,
    image: `${process.env.PUBLIC_URL}/assets/Products/6m_large_industrial_waste_skip.png`,
    description: "Large industrial waste skip for construction and commercial waste. Heavy-duty construction with lifting points.",
    specifications: "Capacity: 6m³, Material: Steel, Color: Orange, Weight: 450kg",
    alt: "Industrial waste skip for construction sites"
  },

  // Safety Equipment
  {
    id: 5,
    name: "Nitrile Safety Gloves - Box of 100",
    category: "safety",
    price: 280,
    image: `${process.env.PUBLIC_URL}/assets/Products/Nitrile_safety_gloves.png`,
    description: "Disposable nitrile examination gloves. Powder-free, ambidextrous design for medical and general use.",
    specifications: "Material: Nitrile, Size: Medium, Quantity: 100 pairs, Powder-free, CE Certified",
    alt: "Nitrile safety gloves for medical and general use"
  },
  {
    id: 6,
    name: "Safety Goggles - Anti-Fog",
    category: "safety",
    price: 95,
    image: `${process.env.PUBLIC_URL}/assets/Products/safety_glasses.jpg`,
    description: "Anti-fog safety goggles with adjustable strap. Provides eye protection during waste handling operations.",
    specifications: "Material: Polycarbonate, Anti-fog coating, Adjustable strap, EN166 Certified",
    alt: "Anti-fog safety goggles for eye protection"
  },
  {
    id: 7,
    name: "Disposable Coveralls - Type 5/6",
    category: "safety",
    price: 150,
    image: `${process.env.PUBLIC_URL}/assets/Products/disposable_coveralls.png`,
    description: "Type 5/6 disposable coveralls for protection against hazardous substances. Ideal for waste handling.",
    specifications: "Material: SMS Fabric, Size: Large, Protection: Type 5/6, Quantity: 1 piece",
    alt: "Disposable coveralls for hazardous waste handling"
  },
  {
    id: 8,
    name: "Respirator Mask - N95",
    category: "safety",
    price: 65,
    image: `${process.env.PUBLIC_URL}/assets/Products/mask_n95.png`,
    description: "N95 respirator mask for protection against airborne particles during waste processing.",
    specifications: "Type: N95, Material: Non-woven fabric, Adjustable straps, Nose clip included",
    alt: "N95 respirator mask for airborne particle protection"
  },

  // Disposal Equipment
  {
    id: 9,
    name: "Sharps Disposal Container - 5L",
    category: "disposal",
    price: 85,
    image: `${process.env.PUBLIC_URL}/assets/Products/5l_sharps_container.jpg`,
    description: "Puncture-resistant sharps container for safe disposal of needles and medical sharps.",
    specifications: "Capacity: 5L, Material: Plastic, Color: Yellow, Locking lid, Biohazard labeled",
    alt: "Sharps disposal container for medical waste"
  },
  {
    id: 10,
    name: "Pharmaceutical Waste Container - 10L",
    category: "disposal",
    price: 120,
    image: `${process.env.PUBLIC_URL}/assets/Products/pharmaceutical_waste_container.png`,
    description: "Secure pharmaceutical waste container with child-resistant and tamper-evident features.",
    specifications: "Capacity: 10L, Material: HDPE, Color: White, Child-resistant, Tamper-evident",
    alt: "Pharmaceutical waste container with security features"
  },
  {
    id: 11,
    name: "Hazardous Waste Drum - 200L",
    category: "disposal",
    price: 650,
    image: `${process.env.PUBLIC_URL}/assets/Products/200l_waste_drums.png`,
    description: "UN certified hazardous waste drum for chemical and toxic waste storage and transport.",
    specifications: "Capacity: 200L, Material: Steel, UN Certified, Color: Yellow, Bung openings: 2\"",
    alt: "Hazardous waste drum for chemical storage"
  },
  {
    id: 12,
    name: "Document Shredding Bags - Pack of 50",
    category: "disposal",
    price: 180,
    image: `${process.env.PUBLIC_URL}/assets/Products/Confidential-Document-Bag-Shopify.png`,
    description: "Security document shredding bags for confidential waste. Cross-cut shredding capability.",
    specifications: "Capacity: 50 bags, Security Level: P-4, Material: Plastic, Size: A4 compatible",
    alt: "Document shredding bags for confidential waste"
  },

  // Recycling Containers
  {
    id: 13,
    name: "Plastic Recycling Bin - 240L",
    category: "recycling",
    price: 1100,
    image: `${process.env.PUBLIC_URL}/assets/Products/240l-red-general-waste-recycling-trash-wheelie-bin-whandle_wheels.png`,
    description: "Dedicated plastic recycling container with clear labeling and weather-resistant design.",
    specifications: "Capacity: 240L, Material: HDPE, Color: Blue, Weather-resistant, Recycling labeled",
    alt: "Plastic recycling bin with weather-resistant design"
  },
  {
    id: 14,
    name: "Glass Recycling Container - 120L",
    category: "recycling",
    price: 750,
    image: `${process.env.PUBLIC_URL}/assets/Products/120L_glass_waste_container.png`,
    description: "Specialized glass recycling container with reinforced base to prevent breakage.",
    specifications: "Capacity: 120L, Material: Plastic, Color: Green, Reinforced base, Glass labeled",
    alt: "Glass recycling container with reinforced base"
  },
  {
    id: 15,
    name: "Paper Recycling Station - 360L",
    category: "recycling",
    price: 1450,
    image: `${process.env.PUBLIC_URL}/assets/Products/360L_recycling_station.jpg`,
    description: "Multi-compartment paper recycling station for different paper types and confidential documents.",
    specifications: "Capacity: 360L, Compartments: 2, Material: Plastic, Color: White, Lockable",
    alt: "Paper recycling station with multiple compartments"
  },
  {
    id: 16,
    name: "Organic Waste Bin - 80L",
    category: "recycling",
    price: 420,
    image: `${process.env.PUBLIC_URL}/assets/Products/80L_organic_waste_bin.png`,
    description: "Compostable organic waste container with carbon filter to control odors.",
    specifications: "Capacity: 80L, Material: Plastic, Color: Brown, Carbon filter, Compost labeled",
    alt: "Organic waste bin with odor control"
  },

  // Collection Equipment
  {
    id: 17,
    name: "Heavy-Duty Waste Sack - 100L",
    category: "collection",
    price: 25,
    image: `${process.env.PUBLIC_URL}/assets/Products/Heavy_duty_waste_Sack.png`,
    description: "Heavy-duty waste collection sacks with reinforced seams and handles.",
    specifications: "Capacity: 100L, Material: HDPE, Thickness: 50 micron, Quantity: 1 sack",
    alt: "Heavy-duty waste collection sack"
  },
  {
    id: 18,
    name: "Trolley Collection System",
    category: "collection",
    price: 2850,
    image: `${process.env.PUBLIC_URL}/assets/Products/mobile_waste_trolly.png`,
    description: "Mobile waste collection trolley system for efficient multi-bin collection.",
    specifications: "Capacity: 4 x 120L bins, Material: Steel, Wheels: 150mm, Handle height: Adjustable",
    alt: "Mobile waste collection trolley system"
  },
  {
    id: 19,
    name: "Lifting Equipment - Hydraulic Bin Lifter",
    category: "collection",
    price: 12500,
    image: `${process.env.PUBLIC_URL}/assets/Products/hydraulic_bin_lifter.png`,
    description: "Hydraulic bin lifting equipment for safe and efficient waste collection operations.",
    specifications: "Lift capacity: 300kg, Power: Hydraulic, Controls: Manual, Safety features: Auto-lock",
    alt: "Hydraulic bin lifting equipment for waste collection"
  }
];