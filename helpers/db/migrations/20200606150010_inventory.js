
exports.up = function(knex, Promise) {
    return knex.schema.createTable("inventory",function(table){
        table.increments("ID");
        //Varchar in Knex es just .string
        //Text is just .text
        table.string("product").notNullable();
        table.integer("quantity").notNullable().defaultsTo(0); 
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("inventory"); 
};
