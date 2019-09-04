
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('partners').del(),
    knex.raw('ALTER SEQUENCE partners_id_seq RESTART WITH 1'),
    knex('partners').then(function() {
      // Inserts seed entries
      return knex('partners').insert([
        {
          name: 'Accueil Bonneau',
          description: 'Chaque jour, nous ouvrons notre porte à des centaines de personnes vivant en situation d’itinérance ou étant à risque. Chaque fois, ce sont des gens comme vous, des bénévoles, des intervenants, des religieuses, des employés et de généreux bienfaiteurs qui ouvrent leur cœur et tendent la main pour leur donner un peu de réconfort et nouer un lien, le premier pas vers la réinsertion sociale. Grâce à vous, nous sommes l’Accueil Bonneau depuis 1877, merci!',
          address_id: 1,
          picture_url: 'images/partners/acceuil_bonneau.jpg',
          partner_url: 'https://www.accueilbonneau.com/',
          private_contact_name: 'Serge Test',
          private_phone_number: '15555555555',
          private_email: 'test@test.com',
          is_active: true,
          is_address_visible: true,
        },{
          name: 'Appartements Supervisés Augustine-Gonzalez',
          description: 'Chaque jour, nous ouvrons notre porte à des centaines de personnes vivant en situation d’itinérance ou étant à risque. Chaque fois, ce sont des gens comme vous, des bénévoles, des intervenants, des religieuses, des employés et de généreux bienfaiteurs qui ouvrent leur cœur et tendent la main pour leur donner un peu de réconfort et nouer un lien, le premier pas vers la réinsertion sociale. Grâce à vous, nous sommes l’Accueil Bonneau depuis 1877, merci!',
          address_id: 1,
          picture_url: 'images/sponsors/appartements_augustine_gonzalez.jpg',
          private_contact_name: 'Serge Test',
          private_phone_number: '15555555555',
          private_email: 'test@test.com',
          is_active: true,
          is_address_visible: true,
        }
      ]);
    }),
  ]);
};
