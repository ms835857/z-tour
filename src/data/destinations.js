// Destination details with category and graph links

export const destinations = [
  {
    id: "lahore",
    name: "Lahore",
    category: "City",
    description: "The cultural heart of Pakistan, known for its rich Mughal heritage, bustling streets, and world-renowned food scene.",
    rating: 4.8,
    links: ["islamabad", "multan"]
  },
  {
    id: "hunza",
    name: "Hunza Valley",
    category: "Nature",
    description: "A spectacular mountainous valley in Gilgit-Baltistan featuring the towering Rakaposhi and ancient Baltit Fort.",
    rating: 4.9,
    links: ["skardu", "naran", "naran_kaghan"]
  },
  {
    id: "swat",
    name: "Swat Valley",
    category: "Nature",
    description: "Often called the Switzerland of the East, Swat is famous for its lush green alpine meadows, clear rivers, and snow-capped peaks.",
    rating: 4.7,
    links: ["islamabad", "peshawar", "naran_kaghan"]
  },
  {
    id: "islamabad",
    name: "Islamabad",
    category: "City",
    description: "The serene capital city, nestled against the Margalla Hills, noted for its high standards of living, safety, and abundant greenery.",
    rating: 4.6,
    links: ["lahore", "swat", "murree", "peshawar"]
  },
  {
    id: "karachi",
    name: "Karachi",
    category: "City",
    description: "Pakistan's largest metropolis and financial hub, offering beautiful beaches along the Arabian Sea and diverse cuisine.",
    rating: 4.5,
    links: ["mohenjo_daro", "quetta", "lahore", "multan"]
  },
  {
    id: "murree",
    name: "Murree",
    category: "Nature",
    description: "A popular mountain resort town located in the Galyat region, featuring colonial-era architecture and scenic viewpoints.",
    rating: 4.3,
    links: ["islamabad", "naran_kaghan"]
  },
  {
    id: "skardu",
    name: "Skardu",
    category: "Nature",
    description: "A major tourism and trekking hub leading to some of the highest mountains in the world, including K2 and the Karakoram range.",
    rating: 4.8,
    links: ["hunza", "fairy_meadows"]
  },
  {
    id: "naran_kaghan",
    name: "Naran & Kaghan",
    category: "Nature",
    description: "Twin valleys renowned for their alpine climate, the legendary Lake Saif-ul-Malook, and breathtaking scenery.",
    rating: 4.7,
    links: ["swat", "hunza", "murree"]
  },
  {
    id: "fairy_meadows",
    name: "Fairy Meadows",
    category: "Nature",
    description: "A lush green plateau near the base of Nanga Parbat, offering some of the most striking views of the 'Killer Mountain'.",
    rating: 4.9,
    links: ["skardu", "hunza"]
  },
  {
    id: "mohenjo_daro",
    name: "Mohenjo-daro",
    category: "Heritage",
    description: "An archaeological site in Sindh containing the fascinating ruins of one of the largest settlements of the ancient Indus Valley Civilization.",
    rating: 4.7,
    links: ["karachi", "multan"]
  },
  {
    id: "peshawar",
    name: "Peshawar",
    category: "Heritage",
    description: "One of the oldest continuously inhabited cities in South Asia, rich in history, and the gateway to the Khyber Pass.",
    rating: 4.6,
    links: ["islamabad", "swat"]
  },
  {
    id: "quetta",
    name: "Quetta",
    category: "City",
    description: "The capital of Balochistan, surrounded by rugged mountains and known for its fruit orchards and Hanna Lake.",
    rating: 4.4,
    links: ["karachi", "multan"]
  },
  {
    id: "multan",
    name: "Multan",
    category: "Heritage",
    description: "The City of Saints, boasting beautifully adorned Sufi shrines and a vibrant history stretching back thousands of years.",
    rating: 4.5,
    links: ["lahore", "karachi", "mohenjo_daro", "quetta"]
  }
];
