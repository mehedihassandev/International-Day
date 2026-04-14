export interface Fact {
  id: string;
  title: string;
  description: string;
  details: string;
  category: "Culture" | "History" | "Nature" | "Art" | "GI Product";
  image: string;
  images?: string[];
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
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrAi2cC5SVf5Q2TwAxFSqk8vAOSREvVs7uw&s",
      "https://www.bssnews.net/assets/news_photos/2024/01/31/image-171077-1706705804.jpg",
      "https://bangladeshonrecord.com/Image/rare-images-of-the-language-movement/15_ekushey/",
    ],
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
    images: [
      "https://www.liberationwarmuseumbd.org/public/images/390695.jpg",
      "https://dscdn.daily-sun.com/english/uploads/news_photos/2019/12/16/Daily-sun-2019-12-16-39.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokaXNPwda3lpbu_5IjD0BA2-H-5BJPhkXcA&s",
    ],
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
      "https://d2u0ktu8omkpf6.cloudfront.net/509b9ab0972a9a94f75c1e82e98296e8f0021c7ebae33c6e.jpg",
    images: [
      "https://d2u0ktu8omkpf6.cloudfront.net/509b9ab0972a9a94f75c1e82e98296e8f0021c7ebae33c6e.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Mangal_Shobhajatra_in_Dhaka.jpg",
      "https://www.shutterstock.com/image-photo/london-uk-63019-people-taking-600nw-1438261067.jpg",
    ],
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
    images: [
      "https://cdn.bdnews24.com/bdnews24/media/bdnews24-english/import/media/2020/04/14/mongol-shovajatra-1418-140411-02.jpg",
      "https://www.thedailystar.net/sites/default/files/styles/big_1/public/images/2025/03/24/received_1151567285675566.jpg?h=8af371aa",
      "https://cdn.jagonews24.com/media/imgAllNew/BG/2016October/mongol-shovajatra-large2016113019130620170227205742.jpg",
    ],
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
    images: [
      "https://toursntripsbd.com/wp-content/uploads/2016/12/Eid-al-Fitr-1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Eid_al-Fitr_In_Bangladesh.jpg",
      "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2021/05/whatsapp-image-2021-05-14-at-2-18-06-pm-2-1620984098519.jpg",
    ],
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
    images: [
      "https://appliedsentience.com/wp-content/uploads/2016/02/picture.jpg?w=640",
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Ektara_player.jpg",
      "https://i1.sndcdn.com/artworks-000125092260-0q3d46-t500x500.jpg",
      "https://www.lalongeeti.com/wp-content/uploads/2014/08/Fakir-Lalon-Shah.jpg",
    ],
    imagePrompt: "Baul singer with ektara rural Bangladesh.",
  },
  {
    id: "bengali-hospitality",
    title: "Bengali Hospitality",
    description: "A tradition of warmly welcoming guests.",
    details:
      "Bengali hospitality reflects our deep-rooted cultural belief that guests are a blessing from God. We welcome visitors into our homes with warmth, treating them like family, often serving homemade sweets and tea as a symbol of our heartfelt care.",
    category: "Culture",
    image:
      "https://i.ytimg.com/vi/oU7xxhodx5Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5N9p5FPXqc00cvNK3FwKBtbBcZg",
    images: [
      "https://i.ytimg.com/vi/oU7xxhodx5Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5N9p5FPXqc00cvNK3FwKBtbBcZg",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Bangladeshi_villagers_and_foreigner.jpg",
      "https://medicalstudybd.com/wp-content/uploads/2023/10/The-Foreign-Student-life-in-Bangladesh-1024x683.jpg",
    ],
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
      "https://www.xinhuanet.com/english/2020-01/07/138684412_15783642301331n.jpg",
    images: [
      "https://www.xinhuanet.com/english/2020-01/07/138684412_15783642301331n.jpg",
      "https://www.globaltimes.cn/Portals/0/attachment/2021/2021-03-01/af423214-321f-40b1-8b2f-6d26b198ae53.jpeg",
      "https://assets.wpdeveloper.com/2023/01/FB_IMG_1673868252107.jpg",
    ],
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
      "https://pinkloom.com/cdn/shop/articles/4_77dca814-1376-4d37-851e-13b08bb6650c.jpg?v=1679221348&width=1024",
    images: [
      "https://pinkloom.com/cdn/shop/articles/4_77dca814-1376-4d37-851e-13b08bb6650c.jpg?v=1679221348&width=1024",
      "https://mavuris.com/cdn/shop/products/1000009831_2.jpg?v=1756221050&width=533",
      "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x694528/uploads/dten/2023/04/16/jamdani-dt.jpeg?watermark=media%2F2023%2F05%2F28%2F1280px-Dhaka_Tribune_Logo.svg-1-a9e61c86dded62d74300fef48fee558f.png",
    ],
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
    images: [
      "https://shopnaya.com/cdn/shop/products/image_1b6d41f8-afef-4e64-8abf-d601faf4cb1d_1280x.heic?v=1682101526",
      "https://static.wixstatic.com/media/4f80ea_b2f6a20f3aad47c1bf704e0d61739b1e~mv2.jpeg/v1/fill/w_1000,h_796,al_c,q_85,usm_0.66_1.00_0.01/4f80ea_b2f6a20f3aad47c1bf704e0d61739b1e~mv2.jpeg",
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F17b1ab4a-863e-41f8-86d2-4327eda058aa_1880x1253.jpeg",
    ],
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
    images: [
      "https://www.aramcoworld.com/-/jssmedia/aramco-world/articles/2025/ma25/quilting/a_toc_nakshikantha_reinders_021-2__web.jpg?sc_lang=en&cx=0.37&cy=0.56",
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Nakshi_kantha1.JPG",
      "https://textiletoday.com.bd/storage/uploads/2018/12/Nakshi-kantha-ff.jpg",
    ],
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
    images: [
      "https://www.thedailystar.net/sites/default/files/styles/big_1/public/2026-01/Illustrations.jpg?h=acd346f0",
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Rickshaw_back_decoration.jpg",
    ],
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
      "https://cdn.britannica.com/69/6269-050-7EE9410A/Boat-traffic-Buriganga-River-Bangladesh-Dhaka.jpg",
    images: [
      "https://cdn.britannica.com/69/6269-050-7EE9410A/Boat-traffic-Buriganga-River-Bangladesh-Dhaka.jpg",
      "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67f5c053601d97001d1924c6.jpg",
      "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/18968868/bangladesh_river_GettyImages_1159478392.jpg?quality=90&strip=all&crop=0.036307053941911%2C0%2C99.927385892116%2C100&w=2400",
    ],
    imagePrompt: "River delta Bangladesh aerial boats water.",
  },
  {
    id: "sundarbans",
    title: "Sundarbans & Royal Bengal Tiger",
    description: "The largest mangrove forest in the world.",
    details:
      "The Sundarbans is a unique mangrove ecosystem and a UNESCO World Heritage Site. It is home to diverse wildlife, including the Royal Bengal Tiger, symbolizing natural beauty and ecological importance.",
    category: "Nature",
    image: "https://i.ytimg.com/vi/3EBdZEXeNnA/maxresdefault.jpg",
    images: [
      "https://i.ytimg.com/vi/3EBdZEXeNnA/maxresdefault.jpg",
      "https://www.thestatesman.com/wp-content/uploads/2021/06/QT-O-4.jpg",
      "https://www.dztraveler.com/wp-content/uploads/2015/12/DSC_7211-Edit-3.jpg",
    ],
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
      "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg",
    images: [
      "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg",
      "https://images.trvl-media.com/place/956/6a04204d-7cda-4114-940a-60e1017eac42.jpg",
      "https://media.licdn.com/dms/image/v2/D4D12AQFEiDqmK8IE9Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655648195177?e=2147483647&v=beta&t=14XPHr05V2PHZoIc_nsAeWUzz5weNLg2g6BRNJSKRSo",
    ],
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
      "https://www.travelmate.com.bd/wp-content/uploads/2019/07/St.-Martins-Island-1024x768.jpg",
    images: [
      "https://www.travelmate.com.bd/wp-content/uploads/2019/07/St.-Martins-Island-1024x768.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Saint_Martins_Island_with_boats_in_foreground.jpg",
      "https://www.thedailystar.net/sites/default/files/images/2022/09/21/saief_al_emon.jpg",
    ],
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
      "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2023/07/05/tanguar_haor_river_wetland_1.jpg",
    images: [
      "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2023/07/05/tanguar_haor_river_wetland_1.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/50/e2/9b/tanguar-haor-floating.jpg?w=1200&h=-1&s=1",
      "https://freshwaterbiodiversity.org.bd/wp-content/uploads/2024/08/tanguar-haor-dreamlike-aquatic-serenity.jpeg",
    ],
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
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/43/%E0%A6%B2%E0%A6%BE%E0%A6%B2_%E0%A6%95%E0%A7%87%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B0_%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE.jpg",
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ewkhbcwis1oc2myupgbl/LalbaghFortAdmissionTicketinDhaka.jpg",
      "https://d34vm3j4h7f97z.cloudfront.net/original/3X/d/c/dc9170786b302a14360081e7a1bd0a5e3c00d609.jpeg",
    ],
    imagePrompt: "Lalbagh Fort Dhaka historic building.",
  },
  {
    id: "ilish",
    title: "Ilish (Hilsa Fish)",
    description:
      "The national fish of Bangladesh, famous for its unique taste.",
    details:
      "Ilish is deeply rooted in Bengali culture and cuisine, often considered the king of fishes in Bangladesh. It plays a highly significant role in the economy and traditional festivals.",
    category: "GI Product",
    image:
      "https://seafoodnetworkbd.com/wp-content/uploads/2023/10/Hilsa_fish_ilish_fish_bangladesh.jpg",
    images: [
      "https://seafoodnetworkbd.com/wp-content/uploads/2023/10/Hilsa_fish_ilish_fish_bangladesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A7%87_%E0%A6%87%E0%A6%B2%E0%A6%BF%E0%A6%B6.jpg/1280px-%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A7%87_%E0%A6%87%E0%A6%B2%E0%A6%BF%E0%A6%B6.jpg",
    ],
    imagePrompt: "Ilish fish silver traditional hilsha.",
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
    images: [
      "https://cdn.britannica.com/68/178168-050-EED35840/Somapura-Mahavira-Paharpur-Bangladesh.jpg",
      "https://koryogroup.com/uploads/blog/1635/original-Paharpur_Buddhist_Monastery.jpg?1736904759",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/%E0%A6%AA%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%AC%E0%A7%8C%E0%A6%A6%E0%A7%8D%E0%A6%A7_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0_-_Paharpur_Buddhist_Monastery.jpg/1280px-%E0%A6%AA%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%AC%E0%A7%8C%E0%A6%A6%E0%A7%8D%E0%A6%A7_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0_-_Paharpur_Buddhist_Monastery.jpg",
    ],
    imagePrompt: "Paharpur monastery ruins archaeological site.",
  },
];
