
exports.up = function(knex) {
    return knex.schema.createTable("user_vendor_quotation", function(table){

        table.increments("userVendorQuoteID").notNullable();
        
        table.integer("quotationID").notNullable();
        table.integer("price").notNullable();
        
        table.integer("userID")
            .notNullable()
            .references("userID")
            .inTable("user")
            .index();

        table.integer("vendorID")
            .notNullable()
            .references("vendorID")
            .inTable("vendor")
            .index();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user_vendor_quotation");
};
