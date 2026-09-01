// Bangladesh Cultural Heritage & Authentic Recipe Dataset
// High-resolution local image paths and verified CDN links

export interface Fact {
  id: string;
  title: string;
  description: string;
  details: string;
  category: "Culture" | "History" | "Nature" | "Art" | "GI Product";
  image: string;
  images?: string[];
  imagePrompt: string;
  featured?: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category?: string;
  prepTime?: string;
  serves?: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  images?: string[];
  imagePrompt: string;
}

export const initialFacts: Fact[] = [
  {
    "id": "language-movement",
    "title": "Language Movement (1952)",
    "description": "The historic movement on 21st February 1952 where students sacrificed their lives for the Bengali mother language, now globally honored as International Mother Language Day.",
    "details": "On 21 February 1952, students of the University of Dhaka and political activists defied Section 144 to demand Bengali be recognized as one of the state languages. Police opened fire, martyring Salam, Barkat, Rafiq, Jabbar, and Shafiur. In 1999, UNESCO declared February 21 as International Mother Language Day, celebrated worldwide.",
    "category": "History",
    "imagePrompt": "Shaheed Minar monument covered in red and white flowers on 21st February.",
    "featured": true,
    "image": "/images/facts/language-movement.jpg",
    "images": [
      "/images/facts/language-movement.jpg",
      "/images/facts/language-movement-1.jpg"
    ]
  },
  {
    "id": "liberation-war",
    "title": "Liberation War & Victory (1971)",
    "description": "A heroic 9-month armed struggle that culminated in the birth of an independent Bangladesh on December 16, 1971.",
    "details": "Following the historic March 7 speech by Bangabandhu Sheikh Mujibur Rahman and the genocide launched on March 25 (Operation Searchlight), the people of Bangladesh formed the Mukti Bahini. After nine months of supreme sacrifice of three million martyrs, Bangladesh achieved victory on 16 December 1971.",
    "category": "History",
    "imagePrompt": "National Martyrs' Memorial (Jatiya Smriti Soudho) in Savar with national flag.",
    "featured": true,
    "image": "/images/facts/liberation-war.jpg",
    "images": [
      "/images/facts/liberation-war.jpg",
      "/images/facts/liberation-war-1.jpg"
    ]
  },
  {
    "id": "pohela-boishakh",
    "title": "Pohela Boishakh (Bengali New Year)",
    "description": "The vibrant first day of the Bengali calendar, celebrated with folk music, colorful traditional attire, and joyous public festivities across the country.",
    "details": "Celebrated on April 14, Pohela Boishakh brings millions into the streets in red-and-white sarees and panjabis. People greet each other with 'Shubho Noboborsho', enjoy traditional Panta Ilish breakfast, and join cultural programs at Ramna Batamul and Dhaka University.",
    "category": "Culture",
    "imagePrompt": "Vibrant Pohela Boishakh festival with people in red and white traditional attire.",
    "featured": true,
    "image": "/images/facts/pohela-boishakh.jpg",
    "images": [
      "/images/facts/pohela-boishakh.jpg",
      "/images/facts/pohela-boishakh-1.jpg"
    ]
  },
  {
    "id": "mangal-shobhajatra",
    "title": "Mangal Shobhajatra (UNESCO Heritage)",
    "description": "An iconic festival carnival procession with giant animal effigies and masks representing peace, unity, and universal human values.",
    "details": "Originated in 1989 by students of the Faculty of Fine Arts at Dhaka University to bring people together in dark times, Mangal Shobhajatra was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in 2016.",
    "category": "Culture",
    "imagePrompt": "Colorful Mangal Shobhajatra procession with giant owl, tiger, and bird masks.",
    "featured": true,
    "image": "/images/facts/mangal-shobhajatra.jpg",
    "images": [
      "/images/facts/mangal-shobhajatra.jpg",
      "/images/facts/mangal-shobhajatra-1.jpg",
      "/images/facts/mangal-shobhajatra-2.jpg"
    ]
  },
  {
    "id": "baul-music",
    "title": "Baul Folk Tradition & Lalon Shah",
    "description": "A mystical, humanist musical tradition inscribed on UNESCO's Intangible Cultural Heritage list, pioneered by philosopher Fakir Lalon Shah.",
    "details": "Bauls are mystic minstrels of rural Bengal who sing songs of divine love, egalitarian philosophy, and human truth with instruments like the Ektara, Dotara, and Khamak. UNESCO recognized Baul songs as Masterpieces of Oral and Intangible Heritage in 2005.",
    "category": "Art",
    "imagePrompt": "A Baul mystic singer wearing saffron robe playing Ektara under a banyan tree.",
    "featured": true,
    "image": "/images/facts/baul-music.jpg",
    "images": [
      "/images/facts/baul-music.jpg",
      "/images/facts/baul-music-1.jpg"
    ]
  },
  {
    "id": "bengali-hospitality",
    "title": "Traditional Bengali Hospitality (Atithisheba)",
    "description": "The heartfelt Bengali tradition of welcoming guests with abundant home-cooked feasts and warm generosity.",
    "details": "In Bengali culture, guests are considered blessings (Athithi Narayan). No guest leaves without being served multiple courses of rice, fish, bhortas, and sweets. Insisting on seconds and thirds ('Aro ektu nin') is the ultimate expression of love and warmth.",
    "category": "Culture",
    "imagePrompt": "Lavish Bengali dinner table with traditional brass plates, fish curry, and sweets.",
    "featured": false,
    "image": "/images/facts/bengali-hospitality.jpg",
    "images": [
      "/images/facts/bengali-hospitality.jpg",
      "/images/facts/bengali-hospitality-1.jpg"
    ]
  },
  {
    "id": "pitha-festival",
    "title": "Winter Pitha Festivals (Pitha Utshab)",
    "description": "A cozy winter tradition where families gather to prepare steamed and fried rice cakes with fresh date palm molasses (khejur gur).",
    "details": "As winter arrives in Bangladesh, households and cultural centers celebrate Pitha Utshab. Famous varieties include Bhapa Pitha (steamed rice cake with coconut and gur), Patishapta (crepes filled with kheer), Chitoi Pitha with spicy bhortas, and intricate Nakshi Pitha.",
    "category": "Culture",
    "imagePrompt": "Assorted traditional Bengali pithas arranged on banana leaves with date molasses.",
    "featured": false,
    "image": "/images/facts/pitha-festival.jpg",
    "images": [
      "/images/facts/pitha-festival.jpg",
      "/images/facts/pitha-festival-1.jpg",
      "/images/facts/pitha-festival-2.jpg"
    ]
  },
  {
    "id": "jamdani",
    "title": "Dhakai Jamdani Weaving (UNESCO GI)",
    "description": "A world-renowned handloom textile art characterized by intricate geometric and floral motifs woven without mechanical cards.",
    "details": "Jamdani is an ancient handloom muslin weaving craft centered around the Shitalakshya River in Narayanganj. Recognized by UNESCO as Intangible Cultural Heritage in 2013 and holding Bangladesh's first Geographical Indication (GI) tag.",
    "category": "GI Product",
    "imagePrompt": "Close-up of intricate handwoven gold and royal blue Dhakai Jamdani saree patterns.",
    "featured": true,
    "image": "/images/facts/jamdani.jpg",
    "images": [
      "/images/facts/jamdani.jpg",
      "/images/facts/jamdani-1.jpg"
    ]
  },
  {
    "id": "dhakai-muslin",
    "title": "Legendary Dhakai Muslin",
    "description": "The ultra-fine gossamer fabric of ancient Bengal so sheer and delicate that an entire saree could pass through a small signet ring.",
    "details": "Made from the rare Phuti Karpas cotton plant grown along the Meghna and Shitalakshya riverbanks, Dhakai Muslin was adored by Roman emperors and Mughal royalty. Bangladesh scientists recently revived this historical weaving craft.",
    "category": "GI Product",
    "imagePrompt": "Gossamer sheer Dhakai Muslin fabric gently passing through a golden finger ring.",
    "featured": false,
    "image": "/images/facts/dhakai-muslin.jpg",
    "images": [
      "/images/facts/dhakai-muslin.jpg",
      "/images/facts/dhakai-muslin-1.jpg"
    ]
  },
  {
    "id": "nakshi-kantha",
    "title": "Nakshi Kantha Folk Quilts",
    "description": "Centuries-old embroidered folk quilts weaving personal stories, folklore, and rural nature into colorful embroidered textiles.",
    "details": "Crafted by rural Bengali women from repurposed sarees and lungis stitched with colorful embroidery threads, Nakshi Kantha features motifs like the lotus, tree of life, birds, and village life scenes. Awarded GI status in Bangladesh.",
    "category": "GI Product",
    "imagePrompt": "Detailed handcrafted Nakshi Kantha quilt with colorful floral and folk embroidery.",
    "featured": false,
    "image": "/images/facts/nakshi-kantha.jpg",
    "images": [
      "/images/facts/nakshi-kantha.jpg",
      "/images/facts/nakshi-kantha-1.jpg"
    ]
  },
  {
    "id": "rickshaw-art",
    "title": "Dhaka Rickshaw & Rickshaw Art",
    "description": "UNESCO recognized vibrant pop-art canvases rolling on the streets of Dhaka with hand-painted cinema stars, birds, and floral designs.",
    "details": "Dhaka is recognized as the Rickshaw Capital of the World with hundreds of thousands of cycle rickshaws. In 2023, UNESCO inscribed Dhaka Rickshaws and Rickshaw Painting onto its Representative List of Intangible Cultural Heritage.",
    "category": "Art",
    "imagePrompt": "Vibrant hand-painted Dhaka cycle rickshaw with colorful backplate floral art.",
    "featured": true,
    "image": "/images/facts/rickshaw-art.jpg",
    "images": [
      "/images/facts/rickshaw-art.jpg",
      "/images/facts/rickshaw-art-1.jpg",
      "/images/facts/rickshaw-art-2.jpg"
    ]
  },
  {
    "id": "land-of-rivers",
    "title": "Land of 700 Rivers & Nouka Baich",
    "description": "The world's largest river delta, fed by the mighty Padma, Meghna, and Jamuna rivers with lively traditional boat racing festivals.",
    "details": "Bangladesh is shaped by more than 700 rivers forming a fertile delta. Riverine life thrives with traditional wooden boats (Nouka), fishing livelihoods, and the high-energy 'Nouka Baich' long-boat racing festivals accompanied by folk cheering songs.",
    "category": "Nature",
    "imagePrompt": "Traditional colorful long-boat race (Nouka Baich) on a wide Bengali river.",
    "featured": false,
    "image": "/images/facts/land-of-rivers.jpg",
    "images": [
      "/images/facts/land-of-rivers.jpg",
      "/images/facts/land-of-rivers-1.jpg"
    ]
  },
  {
    "id": "sundarbans",
    "title": "The Sundarbans Mangrove Forest",
    "description": "The world's largest contiguous mangrove forest and UNESCO World Heritage site, home of the majestic Royal Bengal Tiger.",
    "details": "Spanning the southwest coast of Bangladesh, the Sundarbans protects a rich ecosystem of Royal Bengal Tigers, saltwater crocodiles, spotted deer, and thousands of winding tidal canals and mudflats.",
    "category": "Nature",
    "imagePrompt": "Royal Bengal Tiger walking gracefully through the Sundarbans mangrove forest.",
    "featured": true,
    "image": "/images/facts/sundarbans.jpg",
    "images": [
      "/images/facts/sundarbans.jpg",
      "/images/facts/sundarbans-1.jpg",
      "/images/facts/sundarbans-2.jpg"
    ]
  },
  {
    "id": "coxs-bazar",
    "title": "Cox's Bazar Sea Beach",
    "description": "The world's longest unbroken natural sandy sea beach spanning 120 continuous kilometers along the Bay of Bengal.",
    "details": "Stretching 120 km from Cox's Bazar city past Inani and Himchari down to Teknaf, this beach is famous for scenic golden sunsets, rolling surf, coral rocks, and traditional crescent moon fishing boats (Sampan).",
    "category": "Nature",
    "imagePrompt": "Sunset over the expansive golden sandy beach of Cox's Bazar with Sampan boats.",
    "featured": false,
    "image": "/images/facts/coxs-bazar.jpg",
    "images": [
      "/images/facts/coxs-bazar.jpg",
      "/images/facts/coxs-bazar-1.jpg",
      "/images/facts/coxs-bazar-2.jpg"
    ]
  },
  {
    "id": "saint-martins",
    "title": "Saint Martin's Island (Narikel Jinjira)",
    "description": "The sole coral island of Bangladesh situated in the northeastern Bay of Bengal with crystal-clear turquoise waters.",
    "details": "Located 9 km south of Teknaf, Saint Martin's Island is famed for its living coral reefs, coconut palm groves, and picturesque adjoining islet Chera Dwip with crystal-clear sea life.",
    "category": "Nature",
    "imagePrompt": "Turquoise water and coconut palms on the coral shores of Saint Martin's Island.",
    "featured": false,
    "image": "/images/facts/saint-martins.jpg",
    "images": [
      "/images/facts/saint-martins.jpg",
      "/images/facts/saint-martins-1.jpg",
      "/images/facts/saint-martins-2.jpg"
    ]
  },
  {
    "id": "haor-region",
    "title": "Tanguar Haor & Inland Seas",
    "description": "A pristine Ramsar wetland sanctuary in Sunamganj that turns into a vast freshwater inland sea during the monsoon season.",
    "details": "Tanguar Haor covers 10,000 hectares at the base of the Meghalaya hills in Sunamganj. In monsoon, it looks like an endless ocean where wooden houseboats cruise among submerged Hijol and Koroch trees.",
    "category": "Nature",
    "imagePrompt": "Vast serene waters of Tanguar Haor with traditional wooden houseboats.",
    "featured": false,
    "image": "/images/facts/haor-region.jpg",
    "images": [
      "/images/facts/haor-region.jpg",
      "/images/facts/haor-region-1.jpg",
      "/images/facts/haor-region-2.jpg"
    ]
  },
  {
    "id": "ilish",
    "title": "Ilish (Hilsa) - The Silver King of Fish",
    "description": "The national fish of Bangladesh, famous for its succulent texture, delicate flavor, and deep culinary significance.",
    "details": "Over 60% of the world's Hilsa is harvested in Bangladesh's Padma and Meghna river estuaries. Recognized as a GI product of Bangladesh, Ilish is cooked in over 50 traditional styles including Shorshe Ilish, Bhapa Ilish, and Panta Ilish.",
    "category": "GI Product",
    "imagePrompt": "Fresh gleaming silver Hilsa fish caught from the Padma river on wooden platter.",
    "featured": false,
    "image": "/images/facts/ilish.jpg",
    "images": [
      "/images/facts/ilish.jpg",
      "/images/facts/ilish-1.jpg"
    ]
  },
  {
    "id": "sakrain",
    "title": "Old Dhaka Sakrain Kite Festival",
    "description": "A centuries-old winter festival where Old Dhaka rooftops come alive with thousands of colorful kites, fireworks, and flame performances.",
    "details": "Celebrated on January 14-15 marking the end of Poush, Sakrain sees thousands of families on Old Dhaka rooftops engaging in friendly kite-cutting battles (Ghuddi larai), followed by nighttime fireworks and fire-spinning.",
    "category": "Culture",
    "imagePrompt": "Old Dhaka rooftops during Sakrain with thousands of colorful kites in the sky.",
    "featured": false,
    "image": "/images/facts/sakrain.jpg",
    "images": [
      "/images/facts/sakrain.jpg",
      "/images/facts/sakrain-1.jpg",
      "/images/facts/sakrain-2.jpg"
    ]
  },
  {
    "id": "jatra",
    "title": "Bengali Jatra Folk Theatre",
    "description": "A traditional musical folk theatre performance that has brought history, myth, and social drama to village open-air stages for centuries.",
    "details": "Originating as religious processions ('Jatra'), this form evolved into vibrant night-long musical dramas performed on raised four-sided open stages with dramatic music from harmoniums, clarinets, and dhol drums.",
    "category": "Art",
    "imagePrompt": "Dramatic traditional Jatra folk theatre stage performance with expressive actors.",
    "featured": false,
    "image": "/images/facts/jatra.jpg",
    "images": [
      "/images/facts/jatra.jpg",
      "/images/facts/jatra-1.jpg",
      "/images/facts/jatra-2.jpg"
    ]
  },
  {
    "id": "shataranji",
    "title": "Rangpur Shataranji Carpets",
    "description": "GI-certified traditional handloom woven rugs made with geometric motifs and durable cotton yarn in Rangpur.",
    "details": "With roots going back to the Mughal era in Nisbetganj, Rangpur, Shataranji carpets are woven completely by hand on horizontal ground frame looms without any artificial mechanisms.",
    "category": "GI Product",
    "imagePrompt": "Traditional Rangpur Shataranji handwoven carpet with geometric colorful motifs.",
    "featured": false,
    "image": "/images/facts/shataranji.jpg",
    "images": [
      "/images/facts/shataranji.jpg",
      "/images/facts/shataranji-1.jpg"
    ]
  }
];

