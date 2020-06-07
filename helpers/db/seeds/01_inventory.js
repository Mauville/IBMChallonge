
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {product: "Pipitoche", quantity: 10},
        {product: "Cachirul", quantity: 12}
      ]);
    });
};
