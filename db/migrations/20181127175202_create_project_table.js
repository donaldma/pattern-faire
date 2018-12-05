exports.up = function (knex, Promise) {

  return Promise.all([

    knex.schema.createTable('project', function (table) {
      table.increments('id').primary();
      table.string('email');
      table.string('fullName');
      table.string('locationType');
      table.string('businessName');
      table.string('businessAddress');
      table.string('residenceAddress');
      table.string('renovationLevel');
      table.text('notes', 'longtext');
      table.integer('budget');
      table.timestamps(true, true);
    }),

  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('project')
  ])
};