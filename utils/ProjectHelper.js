const createError = require('http-errors')
const Helpers = require('./Helpers')
const validator = require('email-validator')

module.exports = (
  {
    email,
    fullName,
    locationType,
    businessName,
    businessAddress,
    residenceAddress,
    interiorDesignOptions,
    renovationLevel,
    spaceOptions,
    notes,
    budget
  },
  validLocationTypes
) => {
  return {
    validateNewProject: () => {
      const cleanLocationType = Helpers.cleanString(locationType)

      if (!email) throw createError(400, 'Please enter a email')

      if (!validator.validate(email)) throw createError(400, 'Please enter a valid email')

      if (!fullName) throw createError(400, 'Please enter a name')

      if (!locationType) throw createError(400, 'Please enter a location type')

      const validLTNames = validLocationTypes.map((x) => x.name)
      if (!validLTNames.includes(cleanLocationType))
        throw createError(
          400,
          `Location type must be one of ${validLTNames}. You entered: ${cleanLocationType}. Contact us for more info.`
        )

      const selectedLocationType = validLocationTypes.find((x) => x.name === cleanLocationType)
      if (selectedLocationType.type === 'business') {
        if (!businessName) throw createError(400, 'Please enter a business name')
        if (!businessAddress) throw createError(400, 'Please enter a business address')
      }

      if (selectedLocationType.type === 'residence') {
        if (!residenceAddress) throw createError(400, 'Please enter a residence address')
      }

      if (interiorDesignOptions.length > 0) {
        interiorDesignOptions.forEach((x) => {
          if (!x.name) throw createError(400, 'Please choose a valid interior design option')
        })
      }

      spaceOptions.forEach((x) => {
        if (!x.name) throw createError(400, 'Please choose a valid space')
      })

      if (!spaceOptions || spaceOptions.length < 1) throw createError(400, 'Please choose at least one space option')

      if (!budget) throw createError(400, 'Please enter a budget')

      if (budget > 250000) throw createError(400, 'Currently we only support projects up to $250K')
    },

    createProjectEntity: () => {
      return {
        email,
        fullName,
        locationType: Helpers.cleanString(locationType),
        businessName,
        businessAddress,
        residenceAddress,
        renovationLevel: renovationLevel && Helpers.cleanString(renovationLevel),
        notes,
        budget
      }
    },

    getAllFieldsWithOptions: () => {
      return {
        interiorDesignOptions: interiorDesignOptions.map((x) => {
          return {
            ...x,
            name: Helpers.cleanString(x.name)
          }
        }),
        spaceOptions: spaceOptions.map((x) => {
          return {
            ...x,
            name: Helpers.cleanString(x.name)
          }
        })
      }
    },

    /**
     * addPRes = addProjectResponse
     * addIdRes = addInteriorDesignOptionsResponse
     * addSRes = addSpaceOptionsResponse
     */
    createEmailEntity: (addPRes, addIdRes, addSRes) => {
      return [
        {
          key: 'Email',
          value: addPRes.email
        },
        {
          key: 'Full Name',
          value: addPRes.fullName
        },
        {
          key: 'Location Type',
          value: addPRes.locationType
        },
        {
          key: 'Business Name',
          value: addPRes.businessName
        },
        {
          key: 'Business Address',
          value: addPRes.businessAddress
        },
        {
          key: 'Residence Address',
          value: addPRes.residenceAddress
        },
        {
          key: 'Interior Design Options',
          value: addIdRes.map((x) => x.name).join('<br>')
        },
        {
          key: 'Renovation Level',
          value: addPRes.renovationLevel
        },
        {
          key: 'Space Options',
          value: addSRes.map((x) => `${x.name}: ${x.count}`).join('<br>')
        },
        {
          key: 'Additional Notes',
          value: addPRes.notes
        },
        {
          key: 'Budget',
          value: addPRes.budget
        }
      ]
    }
  }
}
