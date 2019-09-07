
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
          picture_url: 'images/partners/appartements_augustine_gonzalez.jpg',
          private_contact_name: 'Serge Test',
          private_phone_number: '15555555555',
          private_email: 'test@test.com',
          is_active: true,
          is_address_visible: true,
        },{
          name: 'Association de Montréal pour la déficience intellectuelle',
          description: 'Notre mission : Accompagner et soutenir les personnes ayant une déficience intellectuelle et les aider à maintenir leur plein potentiel personnel et social, tout en favorisant leur épanouissement.',
          address_id: 1,
          picture_url: 'images/partners/amdi.jpg',
          private_contact_name: 'Serge Test',
          private_phone_number: '15555555555',
          private_email: 'test@test.com',
          is_active: true,
          is_address_visible: true,
        },{
          name: 'Association de Montréal pour la déficience intellectuelle',
          description: 'Notre mission : Accompagner et soutenir les personnes ayant une déficience intellectuelle et les aider à maintenir leur plein potentiel personnel et social, tout en favorisant leur épanouissement.',
          address_id: 1,
          picture_url: 'images/partners/amdi.jpg',
          private_contact_name: 'Serge Test',
          private_phone_number: '15555555555',
          private_email: 'test@test.com',
          is_active: true,
          is_address_visible: true,
        },{
          name: 'Auberge Madeleine',
          description: "Fondée en 1983, L'AUBERGE MADELEINE est une maison d'hébergement pour femmes en difficultés et sans-abri. Sa mission principale est d'offrir un milieu de vie sécuritaire à des femmes sans abri ou en difficulté pour de courts séjours.",
          address_id: 1,
          picture_url: 'images/partners/auberge_madeleine.jpg',
          private_contact_name: 'Serge Test',
          private_phone_number: '15555555555',
          private_email: 'test@test.com',
          is_active: true,
          is_address_visible: false,
        }
      ]);
    }),
  ]);
};
