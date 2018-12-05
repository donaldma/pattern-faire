const Constants = require('../../config/Constants')

exports.seed = function (knex, Promise) {
  return knex('validLocationTypes').del()
    .then(() => {
      let promises = Constants.validLocationTypes.map(x => {
        return knex('validLocationTypes').insert(x)
      })

      return Promise.all(promises);
    });
};