export interface FoodExperience {
  id: string;
  name: string;
  description: string;
  pricePerPerson: number;
  menu: string[];
  dietaryNotes: string;
  duration: string;
}

export const foodExperiences: FoodExperience[] = [
  {
    id: "traditional-set-menu",
    name: "Traditional Bhutanese Set Menu",
    description:
      "A complete traditional Bhutanese meal featuring the country's most beloved dishes, served in authentic style with local ingredients.",
    pricePerPerson: 25,
    menu: [
      "Ema Datshi (chili and cheese stew)",
      "Red Rice",
      "Phaksha Paa (pork with red chilies)",
      "Jasha Maru (spicy chicken)",
      "Kewa Datshi (potato and cheese)",
      "Seasonal vegetables",
      "Suja (butter tea)",
    ],
    dietaryNotes:
      "Vegetarian alternatives available. Contains dairy. Spice level can be adjusted.",
    duration: "1.5 hours",
  },
  {
    id: "royal-feast",
    name: "Royal Bhutanese Feast",
    description:
      "A lavish multi-course feast inspired by royal Bhutanese cuisine, featuring premium ingredients and elaborate presentation.",
    pricePerPerson: 60,
    menu: [
      "Suja (butter tea) welcome drink",
      "Momos (steamed dumplings) - pork and cheese varieties",
      "Sikam Datshi (dried pork with cheese)",
      "Shakam Ema Datshi (dried beef with chili and cheese)",
      "Juma (Bhutanese sausage)",
      "Hoentoe (buckwheat dumplings)",
      "Red rice with multiple accompaniments",
      "Fresh seasonal fruits",
      "Ara (traditional rice wine)",
      "Traditional dessert platter",
    ],
    dietaryNotes:
      "Advance notice needed for vegetarian version. Contains pork, beef, and dairy. Includes alcoholic beverage.",
    duration: "2.5 hours",
  },
  {
    id: "hot-stone-bath-dinner",
    name: "Hot Stone Bath & Dinner",
    description:
      "A unique wellness-dining combination starting with a traditional Bhutanese hot stone bath (Dotsho) followed by a specially prepared dinner.",
    pricePerPerson: 80,
    menu: [
      "Pre-bath herbal tea",
      "Traditional hot stone bath with medicinal herbs",
      "Post-bath Ara (rice wine) or juice",
      "Seasonal soup",
      "Grilled river fish or chicken",
      "Organic vegetable stir-fry",
      "Red rice",
      "Fruit dessert",
    ],
    dietaryNotes:
      "Swimwear required for bath. Not recommended during pregnancy. Vegetarian dinner option available.",
    duration: "3 hours (1 hour bath + 2 hours dinner)",
  },
  {
    id: "farm-to-table",
    name: "Farm-to-Table Experience",
    description:
      "Visit an organic Bhutanese farm, harvest ingredients yourself, and enjoy a freshly prepared meal cooked with your own picks.",
    pricePerPerson: 45,
    menu: [
      "Farm tour and ingredient harvesting",
      "Fresh seasonal salad",
      "Farm-fresh vegetable curry",
      "Organic red rice",
      "Homemade cheese (datshi)",
      "Farm honey with bread",
      "Fresh fruit juice",
      "Herbal tea from garden",
    ],
    dietaryNotes:
      "Naturally vegetarian-friendly. Organic and pesticide-free. Seasonal menu varies.",
    duration: "3 hours (1 hour farm tour + 2 hours cooking and dining)",
  },
  {
    id: "cooking-class",
    name: "Bhutanese Cooking Class",
    description:
      "Learn to cook authentic Bhutanese dishes with a local chef, from ingredient selection at the market to plating your creations.",
    pricePerPerson: 35,
    menu: [
      "Market visit for ingredients",
      "Learn to make Ema Datshi",
      "Momo making workshop",
      "Red rice cooking technique",
      "Ezay (chili sauce) preparation",
      "Enjoy your own creations",
      "Recipe booklet to take home",
      "Suja (butter tea) making",
    ],
    dietaryNotes:
      "Hands-on experience. Aprons provided. Recipes can be adapted for vegetarians.",
    duration: "4 hours",
  },
  {
    id: "candlelight-dinner",
    name: "Romantic Candlelight Dinner",
    description:
      "An exclusive private dining experience for couples in a specially decorated setting with panoramic mountain views and live traditional music.",
    pricePerPerson: 120,
    menu: [
      "Champagne welcome",
      "Amuse-bouche trio",
      "Wild mushroom soup",
      "Pan-seared river trout",
      "Bhutanese-spiced lamb medallions",
      "Saffron red rice",
      "Seasonal vegetable medley",
      "Chocolate and chili dessert",
      "Digestif and local cheese board",
    ],
    dietaryNotes:
      "Price is per couple ($120 per couple). Wine pairing available at extra cost. Dietary restrictions accommodated with advance notice.",
    duration: "2.5 hours",
  },
  {
    id: "riverside-picnic",
    name: "Riverside Picnic",
    description:
      "A curated gourmet picnic by a pristine Bhutanese river, complete with comfortable seating, local delicacies, and natural beauty.",
    pricePerPerson: 50,
    menu: [
      "Artisan bread and local butter",
      "Bhutanese cheese selection",
      "Cold momo platter",
      "Seasonal fruit basket",
      "Smoked trout",
      "Homemade cookies",
      "Thermos of butter tea",
      "Local fruit juice",
    ],
    dietaryNotes:
      "Weather dependent - indoor alternative available. Vegetarian basket option available.",
    duration: "2 hours",
  },
  {
    id: "monastery-tea-ceremony",
    name: "Monastery Tea Ceremony",
    description:
      "A peaceful tea ceremony at a Buddhist monastery, featuring traditional Suja butter tea and simple monk's snacks in a serene spiritual setting.",
    pricePerPerson: 20,
    menu: [
      "Traditional Suja (butter tea)",
      "Ngaja (sweet milk tea)",
      "Zaw (puffed rice)",
      "Khur-le (Bhutanese pancake)",
      "Seasonal dried fruits",
      "Monastery bread",
    ],
    dietaryNotes:
      "Simple, vegetarian fare. Part of the proceeds support the monastery. Dress modestly.",
    duration: "1 hour",
  },
];
