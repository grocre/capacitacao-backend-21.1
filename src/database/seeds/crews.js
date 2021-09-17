const { v4 } = require('uuid');

exports.seed = function(knex) {
  return knex('crews').del()
    .then(function () {
      return knex('crews').insert([
        {
          id: v4(), 
          name: "WolfByte"
        },
      ]);
    });
};
