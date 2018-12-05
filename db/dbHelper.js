'use strict'

module.exports = (knex) => {
  return {
    addActivity: async (ipAddress) => {
      return knex('activity')
        .returning('*')
        .insert({ ipAddress })
    },

    getUniqueUsers: async () => {
      return knex('activity')
        .distinct('ipAddress')
        .select('*')
    },

    getEmailRecipients: async () => {
      return knex('emailRecipients')
        .select('*')
    },

    getValidLocationTypes: async () => {
      return knex('validLocationTypes')
        .select('*')
    },

    addReferralRequest: (referralEntity) => {
      return knex('referral')
        .returning('*')
        .insert(referralEntity)
    },

    addProject: (projectEntity) => {
      return knex('project')
        .returning('*')
        .insert(projectEntity)
    },

    addInteriorDesignOptions: (table, options, projectId) => {
      const promises = options.map(option => {
        return knex(table)
          .returning(['name'])
          .insert({
            projectId,
            name: option.name
          })
      })

      return Promise.all(promises)
    },

    addSpaceOptions: (table, options, projectId) => {
      const promises = options.map(option => {
        return knex(table)
          .returning(['name','count'])
          .insert({
            projectId,
            name: option.name,
            count: option.count
          })
      })

      return Promise.all(promises)
    },

  }
};