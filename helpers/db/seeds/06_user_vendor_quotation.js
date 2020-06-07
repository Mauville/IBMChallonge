
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
          {
            userID:1, 
            vendorID:1, 
            price:200, 
            quotationID:1}
      ]);
    });
};
