
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          user_id: '12',
          title: "Meu Projeto"
        },
        {
          user_id: '13',
          title: "Outro Projeto"
        },        
      ]);
    });
};
