export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  serves?: string;
  prepTime?: string;
  image: string;
  imagePrompt: string;
}

export const recipes: Recipe[] = [
  {
    id: "chicken-tikiya",
    title: "Chicken Tikiya",
    description: "Savory minced chicken patties, a popular snack often served with Polao or as an afternoon treat.",
    ingredients: [
      "500g minced chicken",
      "1 boiled potato (smashed)",
      "1 small onion (finely chopped)",
      "2 tbsp coriander leaves",
      "1 tsp ginger-garlic paste",
      "1–2 green chilies (optional)",
      "½ tsp turmeric",
      "1 tsp chili powder",
      "1 tsp garam masala",
      "Salt to taste",
      "2 tbsp breadcrumbs",
      "1 egg"
    ],
    instructions: [
      "Mix everything into a soft dough.",
      "Shape into small flat patties (bite-sized is best for events).",
      "Shallow fry on medium heat until golden brown on both sides."
    ],
    image: "https://images.unsplash.com/photo-1599631252119-a9fd18338cf1?w=800",
    imagePrompt: "Crispy golden brown Chicken Tikiya patties on a white plate, garnished with fresh cilantro and onion rings, served with green chutney."
  },
  {
    id: "beef-tikiya",
    title: "Beef Tikiya",
    description: "Hearty minced beef patties with roasted cumin and spices, perfect for festive meals.",
    ingredients: [
      "500g minced beef",
      "1 boiled potato (smashed)",
      "1 onion (finely chopped)",
      "1 tsp ginger-garlic paste",
      "1 tsp roasted cumin powder",
      "1 tsp chili powder",
      "½ tsp black pepper",
      "1 tsp garam masala",
      "Salt to taste",
      "2 tbsp breadcrumbs",
      "1 egg"
    ],
    instructions: [
      "Mix all ingredients well.",
      "Shape into patties.",
      "Fry until browned and fully cooked inside."
    ],
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800",
    imagePrompt: "Deliciously thick Beef Tikiya patties, dark brown crust, moist inside, served with fragrant Polao rice and salad."
  },
  {
    id: "alur-chop",
    title: "Alur Chop (Potato Fritters)",
    description: "A beloved street food and Ramadan staple made of spiced mashed potatoes dipped in gram flour batter.",
    ingredients: [
      "4–5 boiled potatoes (mashed)",
      "1 onion (finely chopped)",
      "1–2 green chilies",
      "½ tsp turmeric",
      "1 tsp chili powder",
      "Salt to taste",
      "Coriander leaves",
      "Gram flour (besan) for batter",
      "Water + pinch of salt for batter"
    ],
    instructions: [
      "Mix potato with spices, onion, chili, and coriander.",
      "Shape into oval-sized balls.",
      "Make a medium-thick batter with gram flour and water.",
      "Dip the potato balls and deep fry until golden and crispy."
    ],
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800",
    imagePrompt: "Street-style Alur Chop (potato fritters), crispy yellow-orange batter, served in a recycled paper bowl, very appetizing."
  },
  {
    id: "chapti",
    title: "Chapti (Savory Pancake)",
    description: "A local specialty from Bikrompur, traditionally enjoyed for breakfast or a light dinner.",
    ingredients: [
      "1 cup rice flour",
      "1 egg",
      "1 small onion (chopped)",
      "Green chili",
      "Coriander leaves",
      "Salt to taste",
      "Water (to make batter)"
    ],
    instructions: [
      "Mix everything into a pourable batter.",
      "Heat a pan and lightly oil it.",
      "Pour a thin layer of batter like a pancake.",
      "Cook both sides until slightly crispy."
    ],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    imagePrompt: "Traditional Chapti pancake on a cast iron pan, thin and crispy edges, visible bits of green chili and coriander, rustic kitchen setting."
  },
  {
    id: "shorshe-ilish",
    title: "Shorshe Ilish (Mustard Hilsa)",
    description: "The crown jewel of Bengali cuisine—national fish Hilsa cooked in a pungent mustard gravy.",
    ingredients: [
      "4-6 pieces of Hilsa (Ilish) fish",
      "2 tbsp mustard seeds (ground to paste)",
      "3-4 green chilies (slitted)",
      "1 tsp turmeric powder",
      "1 tsp nigella seeds (kalo jeera)",
      "3-4 tbsp mustard oil (essential)",
      "Salt to taste"
    ],
    instructions: [
      "Marinate fish with salt and turmeric for 10 minutes.",
      "Heat mustard oil until smoking, then add nigella seeds.",
      "Briefly fry fish pieces on both sides.",
      "Add mustard paste, chilies, and a little warm water.",
      "Simmer covered until fish is tender and gravy is thick."
    ],
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800",
    imagePrompt: "Classic Shorshe Ilish fish curry, silver hilsa pieces in a thick yellow mustard gravy, green chilies on top, served in a traditional clay bowl."
  },
  {
    id: "kacchi-biryani",
    title: "Kacchi Biryani",
    description: "Authentic Dhaka-style biryani where raw mutton and rice are cooked together in 'dum'.",
    ingredients: [
      "1 kg Mutton (large pieces)",
      "3 cups Basmati or Kalijeera rice",
      "1/2 cup yogurt",
      "Ginger-garlic paste",
      "Special Biryani spice mix (cardamom, cinnamon, nutmeg, etc.)",
      "Potatoes (fried golden)",
      "Ghee and Fried onions (Bereshta)"
    ],
    instructions: [
      "Marinate mutton with yogurt and spices for 2 hours.",
      "Layer raw meat at the bottom of a heavy pot, followed by fried potatoes.",
      "Add par-boiled rice (70% cooked) on top.",
      "Seal pot with dough and cook on low heat for 1 hour until meat is tender."
    ],
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800",
    imagePrompt: "Royal Kacchi Biryani served in a large silver 'degh' or plate, tender mutton pieces bursting through fragrant rice, golden potatoes."
  },
  {
    id: "rasmalai",
    title: "Rasmalai (Cumilla Special)",
    description: "A celestial dessert of soft cheese discs soaked in thick, cardamom-flavored milk.",
    ingredients: [
      "1 liter full-fat milk (for chhana)",
      "Lemon juice or vinegar",
      "1 cup sugar (for syrup)",
      "3 cups milk (for malai)",
      "Saffron and Cardamom",
      "Pistachios for garnish"
    ],
    instructions: [
      "Make soft chhana from milk and shape into small discs.",
      "Cook discs in sugar syrup until spongy.",
      "Boil and reduce milk for malai until thick.",
      "Soak the discs in the thickened milk and chill before serving."
    ],
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800",
    imagePrompt: "Cumilla's famous Rasmalai, small white cheese discs in thick creamy milk, garnished with saffron strands and pistachios, served in a traditional bowl."
  },
  {
    id: "bogura-doi",
    title: "Bogura Curd (Sweetened Yogurt)",
    description: "A world-famous dense, caramelized sweet yogurt traditionally set in clay pots.",
    ingredients: [
      "1 liter full-fat milk",
      "1/2 cup sugar (caramelized)",
      "2 tbsp yogurt starter",
      "Clay pot (traditional)"
    ],
    instructions: [
      "Reduce milk by one-third on low heat.",
      "Add caramelized sugar for flavor and color.",
      "Cool to lukewarm and whisk in the starter.",
      "Pour into a clay pot and let set in a warm place for 8-12 hours."
    ],
    image: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?w=800",
    imagePrompt: "Bogura's famous Sweet Curd (Doi) in a rustic clay pot, dense and creamy texture, deep brownish-orange color, perfectly set."
  }
];
