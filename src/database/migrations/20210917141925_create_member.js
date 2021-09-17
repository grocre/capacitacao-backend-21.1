exports.up = function(knex) {
return knex.schema.createTable("members", table => {
    table.uuid("id").unique();
    table.string("name").notNullable();
    table.timestamps(true, true);
    table.uuid("crew_id").references("id").inTable("crews").onDelete("CASCADE");
  });
}

exports.down = function(knex) {
  return knex.schema.dropTable("members");
};
