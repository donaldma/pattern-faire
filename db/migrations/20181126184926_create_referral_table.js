exports.up = function (knex, Promise) {

  return Promise.all([

    knex.schema.createTable('referral', function (table) {
      table.increments('id').primary();
      table.string('referrerEmail');
      table.string('clientEmail');
      table.string('ipAddress');
      table.timestamps(true, true);
    }),

  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('referral')
  ])
};