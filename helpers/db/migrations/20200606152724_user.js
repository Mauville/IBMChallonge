
exports.up = function(knex) {
    return knex.schema.createTable("user",function(table){

        table.increments("userID").notNullable();

        table.text("mail");
        table.text("name");
        table.integer("microwaves");
        table.integer("ricecoocker");
        table.integer("lightbulbg");
        table.decimal("coordinateX");
        table.decimal("coordinateY");

        table.integer("userCurrentID")
            .notNullable()
            .references("usercurrentID")
            .inTable("usercurrent")
            .index();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
