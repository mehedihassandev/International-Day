export interface Fact {
  id: string;
  title: string;
  description: string;
  details: string;
  category: "Culture" | "History" | "Nature" | "Art" | "GI Product";
  image: string;
  imagePrompt: string;
}

export const facts: Fact[] = [
  {
    id: "pohela-boishakh",
    title: "Pohela Boishakh",
    description: "The Bengali New Year, celebrated on April 14, signifies a fresh start with vibrant colors and unity.",
    details: "The Bengali New Year marks a fresh start with vibrant celebrations, traditional food, music, and clothing. People wear red and white, join fairs, and welcome the year with positivity and unity. It is a symbol of cultural identity that transcends religious boundaries.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1620950348740-1afc4071ec26?w=800",
    imagePrompt: "Vibrant celebration of Pohela Boishakh in Bangladesh, people wearing traditional red and white clothing, colorful processions, festive atmosphere, folk art style."
  },
  {
    id: "mangal-shobhajatra",
    title: "Mangal Shobhajatra",
    description: "A colorful UNESCO-recognized procession symbolizing resilience and freedom.",
    details: "A colorful public procession held on Pohela Boishakh, recognized by UNESCO as an Intangible Cultural Heritage. It symbolizes resistance against oppression and celebrates freedom, culture, and collective identity through massive masks and floats.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?w=800",
    imagePrompt: "UNESCO recognized Mangal Shobhajatra procession, large artistic masks and animal floats, vibrant colors, crowds of people celebrating Bengali culture."
  },
  {
    id: "land-of-rivers",
    title: "Land of Rivers",
    description: "Home to over 700 rivers that shape the life and poetry of the nation.",
    details: "Bangladesh is often called the 'Land of Rivers,' with more than 700 rivers flowing across the country. These rivers shape its geography, agriculture, lifestyle, and even its culture and poetry. The majestic Padma, Meghna, and Jamuna are among the largest.",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1629853965565-3855ff4314cb?w=800",
    imagePrompt: "Aerial view of a majestic river delta in Bangladesh, lush green landscapes, small boats sailing on winding rivers, sunset reflections."
  },
  {
    id: "royal-bengal-tiger",
    title: "Royal Bengal Tiger",
    description: "The national animal and a symbol of strength, found in the Sundarbans.",
    details: "The national animal of Bangladesh, found in the Sundarbans mangrove forest—the largest of its kind in the world. It represents strength, beauty, and the rich biodiversity of the country. Bangladesh is home to a significant population of these majestic predators.",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1542475997-5a021d743a67?w=800",
    imagePrompt: "Royal Bengal Tiger in the Sundarbans mangrove forest, majestic predator stalking through the water and trees, cinematic lighting, high detail."
  },
  {
    id: "sundarbans",
    title: "Sundarbans",
    description: "The world's largest mangrove forest and a UNESCO World Heritage Site.",
    details: "A UNESCO World Heritage Site and the largest mangrove forest on Earth. It is home to unique wildlife like the Bengal Tiger and Spotted Deer, and plays a crucial role in protecting coastal areas from natural disasters like cyclones.",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1563831862140-5e354924c5bb?w=800",
    imagePrompt: "Dense Sundarbans mangrove forest, aerial shot showing the intricate network of water channels and thick canopy, morning mist."
  },
  {
    id: "language-movement",
    title: "Language Movement",
    description: "A historic sacrifice to preserve the mother tongue, Bengali.",
    details: "A historic movement in 1952 where people sacrificed their lives to preserve their mother tongue, Bengali. This event led to the recognition of International Mother Language Day on February 21 by UNESCO, celebrating linguistic diversity worldwide.",
    category: "History",
    image: "https://images.unsplash.com/photo-1588661601614-232d30d1b46a?w=800",
    imagePrompt: "Shaheed Minar monument in Dhaka, floral tributes, black and white historical atmosphere mixed with modern respect, people paying homage."
  },
  {
    id: "jamdani-saree",
    title: "Jamdani Saree",
    description: "A UNESCO-recognized GI product known for its intricate hand-woven patterns.",
    details: "Jamdani is a fine muslin textile that has been produced for centuries in South Rupshi of Narayanganj. It is recognized as a UNESCO Intangible Cultural Heritage and a GI product of Bangladesh, famous for its geometric and floral patterns.",
    category: "GI Product",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d61dc0?w=800",
    imagePrompt: "Exquisite Jamdani saree with intricate hand-woven patterns, translucent fabric, focus on detailed craftsmanship, traditional loom in background."
  },
  {
    id: "rickshaw-art",
    title: "Rickshaw Art",
    description: "The 'People's Gallery' featuring vibrant hand-painted designs.",
    details: "Colorfully decorated rickshaws are a unique artistic expression in Bangladesh. These hand-painted designs often depict movies, nature, and social messages. Every rickshaw is essentially a moving canvas, recently recognized by UNESCO.",
    category: "Art",
    image: "https://images.unsplash.com/photo-1582236371754-52feaaaeff08?w=800",
    imagePrompt: "Close-up of vibrant Rickshaw art, hand-painted floral and bird motifs, colorful cinema-style lettering, glossy finish."
  },
  {
    id: "dhakai-muslin",
    title: "Dhakai Muslin",
    description: "The legendary fabric so fine it could pass through a ring.",
    details: "Dhakai Muslin is a legendary textile that was once the finest fabric in the world. After being lost for a century, Bangladesh has successfully revived this GI product, recreating the ultra-fine thread and delicate weaving technique.",
    category: "GI Product",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
    imagePrompt: "A piece of legendary Dhakai Muslin, ultra-thin and translucent fabric, incredibly soft texture, golden sunlight passing through it."
  },
  {
    id: "cox-s-bazar",
    title: "Cox’s Bazar",
    description: "The world's longest natural sea beach, stretching over 120 km.",
    details: "Known as the longest natural sea beach in the world, stretching over 120 km of golden sands. It is one of the most popular tourist destinations, offering stunning sunsets over the Bay of Bengal.",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1590483864506-6dfb271d5b12?w=800",
    imagePrompt: "Golden sands of Cox's Bazar beach, longest sea beach in the world, blue ocean waves hitting the shore, sunset sky with orange and purple hues."
  },
  {
    id: "nakshi-kantha",
    title: "Nakshi Kantha",
    description: "Traditional embroidered quilts that tell stories of rural life.",
    details: "Nakshi Kantha is a type of embroidered quilt and a centuries-old tradition. Each Kantha is unique, with stitches telling stories of rural life, folk tales, and nature. It is a prized handicraft and a GI product from Jamalpur.",
    category: "Art",
    image: "https://images.unsplash.com/photo-1580211599387-578f142277d3?w=800",
    imagePrompt: "Authentic Nakshi Kantha embroidery, colorful threads on fabric, traditional motifs of life and nature, close-up on needlework."
  },
  {
    id: "hospitality",
    title: "Bengali Hospitality",
    description: "Warmth and generosity defined by the phrase 'Atithi Devo Bhava'.",
    details: "Bangladeshis are famous for their unmatched hospitality. Guests are treated with extreme care and served the best food available. It is a deep-rooted cultural value where a visitor is considered a blessing to the household.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800",
    imagePrompt: "A warm welcome in a Bangladeshi home, traditional snacks and tea served on a table, people smiling and gesturing 'Assalam-O-Alaikum' with respect."
  }
];
