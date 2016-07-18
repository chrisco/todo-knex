
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo', function (table) {
    table.increments();
    table.text('desc');
    table.boolean('status');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todo');
};
