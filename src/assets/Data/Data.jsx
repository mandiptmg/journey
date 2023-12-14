const data = [
  {
    country: 'iceland',
    img: 'https://res.cloudinary.com/icelandtours/g_auto,f_auto,c_fill,w_3840,q_auto:best/flatey_island_summer_e2506cca1c.jpg',
    desc: 'celandic Adventure: A Journey through Fire and Ice',
    time: 7,
    price: 3000,
    aos: 'zoom-in',
    price2: '3500/person',
    date: 'june 11',
    tourDetail:
      'Embark on an extraordinary journey through the land of fire and ice, as you explore the breathtaking landscapes, natural wonders, and unique culture of Iceland. This tour takes you on an unforgettable adventure to witness glaciers, geysers, waterfalls, and volcanic landscapes while immersing yourself in Icelandic traditions and folklore.',
    visit: 'celandic-Adventure',
    to: '/celandic-Adventure',
    locationsArray: [
      {
        day: 1,
        location: 'Reykjavik',
        activities: [
          'Arrive in Reykjavik, the capital of Iceland.',
          'Check-in to your hotel in Reykjavik.',
          "Explore the city's vibrant art scene and enjoy a local meal.",
        ],
      },
      {
        day: 2,
        location: 'Golden Circle',
        activities: [
          'Visit Thingvellir National Park, Geysir geothermal area, and Gullfoss waterfall.',
          'Overnight stay in the Golden Circle area.',
        ],
      },
      {
        day: 3,
        location: 'South Coast',
        activities: [
          'Explore Seljalandsfoss and Skogafoss waterfalls.',
          'Visit the black sand beach at Reynisfjara.',
          'Overnight stay in Vik or nearby.',
        ],
      },
      {
        day: 4,
        location: 'Vatnajokull National Park',
        activities: [
          'Drive to Vatnajokull National Park.',
          'Optional activities include hiking or ice cave tours.',
          'Stay in a guesthouse near Vatnajokull.',
        ],
      },
      {
        day: 5,
        location: 'Glacier Lagoon and Diamond Beach',
        activities: [
          'Explore Jokulsarlon Glacier Lagoon and nearby Diamond Beach.',
          'Visit the charming fishing village of Hofn.',
          'Overnight in Hofn.',
        ],
      },
      {
        day: 6,
        location: 'East Fjords',
        activities: [
          'Drive along the scenic East Fjords, known for their dramatic landscapes.',
          'Explore small fishing villages and enjoy the coastal views.',
          'Stay in a guesthouse in the East Fjords.',
        ],
      },
      {
        day: 7,
        location: 'Return to Reykjavik',
        activities: [
          'Drive back to Reykjavik.',
          'Enjoy a relaxing soak in the Blue Lagoon.',
          'Final evening in Reykjavik.',
        ],
      },
    ],
    imageUrls: [
      'https://framerusercontent.com/images/4ancKsGC1ZthdPYCa0dDlEk1Zc.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/Kqvzj9xSvdym3eX2cVc9O2xEKc.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/YsOtLah2Fx5Mzfm3avuCCtQfhg.jpg?scale-down-to=1024',
    ],
  },
  {
    country: 'norway',
    img: 'https://www.state.gov/wp-content/uploads/2018/11/Norway-2560x1328.jpg',
    desc: 'Norwegian Fjords & Northern Wonders',
    time: 10,
    price: 4000,
    aos: 'fade-right',
    date: 'june 20',
    visit: 'Norwegian-Fjords',
    to: '/Norwegian-Fjords',
    tourDetail:
      "Embark on a captivating journey through the stunning landscapes of Norway, where you'll encounter the majestic Norwegian fjords, vibrant cities, and the enchanting beauty of the Northern Lights. This 10-day adventure promises a mix of natural wonders, cultural experiences, and unforgettable memories.",
    locationsArray: [
      {
        day: 1,
        location: 'Oslo',
        activities: [
          'Arrive in Oslo',
          'Check in to hotel',
          'Evening stroll in Vigeland Park',
        ],
      },
      {
        day: 2,
        location: 'Oslo',
        activities: [
          'Visit Viking Ship Museum',
          'Visit Fram Museum',
          'Explore Akershus Fortress',
          'Harbor cruise',
        ],
      },
      {
        day: 3,
        location: 'Oslo to Bergen',
        activities: [
          'Travel to Bergen',
          'Explore Bryggen Wharf',
          'Sample seafood at the local market',
        ],
      },
      {
        day: 4,
        location: 'Bergen and the Fjords',
        activities: [
          'Discover Hardangerfjord',
          'Visit Vøringsfossen waterfall',
          'Explore Eidfjord',
        ],
      },
      {
        day: 5,
        location: 'Flam Railway and Fjord Cruise',
        activities: [
          'Experience Flam Railway',
          'Fjord cruise through Aurlandsfjord and Nærøyfjord',
        ],
      },
      {
        day: 6,
        location: 'Sognefjord and Geiranger',
        activities: ['Travel to Geiranger via Sognefjord', 'Explore Geiranger'],
      },
      {
        day: 7,
        location: 'Geirangerfjord',
        activities: [
          'Cruise through Geirangerfjord',
          'Visit Seven Sisters Waterfall',
          'Explore Eagle Road viewpoint',
        ],
      },
      {
        day: 8,
        location: 'Trondheim',
        activities: [
          'Journey to Trondheim',
          'Visit Nidaros Cathedral',
          'Explore Old Town Bridge',
        ],
      },
      {
        day: 9,
        location: 'Tromsø and the Arctic Circle',
        activities: [
          'Fly to Tromsø',
          'Explore Arctic Cathedral',
          'Northern Lights tour (weather permitting)',
        ],
      },
      {
        day: 10,
        location: 'Departure',
        activities: ['Bid farewell to Norway', 'Depart from Tromsø'],
      },
    ],
    imageUrls: [
      'https://framerusercontent.com/images/9pzAOSeFsdttkU4USKRBbbX5is.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/XUT5ZuRoKfVqqw0UJpDGdBzn0.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/3rV19lyu2PhqSyiSiwoccMzSMc.jpg?scale-down-to=1024',
    ],
  },
  {
    country: 'turkey',
    img: 'https://img.freepik.com/free-photo/set-colored-balloons-flying-ground-cappadocia-turkey_181624-20938.jpg?w=826&t=st=1701757856~exp=1701758456~hmac=4984495ba2396e7e1c5412f082f84701fb1420b0284a06e2349da1d1843aa2aa',
    desc: 'Turkish Delights: From Istanbul to Cappadocia',
    time: 10,
    aos: 'fade-left',
    price: 4000,
    price2: '$4500/person',
    visit: 'Turkish-Delights',
    to: '/Turkish-Delights',
    date: 'may 20',
    tourDetail:
      'Experience the enchanting blend of history, culture, and natural beauty on a 10-day journey through Turkey. From the vibrant streets of Istanbul to the otherworldly landscapes of Cappadocia, this tour offers a rich tapestry of experiences and unforgettable moments.',
    locationsArray: [
      {
        day: 1,
        location: 'Istanbul',
        activities: [
          'Arrive in Istanbul',
          'Check in to hotel',
          'Unwind after your journey',
        ],
      },
      {
        day: 2,
        location: 'Istanbul',
        activities: [
          'Explore Sultanahmet',
          'Visit Hagia Sophia',
          'Blue Mosque',
          'Topkapi Palace',
          'Stroll through Grand Bazaar',
        ],
      },
      {
        day: 3,
        location: 'Bosphorus Cruise',
        activities: [
          'Embark on Bosphorus cruise',
          'Visit Spice Bazaar',
          'Enjoy local cuisine',
        ],
      },
      {
        day: 4,
        location: 'Ephesus and Pamukkale',
        activities: [
          'Fly to Izmir',
          'Visit Ephesus',
          'See Library of Celsus and Temple of Artemis',
          'Continue to Pamukkale',
        ],
      },
      {
        day: 5,
        location: 'Hierapolis and Cappadocia',
        activities: [
          'Explore Hierapolis',
          'Travel to Cappadocia',
          'Check in to cave hotel',
        ],
      },
      {
        day: 6,
        location: 'Cappadocia',
        activities: [
          'Witness Cappadocia landscapes',
          'Enjoy hot air balloon ride (optional)',
        ],
      },
      {
        day: 7,
        location: 'Goreme Open-Air Museum',
        activities: ['Visit Goreme Open-Air Museum', 'Explore Uchisar'],
      },
      {
        day: 8,
        location: 'Kayseri and Whirling Dervishes',
        activities: [
          'Travel to Kayseri',
          'Explore historic sites',
          'Attend Whirling Dervishes performance',
        ],
      },
      {
        day: 9,
        location: 'Return to Istanbul',
        activities: ['Fly back to Istanbul', 'Visit Chora Church'],
      },
      {
        day: 10,
        location: 'Departure',
        activities: ['Bid farewell to Turkey', 'Depart from Istanbul'],
      },
    ],
    imageUrls: [
      'https://framerusercontent.com/images/bMGCwtKWBFX2YMYexUskCxwkvA.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/QpHy7z0l1vJ0ZrEjJlKDf9viu4.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/xglwXhuWLytESxqtDfQ8Fa1cKM.jpg?scale-down-to=1024',
      // Add more image URLs as needed
    ],
  },
  {
    country: 'Switzerland',
    img: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2015/09/gimmelwald-switz.jpg',
    desc: 'Swiss Splendor: From the Alps to the Lakes',
    time: 10,
    price: 4000,
    date: 'july 25',
    aos: 'fade-left',
    visit: 'Swiss-Splendor',
    to: '/Swiss-Splendor',

    tourDetail:
      'Discover the breathtaking landscapes, charming cities, and rich culture of Switzerland on a 10-day journey. From the majestic Swiss Alps to the serene lakeside towns, this tour offers a perfect blend of natural beauty and cultural experiences.',
    locationsArray: [
      {
        day: 1,
        location: 'Zurich',
        activities: [
          'Arrive in Zurich',
          'Check in to hotel',
          'Stroll along Lake Zurich or explore Old Town',
        ],
      },
      {
        day: 2,
        location: 'Zurich and Surroundings',
        activities: [
          'Explore Kunsthaus Zurich',
          'Visit Swiss National Museum',
          'Trip to Lucerne, visit Chapel Bridge',
        ],
      },
      {
        day: 3,
        location: 'Interlaken and Jungfrau Region',
        activities: [
          'Travel to Interlaken',
          'Cogwheel train to Jungfraujoch',
          'Enjoy views of Aletsch Glacier',
        ],
      },
      {
        day: 4,
        location: 'Lauterbrunnen Valley',
        activities: [
          'Visit Lauterbrunnen Valley',
          'Explore Trümmelbach Falls',
          'Explore Staubbach Falls',
        ],
      },
      {
        day: 5,
        location: 'Lake Geneva and Montreux',
        activities: [
          'Travel to Montreux',
          'Explore Chillon Castle',
          'Lakeside walk',
        ],
      },
      {
        day: 6,
        location: 'Bern and Swiss Chocolate',
        activities: [
          'Visit Bern',
          'Explore UNESCO-listed Old Town',
          'Swiss chocolate-making workshop',
        ],
      },
      {
        day: 7,
        location: 'Geneva',
        activities: [
          'Travel to Geneva',
          'Explore United Nations headquarters',
          'Stroll along the lakefront',
        ],
      },
      {
        day: 8,
        location: 'Zermatt and the Matterhorn',
        activities: [
          'Head to Zermatt',
          'Enjoy views of Matterhorn',
          'Explore the town',
        ],
      },
      {
        day: 9,
        location: 'Swiss Vineyards and Lausanne',
        activities: [
          'Discover Lavaux vineyards (UNESCO World Heritage site)',
          'Visit Lausanne',
          'Explore Olympic Museum',
        ],
      },
      {
        day: 10,
        location: 'Departure',
        activities: ['Bid farewell to Switzerland', 'Depart from Zurich'],
      },
    ],
    imageUrls: [
      'https://framerusercontent.com/images/fo91x70xaOOlyIIoPnRWrh20.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/JYVEZy7VHvtPaMjuLETRR62LY0.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/P5JktMCFlOxMlPlj7Evfmcw3A8.jpg?scale-down-to=1024',
    ],
  },
  {
    country: 'Germany',
    img: 'https://framerusercontent.com/images/ovTfdeGD1yrf2ccyU0jKMoeKi8.jpg?scale-down-to=2048',
    desc: 'Discover Germany: From Historic Cities to Scenic Countryside',
    time: 10,
    price: 3900,
    price2: '$4300/person',
    date: 'may 6',
    aos: 'zoom-in',

    visit: 'Discover-Germany',
    to: '/Discover-Germany',
    tourDetail:
      'Embark on a 10-day journey through Germany, a country renowned for its rich history, charming cities, and picturesque countryside. From the historic landmarks of Berlin to the fairy-tale landscapes of Bavaria, this tour offers a diverse range of experiences.',
    locationsArray: [
      {
        day: 1,
        location: 'Berlin',
        activities: [
          'Arrive in Berlin',
          'Check in to hotel',
          'Stroll through Brandenburg Gate and Unter den Linden',
        ],
      },
      {
        day: 2,
        location: 'Berlin City Exploration',
        activities: [
          'Explore Berlin Wall Memorial and Museum',
          'Visit Museum Island',
        ],
      },
      {
        day: 3,
        location: 'Potsdam Day Trip',
        activities: [
          'Travel to Potsdam',
          'Explore Sanssouci Palace and Park',
          'Discover historic city center and Dutch Quarter',
        ],
      },
      {
        day: 4,
        location: 'Dresden',
        activities: ['Travel to Dresden', 'Visit Zwinger Palace'],
      },
      {
        day: 5,
        location: 'Saxon Switzerland National Park',
        activities: [
          'Venture into Saxon Switzerland National Park',
          'Explore rock formations and Bastei Bridge',
        ],
      },
      {
        day: 6,
        location: 'Munich and Bavarian Traditions',
        activities: [
          'Fly to Munich',
          'Experience Bavarian traditions at a beer garden',
          'Explore Marienplatz',
        ],
      },
      {
        day: 7,
        location: 'Neuschwanstein Castle',
        activities: [
          'Visit Neuschwanstein Castle',
          'Explore Hohenschwangau Castle and surrounding countryside',
        ],
      },
      {
        day: 8,
        location: 'Romantic Road and Rothenburg',
        activities: [
          'Travel along Romantic Road to Rothenburg ob der Tauber',
          'Stroll through old town',
        ],
      },
      {
        day: 9,
        location: 'Heidelberg',
        activities: [
          "Visit Heidelberg', 'Explore castle overlooking the Neckar River', 'Explore old town and Philosopher's Walk",
        ],
      },
      {
        day: 10,
        location: 'Departure from Frankfurt',
        activities: ['Bid farewell to Germany', 'Depart from Frankfurt'],
      },
    ],
    imageUrls: [
      'https://framerusercontent.com/images/ZDXZM16X4IBrkQhnuiYUzMHgOBQ.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/zyg3uCzHjgZRs8u0KJioMZST3o.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/lJjW6bJSeJAB6eBJY2dCHLO5Lc.jpg?scale-down-to=1024',
      // Add more image URLs as needed
    ],
  },
  {
    country: 'Sweden',
    img: 'https://framerusercontent.com/images/krdf72mAsgPibgQSEijtygqdXk.jpg?scale-down-to=2048',
    desc: 'Sweden: Land of Endless Adventures',
    time: 10,
    aos: 'fade-left',
    price: 4200,
    date: 'july 20',
    visit: 'Sweden-adventures',
    to: '/Sweden-adventures',
    tourDetail:
      'Embark on a 10-day journey through Sweden, a country of stunning natural beauty, vibrant cities, and rich cultural heritage. From the cosmopolitan charm of Stockholm to the Arctic wilderness of Swedish Lapland, this tour offers a diverse range of experiences.',
    locationsArray: [
      {
        day: 1,
        location: 'Stockholm',
        activities: [
          'Arrive in Stockholm',
          'Check in to hotel',
          'Walk through Gamla Stan (Old Town)',
        ],
      },
      {
        day: 2,
        location: 'Stockholm City Exploration',
        activities: [
          'Explore Vasa Museum',
          'Visit Royal Palace',
          'Visit Skansen Open-Air Museum',
        ],
      },
      {
        day: 3,
        location: 'Archipelago Tour',
        activities: [
          'Take a boat trip through Stockholm Archipelago',
          'Explore picturesque islands',
          'Seafood lunch, swim in the Baltic Sea',
        ],
      },
      {
        day: 4,
        location: 'Gothenburg and Liseberg',
        activities: [
          'Travel to Gothenburg',
          'Visit Liseberg amusement park',
          "Explore the city's vibrant food scene",
        ],
      },
      {
        day: 5,
        location: 'West Coast Adventure',
        activities: [
          'Explore West Coast with rocky cliffs and fishing villages',
          'Enjoy fresh seafood',
        ],
      },
      {
        day: 6,
        location: 'Malmö and Öresund Bridge',
        activities: [
          'Head to Malmö',
          'Cross Öresund Bridge',
          "Explore Malmö's old town and Turning Torso skyscraper",
        ],
      },
      {
        day: 7,
        location: 'Gothenburg to Swedish Lapland',
        activities: [
          'Fly to Luleå in Swedish Lapland',
          'Settle into a wilderness lodge',
        ],
      },
      {
        day: 8,
        location: 'Arctic Wilderness Exploration',
        activities: [
          'Enjoy dog sledding',
          'Visit icebreaker ship, try ice swimming (season permitting)',
        ],
      },
      {
        day: 9,
        location: 'Northern Lights and Sami Culture',
        activities: [
          'Hunt for Northern Lights with a guide',
          'Learn about Sami culture and traditions',
        ],
      },
      {
        day: 10,
        location: 'Departure',
        activities: ['Bid farewell to Sweden', 'Depart from Luleå'],
      },
    ],
    imageUrls: [
      'https://framerusercontent.com/images/8VO21G6HqaDMjiGvqay6lTq3UUE.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/TBawzRD4OvWzLXZTsshnsweHID0.jpg?scale-down-to=1024',
      'https://framerusercontent.com/images/J3BHzDmaO9BLvphzSQbJydQ2pb4.jpg?scale-down-to=1024',
      // Add more image URLs as needed
    ],
  },
]

export default data
