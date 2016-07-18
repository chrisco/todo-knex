
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE todo RESTART IDENTITY CASCADE');
};
