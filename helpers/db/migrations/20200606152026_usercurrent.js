
exports.up = function(knex) {
    return knex.schema.createTable("usercurrent",function(table){
        table.increments("usercurrentID").notNullable();

        table.decimal("janFeb");
        table.decimal("marApr");
        table.decimal("mayJun");
        table.decimal("julAgo");
        table.decimal("sepOct");
        table.decimal("novDec");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("usercurrent");
};
