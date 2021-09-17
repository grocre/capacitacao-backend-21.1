
exports.up = function(knex) {
  return knex.schema.createTable("crews", table => {
    table.uuid("id").unique();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("crews");
};
