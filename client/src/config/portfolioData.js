const images = [1, 2, 3, 4, 5, 6]

export default [
  {
    type: 'Bedrooms',
    id: 'bedrooms',
    data: images.map((x) => `bedrooms/${x}.jpg`)
  },
  {
    type: 'Commercial',
    id: 'commercial',
    data: images.map((x) => `commercial/${x}.jpg`)
  },
  {
    type: 'Dining Rooms',
    id: 'dining-rooms',
    data: images.map((x) => `dining-rooms/${x}.jpg`)
  },
  {
    type: 'Home Offices',
    id: 'home-offices',
    data: images.map((x) => `home-offices/${x}.jpg`)
  },
  {
    type: 'Kitchens & Bathrooms',
    id: 'kitchens-bathrooms',
    data: images.map((x) => `kitchens-bathrooms/${x}.jpg`)
  },
  {
    type: 'Living Rooms',
    id: 'living-rooms',
    data: images.map((x) => `living-rooms/${x}.jpg`)
  }
]
