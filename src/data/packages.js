const agentLogos = {
  nomad: '🏔️',
  pakvoyager: '🧭',
  summit: '⛰️',
  wanderlust: '✈️',
  heritage: '🕌',
};

export const packages = {

  lahore: [
    {
      id: 'lhr-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Royal Mughal Experience',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '3 Days / 2 Nights',
      rating: 4.8,
      groupSize: '2-15 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Badshahi Mosque & Lahore Fort',
        'Old Lahore food trail with 8+ stops',
        'Evening visit to Minar-e-Pakistan',
        'Traditional Sufi music night at Shalimar Gardens',
      ],
      includes: ['Boutique Hotel', 'All Meals', 'AC Transport', 'Licensed Guide'],
    },
    {
      id: 'lhr-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Lahore Food Safari',
      price: 'PKR 18,000',
      priceValue: 18000,
      duration: '2 Days / 1 Night',
      rating: 4.6,
      groupSize: '4-10 people',
      difficulty: 'Easy',
      highlights: [
        '12 curated street food stops in Anarkali & Food Street',
        'Cooking class with local chef',
        'Historical walk through Walled City',
      ],
      includes: ['Guest House', 'All Meals', 'Walking Guide'],
    },
    {
      id: 'lhr-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Cultural Immersion Week',
      price: 'PKR 72,000',
      priceValue: 72000,
      duration: '7 Days / 6 Nights',
      rating: 4.9,
      groupSize: '2-8 people',
      difficulty: 'Easy',
      highlights: [
        'Complete heritage site tour across Punjab',
        'Workshops: pottery, truck art, and calligraphy',
        'Day trip to Wagah Border ceremony',
        'Exclusive rooftop dinner with city views',
      ],
      includes: ['4-Star Hotel', 'All Meals', 'Private Car', 'Expert Guide', 'Workshop Materials'],
    },
    {
      id: 'lhr-4',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend City Break',
      price: 'PKR 22,000',
      priceValue: 22000,
      duration: '2 Days / 1 Night',
      rating: 4.4,
      groupSize: '2-20 people',
      difficulty: 'Easy',
      highlights: [
        'Top 5 landmarks express tour',
        'Shopping at Liberty & Anarkali',
        'Night food adventure',
      ],
      includes: ['Hotel', 'Breakfast', 'Transport'],
    },
  ],

  hunza: [
    {
      id: 'hnz-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Hunza Valley Explorer',
      price: 'PKR 85,000',
      priceValue: 85000,
      duration: '7 Days / 6 Nights',
      rating: 4.9,
      groupSize: '4-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Drive along the Karakoram Highway',
        'Visit Baltit & Altit Forts',
        'Attabad Lake boating experience',
        'Sunrise at Eagle\'s Nest viewpoint',
      ],
      includes: ['Mountain Lodge', 'All Meals', 'Jeep Transport', 'Local Guide', 'Permits'],
    },
    {
      id: 'hnz-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'KKH Road Trip',
      price: 'PKR 65,000',
      priceValue: 65000,
      duration: '5 Days / 4 Nights',
      rating: 4.7,
      groupSize: '2-8 people',
      difficulty: 'Moderate',
      highlights: [
        'Islamabad to Hunza scenic drive',
        'Passu Cones & Suspension Bridge',
        'Local apricot farm visit',
        'Stargazing at Borith Lake',
      ],
      includes: ['Guest House', 'Breakfast & Dinner', '4x4 Vehicle', 'Driver-Guide'],
    },
    {
      id: 'hnz-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Hunza Premium Retreat',
      price: 'PKR 120,000',
      priceValue: 120000,
      duration: '8 Days / 7 Nights',
      rating: 5.0,
      groupSize: '2-6 people',
      difficulty: 'Easy',
      highlights: [
        'Luxury resort stay with Rakaposhi views',
        'Private photography tour',
        'Traditional Hunza cuisine cooking class',
        'Helicopter transfer option available',
      ],
      includes: ['Luxury Resort', 'All Meals', 'Private 4x4', 'Photography Guide', 'All Permits'],
    },
  ],

  swat: [
    {
      id: 'swt-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Switzerland of the East',
      price: 'PKR 55,000',
      priceValue: 55000,
      duration: '5 Days / 4 Nights',
      rating: 4.7,
      groupSize: '4-15 people',
      difficulty: 'Moderate',
      highlights: [
        'Mingora city tour & Swat Museum',
        'Trek to Ushu Forest',
        'Visit Mahodand Lake',
        'Ancient Buddhist ruins at Butkara',
      ],
      includes: ['Hotel', 'All Meals', 'Coaster Transport', 'Guide', 'Entry Tickets'],
    },
    {
      id: 'swt-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Malam Jabba Weekend',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '3 Days / 2 Nights',
      rating: 4.5,
      groupSize: '2-10 people',
      difficulty: 'Easy',
      highlights: [
        'Skiing/chairlift at Malam Jabba Resort',
        'Fizagat Park riverside picnic',
        'White Palace visit',
      ],
      includes: ['Resort Stay', 'Breakfast', 'Transport', 'Ski Pass'],
    },
    {
      id: 'swt-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Buddhist Heritage Tour',
      price: 'PKR 42,000',
      priceValue: 42000,
      duration: '4 Days / 3 Nights',
      rating: 4.8,
      groupSize: '2-8 people',
      difficulty: 'Easy',
      highlights: [
        'Comprehensive Gandhara civilization sites',
        'Butkara Stupa archaeological visit',
        'Swat Museum guided tour',
        'Jehandad Castle exploration',
      ],
      includes: ['Hotel', 'All Meals', 'Private Car', 'Archaeology Guide'],
    },
  ],

  islamabad: [
    {
      id: 'isb-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Capital City Experience',
      price: 'PKR 32,000',
      priceValue: 32000,
      duration: '3 Days / 2 Nights',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Faisal Mosque & Pakistan Monument',
        'Margalla Hills Trail 5 hike',
        'Daman-e-Koh sunset viewpoint',
        'Lok Virsa Museum & cultural show',
      ],
      includes: ['4-Star Hotel', 'Breakfast', 'AC Transport', 'Guide'],
    },
    {
      id: 'isb-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Twin Cities Explorer',
      price: 'PKR 25,000',
      priceValue: 25000,
      duration: '2 Days / 1 Night',
      rating: 4.4,
      groupSize: '4-20 people',
      difficulty: 'Easy',
      highlights: [
        'Islamabad & Rawalpindi highlights tour',
        'Raja Bazaar shopping experience',
        'Saidpur Village dining',
      ],
      includes: ['Hotel', 'Breakfast', 'Transport'],
    },
    {
      id: 'isb-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Margalla Trek & Camp',
      price: 'PKR 15,000',
      priceValue: 15000,
      duration: '1 Day',
      rating: 4.5,
      groupSize: '6-15 people',
      difficulty: 'Moderate',
      highlights: [
        'Trail 3 to Trail 5 ridge hike',
        'Packed lunch at summit viewpoint',
        'Bird watching with expert',
      ],
      includes: ['Transport', 'Packed Lunch', 'Hiking Guide', 'Safety Gear'],
    },
  ],

  karachi: [
    {
      id: 'krc-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Karachi Coastal Escape',
      price: 'PKR 38,000',
      priceValue: 38000,
      duration: '3 Days / 2 Nights',
      rating: 4.5,
      groupSize: '2-10 people',
      difficulty: 'Easy',
      highlights: [
        'Clifton & Sea View beach tour',
        'Boat ride to Manora Island',
        'Port Grand food & shopping',
        'Mohatta Palace Museum visit',
      ],
      includes: ['Beach Resort', 'All Meals', 'Transport', 'Boat Tickets'],
    },
    {
      id: 'krc-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Historical Karachi Walk',
      price: 'PKR 20,000',
      priceValue: 20000,
      duration: '2 Days / 1 Night',
      rating: 4.3,
      groupSize: '4-15 people',
      difficulty: 'Easy',
      highlights: [
        'Quaid-e-Azam Mausoleum & Museum',
        'Empress Market & Saddar heritage walk',
        'Frere Hall gardens & art gallery',
      ],
      includes: ['Hotel', 'Breakfast', 'Walking Guide'],
    },
    {
      id: 'krc-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Karachi Nightlife & Food',
      price: 'PKR 15,000',
      priceValue: 15000,
      duration: '1 Day',
      rating: 4.6,
      groupSize: '4-12 people',
      difficulty: 'Easy',
      highlights: [
        'Burns Garden to Do Darya food crawl',
        '15+ dishes across 6 restaurants',
        'Evening boat ride at Keamari',
      ],
      includes: ['All Food', 'Transport', 'Food Guide'],
    },
  ],

  murree: [
    {
      id: 'mrr-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Murree Classic Getaway',
      price: 'PKR 22,000',
      priceValue: 22000,
      duration: '2 Days / 1 Night',
      rating: 4.3,
      groupSize: '2-15 people',
      difficulty: 'Easy',
      highlights: [
        'Mall Road shopping & dining',
        'Pindi Point chairlift ride',
        'Patriata cable car experience',
      ],
      includes: ['Hill Resort', 'Breakfast', 'Transport'],
    },
    {
      id: 'mrr-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Galyat Mountain Trail',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '3 Days / 2 Nights',
      rating: 4.6,
      groupSize: '4-10 people',
      difficulty: 'Moderate',
      highlights: [
        'Nathia Gali to Ayubia forest trek',
        'Pipeline Track scenic walk',
        'Mushkpuri Top sunrise hike',
        'Dunga Gali pine forest camping',
      ],
      includes: ['Lodge Stay', 'All Meals', 'Trekking Guide', 'Camping Gear'],
    },
    {
      id: 'mrr-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Winter Snow Experience',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '2 Days / 1 Night',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Snow activities at Ghora Gali',
        'Hot chocolate & bonfire night',
        'Photography session in snow-covered pines',
      ],
      includes: ['Heated Resort', 'All Meals', 'Transport', 'Snow Gear'],
    },
  ],

  skardu: [
    {
      id: 'skd-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Skardu Grand Explorer',
      price: 'PKR 95,000',
      priceValue: 95000,
      duration: '8 Days / 7 Nights',
      rating: 4.9,
      groupSize: '4-10 people',
      difficulty: 'Challenging',
      highlights: [
        'Shangrila Resort & Lower Kachura Lake',
        'Upper Kachura Lake trek',
        'Deosai National Park safari',
        'Satpara Lake & Buddha Rock',
      ],
      includes: ['Mountain Lodge', 'All Meals', 'Jeep Transport', 'Guide', 'All Permits'],
    },
    {
      id: 'skd-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'K2 Base Camp Trek',
      price: 'PKR 180,000',
      priceValue: 180000,
      duration: '14 Days / 13 Nights',
      rating: 5.0,
      groupSize: '2-6 people',
      difficulty: 'Challenging',
      highlights: [
        'K2 Base Camp via Concordia',
        'Baltoro Glacier crossing',
        'Urdukas & Gore campsite stays',
        'Certified mountain guide provided',
      ],
      includes: ['Camping Equipment', 'All Meals', 'Porters', 'Mountain Guide', 'Emergency Satellite Phone'],
    },
    {
      id: 'skd-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Deosai Plateau Trip',
      price: 'PKR 55,000',
      priceValue: 55000,
      duration: '4 Days / 3 Nights',
      rating: 4.7,
      groupSize: '4-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Deosai — the Land of Giants',
        'Brown bear spotting expedition',
        'Sheosar Lake camping',
        'Stargazing at 4,000m altitude',
      ],
      includes: ['Camps & Lodge', 'All Meals', 'Jeep', 'Wildlife Guide'],
    },
  ],

  naran_kaghan: [
    {
      id: 'nk-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Naran Kaghan Classic',
      price: 'PKR 45,000',
      priceValue: 45000,
      duration: '5 Days / 4 Nights',
      rating: 4.7,
      groupSize: '4-15 people',
      difficulty: 'Moderate',
      highlights: [
        'Lake Saif-ul-Malook boat ride',
        'Babusar Pass scenic drive',
        'Lulusar Lake visit',
        'River rafting at Kunhar River',
      ],
      includes: ['Hotel', 'All Meals', 'Jeep for Lakes', 'Guide'],
    },
    {
      id: 'nk-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Ansoo Lake Trek',
      price: 'PKR 38,000',
      priceValue: 38000,
      duration: '4 Days / 3 Nights',
      rating: 4.8,
      groupSize: '4-8 people',
      difficulty: 'Challenging',
      highlights: [
        'Hike to the tear-drop shaped Ansoo Lake',
        'Malika Parbat base camp',
        'Saif-ul-Malook full day excursion',
        'Campfire & traditional music night',
      ],
      includes: ['Camping & Hotel', 'All Meals', 'Trek Guide', 'Safety Equipment'],
    },
    {
      id: 'nk-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Honeymoon Special',
      price: 'PKR 68,000',
      priceValue: 68000,
      duration: '5 Days / 4 Nights',
      rating: 4.9,
      groupSize: '2 people',
      difficulty: 'Easy',
      highlights: [
        'Private lake-view suite at Naran',
        'Couple photography session',
        'Private boat ride at Saif-ul-Malook',
        'Candlelight dinner with mountain views',
      ],
      includes: ['Luxury Hotel', 'All Meals', 'Private Car', 'Photography', 'Flower Decoration'],
    },
  ],

  fairy_meadows: [
    {
      id: 'fm-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Fairy Meadows Base Camp',
      price: 'PKR 60,000',
      priceValue: 60000,
      duration: '5 Days / 4 Nights',
      rating: 4.9,
      groupSize: '4-10 people',
      difficulty: 'Challenging',
      highlights: [
        'Jeep ride on world\'s most dangerous road',
        'Trek to Fairy Meadows plateau',
        'Nanga Parbat base camp excursion',
        'Camping under the Killer Mountain',
      ],
      includes: ['Camping', 'All Meals', 'Jeep & Trek Guide', 'Porters', 'Safety Gear'],
    },
    {
      id: 'fm-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Photography Expedition',
      price: 'PKR 75,000',
      priceValue: 75000,
      duration: '6 Days / 5 Nights',
      rating: 4.8,
      groupSize: '2-6 people',
      difficulty: 'Moderate',
      highlights: [
        'Golden hour shoots of Nanga Parbat',
        'Astrophotography workshop',
        'Beyal Camp trek with pro photographer',
        'Portfolio review & editing session',
      ],
      includes: ['Luxury Camps', 'All Meals', 'Photo Guide', 'Transport', 'Tripod Rental'],
    },
    {
      id: 'fm-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Quick Meadows Escape',
      price: 'PKR 40,000',
      priceValue: 40000,
      duration: '3 Days / 2 Nights',
      rating: 4.6,
      groupSize: '4-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Raikot Bridge to Tato Village jeep',
        'Trek to Fairy Meadows',
        'One night camping with bonfire',
      ],
      includes: ['Camping', 'Meals', 'Jeep', 'Guide'],
    },
  ],

  mohenjo_daro: [
    {
      id: 'md-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Indus Valley Discovery',
      price: 'PKR 48,000',
      priceValue: 48000,
      duration: '4 Days / 3 Nights',
      rating: 4.7,
      groupSize: '2-10 people',
      difficulty: 'Easy',
      highlights: [
        'Comprehensive Mohenjo-daro ruins tour',
        'Museum with artifacts from 2600 BCE',
        'Sukkur Barrage engineering visit',
        'Indus River sunset boat ride',
      ],
      includes: ['Hotel', 'All Meals', 'Private Car', 'Archaeology Guide', 'Entry Fees'],
    },
    {
      id: 'md-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Sindh Heritage Circuit',
      price: 'PKR 65,000',
      priceValue: 65000,
      duration: '6 Days / 5 Nights',
      rating: 4.8,
      groupSize: '2-8 people',
      difficulty: 'Easy',
      highlights: [
        'Mohenjo-daro & Amri archaeological sites',
        'Hyderabad Old City & Sindh Museum',
        'Makli Necropolis UNESCO site',
        'Traditional Sindhi craft workshops',
      ],
      includes: ['Hotels', 'All Meals', 'AC Car', 'Expert Guide', 'All Entries'],
    },
    {
      id: 'md-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Day Trip from Karachi',
      price: 'PKR 18,000',
      priceValue: 18000,
      duration: '1 Day',
      rating: 4.3,
      groupSize: '4-15 people',
      difficulty: 'Easy',
      highlights: [
        'Early morning flight to Mohenjo-daro',
        'Full guided tour of ruins & museum',
        'Return to Karachi by evening',
      ],
      includes: ['Flight Tickets', 'Lunch', 'Guide', 'Entry Fee'],
    },
  ],

  peshawar: [
    {
      id: 'psh-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Gateway to Khyber',
      price: 'PKR 40,000',
      priceValue: 40000,
      duration: '3 Days / 2 Nights',
      rating: 4.6,
      groupSize: '2-10 people',
      difficulty: 'Easy',
      highlights: [
        'Bala Hisar Fort guided tour',
        'Qissa Khwani Bazaar storytelling walk',
        'Peshawar Museum Gandhara collection',
        'Khyber Pass viewpoint excursion',
      ],
      includes: ['Heritage Hotel', 'All Meals', 'Transport', 'Security Escort', 'Guide'],
    },
    {
      id: 'psh-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Pashtun Cultural Tour',
      price: 'PKR 30,000',
      priceValue: 30000,
      duration: '2 Days / 1 Night',
      rating: 4.5,
      groupSize: '4-12 people',
      difficulty: 'Easy',
      highlights: [
        'Traditional Chapli Kebab making class',
        'Hujra (guest house) cultural experience',
        'Mahabat Khan Mosque evening visit',
      ],
      includes: ['Guest House', 'All Meals', 'Cultural Guide'],
    },
    {
      id: 'psh-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Peshawar & Takht-i-Bahi',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '3 Days / 2 Nights',
      rating: 4.7,
      groupSize: '2-8 people',
      difficulty: 'Easy',
      highlights: [
        'UNESCO Takht-i-Bahi Buddhist monastery',
        'Old City walking tour',
        'Sethi House historical visit',
        'Traditional Peshawari feast',
      ],
      includes: ['Hotel', 'All Meals', 'Private Car', 'Expert Guide'],
    },
  ],

  quetta: [
    {
      id: 'qta-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Balochistan Explorer',
      price: 'PKR 50,000',
      priceValue: 50000,
      duration: '4 Days / 3 Nights',
      rating: 4.5,
      groupSize: '4-10 people',
      difficulty: 'Moderate',
      highlights: [
        'Hanna Lake & Urak Valley day trip',
        'Quaid-e-Azam Residency museum',
        'Ziarat Juniper Forest excursion',
        'Local Sajji feast experience',
      ],
      includes: ['Hotel', 'All Meals', 'Transport', 'Guide', 'Security'],
    },
    {
      id: 'qta-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Ziarat Weekend Trip',
      price: 'PKR 30,000',
      priceValue: 30000,
      duration: '2 Days / 1 Night',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'World\'s second-largest Juniper forest',
        'Quaid-e-Azam Residency visit',
        'Prospect Point viewpoint',
      ],
      includes: ['Rest House', 'Meals', 'Transport'],
    },
    {
      id: 'qta-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Bolan Pass Heritage',
      price: 'PKR 55,000',
      priceValue: 55000,
      duration: '5 Days / 4 Nights',
      rating: 4.6,
      groupSize: '2-8 people',
      difficulty: 'Moderate',
      highlights: [
        'Historic Bolan Pass drive',
        'Mehrgarh archaeological site',
        'Traditional Balochi carpet weaving',
        'Desert stargazing camp',
      ],
      includes: ['Mixed Accommodation', 'All Meals', 'Jeep', 'Guide', 'Security'],
    },
  ],

  multan: [
    {
      id: 'mlt-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'City of Saints Pilgrimage',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '3 Days / 2 Nights',
      rating: 4.5,
      groupSize: '2-15 people',
      difficulty: 'Easy',
      highlights: [
        'Shah Rukn-e-Alam Shrine visit',
        'Bahauddin Zakariya tomb & complex',
        'Multan Fort & Ghanta Ghar',
        'Blue pottery workshop',
      ],
      includes: ['Hotel', 'All Meals', 'Transport', 'Guide'],
    },
    {
      id: 'mlt-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Multan Craft & Cuisine',
      price: 'PKR 20,000',
      priceValue: 20000,
      duration: '2 Days / 1 Night',
      rating: 4.4,
      groupSize: '4-12 people',
      difficulty: 'Easy',
      highlights: [
        'Famous Multani Sohan Halwa tasting',
        'Camel skin lamp making demo',
        'Hussain Agahi Bazaar shopping',
      ],
      includes: ['Guest House', 'All Meals', 'Guide'],
    },
    {
      id: 'mlt-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Southern Punjab Circuit',
      price: 'PKR 52,000',
      priceValue: 52000,
      duration: '5 Days / 4 Nights',
      rating: 4.7,
      groupSize: '2-8 people',
      difficulty: 'Easy',
      highlights: [
        'Multan, Bahawalpur & Uch Sharif circuit',
        'Noor Mahal palace visit',
        'Derawar Fort desert excursion',
        'Cholistan desert jeep safari',
      ],
      includes: ['Hotels', 'All Meals', 'AC Car', 'Expert Guide', 'Desert Camp'],
    },
  ],

  faisalabad: [
    {
      id: 'faisalabad-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Standard Package to Faisalabad',
      price: 'PKR 25,000',
      priceValue: 25000,
      duration: '5 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Faisalabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'faisalabad-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Faisalabad',
      price: 'PKR 37,000',
      priceValue: 37000,
      duration: '5 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Faisalabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'faisalabad-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Heritage Tour to Faisalabad',
      price: 'PKR 15,000',
      priceValue: 15000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Faisalabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'faisalabad-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Standard Package to Faisalabad',
      price: 'PKR 18,000',
      priceValue: 18000,
      duration: '1 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Faisalabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  rawalpindi: [
    {
      id: 'rawalpindi-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Express Tour to Rawalpindi',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '3 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Rawalpindi',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rawalpindi-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Rawalpindi',
      price: 'PKR 39,000',
      priceValue: 39000,
      duration: '1 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rawalpindi',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rawalpindi-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Express Tour to Rawalpindi',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rawalpindi',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rawalpindi-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Express Tour to Rawalpindi',
      price: 'PKR 41,000',
      priceValue: 41000,
      duration: '2 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Rawalpindi',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  gujranwala: [
    {
      id: 'gujranwala-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Gujranwala',
      price: 'PKR 22,000',
      priceValue: 22000,
      duration: '3 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Gujranwala',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gujranwala-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Heritage Tour to Gujranwala',
      price: 'PKR 39,000',
      priceValue: 39000,
      duration: '2 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gujranwala',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  sialkot: [
    {
      id: 'sialkot-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Sialkot',
      price: 'PKR 29,000',
      priceValue: 29000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Sialkot',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'sialkot-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Standard Package to Sialkot',
      price: 'PKR 17,000',
      priceValue: 17000,
      duration: '4 Days',
      rating: 4.0,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Sialkot',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'sialkot-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Sialkot',
      price: 'PKR 54,000',
      priceValue: 54000,
      duration: '4 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Sialkot',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  hyderabad: [
    {
      id: 'hyderabad-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Hyderabad',
      price: 'PKR 54,000',
      priceValue: 54000,
      duration: '3 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Hyderabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'hyderabad-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Hyderabad',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Hyderabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'hyderabad-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Hyderabad',
      price: 'PKR 21,000',
      priceValue: 21000,
      duration: '4 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Hyderabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'hyderabad-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Standard Package to Hyderabad',
      price: 'PKR 44,000',
      priceValue: 44000,
      duration: '2 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Hyderabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  sukkur: [
    {
      id: 'sukkur-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Sukkur',
      price: 'PKR 64,000',
      priceValue: 64000,
      duration: '5 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Sukkur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'sukkur-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Express Tour to Sukkur',
      price: 'PKR 27,000',
      priceValue: 27000,
      duration: '2 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Sukkur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  bahawalpur: [
    {
      id: 'bahawalpur-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Premium Retreat to Bahawalpur',
      price: 'PKR 39,000',
      priceValue: 39000,
      duration: '5 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Bahawalpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'bahawalpur-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Explorer Experience to Bahawalpur',
      price: 'PKR 39,000',
      priceValue: 39000,
      duration: '5 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Bahawalpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'bahawalpur-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Weekend Getaway to Bahawalpur',
      price: 'PKR 40,000',
      priceValue: 40000,
      duration: '1 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Bahawalpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'bahawalpur-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Premium Retreat to Bahawalpur',
      price: 'PKR 29,000',
      priceValue: 29000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Bahawalpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  sargodha: [
    {
      id: 'sargodha-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Premium Retreat to Sargodha',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '4 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Sargodha',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'sargodha-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Sargodha',
      price: 'PKR 16,000',
      priceValue: 16000,
      duration: '1 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Sargodha',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  abbottabad: [
    {
      id: 'abbottabad-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Abbottabad',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '4 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Abbottabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'abbottabad-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Abbottabad',
      price: 'PKR 64,000',
      priceValue: 64000,
      duration: '2 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Abbottabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  mardan: [
    {
      id: 'mardan-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Explorer Experience to Mardan',
      price: 'PKR 18,000',
      priceValue: 18000,
      duration: '3 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Mardan',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'mardan-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Heritage Tour to Mardan',
      price: 'PKR 37,000',
      priceValue: 37000,
      duration: '2 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Mardan',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'mardan-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Mardan',
      price: 'PKR 55,000',
      priceValue: 55000,
      duration: '4 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Mardan',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  gwadar: [
    {
      id: 'gwadar-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Explorer Experience to Gwadar',
      price: 'PKR 29,000',
      priceValue: 29000,
      duration: '2 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Gwadar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gwadar-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Gwadar',
      price: 'PKR 58,000',
      priceValue: 58000,
      duration: '2 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Gwadar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gwadar-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Gwadar',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '2 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gwadar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gwadar-4',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Heritage Tour to Gwadar',
      price: 'PKR 40,000',
      priceValue: 40000,
      duration: '5 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gwadar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  chiniot: [
    {
      id: 'chiniot-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Chiniot',
      price: 'PKR 51,000',
      priceValue: 51000,
      duration: '4 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Chiniot',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chiniot-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Chiniot',
      price: 'PKR 53,000',
      priceValue: 53000,
      duration: '5 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Chiniot',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chiniot-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Chiniot',
      price: 'PKR 32,000',
      priceValue: 32000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Chiniot',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chiniot-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Chiniot',
      price: 'PKR 42,000',
      priceValue: 42000,
      duration: '2 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Chiniot',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  kasur: [
    {
      id: 'kasur-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Premium Retreat to Kasur',
      price: 'PKR 52,000',
      priceValue: 52000,
      duration: '2 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kasur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kasur-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Standard Package to Kasur',
      price: 'PKR 27,000',
      priceValue: 27000,
      duration: '2 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kasur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  sahiwal: [
    {
      id: 'sahiwal-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Premium Retreat to Sahiwal',
      price: 'PKR 54,000',
      priceValue: 54000,
      duration: '1 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Sahiwal',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'sahiwal-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Weekend Getaway to Sahiwal',
      price: 'PKR 37,000',
      priceValue: 37000,
      duration: '5 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Sahiwal',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'sahiwal-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Explorer Experience to Sahiwal',
      price: 'PKR 31,000',
      priceValue: 31000,
      duration: '2 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Sahiwal',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'sahiwal-4',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Sahiwal',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '4 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Sahiwal',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  nawabshah: [
    {
      id: 'nawabshah-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Standard Package to Nawabshah',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '2 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Nawabshah',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'nawabshah-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Explorer Experience to Nawabshah',
      price: 'PKR 31,000',
      priceValue: 31000,
      duration: '1 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Nawabshah',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'nawabshah-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Nawabshah',
      price: 'PKR 39,000',
      priceValue: 39000,
      duration: '3 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Nawabshah',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  mirpur: [
    {
      id: 'mirpur-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Mirpur',
      price: 'PKR 61,000',
      priceValue: 61000,
      duration: '2 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Mirpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'mirpur-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Explorer Experience to Mirpur',
      price: 'PKR 48,000',
      priceValue: 48000,
      duration: '1 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Mirpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  muzaffarabad: [
    {
      id: 'muzaffarabad-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Muzaffarabad',
      price: 'PKR 51,000',
      priceValue: 51000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Muzaffarabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'muzaffarabad-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Muzaffarabad',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '5 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Muzaffarabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'muzaffarabad-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Muzaffarabad',
      price: 'PKR 27,000',
      priceValue: 27000,
      duration: '1 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Muzaffarabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'muzaffarabad-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Weekend Getaway to Muzaffarabad',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '4 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Muzaffarabad',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  attock: [
    {
      id: 'attock-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Attock',
      price: 'PKR 49,000',
      priceValue: 49000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Attock',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'attock-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Express Tour to Attock',
      price: 'PKR 43,000',
      priceValue: 43000,
      duration: '2 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Attock',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'attock-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Explorer Experience to Attock',
      price: 'PKR 30,000',
      priceValue: 30000,
      duration: '5 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Attock',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'attock-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Express Tour to Attock',
      price: 'PKR 55,000',
      priceValue: 55000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Attock',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  jhelum: [
    {
      id: 'jhelum-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Explorer Experience to Jhelum',
      price: 'PKR 58,000',
      priceValue: 58000,
      duration: '4 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Jhelum',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'jhelum-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Jhelum',
      price: 'PKR 55,000',
      priceValue: 55000,
      duration: '4 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Jhelum',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'jhelum-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Standard Package to Jhelum',
      price: 'PKR 53,000',
      priceValue: 53000,
      duration: '1 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Jhelum',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'jhelum-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Jhelum',
      price: 'PKR 42,000',
      priceValue: 42000,
      duration: '5 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Jhelum',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  mianwali: [
    {
      id: 'mianwali-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Express Tour to Mianwali',
      price: 'PKR 32,000',
      priceValue: 32000,
      duration: '4 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Mianwali',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'mianwali-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Standard Package to Mianwali',
      price: 'PKR 20,000',
      priceValue: 20000,
      duration: '2 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Mianwali',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  larkana: [
    {
      id: 'larkana-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Larkana',
      price: 'PKR 33,000',
      priceValue: 33000,
      duration: '2 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Larkana',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'larkana-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Standard Package to Larkana',
      price: 'PKR 20,000',
      priceValue: 20000,
      duration: '3 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Larkana',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'larkana-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Larkana',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Larkana',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  khairpur: [
    {
      id: 'khairpur-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Khairpur',
      price: 'PKR 39,000',
      priceValue: 39000,
      duration: '2 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khairpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'khairpur-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Khairpur',
      price: 'PKR 52,000',
      priceValue: 52000,
      duration: '4 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khairpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  mastung: [
    {
      id: 'mastung-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Express Tour to Mastung',
      price: 'PKR 62,000',
      priceValue: 62000,
      duration: '5 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Mastung',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'mastung-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Explorer Experience to Mastung',
      price: 'PKR 31,000',
      priceValue: 31000,
      duration: '1 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Mastung',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  khuzdar: [
    {
      id: 'khuzdar-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Khuzdar',
      price: 'PKR 54,000',
      priceValue: 54000,
      duration: '1 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Khuzdar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'khuzdar-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Express Tour to Khuzdar',
      price: 'PKR 51,000',
      priceValue: 51000,
      duration: '3 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khuzdar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  chitral: [
    {
      id: 'chitral-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Chitral',
      price: 'PKR 46,000',
      priceValue: 46000,
      duration: '1 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Chitral',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chitral-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Chitral',
      price: 'PKR 42,000',
      priceValue: 42000,
      duration: '2 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Chitral',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  kalash_valley: [
    {
      id: 'kalash_valley-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Kalash Valley',
      price: 'PKR 30,000',
      priceValue: 30000,
      duration: '5 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kalash Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kalash_valley-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Standard Package to Kalash Valley',
      price: 'PKR 48,000',
      priceValue: 48000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Kalash Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kalash_valley-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Kalash Valley',
      price: 'PKR 43,000',
      priceValue: 43000,
      duration: '3 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kalash Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kalash_valley-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Weekend Getaway to Kalash Valley',
      price: 'PKR 42,000',
      priceValue: 42000,
      duration: '4 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kalash Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  kumrat_valley: [
    {
      id: 'kumrat_valley-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Standard Package to Kumrat Valley',
      price: 'PKR 42,000',
      priceValue: 42000,
      duration: '5 Days',
      rating: 4.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Kumrat Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kumrat_valley-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Kumrat Valley',
      price: 'PKR 18,000',
      priceValue: 18000,
      duration: '4 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Kumrat Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  neelum_valley: [
    {
      id: 'neelum_valley-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Neelum Valley',
      price: 'PKR 60,000',
      priceValue: 60000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Neelum Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'neelum_valley-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Premium Retreat to Neelum Valley',
      price: 'PKR 49,000',
      priceValue: 49000,
      duration: '3 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Neelum Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'neelum_valley-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Standard Package to Neelum Valley',
      price: 'PKR 38,000',
      priceValue: 38000,
      duration: '4 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Neelum Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'neelum_valley-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Neelum Valley',
      price: 'PKR 36,000',
      priceValue: 36000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Neelum Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  shogran: [
    {
      id: 'shogran-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Premium Retreat to Shogran',
      price: 'PKR 44,000',
      priceValue: 44000,
      duration: '4 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shogran',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shogran-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Shogran',
      price: 'PKR 32,000',
      priceValue: 32000,
      duration: '4 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Shogran',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  siri_paye: [
    {
      id: 'siri_paye-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Premium Retreat to Siri Paye',
      price: 'PKR 30,000',
      priceValue: 30000,
      duration: '3 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Siri Paye',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'siri_paye-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Heritage Tour to Siri Paye',
      price: 'PKR 45,000',
      priceValue: 45000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Siri Paye',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'siri_paye-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Siri Paye',
      price: 'PKR 45,000',
      priceValue: 45000,
      duration: '5 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Siri Paye',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  babusar_top: [
    {
      id: 'babusar_top-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Heritage Tour to Babusar Top',
      price: 'PKR 46,000',
      priceValue: 46000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Babusar Top',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'babusar_top-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Babusar Top',
      price: 'PKR 48,000',
      priceValue: 48000,
      duration: '1 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Babusar Top',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'babusar_top-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Babusar Top',
      price: 'PKR 46,000',
      priceValue: 46000,
      duration: '1 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Babusar Top',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  deosai_plains: [
    {
      id: 'deosai_plains-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Deosai Plains',
      price: 'PKR 21,000',
      priceValue: 21000,
      duration: '1 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Deosai Plains',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'deosai_plains-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Premium Retreat to Deosai Plains',
      price: 'PKR 15,000',
      priceValue: 15000,
      duration: '5 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Deosai Plains',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'deosai_plains-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Deosai Plains',
      price: 'PKR 51,000',
      priceValue: 51000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Deosai Plains',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  khunjerab_pass: [
    {
      id: 'khunjerab_pass-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Khunjerab Pass',
      price: 'PKR 43,000',
      priceValue: 43000,
      duration: '5 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khunjerab Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'khunjerab_pass-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Khunjerab Pass',
      price: 'PKR 15,000',
      priceValue: 15000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khunjerab Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'khunjerab_pass-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Khunjerab Pass',
      price: 'PKR 23,000',
      priceValue: 23000,
      duration: '5 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Khunjerab Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  naltar_valley: [
    {
      id: 'naltar_valley-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Naltar Valley',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '2 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Naltar Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'naltar_valley-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Standard Package to Naltar Valley',
      price: 'PKR 59,000',
      priceValue: 59000,
      duration: '1 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Naltar Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  phander_valley: [
    {
      id: 'phander_valley-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Standard Package to Phander Valley',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '4 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Phander Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'phander_valley-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Phander Valley',
      price: 'PKR 51,000',
      priceValue: 51000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Phander Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'phander_valley-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Explorer Experience to Phander Valley',
      price: 'PKR 61,000',
      priceValue: 61000,
      duration: '4 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Phander Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  rama_meadows: [
    {
      id: 'rama_meadows-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Weekend Getaway to Rama Meadows',
      price: 'PKR 57,000',
      priceValue: 57000,
      duration: '4 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rama Meadows',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rama_meadows-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Rama Meadows',
      price: 'PKR 58,000',
      priceValue: 58000,
      duration: '1 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rama Meadows',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rama_meadows-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Explorer Experience to Rama Meadows',
      price: 'PKR 25,000',
      priceValue: 25000,
      duration: '2 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rama Meadows',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  astore: [
    {
      id: 'astore-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Explorer Experience to Astore',
      price: 'PKR 39,000',
      priceValue: 39000,
      duration: '4 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Astore',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'astore-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Express Tour to Astore',
      price: 'PKR 49,000',
      priceValue: 49000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Astore',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'astore-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Express Tour to Astore',
      price: 'PKR 17,000',
      priceValue: 17000,
      duration: '3 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Astore',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'astore-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Astore',
      price: 'PKR 49,000',
      priceValue: 49000,
      duration: '4 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Astore',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  khaplu: [
    {
      id: 'khaplu-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Premium Retreat to Khaplu',
      price: 'PKR 45,000',
      priceValue: 45000,
      duration: '2 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khaplu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'khaplu-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Standard Package to Khaplu',
      price: 'PKR 40,000',
      priceValue: 40000,
      duration: '2 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khaplu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'khaplu-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Premium Retreat to Khaplu',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '1 Days',
      rating: 4.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Khaplu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'khaplu-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Premium Retreat to Khaplu',
      price: 'PKR 64,000',
      priceValue: 64000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khaplu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  shigar: [
    {
      id: 'shigar-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Shigar',
      price: 'PKR 45,000',
      priceValue: 45000,
      duration: '1 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shigar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shigar-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Standard Package to Shigar',
      price: 'PKR 18,000',
      priceValue: 18000,
      duration: '4 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shigar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  passu: [
    {
      id: 'passu-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Passu',
      price: 'PKR 46,000',
      priceValue: 46000,
      duration: '4 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Passu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'passu-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Standard Package to Passu',
      price: 'PKR 42,000',
      priceValue: 42000,
      duration: '5 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Passu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'passu-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Passu',
      price: 'PKR 63,000',
      priceValue: 63000,
      duration: '2 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Passu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  gulmit: [
    {
      id: 'gulmit-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Gulmit',
      price: 'PKR 31,000',
      priceValue: 31000,
      duration: '3 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gulmit',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gulmit-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Gulmit',
      price: 'PKR 63,000',
      priceValue: 63000,
      duration: '4 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gulmit',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gulmit-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Gulmit',
      price: 'PKR 32,000',
      priceValue: 32000,
      duration: '1 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Gulmit',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  gojal: [
    {
      id: 'gojal-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Standard Package to Gojal',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '3 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Gojal',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gojal-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Gojal',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '4 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Gojal',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gojal-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Express Tour to Gojal',
      price: 'PKR 29,000',
      priceValue: 29000,
      duration: '4 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gojal',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  rakaposhi_basecamp: [
    {
      id: 'rakaposhi_basecamp-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Rakaposhi Basecamp',
      price: 'PKR 54,000',
      priceValue: 54000,
      duration: '2 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rakaposhi Basecamp',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rakaposhi_basecamp-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Rakaposhi Basecamp',
      price: 'PKR 23,000',
      priceValue: 23000,
      duration: '2 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Rakaposhi Basecamp',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rakaposhi_basecamp-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Explorer Experience to Rakaposhi Basecamp',
      price: 'PKR 33,000',
      priceValue: 33000,
      duration: '3 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rakaposhi Basecamp',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rakaposhi_basecamp-4',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Rakaposhi Basecamp',
      price: 'PKR 55,000',
      priceValue: 55000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Rakaposhi Basecamp',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  dir: [
    {
      id: 'dir-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Standard Package to Dir',
      price: 'PKR 43,000',
      priceValue: 43000,
      duration: '2 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Dir',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'dir-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Dir',
      price: 'PKR 33,000',
      priceValue: 33000,
      duration: '3 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Dir',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'dir-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Express Tour to Dir',
      price: 'PKR 61,000',
      priceValue: 61000,
      duration: '5 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Dir',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  garam_chashma: [
    {
      id: 'garam_chashma-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Garam Chashma',
      price: 'PKR 20,000',
      priceValue: 20000,
      duration: '5 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Garam Chashma',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'garam_chashma-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Garam Chashma',
      price: 'PKR 53,000',
      priceValue: 53000,
      duration: '1 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Garam Chashma',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  ayubia: [
    {
      id: 'ayubia-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Ayubia',
      price: 'PKR 31,000',
      priceValue: 31000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Ayubia',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ayubia-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Weekend Getaway to Ayubia',
      price: 'PKR 52,000',
      priceValue: 52000,
      duration: '5 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ayubia',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  nathiagali: [
    {
      id: 'nathiagali-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Nathiagali',
      price: 'PKR 36,000',
      priceValue: 36000,
      duration: '4 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Nathiagali',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'nathiagali-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Premium Retreat to Nathiagali',
      price: 'PKR 52,000',
      priceValue: 52000,
      duration: '2 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Nathiagali',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'nathiagali-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Nathiagali',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '4 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Nathiagali',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'nathiagali-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Nathiagali',
      price: 'PKR 38,000',
      priceValue: 38000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Nathiagali',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  bhurban: [
    {
      id: 'bhurban-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Premium Retreat to Bhurban',
      price: 'PKR 61,000',
      priceValue: 61000,
      duration: '3 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Bhurban',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'bhurban-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Bhurban',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Bhurban',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  thandiani: [
    {
      id: 'thandiani-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Explorer Experience to Thandiani',
      price: 'PKR 48,000',
      priceValue: 48000,
      duration: '5 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Thandiani',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'thandiani-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Explorer Experience to Thandiani',
      price: 'PKR 49,000',
      priceValue: 49000,
      duration: '4 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Thandiani',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'thandiani-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Standard Package to Thandiani',
      price: 'PKR 29,000',
      priceValue: 29000,
      duration: '4 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Thandiani',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  gorakh_hill: [
    {
      id: 'gorakh_hill-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Gorakh Hill',
      price: 'PKR 62,000',
      priceValue: 62000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gorakh Hill',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gorakh_hill-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Premium Retreat to Gorakh Hill',
      price: 'PKR 57,000',
      priceValue: 57000,
      duration: '3 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gorakh Hill',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gorakh_hill-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Gorakh Hill',
      price: 'PKR 50,000',
      priceValue: 50000,
      duration: '3 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gorakh Hill',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  hingol_national_park: [
    {
      id: 'hingol_national_park-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Hingol National Park',
      price: 'PKR 26,000',
      priceValue: 26000,
      duration: '4 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Hingol National Park',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'hingol_national_park-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Explorer Experience to Hingol National Park',
      price: 'PKR 19,000',
      priceValue: 19000,
      duration: '4 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Hingol National Park',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'hingol_national_park-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Hingol National Park',
      price: 'PKR 56,000',
      priceValue: 56000,
      duration: '3 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Hingol National Park',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  kund_malir: [
    {
      id: 'kund_malir-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Explorer Experience to Kund Malir',
      price: 'PKR 17,000',
      priceValue: 17000,
      duration: '5 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kund Malir',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kund_malir-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Explorer Experience to Kund Malir',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '1 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Kund Malir',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  ormara: [
    {
      id: 'ormara-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Express Tour to Ormara',
      price: 'PKR 57,000',
      priceValue: 57000,
      duration: '2 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ormara',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ormara-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Standard Package to Ormara',
      price: 'PKR 43,000',
      priceValue: 43000,
      duration: '1 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ormara',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ormara-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Ormara',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '2 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ormara',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ormara-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Standard Package to Ormara',
      price: 'PKR 46,000',
      priceValue: 46000,
      duration: '5 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ormara',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  astola_island: [
    {
      id: 'astola_island-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Astola Island',
      price: 'PKR 44,000',
      priceValue: 44000,
      duration: '2 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Astola Island',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'astola_island-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Premium Retreat to Astola Island',
      price: 'PKR 57,000',
      priceValue: 57000,
      duration: '5 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Astola Island',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  ziarat: [
    {
      id: 'ziarat-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Ziarat',
      price: 'PKR 51,000',
      priceValue: 51000,
      duration: '4 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Ziarat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ziarat-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Ziarat',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '3 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ziarat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ziarat-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Premium Retreat to Ziarat',
      price: 'PKR 46,000',
      priceValue: 46000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Ziarat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ziarat-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Ziarat',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '2 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ziarat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  bolan_pass: [
    {
      id: 'bolan_pass-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Bolan Pass',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '5 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Bolan Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'bolan_pass-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Standard Package to Bolan Pass',
      price: 'PKR 38,000',
      priceValue: 38000,
      duration: '4 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Bolan Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'bolan_pass-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Bolan Pass',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Bolan Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'bolan_pass-4',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Explorer Experience to Bolan Pass',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Bolan Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  kheerthar: [
    {
      id: 'kheerthar-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Kheerthar',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '2 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kheerthar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kheerthar-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Kheerthar',
      price: 'PKR 18,000',
      priceValue: 18000,
      duration: '2 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kheerthar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  soon_valley: [
    {
      id: 'soon_valley-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Heritage Tour to Soon Valley',
      price: 'PKR 20,000',
      priceValue: 20000,
      duration: '1 Days',
      rating: 4.0,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Soon Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'soon_valley-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Soon Valley',
      price: 'PKR 44,000',
      priceValue: 44000,
      duration: '3 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Soon Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'soon_valley-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Weekend Getaway to Soon Valley',
      price: 'PKR 53,000',
      priceValue: 53000,
      duration: '1 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Soon Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'soon_valley-4',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Express Tour to Soon Valley',
      price: 'PKR 44,000',
      priceValue: 44000,
      duration: '3 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Soon Valley',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  cholistan_desert: [
    {
      id: 'cholistan_desert-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Express Tour to Cholistan Desert',
      price: 'PKR 34,000',
      priceValue: 34000,
      duration: '2 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Cholistan Desert',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'cholistan_desert-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Cholistan Desert',
      price: 'PKR 32,000',
      priceValue: 32000,
      duration: '3 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Cholistan Desert',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'cholistan_desert-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Explorer Experience to Cholistan Desert',
      price: 'PKR 23,000',
      priceValue: 23000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Cholistan Desert',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  thar_desert: [
    {
      id: 'thar_desert-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Standard Package to Thar Desert',
      price: 'PKR 19,000',
      priceValue: 19000,
      duration: '4 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Thar Desert',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'thar_desert-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Thar Desert',
      price: 'PKR 51,000',
      priceValue: 51000,
      duration: '3 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Thar Desert',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'thar_desert-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Thar Desert',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '2 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Thar Desert',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  harappa: [
    {
      id: 'harappa-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Harappa',
      price: 'PKR 58,000',
      priceValue: 58000,
      duration: '2 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Harappa',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'harappa-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Express Tour to Harappa',
      price: 'PKR 23,000',
      priceValue: 23000,
      duration: '2 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Harappa',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'harappa-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Harappa',
      price: 'PKR 50,000',
      priceValue: 50000,
      duration: '4 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Harappa',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'harappa-4',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Premium Retreat to Harappa',
      price: 'PKR 50,000',
      priceValue: 50000,
      duration: '5 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Harappa',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  taxila: [
    {
      id: 'taxila-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Taxila',
      price: 'PKR 50,000',
      priceValue: 50000,
      duration: '1 Days',
      rating: 4.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Taxila',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'taxila-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Taxila',
      price: 'PKR 58,000',
      priceValue: 58000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Taxila',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  rohtas_fort: [
    {
      id: 'rohtas_fort-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Rohtas Fort',
      price: 'PKR 56,000',
      priceValue: 56000,
      duration: '5 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rohtas Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rohtas_fort-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Rohtas Fort',
      price: 'PKR 22,000',
      priceValue: 22000,
      duration: '4 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Rohtas Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rohtas_fort-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Standard Package to Rohtas Fort',
      price: 'PKR 17,000',
      priceValue: 17000,
      duration: '2 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rohtas Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rohtas_fort-4',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Rohtas Fort',
      price: 'PKR 22,000',
      priceValue: 22000,
      duration: '2 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Rohtas Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  derawar_fort: [
    {
      id: 'derawar_fort-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Express Tour to Derawar Fort',
      price: 'PKR 37,000',
      priceValue: 37000,
      duration: '2 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Derawar Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'derawar_fort-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Express Tour to Derawar Fort',
      price: 'PKR 55,000',
      priceValue: 55000,
      duration: '1 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Derawar Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  uch_sharif: [
    {
      id: 'uch_sharif-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Uch Sharif',
      price: 'PKR 61,000',
      priceValue: 61000,
      duration: '2 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Uch Sharif',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'uch_sharif-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Uch Sharif',
      price: 'PKR 19,000',
      priceValue: 19000,
      duration: '3 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Uch Sharif',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  makli_necropolis: [
    {
      id: 'makli_necropolis-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Makli Necropolis',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '4 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Makli Necropolis',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'makli_necropolis-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Standard Package to Makli Necropolis',
      price: 'PKR 36,000',
      priceValue: 36000,
      duration: '4 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Makli Necropolis',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'makli_necropolis-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Makli Necropolis',
      price: 'PKR 25,000',
      priceValue: 25000,
      duration: '3 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Makli Necropolis',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'makli_necropolis-4',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Makli Necropolis',
      price: 'PKR 18,000',
      priceValue: 18000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Makli Necropolis',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  chaukhandi_tombs: [
    {
      id: 'chaukhandi_tombs-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Chaukhandi Tombs',
      price: 'PKR 19,000',
      priceValue: 19000,
      duration: '2 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Chaukhandi Tombs',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chaukhandi_tombs-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Premium Retreat to Chaukhandi Tombs',
      price: 'PKR 22,000',
      priceValue: 22000,
      duration: '3 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Chaukhandi Tombs',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chaukhandi_tombs-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Heritage Tour to Chaukhandi Tombs',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '1 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Chaukhandi Tombs',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chaukhandi_tombs-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Chaukhandi Tombs',
      price: 'PKR 57,000',
      priceValue: 57000,
      duration: '2 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Chaukhandi Tombs',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  bhanbhore: [
    {
      id: 'bhanbhore-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Premium Retreat to Bhanbhore',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '3 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Bhanbhore',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'bhanbhore-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Express Tour to Bhanbhore',
      price: 'PKR 60,000',
      priceValue: 60000,
      duration: '4 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Bhanbhore',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'bhanbhore-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Standard Package to Bhanbhore',
      price: 'PKR 33,000',
      priceValue: 33000,
      duration: '3 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Bhanbhore',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  ranikot_fort: [
    {
      id: 'ranikot_fort-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Ranikot Fort',
      price: 'PKR 51,000',
      priceValue: 51000,
      duration: '1 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ranikot Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ranikot_fort-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Explorer Experience to Ranikot Fort',
      price: 'PKR 20,000',
      priceValue: 20000,
      duration: '1 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ranikot Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ranikot_fort-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Ranikot Fort',
      price: 'PKR 54,000',
      priceValue: 54000,
      duration: '4 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ranikot Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  takht_i_bahi: [
    {
      id: 'takht_i_bahi-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Explorer Experience to Takht-i-Bahi',
      price: 'PKR 21,000',
      priceValue: 21000,
      duration: '1 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Takht-i-Bahi',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'takht_i_bahi-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Takht-i-Bahi',
      price: 'PKR 45,000',
      priceValue: 45000,
      duration: '2 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Takht-i-Bahi',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'takht_i_bahi-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Premium Retreat to Takht-i-Bahi',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '5 Days',
      rating: 4.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Takht-i-Bahi',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'takht_i_bahi-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Explorer Experience to Takht-i-Bahi',
      price: 'PKR 60,000',
      priceValue: 60000,
      duration: '5 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Takht-i-Bahi',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  jamrud_fort: [
    {
      id: 'jamrud_fort-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Heritage Tour to Jamrud Fort',
      price: 'PKR 41,000',
      priceValue: 41000,
      duration: '5 Days',
      rating: 4.7,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Jamrud Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'jamrud_fort-2',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Standard Package to Jamrud Fort',
      price: 'PKR 43,000',
      priceValue: 43000,
      duration: '5 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Jamrud Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'jamrud_fort-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Explorer Experience to Jamrud Fort',
      price: 'PKR 38,000',
      priceValue: 38000,
      duration: '1 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Jamrud Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  baltit_fort: [
    {
      id: 'baltit_fort-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Premium Retreat to Baltit Fort',
      price: 'PKR 59,000',
      priceValue: 59000,
      duration: '1 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Baltit Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'baltit_fort-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Explorer Experience to Baltit Fort',
      price: 'PKR 18,000',
      priceValue: 18000,
      duration: '4 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Baltit Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  altit_fort: [
    {
      id: 'altit_fort-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Altit Fort',
      price: 'PKR 51,000',
      priceValue: 51000,
      duration: '1 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Altit Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'altit_fort-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Explorer Experience to Altit Fort',
      price: 'PKR 56,000',
      priceValue: 56000,
      duration: '2 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Altit Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'altit_fort-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Explorer Experience to Altit Fort',
      price: 'PKR 36,000',
      priceValue: 36000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Altit Fort',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  katas_raj_temples: [
    {
      id: 'katas_raj_temples-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Premium Retreat to Katas Raj Temples',
      price: 'PKR 50,000',
      priceValue: 50000,
      duration: '3 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Katas Raj Temples',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'katas_raj_temples-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Standard Package to Katas Raj Temples',
      price: 'PKR 34,000',
      priceValue: 34000,
      duration: '1 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Katas Raj Temples',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'katas_raj_temples-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Heritage Tour to Katas Raj Temples',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '4 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Katas Raj Temples',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'katas_raj_temples-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Premium Retreat to Katas Raj Temples',
      price: 'PKR 29,000',
      priceValue: 29000,
      duration: '5 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Katas Raj Temples',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  shalimar_gardens: [
    {
      id: 'shalimar_gardens-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Shalimar Gardens',
      price: 'PKR 60,000',
      priceValue: 60000,
      duration: '5 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shalimar Gardens',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shalimar_gardens-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Explorer Experience to Shalimar Gardens',
      price: 'PKR 59,000',
      priceValue: 59000,
      duration: '1 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Shalimar Gardens',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  hiran_minar: [
    {
      id: 'hiran_minar-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Premium Retreat to Hiran Minar',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '4 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Hiran Minar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'hiran_minar-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Hiran Minar',
      price: 'PKR 27,000',
      priceValue: 27000,
      duration: '1 Days',
      rating: 4.0,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Hiran Minar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  shah_jahan_mosque: [
    {
      id: 'shah_jahan_mosque-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Shah Jahan Mosque',
      price: 'PKR 43,000',
      priceValue: 43000,
      duration: '3 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shah Jahan Mosque',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shah_jahan_mosque-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Shah Jahan Mosque',
      price: 'PKR 19,000',
      priceValue: 19000,
      duration: '4 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shah Jahan Mosque',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shah_jahan_mosque-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Shah Jahan Mosque',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shah Jahan Mosque',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  shrine_of_lal_shahbaz_qalandar: [
    {
      id: 'shrine_of_lal_shahbaz_qalandar-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Premium Retreat to Shrine of Lal Shahbaz Qalandar',
      price: 'PKR 57,000',
      priceValue: 57000,
      duration: '3 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Shrine of Lal Shahbaz Qalandar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shrine_of_lal_shahbaz_qalandar-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Shrine of Lal Shahbaz Qalandar',
      price: 'PKR 54,000',
      priceValue: 54000,
      duration: '5 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Shrine of Lal Shahbaz Qalandar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shrine_of_lal_shahbaz_qalandar-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Premium Retreat to Shrine of Lal Shahbaz Qalandar',
      price: 'PKR 52,000',
      priceValue: 52000,
      duration: '2 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shrine of Lal Shahbaz Qalandar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shrine_of_lal_shahbaz_qalandar-4',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Shrine of Lal Shahbaz Qalandar',
      price: 'PKR 47,000',
      priceValue: 47000,
      duration: '4 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shrine of Lal Shahbaz Qalandar',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  mehergarh: [
    {
      id: 'mehergarh-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Explorer Experience to Mehergarh',
      price: 'PKR 56,000',
      priceValue: 56000,
      duration: '5 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Mehergarh',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'mehergarh-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Mehergarh',
      price: 'PKR 57,000',
      priceValue: 57000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Mehergarh',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'mehergarh-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Standard Package to Mehergarh',
      price: 'PKR 34,000',
      priceValue: 34000,
      duration: '4 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Mehergarh',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  khyber_pass: [
    {
      id: 'khyber_pass-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Weekend Getaway to Khyber Pass',
      price: 'PKR 49,000',
      priceValue: 49000,
      duration: '1 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khyber Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'khyber_pass-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Express Tour to Khyber Pass',
      price: 'PKR 15,000',
      priceValue: 15000,
      duration: '5 Days',
      rating: 4.0,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khyber Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'khyber_pass-3',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Heritage Tour to Khyber Pass',
      price: 'PKR 32,000',
      priceValue: 32000,
      duration: '4 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Khyber Pass',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  ganesh_settlement: [
    {
      id: 'ganesh_settlement-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Heritage Tour to Ganesh Settlement',
      price: 'PKR 50,000',
      priceValue: 50000,
      duration: '2 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Ganesh Settlement',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ganesh_settlement-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Explorer Experience to Ganesh Settlement',
      price: 'PKR 62,000',
      priceValue: 62000,
      duration: '1 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ganesh Settlement',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ganesh_settlement-3',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Weekend Getaway to Ganesh Settlement',
      price: 'PKR 57,000',
      priceValue: 57000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Ganesh Settlement',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'ganesh_settlement-4',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Premium Retreat to Ganesh Settlement',
      price: 'PKR 40,000',
      priceValue: 40000,
      duration: '5 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Ganesh Settlement',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  shekhupura: [
    {
      id: 'shekhupura-1',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Explorer Experience to Shekhupura',
      price: 'PKR 33,000',
      priceValue: 33000,
      duration: '2 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shekhupura',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shekhupura-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Shekhupura',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '2 Days',
      rating: 5.0,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Shekhupura',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shekhupura-3',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Shekhupura',
      price: 'PKR 53,000',
      priceValue: 53000,
      duration: '3 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Shekhupura',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'shekhupura-4',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Heritage Tour to Shekhupura',
      price: 'PKR 21,000',
      priceValue: 21000,
      duration: '1 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Shekhupura',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  gambat: [
    {
      id: 'gambat-1',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Gambat',
      price: 'PKR 21,000',
      priceValue: 21000,
      duration: '4 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Gambat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'gambat-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Gambat',
      price: 'PKR 63,000',
      priceValue: 63000,
      duration: '2 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Gambat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  chagai: [
    {
      id: 'chagai-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Heritage Tour to Chagai',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '5 Days',
      rating: 4.1,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Chagai',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chagai-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Express Tour to Chagai',
      price: 'PKR 41,000',
      priceValue: 41000,
      duration: '2 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Chagai',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chagai-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Chagai',
      price: 'PKR 30,000',
      priceValue: 30000,
      duration: '4 Days',
      rating: 4.2,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Chagai',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'chagai-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Weekend Getaway to Chagai',
      price: 'PKR 20,000',
      priceValue: 20000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Chagai',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  pishin: [
    {
      id: 'pishin-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Pishin',
      price: 'PKR 24,000',
      priceValue: 24000,
      duration: '3 Days',
      rating: 4.6,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Pishin',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'pishin-2',
      agentName: 'Pak Voyager',
      agentLogo: agentLogos.pakvoyager,
      packageName: 'Explorer Experience to Pishin',
      price: 'PKR 48,000',
      priceValue: 48000,
      duration: '4 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Pishin',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  kalat: [
    {
      id: 'kalat-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Explorer Experience to Kalat',
      price: 'PKR 57,000',
      priceValue: 57000,
      duration: '5 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kalat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kalat-2',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Kalat',
      price: 'PKR 36,000',
      priceValue: 36000,
      duration: '2 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kalat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kalat-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Premium Retreat to Kalat',
      price: 'PKR 28,000',
      priceValue: 28000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kalat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'kalat-4',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Explorer Experience to Kalat',
      price: 'PKR 22,000',
      priceValue: 22000,
      duration: '1 Days',
      rating: 4.4,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Kalat',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  dadu: [
    {
      id: 'dadu-1',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Weekend Getaway to Dadu',
      price: 'PKR 19,000',
      priceValue: 19000,
      duration: '3 Days',
      rating: 4.9,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Dadu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'dadu-2',
      agentName: 'Summit Tours',
      agentLogo: agentLogos.summit,
      packageName: 'Express Tour to Dadu',
      price: 'PKR 20,000',
      priceValue: 20000,
      duration: '5 Days',
      rating: 4.8,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Dadu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'dadu-3',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Heritage Tour to Dadu',
      price: 'PKR 34,000',
      priceValue: 34000,
      duration: '3 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Dadu',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],

  rajanpur: [
    {
      id: 'rajanpur-1',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Rajanpur',
      price: 'PKR 26,000',
      priceValue: 26000,
      duration: '4 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Rajanpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rajanpur-2',
      agentName: 'Wanderlust Pakistan',
      agentLogo: agentLogos.wanderlust,
      packageName: 'Heritage Tour to Rajanpur',
      price: 'PKR 52,000',
      priceValue: 52000,
      duration: '2 Days',
      rating: 4.5,
      groupSize: '2-12 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Rajanpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rajanpur-3',
      agentName: 'Nomad Adventures',
      agentLogo: agentLogos.nomad,
      packageName: 'Premium Retreat to Rajanpur',
      price: 'PKR 59,000',
      priceValue: 59000,
      duration: '3 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Rajanpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
    {
      id: 'rajanpur-4',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Weekend Getaway to Rajanpur',
      price: 'PKR 22,000',
      priceValue: 22000,
      duration: '2 Days',
      rating: 4.3,
      groupSize: '2-12 people',
      difficulty: 'Moderate',
      highlights: [
        'Guided tour of Rajanpur',
        'Specialty local lunch',
        'Sightseeing at prominent locations'
      ],
      includes: ['Transport', 'Guide', 'Accommodation']
    },
  ],
};
