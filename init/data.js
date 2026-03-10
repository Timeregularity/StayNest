const sampleListings = [

  {
  title:"Cozy Beachfront Cottage",
  description:"Escape to this charming beachfront cottage...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b"},
  price:1500,
  location:"Malibu",
  country:"United States",
  category:"Coastal",
  owner:"699aecba92e5ab250ca5044f"
  },
  
  {
  title:"Modern Loft in Downtown",
  description:"Stay in the heart of the city...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},
  price:1200,
  location:"New York City",
  country:"United States",
  category:"Iconic Cities",
  owner:"699b00ec7738da28bd765e6a"
  },
  
  {
  title:"Mountain Retreat",
  description:"Unplug and unwind in this peaceful mountain cabin...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d"},
  price:1000,
  location:"Aspen",
  country:"United States",
  category:"Hills",
  owner:"699b01067738da28bd765e6f"
  },
  
  {
  title:"Historic Villa in Tuscany",
  description:"Experience the charm of Tuscany...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1566073771259-6a8506099945"},
  price:2500,
  location:"Florence",
  country:"Italy",
  category:"Trending",
  owner:"699b01fcdc24059617733c77"
  },
  
  {
  title:"Secluded Treehouse Getaway",
  description:"Live among the treetops...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"},
  price:800,
  location:"Portland",
  country:"United States",
  category:"Camping",
  owner:"699dbd5b1c9d6e4ba2129cd0"
  },
  
  {
  title:"Beachfront Paradise",
  description:"Step out of your door onto the sandy beach...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"},
  price:2000,
  location:"Cancun",
  country:"Mexico",
  category:"Coastal",
  owner:"699dbdec0d8fb75d1a4547f6"
  },
  
  {
  title:"Rustic Cabin by the Lake",
  description:"Spend your days fishing and kayaking...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"},
  price:900,
  location:"Lake Tahoe",
  country:"United States",
  category:"Hills",
  owner:"699aecba92e5ab250ca5044f"
  },
  
  {
  title:"Luxury Penthouse with City Views",
  description:"Indulge in luxury living...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd"},
  price:3500,
  location:"Los Angeles",
  country:"United States",
  category:"Iconic Cities",
  owner:"699b00ec7738da28bd765e6a"
  },
  
  {
  title:"Ski-In/Ski-Out Chalet",
  description:"Hit the slopes right from your doorstep...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb"},
  price:3000,
  location:"Verbier",
  country:"Switzerland",
  category:"Snow",
  owner:"699b01067738da28bd765e6f"
  },
  
  {
  title:"Safari Lodge in the Serengeti",
  description:"Experience the thrill of the wild...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e"},
  price:4000,
  location:"Serengeti National Park",
  country:"Tanzania",
  category:"Trending",
  owner:"699b01fcdc24059617733c77"
  },
  
  {
  title:"Historic Canal House",
  description:"Stay in a piece of history...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"},
  price:1800,
  location:"Amsterdam",
  country:"Netherlands",
  category:"Iconic Cities",
  owner:"699dbd5b1c9d6e4ba2129cd0"
  },
  
  {
  title:"Private Island Retreat",
  description:"Have an entire island to yourself...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1618140052121-39fc6db33972"},
  price:10000,
  location:"Fiji",
  country:"Fiji",
  category:"Coastal",
  owner:"699dbdec0d8fb75d1a4547f6"
  },
  
  {
  title:"Charming Cottage in the Cotswolds",
  description:"Escape to the picturesque Cotswolds...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1602088113235-229c19758e9f"},
  price:1200,
  location:"Cotswolds",
  country:"United Kingdom",
  category:"Hills",
  owner:"699aecba92e5ab250ca5044f"
  },
  
  {
  title:"Historic Brownstone in Boston",
  description:"Step back in time in this elegant historic brownstone...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1533619239233-6280475a633a"},
  price:2200,
  location:"Boston",
  country:"United States",
  category:"Iconic Cities",
  owner:"699b00ec7738da28bd765e6a"
  },
  
  {
  title:"Beachfront Bungalow in Bali",
  description:"Relax on the sandy shores of Bali...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1602391833977-358a52198938"},
  price:1800,
  location:"Bali",
  country:"Indonesia",
  category:"Coastal",
  owner:"699b01067738da28bd765e6f"
  },
  
  {
  title:"Mountain View Cabin in Banff",
  description:"Enjoy breathtaking mountain views...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb"},
  price:1500,
  location:"Banff",
  country:"Canada",
  category:"Hills",
  owner:"699b01fcdc24059617733c77"
  },
  
  {
  title:"Art Deco Apartment in Miami",
  description:"Step into the glamour of the 1920s...",
  img:{filename:"listingimage",url:"https://plus.unsplash.com/premium_photo-1670963964797-942df1804579"},
  price:1600,
  location:"Miami",
  country:"United States",
  category:"Rooms",
  owner:"699dbd5b1c9d6e4ba2129cd0"
  },
  
  {
  title:"Tropical Villa in Phuket",
  description:"Escape to a tropical paradise...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1470165301023-58dab8118cc9"},
  price:3000,
  location:"Phuket",
  country:"Thailand",
  category:"Coastal",
  owner:"699dbdec0d8fb75d1a4547f6"
  },
  
  {
  title:"Historic Castle in Scotland",
  description:"Live like royalty in this historic castle...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1585543805890-6051f7829f98"},
  price:4000,
  location:"Scottish Highlands",
  country:"United Kingdom",
  category:"Trending",
  owner:"699aecba92e5ab250ca5044f"
  },
  
  {
  title:"Desert Oasis in Dubai",
  description:"Experience luxury in the middle of the desert...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1518684079-3c830dcef090"},
  price:5000,
  location:"Dubai",
  country:"United Arab Emirates",
  category:"Trending",
  owner:"699b00ec7738da28bd765e6a"
  },
  
  {
  title:"Rustic Log Cabin in Montana",
  description:"Unplug and unwind in this cozy log cabin...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1586375300773-8384e3e4916f"},
  price:1100,
  location:"Montana",
  country:"United States",
  category:"Hills",
  owner:"699b01067738da28bd765e6f"
  },
  
  {
  title:"Beachfront Villa in Greece",
  description:"Enjoy the crystal-clear waters...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f"},
  price:2500,
  location:"Mykonos",
  country:"Greece",
  category:"Coastal",
  owner:"699b01fcdc24059617733c77"
  },
  
  {
  title:"Eco-Friendly Treehouse Retreat",
  description:"Stay in an eco-friendly treehouse...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1488462237308-ecaa28b729d7"},
  price:750,
  location:"Costa Rica",
  country:"Costa Rica",
  category:"Camping",
  owner:"699dbd5b1c9d6e4ba2129cd0"
  },
  
  {
  title:"Historic Cottage in Charleston",
  description:"Experience the charm of historic Charleston...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904"},
  price:1600,
  location:"Charleston",
  country:"United States",
  category:"Rooms",
  owner:"699dbdec0d8fb75d1a4547f6"
  },
  
  {
  title:"Modern Apartment in Tokyo",
  description:"Explore the vibrant city of Tokyo...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1480796927426-f609979314bd"},
  price:2000,
  location:"Tokyo",
  country:"Japan",
  category:"Iconic Cities",
  owner:"699aecba92e5ab250ca5044f"
  },
  
  {
  title:"Lakefront Cabin in New Hampshire",
  description:"Spend your days by the lake...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1578645510447-e20b4311e3ce"},
  price:1200,
  location:"New Hampshire",
  country:"United States",
  category:"Camping",
  owner:"699b00ec7738da28bd765e6a"
  },
  
  {
  title:"Luxury Villa in the Maldives",
  description:"Indulge in luxury in this overwater villa...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1439066615861-d1af74d74000"},
  price:6000,
  location:"Maldives",
  country:"Maldives",
  category:"Coastal",
  owner:"699b01067738da28bd765e6f"
  },
  
  {
  title:"Ski Chalet in Aspen",
  description:"Hit the slopes in style...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"},
  price:4000,
  location:"Aspen",
  country:"United States",
  category:"Snow",
  owner:"699b01fcdc24059617733c77"
  },
  
  {
  title:"Secluded Beach House in Costa Rica",
  description:"Escape to a secluded beach house...",
  img:{filename:"listingimage",url:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"},
  price:1800,
  location:"Costa Rica",
  country:"Costa Rica",
  category:"Coastal",
  owner:"699dbd5b1c9d6e4ba2129cd0"
  }
  
  ];
  
  module.exports = { data: sampleListings };