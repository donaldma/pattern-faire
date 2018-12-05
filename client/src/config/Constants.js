const locationTypes = ['residential', 'retail', 'restaurant', 'commercial']

const serviceTypes = [
  {
    id: 'interior design',
    isSelected: false
  },
  {
    id: 'renovation',
    isSelected: false
  }
]

const interiorDesignOptions = [
  {
    id: 'interior finishes',
    subText: '(Sourcing material for a renovation)',
    isSelected: false
  },
  {
    id: 'art selection',
    subText: '(Finding the right pieces)',
    isSelected: false
  },
  {
    id: 'style guidance',
    subText: '(Bring it all together)',
    isSelected: false
  },
  {
    id: 'furniture selection',
    subText: '(Choosing new pieces)',
    isSelected: false
  }
]

const renovationLevels = [
  {
    id: 'light',
    subText: '(Painting walls, installing bookcases)'
  },
  {
    id: 'medium',
    subText: '(Kitchen cabinet fronts, moving a doorway)'
  },
  {
    id: 'heavy',
    subText: '(Full gut renovation)'
  },
  {
    id: 'new build',
    subText: '(Building from the ground up)'
  }
]

const spaceOptions = [
  {
    id: 'living room',
    count: 0
  },
  {
    id: 'dining room',
    count: 0
  },
  {
    id: 'bedroom',
    count: 0
  },
  {
    id: 'kitchen',
    count: 0
  },
  {
    id: 'bathroom',
    count: 0
  },
  {
    id: 'entryway/stairway',
    count: 0
  },
  {
    id: 'home office',
    count: 0
  },
  {
    id: 'kids nursery',
    count: 0
  },
  {
    id: 'outdoor/landscaping',
    count: 0
  },
  {
    id: 'other',
    count: 0
  }
]

module.exports = {
  locationTypes,
  serviceTypes,
  interiorDesignOptions,
  renovationLevels,
  spaceOptions
}
