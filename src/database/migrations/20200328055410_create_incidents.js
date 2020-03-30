exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('fiquefit_id').notNullable();

        table.foreign('fiquefit_id').references('id').inTable('fiquefit');
    })
  };

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  
};
