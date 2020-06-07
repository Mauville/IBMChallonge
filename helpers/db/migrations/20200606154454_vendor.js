
exports.up = function(knex) {
    return knex.schema.createTable("vendor", function(table){

        table.increments("vendorID").notNullable();
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("vendor");
};
