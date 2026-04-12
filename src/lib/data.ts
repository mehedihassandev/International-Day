export interface Fact {
  id: string;
  emoji: string;
  title: string;
  content: string;
}

export interface Recipe {
  id: string;
  emoji: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

export const FACTS: Fact[] = [
  {
    id: '1',
    emoji: '🌸',
    title: 'Pohela Boishakh',
    content: 'The Bengali New Year, celebrated on April 14, marks a fresh start with vibrant celebrations, traditional food, music, and clothing. People wear red and white, join fairs, and welcome the year with positivity and unity.'
  },
  {
    id: '2',
    emoji: '🎭',
    title: 'Mangal Shobhajatra',
    content: 'A colorful public procession held on Pohela Boishakh, recognized by UNESCO as an Intangible Cultural Heritage. It symbolizes resistance against oppression and celebrates freedom, culture, and collective identity.'
  },
  {
    id: '3',
    emoji: '🌾',
    title: 'Land of Rivers',
    content: 'Bangladesh is often called the “Land of Rivers,” with more than 700 rivers flowing across the country. These rivers shape its geography, agriculture, lifestyle, and even its culture and poetry.'
  },
  {
    id: '4',
    emoji: '🐅',
    title: 'Royal Bengal Tiger',
    content: 'The national animal of Bangladesh, found in the Sundarbans mangrove forest—the largest of its kind in the world. It represents strength, beauty, and the rich biodiversity of the country.'
  },
  {
    id: '5',
    emoji: '🌿',
    title: 'Sundarbans',
    content: 'A UNESCO World Heritage Site and the largest mangrove forest on Earth. It is home to unique wildlife and plays a crucial role in protecting coastal areas from natural disasters.'
  },
  {
    id: '6',
    emoji: '🗣️',
    title: 'Language Movement',
    content: 'A historic movement where people sacrificed their lives to preserve their mother tongue, Bengali. This event led to the recognition of International Mother Language Day on February 21.'
  },
  {
    id: '7',
    emoji: '🏖️',
    title: 'Cox’s Bazar',
    content: 'Known as the longest natural sea beach in the world, stretching over 120 km. It is one of the most popular tourist destinations in Bangladesh.'
  },
  {
    id: '8',
    emoji: '🎶',
    title: 'Rabindranath Tagore',
    content: 'A Nobel Prize-winning poet, writer, and composer who deeply influenced Bengali culture. He wrote the national anthem of Bangladesh and contributed significantly to literature and music.'
  },
  {
    id: '9',
    emoji: '🕌',
    title: 'Cultural Diversity',
    content: 'Bangladesh is home to a diverse mix of religions, ethnic groups, and traditions. Despite differences, people coexist peacefully, celebrating festivals together with a strong sense of community.'
  },
  {
    id: '10',
    emoji: '🍛',
    title: 'Traditional Food',
    content: 'Bangladeshi cuisine is rich in spices and flavors, with rice as the staple food. Popular dishes include fish curries, biryani, and street foods like fuchka and chotpoti.'
  },
  {
    id: '11',
    emoji: '👗',
    title: 'Traditional Clothing',
    content: 'Traditional attire reflects cultural identity—saree for women and panjabi or kurta for men. Red and white sarees are especially popular during festivals like Pohela Boishakh.'
  },
  {
    id: '12',
    emoji: '🎨',
    title: 'Rickshaw Art',
    content: 'Colorfully decorated rickshaws are a unique artistic expression in Bangladesh. These hand-painted designs often depict movies, nature, and social messages.'
  },
  {
    id: '13',
    emoji: '🏞️',
    title: 'Indigenous Peoples of Bangladesh',
    content: 'Bangladesh is home to more than 50 indigenous ethnic groups, mainly living in the Chittagong Hill Tracts and northern regions. Each community has its own language, clothing, festivals, and traditions, contributing to the country’s rich cultural diversity.'
  },
  {
    id: '14',
    emoji: '🎉',
    title: 'Biju Festival',
    content: 'Biju is the traditional New Year festival of the Chakma community. It is celebrated with flower offerings, traditional food, music, and rituals that reflect harmony with nature.'
  },
  {
    id: '15',
    emoji: '🧵',
    title: 'Indigenous Handloom & Weaving',
    content: 'Many indigenous communities in Bangladesh produce beautiful handwoven fabrics using traditional techniques passed down through generations. These textiles are colorful, symbolic, and deeply connected to identity.'
  },
  {
    id: '16',
    emoji: '🏔️',
    title: 'Chittagong Hill Tracts',
    content: 'A hilly region in southeastern Bangladesh, home to several indigenous communities like Chakma, Marma, and Tripura. The area is known for its natural beauty, unique culture, and different lifestyle compared to the plains.'
  },
  {
    id: '17',
    emoji: '🥁',
    title: 'Indigenous Music & Dance',
    content: 'Indigenous communities express their identity through music and dance, often using traditional instruments and rhythms inspired by nature, seasons, and daily life.'
  },
  {
    id: '18',
    emoji: '🍲',
    title: 'Indigenous Cuisine',
    content: 'Traditional foods of indigenous communities are often simple, healthy, and locally sourced. Bamboo shoots, vegetables, and unique preparation styles make their cuisine distinct from mainstream Bangladeshi food.'
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'r1',
    emoji: '🍗',
    title: 'Chicken Tikiya',
    description: 'A popular snack often served with Polao or as an afternoon guest treat.',
    ingredients: [
      '500g minced chicken',
      '1 boiled potato (smashed)',
      '1 small onion (finely chopped)',
      '2 tbsp coriander leaves',
      '1 tsp ginger-garlic paste',
      '1–2 green chilies (optional)',
      '½ tsp turmeric',
      '1 tsp chili powder',
      '1 tsp garam masala',
      'Salt to taste',
      '2 tbsp breadcrumbs',
      '1 egg'
    ],
    instructions: [
      'Mix everything into a soft dough.',
      'Shape into small flat patties (bite-sized is best for events).',
      'Shallow fry on medium heat until golden brown on both sides.'
    ]
  },
  {
    id: 'r2',
    emoji: '🥩',
    title: 'Beef Tikiya',
    description: 'A rich and savory snack popular at festivals and afternoon gatherings.',
    ingredients: [
      '500g minced beef',
      '1 boiled potato (smashed)',
      '1 onion (finely chopped)',
      '1 tsp ginger-garlic paste',
      '1 tsp roasted cumin powder',
      '1 tsp chili powder',
      '½ tsp black pepper',
      '1 tsp garam masala',
      'Salt to taste',
      '2 tbsp breadcrumbs',
      '1 egg'
    ],
    instructions: [
      'Mix all ingredients well.',
      'Shape into patties.',
      'Fry until browned and fully cooked inside.'
    ]
  },
  {
    id: 'r3',
    emoji: '🥔',
    title: 'Alur Chop (Potato Fritters)',
    description: 'A very popular item in Ramadan after breaking the fast, or as a light snack.',
    ingredients: [
      '4–5 boiled potatoes (mashed)',
      '1 onion (finely chopped)',
      '1–2 green chilies',
      '½ tsp turmeric',
      '1 tsp chili powder',
      'Salt to taste',
      'Coriander leaves',
      'Gram flour (besan) for batter',
      'Water + pinch of salt'
    ],
    instructions: [
      'Mix potato with spices, onion, chili, coriander.',
      'Shape into oval balls.',
      'Make a medium-thick batter with gram flour.',
      'Dip and deep fry until golden.'
    ]
  },
  {
    id: 'r4',
    emoji: '🫓',
    title: 'Chapti (Savory Pancake)',
    description: 'A local dish from Bikrompur, usually enjoyed for breakfast or light dinner.',
    ingredients: [
      '1 cup rice flour',
      '1 egg',
      '1 small onion (chopped)',
      'Green chili',
      'Coriander leaves',
      'Salt to taste',
      'Water (to make batter)'
    ],
    instructions: [
      'Mix everything into a pourable batter.',
      'Heat pan, lightly oil it.',
      'Pour thin layer like pancake.',
      'Cook both sides until slightly crispy.'
    ]
  }
];