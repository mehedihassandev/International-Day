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
    id: "language-movement",
    title: "Language Movement (1952)",
    description:
      "A historic movement to protect the Bangla language, shaping the nation’s identity.",
    details:
      "The Language Movement of 1952 was a turning point where people sacrificed their lives to defend Bangla as their mother tongue. It symbolizes the right to cultural identity and laid the foundation for Bangladesh’s independence.",
    category: "History",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrAi2cC5SVf5Q2TwAxFSqk8vAOSREvVs7uw&s",
    imagePrompt:
      "Shaheed Minar Dhaka with flowers, people paying tribute on 21 February, emotional atmosphere.",
  },
  {
    id: "liberation-war",
    title: "Liberation War 1971",
    description: "The struggle that led to the independence of Bangladesh.",
    details:
      "The Liberation War of 1971 led to the creation of Bangladesh as an independent nation. It represents the courage, sacrifice, and determination of people who fought for freedom, dignity, and self-governance.",
    category: "History",
    image: "https://www.liberationwarmuseumbd.org/public/images/390695.jpg",
    imagePrompt:
      "Victory Day Bangladesh, National Martyrs Memorial Savar, flags and crowd.",
  },
  {
    id: "pohela-boishakh",
    title: "Pohela Boishakh",
    description:
      "The Bengali New Year, celebrated with joy, colors, and unity.",
    details:
      "Pohela Boishakh marks the beginning of the Bengali New Year and represents renewal, hope, and unity. People celebrate with traditional dress, music, fairs, and food, embracing cultural identity beyond all differences.",
    category: "Culture",
    image:
      "https://kitchengatherings.com/wp-content/uploads/tomato-bhorta_pohelaboishakh-parade.jpg",
    imagePrompt:
      "Pohela Boishakh celebration, red white dress, colorful rally.",
  },
  {
    id: "mangal-shobhajatra",
    title: "Mangal Shobhajatra",
    description: "A colorful cultural procession promoting peace and unity.",
    details:
      "Mangal Shobhajatra is a symbolic procession held during Pohela Boishakh, representing resistance against injustice and hope for a better future. Its vibrant masks and figures reflect the spirit of unity and cultural pride.",
    category: "Culture",
    image:
      "https://cdn.bdnews24.com/bdnews24/media/bdnews24-english/import/media/2020/04/14/mongol-shovajatra-1418-140411-02.jpg",
    imagePrompt: "Mangal Shobhajatra masks, colorful parade Bangladesh.",
  },
  {
    id: "eid-ul-fitr",
    title: "Eid-ul-Fitr Celebrations",
    description:
      "A major religious festival celebrated with joy and togetherness.",
    details:
      "Eid-ul-Fitr marks the end of Ramadan and celebrates gratitude, forgiveness, and togetherness. Families gather, share meals, and give charity, reflecting compassion and unity in society.",
    category: "Culture",
    image:
      "https://toursntripsbd.com/wp-content/uploads/2016/12/Eid-al-Fitr-1.jpg",
    imagePrompt: "Eid prayer Bangladesh crowd Eidgah.",
  },
  {
    id: "baul-music",
    title: "Baul Music & Lalon Fakir",
    description: "A spiritual folk music tradition of Bangladesh.",
    details:
      "Baul music is a mystical tradition focused on spiritual connection and humanism. Lalon Fakir’s teachings emphasize equality, love, and inner truth beyond religion and social boundaries.",
    category: "Culture",
    image:
      "https://appliedsentience.com/wp-content/uploads/2016/02/picture.jpg?w=640",
    imagePrompt: "Baul singer with ektara rural Bangladesh.",
  },
  {
    id: "bengali-hospitality",
    title: "Bengali Hospitality",
    description: "A tradition of warmly welcoming guests.",
    details:
      "Bengali hospitality reflects warmth, respect, and generosity. Guests are treated like family, often welcomed with homemade food and heartfelt care, showing the deep cultural value of kindness.",
    category: "Culture",
    image:
      "https://i.ytimg.com/vi/oU7xxhodx5Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5N9p5FPXqc00cvNK3FwKBtbBcZg",
    imagePrompt: "Family serving guests traditional food Bangladesh.",
  },
  {
    id: "pitha-festival",
    title: "Pitha Festival",
    description: "A winter tradition of making rice cakes.",
    details:
      "The Pitha Festival celebrates rural traditions through homemade rice cakes prepared during winter. It represents family bonding, seasonal joy, and the richness of Bangladeshi food heritage.",
    category: "Culture",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOKisz5QmPH1eUxXSLTwGAArSAu69b6n7Cw&s",
    imagePrompt: "Traditional pitha making Bangladesh winter.",
  },
  {
    id: "jamdani",
    title: "Jamdani Saree",
    description: "A world-famous handwoven saree.",
    details:
      "Jamdani saree is a symbol of artistic excellence and heritage weaving. Its intricate patterns are handcrafted on looms, representing centuries of tradition and global recognition.",
    category: "GI Product",
    image:
      "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x694528/uploads/dten/2023/04/16/jamdani-dt.jpeg?watermark=media%2F2023%2F05%2F28%2F1280px-Dhaka_Tribune_Logo.svg-1-a9e61c86dded62d74300fef48fee558f.png",
    imagePrompt: "Jamdani saree weaving loom intricate design.",
  },
  {
    id: "dhakai-muslin",
    title: "Dhakai Muslin",
    description: "A legendary fine fabric of Bengal.",
    details:
      "Dhakai Muslin was once renowned worldwide for its extremely fine and lightweight texture. It represents the peak of traditional craftsmanship and the lost glory of Bengal’s textile heritage.",
    category: "GI Product",
    image:
      "https://shopnaya.com/cdn/shop/products/image_1b6d41f8-afef-4e64-8abf-d601faf4cb1d_1280x.heic?v=1682101526",
    imagePrompt: "Fine muslin fabric weaving close texture.",
  },
  {
    id: "nakshi-kantha",
    title: "Nakshi Kantha",
    description: "An embroidered quilt with storytelling patterns.",
    details:
      "Nakshi Kantha is a traditional embroidery art where stories, memories, and daily life are stitched into fabric. It reflects creativity, emotion, and rural heritage.",
    category: "Art",
    image:
      "https://www.aramcoworld.com/-/jssmedia/aramco-world/articles/2025/ma25/quilting/a_toc_nakshikantha_reinders_021-2__web.jpg?sc_lang=en&cx=0.37&cy=0.56",
    imagePrompt: "Nakshi Kantha embroidery colorful patterns.",
  },
  {
    id: "rickshaw-art",
    title: "Rickshaw Art",
    description: "Colorful paintings decorating rickshaws.",
    details:
      "Rickshaw art is a unique urban folk art form that transforms everyday transport into moving canvases. It reflects imagination, humor, and vibrant city culture.",
    category: "Art",
    image:
      "https://www.thedailystar.net/sites/default/files/styles/big_1/public/2026-01/Illustrations.jpg?h=acd346f0",
    imagePrompt: "Colorful rickshaw art Bangladesh street.",
  },
  {
    id: "land-of-rivers",
    title: "Land of Rivers",
    description: "A country shaped by rivers.",
    details:
      "Bangladesh is known as the land of rivers, with waterways shaping its geography, agriculture, and daily life. Rivers are central to transportation, livelihood, and culture.",
    category: "Nature",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6--B4TZVatHtmAkT0uhyg9y2TDzO1azQQkQ&s",
    imagePrompt: "River delta Bangladesh aerial boats water.",
  },
  {
    id: "sundarbans",
    title: "Sundarbans & Royal Bengal Tiger",
    description: "The largest mangrove forest in the world.",
    details:
      "The Sundarbans is a unique mangrove ecosystem and a UNESCO World Heritage Site. It is home to diverse wildlife, including the Royal Bengal Tiger, symbolizing natural beauty and ecological importance.",
    category: "Nature",
    image:
      "https://dscdn.daily-sun.com/english/uploads/news_photos/2024/02/17/1708192431-789cd13c4e2cfc4485ef912e271b0770.jpg",
    imagePrompt: "Sundarbans mangrove forest tiger habitat.",
  },
  {
    id: "coxs-bazar",
    title: "Cox’s Bazar",
    description: "The world’s longest sea beach.",
    details:
      "Cox’s Bazar is famous for its uninterrupted sandy coastline and scenic views. It represents natural beauty and is a major attraction for tourism and relaxation.",
    category: "Nature",
    image:
      "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blog1arb4VjtxhzvyUzrt9bZzuI-hlEst52F.jpg",
    imagePrompt: "Coxs Bazar beach sunset waves.",
  },
  {
    id: "saint-martins",
    title: "Saint Martin’s Island",
    description: "The only coral island in Bangladesh.",
    details:
      "Saint Martin’s Island is known for its clear blue waters, coral formations, and peaceful environment. It represents the tropical beauty of Bangladesh’s coastal region.",
    category: "Nature",
    image:
      "https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/st_martins_island.webp",
    imagePrompt: "Saint Martins island clear water coconut trees.",
  },
  {
    id: "haor-region",
    title: "Haor Region",
    description: "A seasonal wetland ecosystem.",
    details:
      "The Haor region transforms into a vast inland sea during monsoon, creating a unique ecosystem. It reflects the close relationship between nature and rural livelihoods.",
    category: "Nature",
    image:
      "https://www.visit-bangladesh.net/wp-content/uploads/2024/11/Haor-in-Bangladesh.jpg",
    imagePrompt: "Haor Bangladesh flooded landscape boats.",
  },
  {
    id: "lalbagh-fort",
    title: "Lalbagh Fort",
    description: "A Mughal-era fort in Dhaka.",
    details:
      "Lalbagh Fort is a historical Mughal structure known for its architecture and cultural significance. It reflects the legacy of Mughal influence in Bengal.",
    category: "History",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/%E0%A6%B2%E0%A6%BE%E0%A6%B2_%E0%A6%95%E0%A7%87%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B0_%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE.jpg",
    imagePrompt: "Lalbagh Fort Dhaka historic building.",
  },
  {
    id: "ahsan-manzil",
    title: "Ahsan Manzil",
    description: "The famous pink palace of Dhaka.",
    details:
      "Ahsan Manzil was the residence of Dhaka’s Nawabs and reflects aristocratic lifestyle and colonial-era architecture.",
    category: "History",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/16/b2/fe/ahsan-monjil.jpg?w=900&h=500&s=1",
    imagePrompt: "Ahsan Manzil pink palace river view.",
  },
  {
    id: "paharpur",
    title: "Paharpur Buddhist Monastery",
    description: "An ancient UNESCO heritage site.",
    details:
      "Paharpur is one of the largest Buddhist monasteries in South Asia, representing ancient education, religion, and architectural excellence.",
    category: "History",
    image:
      "https://cdn.britannica.com/68/178168-050-EED35840/Somapura-Mahavira-Paharpur-Bangladesh.jpg",
    imagePrompt: "Paharpur monastery ruins archaeological site.",
  },
];
