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
        description: "A historic movement to protect the Bangla language, shaping the nation’s identity.",
        details: `The Language Movement of 1952 is a turning point in the history of Bangladesh, where people sacrificed their lives to defend Bangla as their mother tongue.

It was a bold stand against the declaration that Urdu would be the sole state language, leading to widespread protests by students and citizens.

🗣️ Why it matters

This movement laid the foundation for the nation's independence and established the right to cultural identity. Key moments include:

✊ February 21 (Ekushey February) – The tragic day when protesters were killed.
🏛️ Shaheed Minar – The monument built to honor the martyrs.
🌐 International Mother Language Day – Recognized globally by UNESCO to celebrate linguistic diversity.

❤️ The Legacy

The Language Movement is deeply emotional for every Bengali. It symbolizes the unbreakable bond we share with our language and honoring those who fought for freedom and dignity.`,
        category: "History",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrAi2cC5SVf5Q2TwAxFSqk8vAOSREvVs7uw&s",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrAi2cC5SVf5Q2TwAxFSqk8vAOSREvVs7uw&s", "https://upload.wikimedia.org/wikipedia/commons/4/4b/Shaheed_Minar_2013-02-21.jpg"],
        imagePrompt: "Shaheed Minar Dhaka with flowers, people paying tribute on 21 February, emotional atmosphere.",
    },
    {
        id: "liberation-war",
        title: "Liberation War 1971",
        description: "The struggle that led to the independence of Bangladesh.",
        details: `The Liberation War of 1971 led to the creation of Bangladesh as an independent nation. It represents the courage, sacrifice, and determination of people who fought for freedom, dignity, and self-governance.

For nine months, millions of Bengalis from all walks of life united to resist oppression and fight for their fundamental rights.

🔥 The Struggle and Triumph

The war was marked by significant sacrifices and decisive moments:

📢 March 26 – The declaration of independence.
🛡️ Mukti Bahini – The brave freedom fighters who led the resistance.
✌️ December 16 (Victory Day) – The day Bangladesh finally achieved its freedom.

🌍 Global Significance

The birth of Bangladesh is a testament to the power of the human spirit and the fight against injustice, inspiring freedom-loving people around the world.

❤️ Why it matters

The Liberation War is the proudest chapter in the history of Bangladesh. Remembering 1971 unites the nation and reminds future generations of the price paid for the right to live freely and speak fiercely.`,
        category: "History",
        image: "https://www.liberationwarmuseumbd.org/public/images/390695.jpg",
        images: ["https://www.liberationwarmuseumbd.org/public/images/390695.jpg", "https://upload.wikimedia.org/wikipedia/commons/0/07/National_Martyrs%27_Monument_1.jpg"],
        imagePrompt: "Victory Day Bangladesh, National Martyrs Memorial Savar, flags and crowd.",
    },
    {
        id: "pohela-boishakh",
        title: "Pohela Boishakh",
        description: "The Bengali New Year, celebrated with joy, colors, and unity.",
        details: `Pohela Boishakh marks the beginning of the Bengali New Year and represents renewal, hope, and unity. People celebrate with traditional dress, music, fairs, and food, embracing cultural identity beyond all differences.

This day is a spectacular showcase of Bengali culture, marking a fresh start for families and businesses alike.

🎉 How it is Celebrated

The celebrations start at sunrise and continue throughout the day with:

👗 Traditional Attire – Women wear red and white sarees, and men wear panjabis.
🍽️ Festive Food – Eating Panta Bhaat (soaked rice) with Ilish (Hilsa fish) and Bhorta.
🎶 Cultural Programs – Singing traditional songs like "Esho He Boishakh" by Rabindranath Tagore.
🐅 Mangal Shobhajatra – The iconic, colorful procession wishing everyone well-being.

🏙️ Community Spirit

Pohela Boishakh brings together people of all backgrounds, religions, and classes. The streets come alive with fairs (Boishakhi Mela) featuring local crafts, toys, and sweetmeats.

❤️ Why it matters

It is the heart of Bengali secular celebrations, representing joy, inclusivity, and the vibrant cultural roots that connect every Bengali.`,
        category: "Culture",
        image: "https://kitchengatherings.com/wp-content/uploads/tomato-bhorta_pohelaboishakh-parade.jpg",
        images: ["https://kitchengatherings.com/wp-content/uploads/tomato-bhorta_pohelaboishakh-parade.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/9d/Mangal_Shobhajatra_in_Dhaka.jpg"],
        imagePrompt: "Pohela Boishakh celebration, red white dress, colorful rally.",
    },
    {
        id: "mangal-shobhajatra",
        title: "Mangal Shobhajatra",
        description: "A colorful cultural procession promoting peace and unity.",
        details: `Mongol Shobhajatra is one of the most vibrant and meaningful cultural processions in Bangladesh, held every year on Pohela Boishakh, the Bengali New Year.

The tradition began in 1989 at University of Dhaka, initiated by students and teachers of the Faculty of Fine Arts. It was created as a peaceful cultural movement symbolizing resistance against oppression and a celebration of unity, freedom, and hope.

The word “Mongol” means well-being or শুভ (goodness), and “Shobhajatra” means procession. Together, it represents a march for positivity and a better future.

During the procession, people carry large colorful masks, sculptures, and artistic motifs—including tigers, birds, owls, and folklore figures. Each symbol has meaning:

🐯 Tiger – strength and courage
🦉 Owl – wisdom and awareness
🐦 Birds – freedom and peace

Participants dress in traditional Bengali attire—white and red sarees, panjabis—and walk together through the streets, especially around Dhaka University, accompanied by music, drums, and chants.

In 2016, Mongol Shobhajatra was recognized by UNESCO as an Intangible Cultural Heritage of Humanity, highlighting its global cultural importance.

🌍 Why it matters

Mongol Shobhajatra is more than a festival—it is a symbol of cultural identity, inclusiveness, and resilience. It brings together people of all backgrounds, religions, and communities in a shared celebration of life and new beginnings.`,
        category: "Culture",
        image: "https://cdn.bdnews24.com/bdnews24/media/bdnews24-english/import/media/2020/04/14/mongol-shovajatra-1418-140411-02.jpg",
        images: ["https://cdn.bdnews24.com/bdnews24/media/bdnews24-english/import/media/2020/04/14/mongol-shovajatra-1418-140411-02.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/3d/Mangal_Shobhajatra_in_Pohela_Boishakh_2016.jpg"],
        imagePrompt: "Mangal Shobhajatra masks, colorful parade Bangladesh.",
    },
    {
        id: "baul-music",
        title: "Baul Music & Lalon Fakir",
        description: "A spiritual folk music tradition of Bangladesh.",
        details: `Baul is a unique and spiritual folk tradition of Bangladesh, known for its music, philosophy, and way of life. Bauls are wandering minstrels who travel from village to village, singing songs that explore the meaning of life, love, and the human soul.

Rather than following strict religious rules, Bauls believe in a simple idea:
👉 “The divine lives within the human heart.”

🧑‍🎤 Who are the Bauls?

Bauls are not just musicians—they are philosophers and spiritual seekers. They live a simple, often nomadic life, detached from material possessions. Their songs blend ideas from different traditions, including Sufism and Vaishnavism, promoting harmony beyond religion, caste, and social divisions.

One of the most famous Baul figures is Lalon Fakir, whose teachings still inspire generations across Bangladesh and beyond.

🎼 Music and Instruments

Baul songs are deeply emotional and usually performed with simple traditional instruments such as:

🎵 Ektara (one-string instrument)
🥁 Duggi (small drum)
🎶 Khamak (string percussion instrument)

The music is not just for entertainment—it’s a form of meditation and expression of inner truth.

🌍 Global Recognition

Baul songs have gained international appreciation and were recognized by UNESCO as an Intangible Cultural Heritage of Humanity, highlighting their cultural and spiritual importance.

❤️ Why it matters

Baul culture represents the heart of Bengali philosophy—simple living, deep thinking, and universal love. In a world often divided by differences, Baul teachings remind us that:

🕊️ Human connection and inner peace are what truly matter.`,
        category: "Culture",
        image: "https://appliedsentience.com/wp-content/uploads/2016/02/picture.jpg?w=640",
        images: ["https://appliedsentience.com/wp-content/uploads/2016/02/picture.jpg?w=640", "https://upload.wikimedia.org/wikipedia/commons/7/75/Ektara_player.jpg"],
        imagePrompt: "Baul singer with ektara rural Bangladesh.",
    },
    {
        id: "bengali-hospitality",
        title: "Bengali Hospitality",
        description: "A tradition of warmly welcoming guests.",
        details: `Bengali hospitality reflects our deep-rooted cultural belief that guests are a blessing from God. We welcome visitors into our homes with warmth, treating them like family, often serving homemade sweets and tea as a symbol of our heartfelt care.

In Bangladesh, the guest is always the center of attention.

🤝 The Art of Welcoming

When someone visits a Bengali household, they can expect:

☕ Warm Greetings – Served with Cha (tea) and various traditional biscuits or snacks.
🍽️ A Feast – Meals are prepared with love, often featuring special dishes like Polao, meat curry, and fish.
🍰 Sweet Endings – Offering Mishti (sweets) is a must, symbolizing joy and sweet relationships.

🏡 A Sense of Belonging

You are never treated as a stranger in a Bengali home; you instantly become part of the family. The host will often insist you eat more, a pure sign of affection.

❤️ Why it matters

This unmatched warmth defines the soul of Bangladesh. It shows how the culture values human connection, kindness, and building bonds that last a lifetime.`,
        category: "Culture",
        image: "https://i.ytimg.com/vi/oU7xxhodx5Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5N9p5FPXqc00cvNK3FwKBtbBcZg",
        images: ["https://i.ytimg.com/vi/oU7xxhodx5Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5N9p5FPXqc00cvNK3FwKBtbBcZg", "https://upload.wikimedia.org/wikipedia/commons/a/ac/Pitha_utsab_%282%29.jpg"],
        imagePrompt: "Family serving guests traditional food Bangladesh.",
    },
    {
        id: "pitha-festival",
        title: "Pitha Festival",
        description: "A winter tradition of making rice cakes.",
        details: `The Pitha Festival celebrates rural traditions through homemade rice cakes prepared during winter. It represents family bonding, seasonal joy, and the richness of Bangladeshi food heritage.

As the weather cools and new rice (Nobanno) is harvested, villages and cities alike come alive with the sweet aroma of baking and steaming pithas.

🍽️ Varieties of Pitha

There are dozens of unique pithas, each with a distinct flavor and preparation style. Favorites include:

🥞 Bhapa Pitha – Steamed rice cakes filled with jaggery and coconut.
🥟 Patishapta – Thin crepes stuffed with sweet milk pudding (kheer).
🍩 Chitoi Pitha – Savory or sweet round cakes, often eaten with duck curry or date syrup.

👩‍🍳 A Tradition of Love

Making pitha is a communal activity. Grandmothers and mothers gather around the fire, skillfully creating these delicate treats while sharing stories and laughter.

❤️ Why it matters

The Pitha Festival is more than just food—it is a celebration of the harvest, nostalgia, and the warmth of family gatherings during the cold winter months.`,
        category: "Culture",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOKisz5QmPH1eUxXSLTwGAArSAu69b6n7Cw&s",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOKisz5QmPH1eUxXSLTwGAArSAu69b6n7Cw&s", "https://upload.wikimedia.org/wikipedia/commons/1/1b/Pitha_for_Wedding-_Pakan%2C_Patishapta%2C_Bharandash.jpg"],
        imagePrompt: "Traditional pitha making Bangladesh winter.",
    },
    {
        id: "jamdani",
        title: "Jamdani Saree",
        description: "A world-famous handwoven saree.",
        details: `Jamdani is one of the most exquisite and historically rich traditional textiles of Bangladesh. It is a type of finely handwoven fabric, most famous as the elegant Jamdani saree, known for its delicate patterns and airy texture.

The word “Jamdani” comes from Persian:

🌺 “Jam” meaning flower
🏺 “Dani” meaning vase

👉 Together, it reflects the beautiful floral motifs woven into the fabric.

🪡 The Art of Weaving

Jamdani is created using a labor-intensive handloom technique, where skilled artisans carefully weave intricate designs directly into the fabric using a needle-like method.

Each piece is:

✨ Handmade (not machine-produced)
⏳ Time-consuming (can take weeks or even months)
🎨 Unique (no two designs are exactly the same)

Traditionally, Jamdani is woven around the region of Dhaka, especially along the banks of the Shitalakkhya River.

👗 Design & Beauty

Jamdani sarees are usually made on a light, sheer muslin base, decorated with:

🌸 Floral motifs
🔷 Geometric patterns
🌿 Nature-inspired designs

The most classic style is white or off-white with colored motifs, though modern versions come in many colors.

🌍 Global Recognition

Jamdani weaving has been recognized by UNESCO as an Intangible Cultural Heritage of Humanity, honoring its craftsmanship and cultural value.

❤️ Why it matters

Jamdani is not just a fabric—it is a symbol of art, patience, and heritage. It represents the creativity and dedication of Bengali artisans and is proudly worn during festivals, weddings, and cultural events.

For Bangladesh, Jamdani is a national treasure, carrying centuries of tradition into the modern world.`,
        category: "GI Product",
        image: "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x694528/uploads/dten/2023/04/16/jamdani-dt.jpeg?watermark=media%2F2023%2F05%2F28%2F1280px-Dhaka_Tribune_Logo.svg-1-a9e61c86dded62d74300fef48fee558f.png",
        images: ["https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x694528/uploads/dten/2023/04/16/jamdani-dt.jpeg?watermark=media%2F2023%2F05%2F28%2F1280px-Dhaka_Tribune_Logo.svg-1-a9e61c86dded62d74300fef48fee558f.png", "https://upload.wikimedia.org/wikipedia/commons/6/67/%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A7%80_%E0%A6%B6%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A7%80.jpg"],
        imagePrompt: "Jamdani saree weaving loom intricate design.",
    },
    {
        id: "dhakai-muslin",
        title: "Dhakai Muslin",
        description: "A legendary fine fabric of Bengal.",
        details: `Dhakai Muslin is one of the most famous and luxurious fabrics in history, originating from the region of Dhaka in Bangladesh. It was once known as the finest cotton textile in the world, admired for its incredibly soft, light, and almost transparent quality.

So delicate was this fabric that it earned the nickname:
👉 “Woven Air”

🧵 What makes Muslin special?

Dhakai Muslin was made from a special variety of cotton called Phuti Karpas, which grew along the banks of the Meghna River. Combined with the extraordinary skill of local weavers, this produced a fabric that was:

🌬️ Ultra-light and breathable
👁️ Almost invisible when worn
✨ Exceptionally smooth and soft

There’s a famous story that a full-length muslin saree could pass through a finger ring—a testament to its fineness.

👑 A Fabric for Royalty

Dhakai Muslin was highly valued by emperors and elites:

👗 Worn by the royal courts of the Mughal Empire
🚢 Exported to Europe and the Middle East
💎 Loved by aristocrats for its elegance and comfort

It became a global symbol of luxury and sophistication.

⚠️ Decline and Revival

During the colonial period, especially under British rule, the muslin industry declined due to:

🏭 Industrial competition
📖 Loss of traditional knowledge
🚫 Suppression of local textile production

For many years, the art was nearly lost.

Today, Bangladesh is working to revive Dhakai Muslin, rediscovering the ancient techniques and cotton variety to bring this heritage back to life.

❤️ Why it matters

Dhakai Muslin is more than a fabric—it is a symbol of innovation, craftsmanship, and cultural pride. It tells the story of a golden past and a hopeful revival.

It beautifully represents Bangladesh’s identity as a land of artistry, resilience, and heritage.`,
        category: "GI Product",
        image: "https://shopnaya.com/cdn/shop/products/image_1b6d41f8-afef-4e64-8abf-d601faf4cb1d_1280x.heic?v=1682101526",
        images: ["https://shopnaya.com/cdn/shop/products/image_1b6d41f8-afef-4e64-8abf-d601faf4cb1d_1280x.heic?v=1682101526", "https://upload.wikimedia.org/wikipedia/commons/a/a1/Woman%27s_muslin_dress_c._1855.jpg"],
        imagePrompt: "Fine muslin fabric weaving close texture.",
    },
    {
        id: "nakshi-kantha",
        title: "Nakshi Kantha",
        description: "An embroidered quilt with storytelling patterns.",
        details: `Nakshi Kantha is a traditional embroidered quilt from Bangladesh, created by rural women using layers of old sarees and cloth. More than just a piece of fabric, it is a beautiful form of storytelling through stitches.

The word “Nakshi” means artistic or patterned, and “Kantha” means quilt.

🪡 The Art Behind It

Nakshi Kantha is completely handmade, using simple running stitches. Women carefully sew designs onto soft layers of fabric, often spending weeks or even months to complete a single piece.

Each Kantha is:

✨ Unique and personal
🧶 Made from recycled fabric
⏳ A result of patience and dedication

🎨 Designs & Meanings

The patterns are not random—they reflect life, memories, and imagination. Common motifs include:

🌸 Flowers and trees
🐦 Birds and animals
🏡 Village scenes
🔶 Geometric shapes

Sometimes, a Nakshi Kantha tells the story of a woman’s life, dreams, or emotions, making it deeply personal.

👩‍👧 Cultural Significance

Traditionally, Nakshi Kantha was made for:

🛏️ Family use (blankets, covers)
🎁 Gifts for loved ones
🎉 Special occasions like weddings

It represents the creativity and emotional expression of women, especially in rural Bangladesh.

🌍 Why it stands out

In today’s world, Nakshi Kantha is admired globally as:
👉 A form of sustainable art (reusing old fabric)
👉 A symbol of handcrafted beauty and heritage

❤️ Why it matters

Nakshi Kantha is more than a quilt—it is a piece of history, emotion, and identity. Every stitch carries a story, making it one of the most heartfelt expressions of Bangladeshi culture.`,
        category: "Art",
        image: "https://www.aramcoworld.com/-/jssmedia/aramco-world/articles/2025/ma25/quilting/a_toc_nakshikantha_reinders_021-2__web.jpg?sc_lang=en&cx=0.37&cy=0.56",
        images: ["https://www.aramcoworld.com/-/jssmedia/aramco-world/articles/2025/ma25/quilting/a_toc_nakshikantha_reinders_021-2__web.jpg?sc_lang=en&cx=0.37&cy=0.56", "https://upload.wikimedia.org/wikipedia/commons/2/29/Nakshi_kantha1.JPG"],
        imagePrompt: "Nakshi Kantha embroidery colorful patterns.",
    },
    {
        id: "rickshaw-art",
        title: "Rickshaw Art",
        description: "Colorful paintings decorating rickshaws.",
        details: `Rickshaw Art is one of the most colorful and unique forms of folk art in Bangladesh, turning everyday cycle rickshaws into moving pieces of art.

In busy cities like Dhaka, rickshaws are not just a mode of transport—they are mobile galleries, decorated with bright paintings, bold patterns, and creative designs.

🖌️ What makes it special?

Rickshaw art is completely hand-painted, often by local artists who use their imagination freely. The designs are:

🌈 Bright and eye-catching
🎭 Expressive and playful
🎨 Highly detailed and decorative

Common themes include:

🌸 Flowers and nature
🐅 Animals and birds
🎬 Scenes from movies and popular culture
🕌 Religious and cultural symbols

You might even see portraits of film stars or imaginative fantasy scenes—all on the back of a rickshaw!

👨‍🎨 The Artists Behind It

Rickshaw artists are often self-taught and come from traditional artisan communities. Despite limited resources, they create incredibly rich and dynamic artwork, making each rickshaw unique.

🌆 Cultural Significance

Rickshaw art reflects the spirit of everyday life in Bangladesh—lively, creative, and full of personality. It brings art into public spaces, making it accessible to everyone, not just in galleries.

It also tells stories about:

🤝 Social values
📈 Popular trends
💭 Dreams and imagination of ordinary people

🌍 Why it stands out

Unlike formal art forms, Rickshaw Art is:
👉 Affordable, public, and constantly evolving

It transforms something ordinary into something joyful and meaningful—showing how creativity can thrive anywhere.

❤️ Why it matters

Rickshaw art represents the colorful soul of Bangladesh. It’s a reminder that art doesn’t need a canvas in a museum—it can live on the streets, among people, and in everyday life.`,
        category: "Art",
        image: "https://www.thedailystar.net/sites/default/files/styles/big_1/public/2026-01/Illustrations.jpg?h=acd346f0",
        images: ["https://www.thedailystar.net/sites/default/files/styles/big_1/public/2026-01/Illustrations.jpg?h=acd346f0", "https://upload.wikimedia.org/wikipedia/commons/e/ee/Rickshaw_art%2C_Dhaka.jpg"],
        imagePrompt: "Colorful rickshaw art Bangladesh street.",
    },
    {
        id: "land-of-rivers",
        title: "Land of Rivers",
        description: "A country shaped by rivers.",
        details: `Bangladesh is often called the “Land of Rivers” because it is crisscrossed by more than 700 rivers. These rivers shape the country’s geography, culture, and daily life.

The three major rivers are:

🌊 Padma (part of the Ganges)
🌊 Jamuna (part of the Brahmaputra)
🌊 Meghna

Together, they form one of the largest river deltas in the world.

🚣 Why rivers are so important

Rivers are the lifeline of Bangladesh. They play a vital role in:

🌾 Agriculture – providing fertile soil for crops
🚤 Transportation – boats are widely used, especially in rural areas
🎣 Fishing – a major source of food and income
💧 Daily life – water for household and community use

🌿 Natural Beauty & Lifestyle

Life in Bangladesh is deeply connected to rivers:

🚣 People travel by boats
🛶 Floating markets and river trade exist
🏡 Villages are often built along riverbanks

The rivers create stunning landscapes, especially during sunrise and sunset.

⚖️ Challenges

While rivers bring life, they also create challenges:

🌊 Flooding during monsoon seasons
🏝️ River erosion affecting homes and land

Despite this, people have adapted and built a strong, resilient lifestyle around rivers.

❤️ Why it matters

The rivers of Bangladesh are more than geography—they are the heart of the country’s identity. They influence food, culture, economy, and traditions.

👉 Without rivers, Bangladesh would not be the same.`,
        category: "Nature",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6--B4TZVatHtmAkT0uhyg9y2TDzO1azQQkQ&s",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6--B4TZVatHtmAkT0uhyg9y2TDzO1azQQkQ&s", "https://upload.wikimedia.org/wikipedia/commons/f/ff/Padma_river%2C_Rajshahi.jpg"],
        imagePrompt: "River delta Bangladesh aerial boats water.",
    },
    {
        id: "sundarbans",
        title: "Sundarbans & Royal Bengal Tiger",
        description: "The largest mangrove forest in the world.",
        details: `The Sundarbans is the largest mangrove forest on Earth, located in the southern part of Bangladesh, where major rivers meet the Bay of Bengal.

This extraordinary forest is formed by a vast network of:

🌊 Rivers and tidal waterways
🌳 Mangrove trees specially adapted to salty water
🌿 Dense, green natural landscapes

🌱 Unique Ecosystem

What makes the Sundarbans truly special is its unique ecosystem. The mangrove trees have special roots that grow above the ground, helping them survive in waterlogged and salty conditions.

The forest is home to:

🐅 The Royal Bengal Tiger
🐊 Crocodiles
🐍 Snakes
🐦 Hundreds of bird species
🐟 Various fish and aquatic life

It is one of the most biologically diverse regions in the world.

🐅 The Royal Bengal Tiger

The Sundarbans is home to the majestic Royal Bengal Tiger, one of the most iconic and powerful animals in the world.

What makes these tigers unique:

🏊‍♂️ They are excellent swimmers, adapted to the watery environment
🌳 They live in dense mangrove forests, making them mysterious and hard to spot
⚡ They symbolize strength, courage, and beauty

⚖️ Nature and Survival

Life in the Sundarbans is both beautiful and challenging:

🍯 Local communities depend on the forest for fishing and honey collection
🤝 People and wildlife share the same space, creating a delicate balance

Conservation efforts are ongoing to protect both the forest and the tiger.

🌍 Global Importance

The Sundarbans is recognized by UNESCO as a World Heritage Site, due to its ecological significance and natural beauty.

It also plays a crucial role in:

🌪️ Protecting coastal areas from cyclones and storms
🌊 Reducing the impact of natural disasters
🌱 Maintaining environmental balance

❤️ Why it matters

The Sundarbans is not just a forest—it is a lifeline for nature and people. It protects coastal areas from storms and supports thousands of species.

The Royal Bengal Tiger represents the wild spirit of Bangladesh, making this region a symbol of both nature and national pride.`,
        category: "Nature",
        image: "https://dscdn.daily-sun.com/english/uploads/news_photos/2024/02/17/1708192431-789cd13c4e2cfc4485ef912e271b0770.jpg",
        images: ["https://dscdn.daily-sun.com/english/uploads/news_photos/2024/02/17/1708192431-789cd13c4e2cfc4485ef912e271b0770.jpg", "https://upload.wikimedia.org/wikipedia/commons/6/6b/Save_the_sundarbans_20.jpg"],
        imagePrompt: "Sundarbans mangrove forest tiger habitat.",
    },
    {
        id: "coxs-bazar",
        title: "Cox’s Bazar",
        description: "The world’s longest sea beach.",
        details: `Cox’s Bazar is famous for its uninterrupted sandy coastline and scenic views. It represents natural beauty and is a major attraction for tourism and relaxation.

Stretching over 120 kilometers, it is the longest unbroken natural sea beach in the world, where the golden sand meets the blue waters of the Bay of Bengal.

🌊 The Experience

Visitors to Cox's Bazar can enjoy a variety of experiences:

🌅 Stunning Sunsets – Watching the sun dip below the horizon is truly magical.
🏄‍♀️ Beach Activities – From surfing to parasailing, the beach offers endless fun.
🦐 Fresh Seafood – The local markets feature incredibly fresh and delicious coastal cuisine.

🛤️ Beyond the Beach

The area is also culturally and naturally rich, surrounded by:

🌲 Himchari National Park – Known for its beautiful waterfalls and green hills.
🌴 Inani Beach – Famous for its coral boulders and serene atmosphere.

❤️ Why it matters

Cox's Bazar is the crown jewel of Bangladesh tourism. It is a place of peace, natural wonder, and a reminder of the country's vast and breathtaking coastal beauty.`,
        category: "Nature",
        image: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blog1arb4VjtxhzvyUzrt9bZzuI-hlEst52F.jpg",
        images: ["https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blog1arb4VjtxhzvyUzrt9bZzuI-hlEst52F.jpg", "https://upload.wikimedia.org/wikipedia/commons/c/cf/Cox%27s_Bazaar_Sunset_Sep2019.jpg"],
        imagePrompt: "Coxs Bazar beach sunset waves.",
    },
    {
        id: "saint-martins",
        title: "Saint Martin’s Island",
        description: "The only coral island in Bangladesh.",
        details: `Saint Martin’s Island is known for its clear blue waters, coral formations, and peaceful environment. It represents the tropical beauty of Bangladesh’s coastal region.

Located at the southernmost tip of Bangladesh, this small, stunning island is highly cherished for its untouched nature.

🏝️ Natural Wonders

The island is a true tropical paradise, featuring:

🥥 Coconut Groves – Lush green trees swaying in the ocean breeze.
🐠 Coral Reefs – The only coral-bearing island in the country, teeming with marine life.
🐢 Sea Turtles – A safe nesting ground for rare marine turtles.

⛵ A Peaceful Escape

There are no cars or busy roads here. Visitors travel by foot, bicycles, or local vans, enjoying the slow pace of island life.

❤️ Why it matters

Saint Martin's is a fragile and beautiful ecosystem that showcases the pristine marine environment of Bangladesh. It is a symbol of tranquility and the importance of preserving the wonders of nature.`,
        category: "Nature",
        image: "https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/st_martins_island.webp",
        images: ["https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/st_martins_island.webp", "https://upload.wikimedia.org/wikipedia/commons/3/30/St._Martin%27s_Island_Beach.jpg"],
        imagePrompt: "Saint Martins island clear water coconut trees.",
    },
    {
        id: "haor-region",
        title: "Haor Region",
        description: "A seasonal wetland ecosystem.",
        details: `A Haor is a unique type of wetland ecosystem found in the northeastern region of Bangladesh. It is a bowl-shaped lowland area that transforms dramatically with the seasons.

🌦️ A Land of Two Seasons

What makes haors truly fascinating is their seasonal transformation:

🌊 Monsoon (Rainy Season):
The entire area becomes a vast inland sea. Villages appear like islands, and people travel mainly by boat.

🌾 Dry Season (Winter):
The water recedes, revealing fertile land used for farming, especially rice cultivation.

👉 It’s like one place with two completely different landscapes.

🐟 Life and Livelihood

Haors are rich in natural resources and support many livelihoods:

🎣 Fishing is a major source of income
🌾 Farming during the dry season
🚣 Boat transport during monsoon

People living in haor areas have adapted to this changing environment with a unique lifestyle.

🐦 Biodiversity

Haors are also important for wildlife:

🦩 Home to many migratory birds in winter
🐟 Rich in fish species
🌿 Supports diverse aquatic plants

They are considered one of the most ecologically important wetland systems in Bangladesh.

⚖️ Challenges

Life in haor regions can be difficult:

🌊 Sudden floods can damage crops
🌧️ Extreme weather affects livelihoods

Yet, people continue to live there with resilience and adaptability.

❤️ Why it matters

Haor represents the beauty and adaptability of nature and people. It shows how humans can live in harmony with a constantly changing environment.`,
        category: "Nature",
        image: "https://www.visit-bangladesh.net/wp-content/uploads/2024/11/Haor-in-Bangladesh.jpg",
        images: ["https://www.visit-bangladesh.net/wp-content/uploads/2024/11/Haor-in-Bangladesh.jpg", "https://upload.wikimedia.org/wikipedia/commons/6/64/Tanguar_haor.jpg"],
        imagePrompt: "Haor Bangladesh flooded landscape boats.",
    },
    {
        id: "ilish",
        title: "Ilish (Hilsa Fish)",
        description: "The national fish of Bangladesh, famous for its unique taste.",
        details: `Ilish is deeply rooted in Bengali culture and cuisine, often considered the king of fishes in Bangladesh. It plays a highly significant role in the economy and traditional festivals.

Its unique, rich flavor and soft texture make it a culinary masterpiece that every Bengali cherishes.

🐟 The King of Fishes

Ilish is not just a food item; it is an emotion. It is famously prepared in various mouth-watering ways:

🍛 Shorshe Ilish – Cooked in a pungent mustard paste, it is an absolute classic.
♨️ Bhapa Ilish – Delicately steamed inside banana leaves or a traditional tiffin box.
🍳 Ilish Bhaja – Crispy fried slices served with its flavorful roe.

🌊 Journey of the Ilish

The fish is anadromous—it lives in the sea but swims up the freshwater rivers like the Padma and Meghna to spawn. The Padma Ilish is considered the most delicious due to the unique water conditions.

❤️ Why it matters

Recognized as a Geographical Indication (GI) product of Bangladesh, Ilish represents the country’s maritime richness. It is a symbol of celebration, prosperity, and the unparalleled taste of Bengali heritage.`,
        category: "GI Product",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/BHilsa123.jpg",
        images: ["https://upload.wikimedia.org/wikipedia/commons/d/d3/BHilsa123.jpg"],
        imagePrompt: "Ilish fish silver traditional hilsha.",
    },
    {
        id: "sakrain",
        title: "Sakrain Festival",
        description: "The traditional Kite Festival of Old Dhaka.",
        details: `Sakrain, also known as the Kite Festival of Bangladesh, is one of the oldest traditional festivals celebrated mainly in Old Dhaka. It takes place every year on January 14, marking the end of the Bengali month Poush and celebrating the transition of the sun—similar to harvest festivals in many cultures.

During the day, the skies of Old Dhaka become a breathtaking canvas filled with hundreds of colorful kites. People of all ages gather on rooftops, flying kites and competing with each other by cutting opponents’ kite strings—a fun and energetic tradition.

As the sun sets, the celebration transforms into something even more magical. The rooftops come alive with:

🔥 Fire performances (Agun khela)
🎆 Fireworks and light shows
🎶 Music, dancing, and festive gatherings

Young performers showcase incredible fire tricks, spinning flames in the dark sky, creating a dramatic and unforgettable atmosphere.

🌆 Cultural Significance

Sakrain is more than just flying kites—it reflects the community spirit and vibrant lifestyle of Old Dhaka. Families, friends, and neighbors come together, strengthening social bonds and celebrating tradition across generations.

It is a festival full of energy, creativity, and friendly competition, where the rooftops become stages and the sky becomes a playground.`,
        category: "Culture",
        image: "https://kalerkantho.com/assets/news_images/2022/01/14/sakrain.jpg",
        images: ["https://kalerkantho.com/assets/news_images/2022/01/14/sakrain.jpg", "https://upload.wikimedia.org/wikipedia/commons/4/4b/Shakrain_Festival.jpg"],
        imagePrompt: "Sakrain kite festival Old Dhaka fireworks fire spitting colorful kites."
    },
    {
        id: "jatra",
        title: "Jatra (Folk Theatre)",
        description: "A traditional form of folk theatre in Bangladesh.",
        details: `Jatra is a traditional form of folk theatre in Bangladesh, known for its dramatic storytelling, powerful dialogues, and musical performances. It is one of the most popular forms of rural entertainment and has been enjoyed for generations across the country.

The word “Jatra” originally means “journey”, reflecting how the performance takes the audience on an emotional and moral journey through stories.

🎬 What makes Jatra unique?

Jatra is usually performed on open-air stages, often in villages or small towns, especially during festivals and winter nights. The performances are:

🎤 Loud and expressive – Actors use strong voice projection and exaggerated gestures
🎶 Musical – Songs and background music are essential parts of the storytelling
🎨 Colorful – Bright costumes, dramatic makeup, and vibrant sets

Stories in Jatra often include:

📜 Mythological tales
⏳ Historical events
⚖️ Social and political issues
🕊️ Moral lessons about good vs evil

👥 Performance Style

Unlike modern theatre, Jatra is very interactive and emotional. Actors directly engage with the audience, creating a lively atmosphere where people laugh, cry, and react together.

Traditionally, performances could last several hours or even all night, making it a major community event where families and neighbors gather.

🌍 Cultural Importance

Jatra plays a vital role in preserving Bengali language, storytelling, and cultural values. It has also been a powerful medium for spreading awareness about social issues in an accessible way, especially in rural areas.

❤️ Why it matters

Jatra is more than just entertainment—it is a living tradition of storytelling and community bonding. It reflects the emotions, struggles, and dreams of ordinary people, keeping cultural heritage alive across generations.`,
        category: "Culture",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Jatra_Performance_in_Bangladesh.jpg",
        images: ["https://upload.wikimedia.org/wikipedia/commons/d/df/Jatra_Performance_in_Bangladesh.jpg"],
        imagePrompt: "Jatra folk theatre performance rural Bangladesh open air stage."
    }
];
