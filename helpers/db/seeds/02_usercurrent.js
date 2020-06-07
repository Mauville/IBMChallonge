
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('usercurrent').insert([
        {
          janFeb: 1.5, 
          marApr: 1.2, 
          mayJun: 0.1, 
          julAgo: 11.2, 
          sepOct: 2.1, 
          novDec:1.2 
        }
      ]);
    });
};
