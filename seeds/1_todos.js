
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todo').insert({desc: 'Buy milk', status: true}),
        knex('todo').insert({desc: 'Study', status: false}),
        knex('todo').insert({desc: 'Eat', status: false}),
        knex('todo').insert({desc: 'Sleep', status: false})
      ]);
    });
};
