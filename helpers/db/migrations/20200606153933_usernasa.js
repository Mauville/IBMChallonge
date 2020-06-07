
exports.up = function(knex) {
    return knex.schema.createTable("usernasa",function(table){

        table.increments("user_NasaID").notNullable();

        table.integer("janFeb").notNullable();
        table.integer("marApr").notNullable();
        table.integer("mayJun").notNullable();
        table.integer("julAgo").notNullable();
        table.integer("sepOct").notNullable();
        table.integer("novDec").notNullable();

        table.integer("userID")
            .notNullable()
            .references("userID")
            .inTable("user")
            .index();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("usernasa");
};
