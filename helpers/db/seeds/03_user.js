
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          mail: "alguien@example.com", 
          name:"Alguien", 
          microwaves:2, 
          ricecooker: 0, 
          lightbulbs: 20, 
          coordinateX: 123231.23, 
          coordinateY: 29839.22, 
          usercurrentID:1
        }
      ]);
    });
};
