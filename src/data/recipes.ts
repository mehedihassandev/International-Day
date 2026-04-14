export interface Recipe {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    serves?: string;
    prepTime?: string;
    image: string;
    images?: string[];
    imagePrompt: string;
}

export const recipes: Recipe[] = [
    {
        id: "chicken-tikiya",
        title: "Chicken Tikiya",
        description:
            "Savory minced chicken patties, a popular snack often served with Polao or as an afternoon treat.",
        prepTime: "30 MIN",
        serves: "4 PERSONS",
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
            "1 egg",
        ],
        instructions: [
            "Mix everything into a soft dough.",
            "Shape into small flat patties (bite-sized is best for events).",
            "Shallow fry on medium heat until golden brown on both sides.",
        ],
        image: "https://ajinomotobangladesh.com/wp-content/uploads/2023/01/1-2-scaled.jpg",
        images: [
            "https://ajinomotobangladesh.com/wp-content/uploads/2023/01/1-2-scaled.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Lula_kebab_2.jpg",
        ],
        imagePrompt:
            "Crispy golden brown Chicken Tikiya patties on a white plate, garnished with fresh cilantro and onion rings, served with green chutney.",
    },
    {
        id: "beef-tikiya",
        title: "Beef Tikiya",
        description:
            "Hearty minced beef patties with roasted cumin and spices, perfect for festive meals.",
        prepTime: "30 MIN",
        serves: "4 PERSONS",
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
            "1 egg",
        ],
        instructions: [
            "Mix all ingredients well.",
            "Shape into patties.",
            "Fry until browned and fully cooked inside.",
        ],
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800",
        images: [
            "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800",
            "https://upload.wikimedia.org/wikipedia/commons/d/df/4th_October_2012_Shami_Kebab.jpg",
        ],
        imagePrompt:
            "Deliciously thick Beef Tikiya patties, dark brown crust, moist inside, served with fragrant Polao rice and salad.",
    },
    {
        id: "alur-chop",
        title: "Alur Chop (Potato Fritters)",
        description:
            "A beloved street food and Ramadan staple made of spiced mashed potatoes dipped in gram flour batter.",
        prepTime: "25 MIN",
        serves: "4-5 PERSONS",
        ingredients: [
            "4–5 boiled potatoes (mashed)",
            "1 onion (finely chopped)",
            "1–2 green chilies",
            "½ tsp turmeric",
            "1 tsp chili powder",
            "Salt to taste",
            "Coriander leaves",
            "Gram flour (besan) for batter",
            "Water + pinch of salt for batter",
        ],
        instructions: [
            "Mix potato with spices, onion, chili, and coriander.",
            "Shape into oval-sized balls.",
            "Make a medium-thick batter with gram flour and water.",
            "Dip the potato balls and deep fry until golden and crispy.",
        ],
        image: "https://static.wixstatic.com/media/05c508_39d14807ef4d41fcbdb798c9ed74bb47~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/05c508_39d14807ef4d41fcbdb798c9ed74bb47~mv2.jpg",
        images: [
            "https://static.wixstatic.com/media/05c508_39d14807ef4d41fcbdb798c9ed74bb47~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/05c508_39d14807ef4d41fcbdb798c9ed74bb47~mv2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Aloo_Tikki_served_with_chutneys.jpg",
        ],
        imagePrompt:
            "Street-style Alur Chop (potato fritters), crispy yellow-orange batter, served in a recycled paper bowl, very appetizing.",
    },
    {
        id: "chapti",
        title: "Chapti (Savory Pancake)",
        description:
            "A local recipe from Bikrompur, traditionally enjoyed for breakfast or a light dinner.",
        prepTime: "20 MIN",
        serves: "2-3 PERSONS",
        ingredients: [
            "1 cup rice flour",
            "1 egg",
            "1 small onion (chopped)",
            "Green chili",
            "Coriander leaves",
            "Salt to taste",
            "Water (to make batter)",
        ],
        instructions: [
            "Mix everything into a pourable batter.",
            "Heat a pan and lightly oil it.",
            "Pour a thin layer of batter like a pancake.",
            "Cook both sides until slightly crispy.",
        ],
        image: "https://withaspin.com/wp-content/uploads/2013/03/Chapri-1.jpg",
        images: [
            "https://withaspin.com/wp-content/uploads/2013/03/Chapri-1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fe/2_Chapati_warm_and_ready_to_be_eaten.jpg",
        ],
        imagePrompt:
            "Traditional Chapti pancake on a cast iron pan, thin and crispy edges, visible bits of green chili and coriander, rustic kitchen setting.",
    },
    // {
    //     id: "shorshe-ilish",
    //     title: "Shorshe Ilish (Mustard Hilsa)",
    //     description:
    //         "The crown jewel of Bengali cuisine—national fish Hilsa cooked in a pungent mustard gravy.",
    //     prepTime: "45 MIN",
    //     serves: "3-4 PERSONS",
    //     ingredients: [
    //         "4-6 pieces of Hilsa (Ilish) fish",
    //         "2 tbsp mustard seeds (ground to paste)",
    //         "3-4 green chilies (slitted)",
    //         "1 tsp turmeric powder",
    //         "1 tsp nigella seeds (kalo jeera)",
    //         "3-4 tbsp mustard oil (essential)",
    //         "Salt to taste",
    //     ],
    //     instructions: [
    //         "Marinate fish with salt and turmeric for 10 minutes.",
    //         "Heat mustard oil until smoking, then add nigella seeds.",
    //         "Briefly fry fish pieces on both sides.",
    //         "Add mustard paste, chilies, and a little warm water.",
    //         "Simmer covered until fish is tender and gravy is thick.",
    //     ],
    //     image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A7%87_%E0%A6%87%E0%A6%B2%E0%A6%BF%E0%A6%B6.jpg",
    //     images: ["https://upload.wikimedia.org/wikipedia/commons/9/9a/%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A7%87_%E0%A6%87%E0%A6%B2%E0%A6%BF%E0%A6%B6.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/d3/BHilsa123.jpg"],
    //     imagePrompt:
    //         "Classic Shorshe Ilish fish curry, silver hilsa pieces in a thick yellow mustard gravy, green chilies on top, served in a traditional clay bowl.",
    // },
    // {
    //     id: "panta-ilish",
    //     title: "Panta Ilish",
    //     description:
    //         "A traditional dish of fermented rice with fried Hilsa, especially popular during Pohela Boishakh.",
    //     prepTime: "15 MIN",
    //     serves: "2-3 PERSONS",
    //     ingredients: [
    //         "Cooked rice (soaked overnight in water)",
    //         "Fried Hilsa fish",
    //         "Green chili",
    //         "Onion",
    //         "Salt",
    //     ],
    //     instructions: [
    //         "Soak cooked rice in water overnight.",
    //         "Serve chilled rice with fried Hilsa.",
    //         "Add onion and chili on the side.",
    //     ],
    //     image: "https://zuranazrecipe.com/wp-content/uploads/2016/03/Pohela-Boishaks-Panta-Ilish...1.jpg",
    //     images: ["https://zuranazrecipe.com/wp-content/uploads/2016/03/Pohela-Boishaks-Panta-Ilish...1.jpg", "https://upload.wikimedia.org/wikipedia/commons/e/e6/Panta_Ilish.jpg"],
    //     imagePrompt:
    //         "Panta Ilish traditional dish, fermented rice with fried hilsa, onion and green chili, Bengali new year food.",
    // },
    // {
    //     id: "kacchi-biryani",
    //     title: "Kacchi Biryani",
    //     description:
    //         "Authentic Dhaka-style biryani where raw mutton and rice are cooked together in 'dum'.",
    //     prepTime: "90 MIN",
    //     serves: "6-8 PERSONS",
    //     ingredients: [
    //         "1 kg Mutton (large pieces)",
    //         "3 cups Basmati or Kalijeera rice",
    //         "1/2 cup yogurt",
    //         "Ginger-garlic paste",
    //         "Special Biryani spice mix (cardamom, cinnamon, nutmeg, etc.)",
    //         "Potatoes (fried golden)",
    //         "Ghee and Fried onions (Bereshta)",
    //     ],
    //     instructions: [
    //         "Marinate mutton with yogurt and spices for 2 hours.",
    //         "Layer raw meat at the bottom of a heavy pot, followed by fried potatoes.",
    //         "Add par-boiled rice (70% cooked) on top.",
    //         "Seal pot with dough and cook on low heat for 1 hour until meat is tender.",
    //     ],
    //     image: "https://dishstories.com/wp-content/uploads/2025/10/Kacchi-Biryani-in-Plate-with-mutton-piece.webp",
    //     images: ["https://dishstories.com/wp-content/uploads/2025/10/Kacchi-Biryani-in-Plate-with-mutton-piece.webp", "https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg"],
    //     imagePrompt:
    //         "Royal Kacchi Biryani served in a large silver 'degh' or plate, tender mutton pieces bursting through fragrant rice, golden potatoes.",
    // },
    // {
    //     id: "rasmalai",
    //     title: "Rasmalai (Cumilla Special)",
    //     description:
    //         "A celestial dessert of soft cheese discs soaked in thick, cardamom-flavored milk.",
    //     prepTime: "120 MIN",
    //     serves: "4-5 PERSONS",
    //     ingredients: [
    //         "1 liter full-fat milk (for chhana)",
    //         "Lemon juice or vinegar",
    //         "1 cup sugar (for syrup)",
    //         "3 cups milk (for malai)",
    //         "Saffron and Cardamom",
    //         "Pistachios for garnish",
    //     ],
    //     instructions: [
    //         "Make soft chhana from milk and shape into small discs.",
    //         "Cook discs in sugar syrup until spongy.",
    //         "Boil and reduce milk for malai until thick.",
    //         "Soak the discs in the thickened milk and chill before serving.",
    //     ],
    //     image: "https://binnifood.com/wp-content/uploads/2023/12/%E0%A6%95%E0%A7%81%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%96%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A4-%E0%A6%B0%E0%A6%B8%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%87-%E0%A6%A4%E0%A7%88%E0%A6%B0%E0%A6%BF%E0%A6%B0-%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A6%BF%E0%A6%AA%E0%A6%BF-%E0%A6%93-%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8.png",
    //     images: ["https://binnifood.com/wp-content/uploads/2023/12/%E0%A6%95%E0%A7%81%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%96%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A4-%E0%A6%B0%E0%A6%B8%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%87-%E0%A6%A4%E0%A7%88%E0%A6%B0%E0%A6%BF%E0%A6%B0-%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A6%BF%E0%A6%AA%E0%A6%BF-%E0%A6%93-%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8.png", "https://upload.wikimedia.org/wikipedia/commons/a/ae/Ras_Malai_2.JPG"],
    //     imagePrompt:
    //         "Cumilla's famous Rasmalai, small white cheese discs in thick creamy milk, garnished with saffron strands and pistachios, served in a traditional bowl.",
    // },
    // {
    //     id: "bogura-doi",
    //     title: "Bogura Curd (Sweetened Yogurt)",
    //     description:
    //         "A world-famous dense, caramelized sweet yogurt traditionally set in clay pots.",
    //     prepTime: "600 MIN",
    //     serves: "4-5 PERSONS",
    //     ingredients: [
    //         "1 liter full-fat milk",
    //         "1/2 cup sugar (caramelized)",
    //         "2 tbsp yogurt starter",
    //         "Clay pot (traditional)",
    //     ],
    //     instructions: [
    //         "Reduce milk by one-third on low heat.",
    //         "Add caramelized sugar for flavor and color.",
    //         "Cool to lukewarm and whisk in the starter.",
    //         "Pour into a clay pot and let set in a warm place for 8-12 hours.",
    //     ],
    //     image: "https://www.thedailystar.net/sites/default/files/styles/big_1/public/images/2024/08/12/_b3a6396.jpg",
    //     images: ["https://www.thedailystar.net/sites/default/files/styles/big_1/public/images/2024/08/12/_b3a6396.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/34/Mishti_Doi.jpg"],
    //     imagePrompt:
    //         "Bogura's famous Sweet Curd (Doi) in a rustic clay pot, dense and creamy texture, deep brownish-orange color, perfectly set.",
    // },
    // {
    //     id: "morog-polao",
    //     title: "Morog Polao",
    //     description:
    //         "A festive sweet and savory chicken pilaf, popular in weddings and special occasions.",
    //     prepTime: "60 MIN",
    //     serves: "6 PERSONS",
    //     ingredients: [
    //         "1 whole chicken (cut into pieces)",
    //         "2 cups fragrant rice (Kalijeera)",
    //         "1/2 cup yogurt",
    //         "Onion paste",
    //         "Ginger-garlic paste",
    //         "Ghee",
    //         "Whole spices (cardamom, cinnamon, cloves)",
    //         "Sugar (slight sweetness)",
    //         "Salt to taste",
    //     ],
    //     instructions: [
    //         "Cook chicken with spices, yogurt, and onion until tender.",
    //         "In another pot, sauté rice in ghee with whole spices.",
    //         "Combine chicken and rice together.",
    //         "Cook on low heat (dum) until flavors blend.",
    //     ],
    //     image: "https://static.wixstatic.com/media/05c508_761b7feac76b4f9f9b6825f936a41ed0~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/05c508_761b7feac76b4f9f9b6825f936a41ed0~mv2.jpg",
    //     images: ["https://static.wixstatic.com/media/05c508_761b7feac76b4f9f9b6825f936a41ed0~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/05c508_761b7feac76b4f9f9b6825f936a41ed0~mv2.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/dd/Afghan_Palo.jpg"],
    //     imagePrompt:
    //         "Morog Polao Bangladesh, golden fragrant rice with chicken, slightly sweet aroma, festive presentation.",
    // },
    // {
    //     id: "bhuna-khichuri",
    //     title: "Bhuna Khichuri",
    //     description:
    //         "A rich and spicy rice-lentil dish, especially popular during rainy days.",
    //     prepTime: "40 MIN",
    //     serves: "4 PERSONS",
    //     ingredients: [
    //         "1 cup rice",
    //         "1/2 cup moong dal",
    //         "Onion sliced",
    //         "Ginger-garlic paste",
    //         "Turmeric",
    //         "Chili powder",
    //         "Garam masala",
    //         "Mustard oil",
    //         "Salt to taste",
    //     ],
    //     instructions: [
    //         "Dry roast dal lightly.",
    //         "Cook onion, spices, and paste in oil.",
    //         "Add rice and dal, mix well.",
    //         "Cook with water until soft and slightly thick.",
    //     ],
    //     image: "https://rumkisgoldenspoon.com/wp-content/uploads/2021/05/Bhuna-khichuri-recipe.jpg",
    //     images: ["https://rumkisgoldenspoon.com/wp-content/uploads/2021/05/Bhuna-khichuri-recipe.jpg"],
    //     imagePrompt:
    //         "Bhuna Khichuri Bangladesh, thick golden rice and lentil dish, rainy day comfort food.",
    // },
    // {
    //     id: "fuchka",
    //     title: "Fuchka",
    //     description:
    //         "A popular street food with crispy shells filled with tangy and spicy tamarind water.",
    //     prepTime: "30 MIN",
    //     serves: "3-4 PERSONS",
    //     ingredients: [
    //         "Fuchka shells",
    //         "Boiled potatoes",
    //         "Chickpeas",
    //         "Tamarind water",
    //         "Chili powder",
    //         "Cumin powder",
    //         "Onion chopped",
    //         "Coriander leaves",
    //     ],
    //     instructions: [
    //         "Prepare mashed potato mixture with spices.",
    //         "Fill fuchka shells with the mixture.",
    //         "Dip in tamarind water before serving.",
    //     ],
    //     image: "https://images.deliveryhero.io/image/fd-bd/LH/f493-listing.jpg",
    //     images: ["https://images.deliveryhero.io/image/fd-bd/LH/f493-listing.jpg", "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pani_Puri1.JPG"],
    //     imagePrompt:
    //         "Fuchka Bangladesh street food, crispy shells filled with spicy potato, tangy water, served roadside.",
    // },
    // {
    //     id: "chotpoti",
    //     title: "Chotpoti",
    //     description:
    //         "A tangy and spicy chickpea-based street food loved across Bangladesh.",
    //     prepTime: "20 MIN",
    //     serves: "3-4 PERSONS",
    //     ingredients: [
    //         "Boiled chickpeas",
    //         "Boiled potatoes",
    //         "Tamarind chutney",
    //         "Green chili",
    //         "Onion",
    //         "Cumin powder",
    //         "Chili powder",
    //         "Coriander leaves",
    //     ],
    //     instructions: [
    //         "Mix chickpeas and potatoes.",
    //         "Add spices, chutney, and chopped onion.",
    //         "Garnish with coriander and serve warm.",
    //     ],
    //     image: "https://static.vecteezy.com/system/resources/previews/045/963/098/non_2x/spicy-chotpoti-include-chickpea-tomato-onion-cabbage-chilli-coriander-and-sauce-served-in-plate-isolated-on-wooden-table-side-view-of-bangladeshi-street-food-photo.jpg",
    //     images: ["https://static.vecteezy.com/system/resources/previews/045/963/098/non_2x/spicy-chotpoti-include-chickpea-tomato-onion-cabbage-chilli-coriander-and-sauce-served-in-plate-isolated-on-wooden-table-side-view-of-bangladeshi-street-food-photo.jpg", "https://upload.wikimedia.org/wikipedia/commons/7/7b/Chotpoti_%28cropped%29.jpg"],
    //     imagePrompt:
    //         "Chotpoti Bangladesh street food bowl, spicy chickpeas with tamarind, onion, and herbs.",
    // },
];
