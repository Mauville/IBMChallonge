
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('usernasa').insert([
        {
          janFeb: 1, 
          marApr: 1, 
          mayJun: 0, 
          julAgo: 11, 
          sepOct: 21,
          novDec:12 
        }
      ]);
    });
};
