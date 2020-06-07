
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
          {vendorID:1}
//This attribute is autoincremented tho. Reffer to 20200606154454_vendor.js
      ]);
    });
};
