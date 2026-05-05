export const groceryItems = [
  { id: 101, name: 'Fresh Milk 1L',     price: 28,  category: 'grocery', image: 'https://www.tirumalamilk.com/images/prodcuts/milks/tm_new.png', desc: 'Farm fresh full cream milk',       unit: '1 Litre', tag: 'Fresh' },
  { id: 102, name: 'Organic Tomatoes',  price: 45,  category: 'grocery', image: 'https://freepngimg.com/save/17357-tomato-high-quality-png/330x330', desc: 'Vine-ripened organic tomatoes',    unit: '500g',    tag: 'Organic' },
  { id: 103, name: 'Brown Eggs',        price: 80,  category: 'grocery', image: 'https://png.pngtree.com/png-vector/20250606/ourmid/pngtree-chicken-eggs-isolated-on-transparent-background-png-image_16464753.png', desc: 'Free-range farm eggs',            unit: '12 pcs',  tag: 'Popular' },
  { id: 104, name: 'Basmati Rice',      price: 189, category: 'grocery', image: 'https://png.pngtree.com/png-clipart/20240212/original/pngtree-white-basmati-rice-png-image_14291375.png', desc: 'Premium aged basmati rice',       unit: '1 kg',    tag: null },
  { id: 105, name: 'Whole Wheat Bread', price: 55,  category: 'grocery', image: 'https://png.pngtree.com/png-clipart/20230929/original/pngtree-whole-wheat-bread-cutout-png-file-png-image_13018044.png', desc: 'Freshly baked whole wheat',       unit: '400g',    tag: null },
  { id: 106, name: 'Greek Yogurt',      price: 89,  category: 'grocery', image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/17/0d351d02-7e7a-40c0-b600-6f9048b54094_7BXZQMWFVT_MN_16122025.png', desc: 'Thick creamy Greek yogurt',       unit: '200g',    tag: 'Healthy' },
  { id: 107, name: 'Baby Spinach',      price: 49,  category: 'grocery', image: 'https://png.pngtree.com/png-clipart/20240314/original/pngtree-baby-spinach-leaves-transparent-background-png-image_14593061.png', desc: 'Tender baby spinach leaves',      unit: '200g',    tag: 'Fresh' },
  { id: 108, name: 'Cheddar Cheese',    price: 149, category: 'grocery', image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/11/15/cbeb4fbe-4a5a-40b9-be6b-5d107481d39d_45998_1.png', desc: 'Aged sharp cheddar cheese',       unit: '200g',    tag: null },
  { id: 109, name: 'Alphonso Mangoes',  price: 249, category: 'grocery', image: 'https://png.pngtree.com/png-clipart/20250502/original/pngtree-background-alphonso-mango-png-image_20931549.png', desc: 'Sweet Ratnagiri alphonso',          unit: '6 pcs',   tag: 'Seasonal' },
  { id: 110, name: 'Coconut Water',     price: 79,  category: 'grocery', image: 'https://png.pngtree.com/png-clipart/20240826/original/pngtree-refreshing-coconut-water-in-a-green-png-image_15850077.png', desc: 'Natural tender coconut water',      unit: '1 Litre', tag: 'Natural' },
  { id: 111, name: 'Almonds',           price: 299, category: 'grocery', image: 'https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-a-bowl-of-almond-nuts-png-image_9947827.png', desc: 'California premium almonds',      unit: '250g',    tag: 'Healthy' },
  { id: 112, name: 'Amul Butter',       price: 58,  category: 'grocery', image: 'https://www.cpdubai.com/wp-content/uploads/2018/11/500butter.png', desc: 'Pasteurised salted butter',       unit: '100g',    tag: 'Bestseller' },
]

export const restaurants = [
  {
    id: 'r1',
    name: 'SS Hydrabad Biryani',
    cuisine: 'South Indian • Hyderabadi',
    rating: 4.6,
    time: '30–40 min',
    minOrder: 199,
    offer: '20% OFF up to ₹100',
    cover: 'https://www.sshyderabadbiryani.com/img/outlet-img/Perambur%20copy.jpg',
    tags: ['Bestseller', 'Pure Veg Available'],
    menu: [
      {
        category: 'Non-Veg Mains',
        type: 'non-veg',
        items: [
          { id: 209, name: 'Butter Chicken',      price: 319, image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/sjb3egvfy8md4vhih3dl', desc: 'Succulent chicken in a buttery, mildly spiced tomato cream sauce', rating: 4.9, tag: 'Bestseller' },
          { id: 210, name: 'Mutton Biryani',   price: 369, image: 'https://www.sshyderabadbiryani.com/img/welcome-rt.png', desc: 'Slow-cooked Kashmiri mutton curry with aromatic whole spices', rating: 4.7, tag: 'Spicy' },
          { id: 211, name: 'Chicken Biryani',       price: 329, image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/qyxpo2m2q8kbku3rpfsi', desc: 'Tender chicken in a mild, nutty and fragrant Mughlai gravy', rating: 4.5, tag: null },
        ]
      },
      {
        category: 'Non-Veg Starters',
        type: 'non-veg',
        items: [
          { id: 204, name: 'Chicken Tikka',       price: 299, image: 'https://www.eitanbernath.com/wp-content/uploads/2020/10/Chicken-Tikka-LOW-RES-1-819x1024.jpg', desc: 'Boneless chicken chunks marinated in tandoori masala, grilled to perfection', rating: 4.8, tag: 'Bestseller' },
          { id: 205, name: 'Mutton Seekh Kebab',  price: 349, image: 'https://static.toiimg.com/thumb/58360750.cms?imgsize=347996&width=800&height=800', desc: 'Minced mutton mixed with herbs and spices, cooked in tandoor', rating: 4.7, tag: 'Spicy' },
        ]
      },
    ]
  },
  {
    id: 'r2',
    name: 'A2B',
    cuisine: 'South Indian • Tamil',
    rating: 4.4,
    time: '20–30 min',
    minOrder: 149,
    offer: 'Free delivery above ₹299',
    cover: 'https://imagesvs.oneindia.com/ta/img/2023/10/screenshot24122-down-1698123529.jpg',
    tags: ['Pure Veg', 'Trending'],
    menu: [
      {
        category: 'Dosas',
        type: 'veg',
        items: [
          { id: 301, name: 'Masala Dosa',         price: 149, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80', desc: 'Crispy golden crepe stuffed with spiced potato masala, served with sambar & 3 chutneys', rating: 4.7, tag: 'Bestseller' },
          { id: 302, name: 'Onion Rava Dosa',     price: 159, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80', desc: 'Lacy semolina crepe with caramelised onions and green chillies', rating: 4.5, tag: null },
          { id: 303, name: 'Cheese Dosa',         price: 179, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=400&q=80', desc: 'Classic dosa loaded with melted cheese and butter', rating: 4.3, tag: 'Kids Fav' },
          { id: 304, name: 'Mysore Masala Dosa',  price: 169, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', desc: 'Dosa smeared with spicy red chutney and filled with potato masala', rating: 4.6, tag: 'Spicy' },
        ]
      },
      {
        category: 'Idli & Vada',
        type: 'veg',
        items: [
          { id: 305, name: 'Idli Sambar (3 pcs)', price: 99,  image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&q=80', desc: 'Fluffy steamed rice cakes served with tangy sambar and coconut chutney', rating: 4.6, tag: null },
          { id: 306, name: 'Medu Vada (2 pcs)',   price: 89,  image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80', desc: 'Crispy lentil doughnuts with sambar and fresh coconut chutney', rating: 4.5, tag: 'Crispy' },
        ]
      },
      {
        category: 'Rice & Curries',
        type: 'veg',
        items: [
          { id: 307, name: 'Curd Rice',           price: 119, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80', desc: 'Comforting soft rice mixed with fresh curd and tempered with mustard and curry leaves', rating: 4.4, tag: null },
          { id: 308, name: 'Lemon Rice',          price: 129, image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80', desc: 'Tangy turmeric-tinted rice with roasted peanuts and curry leaves', rating: 4.3, tag: null },
        ]
      },
    ]
  },
  {
    id: 'r3',
    name: 'Arcot Biryani',
    cuisine: 'South Indian • Mughlai',
    rating: 4.8,
    time: '35–45 min',
    minOrder: 249,
    offer: '₹75 OFF on first order',
    cover: 'https://content.jdmagicbox.com/v2/comp/chennai/e5/044pxx44.xx44.181214112242.z6e5/catalogue/arcot-briyani-chennai-tefe9vext2.jpg',
    tags: ["Chef's Special", 'Trending'],
    menu: [
      {
        category: 'Veg Biryani',
        type: 'veg',
        items: [
          { id: 401, name: 'Veg Dum Biryani',     price: 279, image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96debb?w=400&q=80', desc: 'Fragrant basmati rice slow-cooked with seasonal vegetables and whole spices under dum', rating: 4.5, tag: null },
          { id: 402, name: 'Paneer Biryani',      price: 299, image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80', desc: 'Rich saffron rice layered with spiced paneer and caramelised onions', rating: 4.6, tag: 'Popular' },
          { id: 403, name: 'Mushroom Biryani',    price: 269, image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80', desc: 'Earthy mushrooms cooked with basmati, saffron and fried onions', rating: 4.4, tag: null },
        ]
      },
      {
        category: 'Non-Veg Biryani',
        type: 'non-veg',
        items: [
          { id: 404, name: 'Chicken Dum Biryani', price: 349, image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80', desc: 'Authentic Hyderabadi biryani with tender chicken marinated in 22 spices, cooked on dum', rating: 4.9, tag: 'Bestseller' },
          { id: 405, name: 'Mutton Biryani',      price: 429, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80', desc: 'Slow-cooked succulent mutton with aged basmati rice, saffron and crispy onions', rating: 4.9, tag: "Chef's Pick" },
          { id: 406, name: 'Egg Biryani',         price: 249, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80', desc: 'Flavourful biryani with whole boiled eggs and aromatic spices', rating: 4.5, tag: null },
          { id: 407, name: 'Prawn Biryani',       price: 399, image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&q=80', desc: 'Juicy tiger prawns cooked with basmati in a coastal spice blend', rating: 4.7, tag: 'Spicy' },
        ]
      },
      {
        category: 'Sides & Extras',
        type: 'veg',
        items: [
          { id: 408, name: 'Mirchi Ka Salan',     price: 99,  image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80', desc: 'Classic Hyderabadi green chilli curry with peanut and sesame gravy', rating: 4.6, tag: null },
          { id: 409, name: 'Raita',               price: 59,  image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80', desc: 'Cool whipped yogurt with boondi and mild spices', rating: 4.5, tag: null },
        ]
      },
    ]
  },
  {
    id: 'r4',
    name: "Domino's Pizza",
    cuisine: 'Italian • Continental',
    rating: 4.3,
    time: '25–35 min',
    minOrder: 199,
    offer: 'Buy 1 Get 1 on weekends',
    cover: 'https://www.shutterstock.com/image-photo/illuminated-dominos-pizza-storefront-sign-600nw-2738487055.jpg',
    tags: ['Veg Available', 'Party Orders'],
    menu: [
      {
        category: 'Veg Pizzas',
        type: 'veg',
        items: [
          { id: 501, name: 'Margherita',          price: 249, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', desc: 'Classic Italian pizza with San Marzano tomato sauce, fresh mozzarella and basil', rating: 4.4, tag: null },
          { id: 502, name: 'Paneer Makhani Pizza',price: 299, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', desc: 'Indian fusion pizza with paneer, makhani sauce and bell peppers', rating: 4.6, tag: 'Bestseller' },
          { id: 503, name: 'Farmhouse',           price: 279, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80', desc: 'Loaded with capsicum, onion, tomato, mushroom on a herby tomato base', rating: 4.4, tag: null },
        ]
      },
      {
        category: 'Non-Veg Pizzas',
        type: 'non-veg',
        items: [
          { id: 504, name: 'Chicken BBQ',         price: 329, image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400&q=80', desc: 'Smoky BBQ chicken with caramelised onions and cheddar on a tangy BBQ base', rating: 4.7, tag: 'Popular' },
          { id: 505, name: 'Pepperoni',            price: 349, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80', desc: 'Classic pepperoni with mozzarella, extra cheese and oregano', rating: 4.8, tag: 'Bestseller' },
          { id: 506, name: 'Chicken Keema Pizza', price: 319, image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80', desc: 'Spiced chicken mince with onions, chillies and melted mozzarella', rating: 4.5, tag: 'Spicy' },
        ]
      },
      {
        category: 'Sides',
        type: 'veg',
        items: [
          { id: 507, name: 'Garlic Bread',        price: 99,  image: 'https://images.unsplash.com/photo-1619985632461-f33748ef4b79?w=400&q=80', desc: 'Toasted baguette with garlic butter and herbs', rating: 4.6, tag: null },
          { id: 508, name: 'Pasta Arrabbiata',    price: 199, image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80', desc: 'Penne in a fiery tomato and garlic sauce', rating: 4.3, tag: 'Spicy' },
        ]
      },
    ]
  },
  {
    id: 'r5',
    name: 'Bilal',
    cuisine: 'Street Food • Chaat • Snacks',
    rating: 4.5,
    time: '15–25 min',
    minOrder: 99,
    offer: 'Free drink on orders above ₹199',
    cover: 'https://i.ytimg.com/vi/yKWYDR84n3I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHjVi9F9a48953rogRKJRH0NtPzA',
    tags: ['Quick Bites', 'Trending'],
    menu: [
      {
        category: 'Chaat & Snacks',
        type: 'veg',
        items: [
          { id: 601, name: 'Pani Puri (6 pcs)',   price: 79,  image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80', desc: 'Crispy hollow puris filled with spiced potato and tangy tamarind pani', rating: 4.8, tag: 'Bestseller' },
          { id: 602, name: 'Pav Bhaji',           price: 149, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80', desc: 'Mumbai-style spiced mashed vegetable curry served with buttered pav', rating: 4.7, tag: 'Popular' },
          { id: 603, name: 'Chole Bhature',       price: 169, image: 'https://images.unsplash.com/photo-1626132647523-66c4be16c0cb?w=400&q=80', desc: 'Spicy Punjabi chickpea curry with fluffy deep-fried bread', rating: 4.6, tag: null },
          { id: 604, name: 'Aloo Tikki Chaat',    price: 99,  image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80', desc: 'Crispy potato patties topped with yogurt, tamarind and green chutney', rating: 4.5, tag: null },
        ]
      },
      {
        category: 'Non-Veg Bites',
        type: 'non-veg',
        items: [
          { id: 605, name: 'Egg Roll',            price: 99,  image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', desc: 'Flaky paratha wrapped with egg, onions, chutney and a squeeze of lemon', rating: 4.6, tag: 'Popular' },
          { id: 606, name: 'Chicken Roll',        price: 139, image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&q=80', desc: 'Juicy chicken tikka wrapped in a soft paratha with onions and chutney', rating: 4.7, tag: 'Bestseller' },
        ]
      },
      {
        category: 'Drinks',
        type: 'veg',
        items: [
          { id: 607, name: 'Mango Lassi',         price: 89,  image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', desc: 'Thick chilled yogurt drink blended with sweet Alphonso mangoes', rating: 4.8, tag: null },
          { id: 608, name: 'Masala Chai',         price: 49,  image: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?w=400&q=80', desc: 'Freshly brewed spiced tea with ginger, cardamom and cinnamon', rating: 4.9, tag: 'Hot' },
        ]
      },
    ]
  },
]

export const cities = [
  { name: 'Mumbai',    emoji: '🌆', state: 'Maharashtra' },
  { name: 'Delhi',     emoji: '🏛️', state: 'Delhi' },
  { name: 'Bangalore', emoji: '🌿', state: 'Karnataka' },
  { name: 'Chennai',   emoji: '🌊', state: 'Tamil Nadu' },
  { name: 'Hyderabad', emoji: '💎', state: 'Telangana' },
  { name: 'Kolkata',   emoji: '🎭', state: 'West Bengal' },
  { name: 'Pune',      emoji: '📚', state: 'Maharashtra' },
  { name: 'Ahmedabad', emoji: '🏺', state: 'Gujarat' },
  { name: 'Jaipur',    emoji: '🕌', state: 'Rajasthan' },
  { name: 'Surat',     emoji: '💫', state: 'Gujarat' },
  { name: 'Lucknow',   emoji: '🌹', state: 'Uttar Pradesh' },
  { name: 'Kochi',     emoji: '🌴', state: 'Kerala' },
]
