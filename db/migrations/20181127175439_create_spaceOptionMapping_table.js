exports.up = function (knex, Promise) {

  return Promise.all([

    knex.schema.createTable('spaceOptionMapping', function (table) {
      table.increments('id').primary();
      table.integer('projectId')
        .references('id')
        .inTable('project')
        .onDelete('CASCADE');
      table.string('name');
      table.string('count').default(1);
      table.timestamps(true, true);
    }),

  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('spaceOptionMapping')
  ])
};