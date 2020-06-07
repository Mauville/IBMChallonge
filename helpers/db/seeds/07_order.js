
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          quotationID:1, 
          vendorID:1, 
          solarPanel: 12,
          batteryUse:12,
          reductorUse:22, 
          mysteryComponentUse:21
        }
      ]);
    });
};
