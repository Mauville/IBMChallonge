
exports.up = function(knex) {
    return knex.schema.createTable("order",function(table){

        table.increments("orderID").notNullable();

        table.integer("solarPanel").notNullable();
        table.integer("batteryUse").notNullable();
        table.integer("reductorUse").notNullable();
        table.integer("mysteryComponentUse").notNullable();
        
        table.integer("quotationID")
            .notNullable()
            .references("userVendorQuoteID")
            .inTable("user_vendor_quotation")
            .index();

        table.integer("vendorID")
            .notNullable()
            .references("vendorID")
            .inTable("vendor")
            .index();
    });
};  

exports.down = function(knex) {
    return knex.schema.dropTable("order");
};
