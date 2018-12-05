exports.up = function (knex, Promise) {

  return Promise.all([

    knex.schema.createTable('validLocationTypes', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('type');
      table.timestamps(true, true);
    }),

  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('validLocationTypes')
  ])
};