export const initialRecipes: Recipe[] = [
  {
    "id": "chicken-tikiya",
    "title": "Chicken Tikiya",
    "description": "Crispy on the outside, tender on the inside minced chicken patties infused with aromatic spices and mint.",
    "category": "Popular Snacks",
    "prepTime": "30 MIN",
    "serves": "4 PERSONS",
    "ingredients": [
      "500g ground chicken breast",
      "1/2 cup chana dal (soaked and boiled)",
      "1 medium onion (finely chopped)",
      "2 green chilies (minced)",
      "1 tsp ginger-garlic paste",
      "1 tsp roasted cumin powder",
      "1/2 tsp garam masala",
      "Fresh coriander & mint leaves",
      "1 egg (for binding/dipping)",
      "Mustard oil for shallow frying",
      "Salt to taste"
    ],
    "instructions": [
      "Boil chana dal with ginger, garlic, and salt until soft, then grind with chicken.",
      "Mix in chopped onions, green chilies, herbs, and garam masala.",
      "Shape the mixture into smooth round patties.",
      "Dip in beaten egg and shallow fry in hot oil until golden brown on both sides.",
      "Serve hot with mint chutney and sliced red onions."
    ],
    "imagePrompt": "Golden-brown pan-fried minced chicken tikiya patties on festive serving plate.",
    "image": "/images/recipes/chicken-tikiya.jpg",
    "images": [
      "/images/recipes/chicken-tikiya.jpg",
      "/images/recipes/chicken-tikiya-1.jpg"
    ]
  },
  {
    "id": "beef-tikiya",
    "title": "Shahi Beef Tikiya",
    "description": "Mughal-inspired melt-in-mouth beef patties slow-cooked with roasted lentils and royal aromatic spices.",
    "category": "Royal Meals",
    "prepTime": "45 MIN",
    "serves": "6 PERSONS",
    "ingredients": [
      "500g minced beef",
      "3/4 cup Bengal gram (chana dal)",
      "1 tbsp ginger-garlic paste",
      "Whole garam masala (cinnamon, cardamom, cloves)",
      "1 tsp black pepper",
      "1 egg",
      "Chopped green chilies and fresh mint",
      "Ghee/oil for frying",
      "Salt to taste"
    ],
    "instructions": [
      "Pressure cook beef mince with chana dal, whole spices, and ginger-garlic until dry.",
      "Cool and grind the mixture into a fine silky paste.",
      "Add egg, chopped green chilies, and mint leaves, then mix thoroughly.",
      "Shape into round tikiya discs.",
      "Pan-fry in ghee over medium heat until deep golden and aromatic."
    ],
    "imagePrompt": "Platter of Shahi beef tikiya kebabs garnished with mint and lemon slices.",
    "image": "/images/recipes/beef-tikiya.jpg",
    "images": [
      "/images/recipes/beef-tikiya.jpg",
      "/images/recipes/beef-tikiya-1.jpg"
    ]
  },
  {
    "id": "alur-chop",
    "title": "Bengali Alur Chop",
    "description": "Crispy street-style potato croquettes filled with spicy mashed potato and fried in gram flour batter.",
    "category": "Popular Snacks",
    "prepTime": "25 MIN",
    "serves": "4-5 PERSONS",
    "ingredients": [
      "4–5 boiled potatoes (mashed)",
      "1 onion (finely chopped)",
      "1–2 green chilies (chopped)",
      "½ tsp turmeric powder",
      "1 tsp roasted red chili powder (tala shukna morich)",
      "1/2 tsp bhaja masala (roasted cumin-coriander)",
      "Salt to taste",
      "Fresh coriander leaves",
      "1 cup gram flour (besan) + 2 tbsp rice flour for crispy batter"
    ],
    "instructions": [
      "Saute onions and chilies with roasted spices, then mix into mashed potatoes.",
      "Shape the spiced potato mixture into oval flattened patties.",
      "Prepare a medium-thick batter with besan, rice flour, pinch of baking soda, and salt.",
      "Dip each potato patty into the batter and deep fry in hot oil until golden-crisp.",
      "Serve piping hot with puffed rice (muri) and mustard dip (kashundi)."
    ],
    "imagePrompt": "Street-style Alur Chop crispy potato fritters in golden batter.",
    "image": "/images/recipes/alur-chop.jpg",
    "images": [
      "/images/recipes/alur-chop.jpg",
      "/images/recipes/alur-chop-1.jpg"
    ]
  },
  {
    "id": "chapti",
    "title": "Chapti (Savory Rice Pancake)",
    "description": "A traditional Bikrompur breakfast specialty—crispy thin savory pancakes made from rice flour, eggs, and herbs.",
    "category": "Popular Snacks",
    "prepTime": "20 MIN",
    "serves": "2-3 PERSONS",
    "ingredients": [
      "1 cup rice flour (chaler gura)",
      "1/2 cup all-purpose flour",
      "1 fresh egg",
      "1 small onion (finely chopped)",
      "2 green chilies (sliced)",
      "2 tbsp chopped coriander leaves",
      "1/4 tsp turmeric powder",
      "Salt to taste",
      "Water as needed for smooth pourable batter",
      "Mustard oil for pan greasing"
    ],
    "instructions": [
      "Whisk rice flour, egg, onion, chili, coriander, turmeric, and salt with water into a smooth batter.",
      "Heat a cast-iron tawa or non-stick skillet and brush lightly with mustard oil.",
      "Pour a ladle of batter and swirl into a thin pancake.",
      "Cook on medium heat until edges crisp up, flip and cook the other side.",
      "Serve warm with spicy mustard (kashundi) or dry chili-garlic bhorta."
    ],
    "imagePrompt": "Traditional Bikrompur Chapti savory pancake cooked on a cast iron pan.",
    "image": "/images/recipes/chapti.jpg",
    "images": [
      "/images/recipes/chapti.jpg",
      "/images/recipes/chapti-1.jpg"
    ]
  },
  {
    "id": "shorshe-ilish",
    "title": "Shorshe Ilish (Mustard Hilsa)",
    "description": "The crown jewel of Bengali cuisine—fresh Hilsa fish steaks simmered in a pungent yellow and black mustard gravy.",
    "category": "Royal Meals",
    "prepTime": "40 MIN",
    "serves": "4 PERSONS",
    "ingredients": [
      "4-6 fresh Hilsa (Ilish) fish steaks",
      "2 tbsp yellow mustard + 1 tbsp black mustard seeds (ground into paste)",
      "5-6 green chilies (slitted lengthwise)",
      "1 tsp turmeric powder",
      "1/2 tsp red chili powder",
      "1/2 tsp nigella seeds (kalo jeera)",
      "4 tbsp pure mustard oil (ghani bhanga shorsher tel)",
      "Salt to taste"
    ],
    "instructions": [
      "Rub fish steaks with salt and half the turmeric; let rest for 10 minutes.",
      "Heat pure mustard oil in a pan until fragrant, temper with nigella seeds and green chilies.",
      "Add strained mustard paste, remaining turmeric, chili powder, and half a cup of warm water.",
      "Gently place fish steaks in the simmering gravy and cover with lid.",
      "Cook on medium-low for 10-12 minutes until fish is tender and oil floats to top. Drizzle fresh mustard oil and serve with hot rice."
    ],
    "imagePrompt": "Classic Shorshe Ilish fish curry in thick aromatic yellow mustard gravy.",
    "image": "/images/recipes/shorshe-ilish.jpg",
    "images": [
      "/images/recipes/shorshe-ilish.jpg",
      "/images/recipes/shorshe-ilish-1.jpg"
    ]
  },
  {
    "id": "kacchi-biryani",
    "title": "Dhaka Kacchi Biryani",
    "description": "The ultimate celebratory banquet dish—succulent marinated mutton and fragrant saffron Chinigura rice cooked together in sealed dum.",
    "category": "Royal Meals",
    "prepTime": "90 MIN",
    "serves": "6-8 PERSONS",
    "ingredients": [
      "1 kg prime Mutton (large pieces with bone)",
      "750g aromatic Chinigura or Basmati rice",
      "1/2 cup raw papaya paste (natural tenderizer)",
      "1 cup plain sour yogurt (tok doi)",
      "2 tbsp ginger-garlic paste",
      "Shahi biryani spice blend (shahi jeera, cardamom, mace, nutmeg, cinnamon)",
      "4 large potatoes (peeled, halved, fried golden with saffron)",
      "1 cup crisp fried onions (beresta)",
      "1/2 cup pure ghee + 1/2 cup warm saffron milk",
      "A few drops of Kewra water and Meetha Atar"
    ],
    "instructions": [
      "Marinate mutton with papaya paste, yogurt, ginger-garlic, and biryani spices for 3-4 hours.",
      "Par-boil soaked rice to 60% with whole spices and salt; drain well.",
      "In a heavy-bottomed handi, layer marinated raw meat at the bottom, arrange fried potatoes on top.",
      "Spread the par-boiled rice over the meat, scatter beresta, drizzle saffron milk, ghee, and kewra water.",
      "Seal the handi rim with wheat flour dough and tight lid. Cook on medium heat for 20 mins, then dum on low heat over a tawa for 60 minutes.",
      "Gently open seal and serve with Borhani and boiled eggs."
    ],
    "imagePrompt": "Royal Dhaka Kacchi Biryani served on a festive platter with tender mutton.",
    "image": "/images/recipes/kacchi-biryani.jpg",
    "images": [
      "/images/recipes/kacchi-biryani.jpg",
      "/images/recipes/kacchi-biryani-1.jpg",
      "/images/recipes/kacchi-biryani-2.jpg"
    ]
  },
  {
    "id": "fuchka",
    "title": "Dhaka Street Fuchka",
    "description": "The undisputed king of Bengali street food—crispy round puri shells filled with spiced yellow peas and drenched in tangy tamarind tok.",
    "category": "Popular Snacks",
    "prepTime": "30 MIN",
    "serves": "4 PERSONS",
    "ingredients": [
      "30 crisp hollow fuchka puris",
      "1.5 cups dried yellow peas (dubli/ghugni), soaked and boiled tender",
      "2 boiled potatoes (mashed roughly)",
      "1 onion (finely diced)",
      "3 green chilies (chopped)",
      "2 tbsp special Fuchka chaat masala (roasted cumin, coriander, black salt)",
      "1 boiled egg (finely grated for topping)",
      "Tamarind Tok: 1/2 cup tamarind pulp, roasted cumin, black salt, chili flakes, sugar, mint water"
    ],
    "instructions": [
      "Mix warm boiled yellow peas, mashed potatoes, chopped onion, green chilies, and special chaat masala.",
      "Prepare tangy, spicy tamarind water (tok) by whisking tamarind pulp with water, spices, and mint.",
      "Poke a hole in the center of each crispy puri, stuff with the savory potato-pea filling.",
      "Garnish with grated boiled egg and fresh coriander.",
      "Fill each puri with chilled spicy tamarind water right before popping it in your mouth!"
    ],
    "imagePrompt": "Iconic Dhaka street Fuchka with crisp round shells, spiced filling, and tamarind water.",
    "image": "/images/recipes/fuchka.jpg",
    "images": [
      "/images/recipes/fuchka.jpg",
      "/images/recipes/fuchka-1.jpg"
    ]
  },
  {
    "id": "rasmalai",
    "title": "Comilla Matri Bhander Rasmalai",
    "description": "Delicate soft cottage cheese dumplings soaked in rich, cardamom-scented condensed milk clotted cream.",
    "category": "Sweet Desserts",
    "prepTime": "60 MIN",
    "serves": "6 PERSONS",
    "ingredients": [
      "1 liter whole cow milk (for making fresh chhena/curd)",
      "2 liters whole milk (to reduce into thick malai rabri)",
      "1 tbsp lemon juice or vinegar to curdle milk",
      "1 cup sugar for light boiling syrup + 1/2 cup for rabri",
      "4-5 green cardamoms (crushed)",
      "A pinch of pure saffron strands",
      "1 tbsp sliced pistachios and almonds for garnish"
    ],
    "instructions": [
      "Make soft chhena from 1 liter boiling milk by adding lemon juice, drain completely and knead until silky smooth.",
      "Shape chhena into small bite-sized round balls.",
      "Boil chhena balls in light sugar syrup for 10-12 minutes until doubled in size and spongy; cool slightly.",
      "In a separate wide pot, simmer 2 liters milk with cardamom and saffron until reduced to half (thick aromatic rabri).",
      "Gently squeeze syrup from chhena dumplings and drop into warm rabri.",
      "Chill in refrigerator for 4-5 hours before serving garnished with pistachios."
    ],
    "imagePrompt": "Rich Comilla Matri Bhander Rasmalai in thick saffron cardamom clotted milk.",
    "image": "/images/recipes/rasmalai.jpg",
    "images": [
      "/images/recipes/rasmalai.jpg",
      "/images/recipes/rasmalai-1.jpg"
    ]
  },
  {
    "id": "bogura-doi",
    "title": "Bogurar Misti Doi (Sweet Curd)",
    "description": "GI-certified caramelized sweet yogurt slow-baked in porous clay pots for a thick, velvety custard texture.",
    "category": "Sweet Desserts",
    "prepTime": "8 HOURS (INC. FERMENTATION)",
    "serves": "6 PERSONS",
    "ingredients": [
      "1.5 liters full-cream buffalo/cow milk",
      "1 cup sugar (divided for milk and caramel)",
      "2 tbsp water for caramelizing",
      "3 tbsp thick hung yogurt (starter culture/muri doi)",
      "Traditional unglazed earthen clay pot (matir handi)"
    ],
    "instructions": [
      "Boil full-cream milk in a heavy pot until reduced by one-third.",
      "Caramelize half the sugar with 2 tbsp water in a separate saucepan until rich amber brown.",
      "Stir the hot caramel and remaining sugar into boiling milk to achieve signature golden-brown color.",
      "Cool milk until lukewarm (around 42°C). Whisk in the yogurt starter culture thoroughly.",
      "Pour into unglazed earthen clay pots (which absorb excess moisture for signature dense texture).",
      "Wrap pots with warm towels and let ferment in a warm, draft-free spot for 7-8 hours until set.",
      "Chill in refrigerator before serving thick, creamy sweet curd."
    ],
    "imagePrompt": "Authentic Bogurar Misti Doi in traditional unglazed red clay pot.",
    "image": "/images/recipes/bogura-doi.jpg",
    "images": [
      "/images/recipes/bogura-doi.jpg",
      "/images/recipes/bogura-doi-1.jpg"
    ]
  }
];
