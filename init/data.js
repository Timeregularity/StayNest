const sampleListings = [

    {
      title: "Green Valley Mountain Resort",
      description: "Luxury mountain resort surrounded by lush green hills.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&h=700&fit=crop",
      price: 7200,
      location: "Manali, Himachal Pradesh",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Rainforest Eco Hotel",
      description: "Modern eco hotel surrounded by dense rainforest.",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&h=700&fit=crop",
      price: 6800,
      location: "Wayanad, Kerala",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Hilltop Forest Resort",
      description: "Premium hilltop resort with forest valley views.",
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&h=700&fit=crop",
      price: 7500,
      location: "Coorg, Karnataka",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Lakeview Green Resort",
      description: "Resort facing a scenic lake with mountain backdrop.",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&h=700&fit=crop",
      price: 8100,
      location: "Nainital, Uttarakhand",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Emerald Hills Luxury Hotel",
      description: "Elegant hotel nestled in lush green hills.",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&h=700&fit=crop",
      price: 6900,
      location: "Ooty, Tamil Nadu",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
  
    {
      title: "Tea Garden View Resort",
      description: "Resort overlooking beautiful green tea plantations.",
      img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=1000&h=700&fit=crop",
      price: 7300,
      location: "Munnar, Kerala",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Jungle Retreat Hotel",
      description: "Hotel surrounded by tropical jungle greenery.",
      img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1000&h=700&fit=crop",
      price: 6600,
      location: "Jim Corbett, Uttarakhand",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Valley Breeze Nature Resort",
      description: "Scenic valley resort with panoramic green views.",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&h=700&fit=crop",
      price: 7800,
      location: "Shillong, Meghalaya",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Green Canopy Boutique Hotel",
      description: "Boutique hotel surrounded by tall trees and gardens.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&h=700&fit=crop",
      price: 6400,
      location: "Chikmagalur, Karnataka",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Misty Hillside Resort",
      description: "Luxury hillside hotel covered in green misty mountains.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&h=700&fit=crop",
      price: 8200,
      location: "Darjeeling, West Bengal",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    }
    ,
    {
      title: "Forest Valley Luxury Resort",
      description: "Luxury resort surrounded by dense forest and valley views.",
      img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&h=700&fit=crop",
      price: 7600,
      location: "Kabini, Karnataka",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Green Horizon Mountain Hotel",
      description: "Mountain-facing hotel with lush green landscapes.",
      img: "https://images.unsplash.com/photo-1576675784201-0e142b423952?w=1000&h=700&fit=crop",
      price: 7100,
      location: "Dharamshala, Himachal Pradesh",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Riverside Forest Resort",
      description: "Hotel located beside a flowing river and forest.",
      img: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1000&h=700&fit=crop",
      price: 6900,
      location: "Rishikesh, Uttarakhand",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Hillcrest Green Stay",
      description: "Comfortable stay on green hilltops with scenic views.",
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1000&h=700&fit=crop",
      price: 6200,
      location: "Kodaikanal, Tamil Nadu",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Nature Crown Boutique Resort",
      description: "Elegant boutique resort surrounded by tropical greenery.",
      img: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=1000&h=700&fit=crop",
      price: 8300,
      location: "Goa, India",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Evergreen Hills Hotel",
      description: "Hotel overlooking evergreen hills and valleys.",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&h=700&fit=crop",
      price: 7400,
      location: "Gangtok, Sikkim",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Tea Estate Luxury Resort",
      description: "Resort surrounded by green tea plantations.",
      img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1000&h=700&fit=crop",
      price: 7900,
      location: "Munnar, Kerala",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Woodland Escape Hotel",
      description: "Peaceful woodland hotel with scenic nature views.",
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&h=700&fit=crop",
      price: 6500,
      location: "Pachmarhi, Madhya Pradesh",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Valley Greens Premium Resort",
      description: "Premium valley-facing resort surrounded by greenery.",
      img: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=1000&h=700&fit=crop",
      price: 8600,
      location: "Shillong, Meghalaya",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Mountain Serenity Lodge",
      description: "Green mountain lodge with peaceful atmosphere.",
      img: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=1000&h=700&fit=crop",
      price: 7200,
      location: "Tirthan Valley, Himachal Pradesh",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Green Cliffside Resort",
      description: "Cliffside hotel with panoramic green valley views.",
      img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1000&h=700&fit=crop",
      price: 8800,
      location: "Lonavala, Maharashtra",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Jungle View Luxury Hotel",
      description: "Hotel with balconies overlooking jungle landscapes.",
      img: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=1000&h=700&fit=crop",
      price: 7600,
      location: "Bandipur, Karnataka",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "River Mist Nature Resort",
      description: "Riverside resort surrounded by green hills.",
      img: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=1000&h=700&fit=crop",
      price: 6900,
      location: "Almora, Uttarakhand",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Green Terrace Hill Hotel",
      description: "Terrace hotel with green mountain backdrops.",
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&h=700&fit=crop",
      price: 7100,
      location: "Mussoorie, Uttarakhand",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Nature Bliss Hillside Resort",
      description: "Hillside resort surrounded by greenery and mist.",
      img: "https://images.unsplash.com/photo-1582719478173-1a9f6b2b1b96?w=1000&h=700&fit=crop",
      price: 8400,
      location: "Saputara, Gujarat",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Green Meadow Boutique Hotel",
      description: "Boutique hotel located in lush green meadows.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&h=700&fit=crop",
      price: 6500,
      location: "Auli, Uttarakhand",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Mountain Breeze Eco Resort",
      description: "Eco-friendly resort surrounded by green mountains.",
      img: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=1000&h=700&fit=crop",
      price: 7300,
      location: "Kasauli, Himachal Pradesh",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Forest Ridge Premium Stay",
      description: "Premium forest stay with scenic nature views.",
      img: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=1000&h=700&fit=crop",
      price: 8100,
      location: "Chikmagalur, Karnataka",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Green Haven Valley Resort",
      description: "Valley-facing resort surrounded by lush greenery.",
      img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1000&h=700&fit=crop",
      price: 7800,
      location: "Valparai, Tamil Nadu",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    },
    {
      title: "Woodland Panorama Hotel",
      description: "Hotel offering panoramic forest and hill views.",
      img: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=1000&h=700&fit=crop",
      price: 7200,
      location: "Dandeli, Karnataka",
      country: "India",
      owner: "699dbdec0d8fb75d1a4547f6"
    }
  ];
  
  

module.exports = { data:sampleListings };