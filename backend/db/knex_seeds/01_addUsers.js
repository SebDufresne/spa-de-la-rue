const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('users').del(),
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
    knex('users').then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Gérard',
          last_name: 'Piquemal',
          gender: 'M',
          contact_email:'gerard@test.com',
          contact_phone:'15555555555',
          contact_prefered:'email',
          description: faker.lorem,
          picture_url: '/images/volunteers/gerard_piquemal.png',
          total_hours: 80,
          status: 'active',
          is_admin: true,
          is_disable: false,
        },
        {
          first_name: 'Artémis',
          last_name: 'Papert',
          gender: 'F',
          contact_email:'artemis@test.com',
          contact_phone:'15555555555',
          contact_prefered:'email',
          description: faker.lorem,
          picture_url: '/images/volunteers/artemis_papert.jpg',
          total_hours: 80,
          status: 'active',
          is_admin: true,
          is_disable: false,
        },
        {
          first_name: 'Caroline',
          last_name: 'Mongrain',
          gender: 'F',
          contact_email:'caroline@test.com',
          contact_phone:'15555555555',
          contact_prefered:'phone',
          description: faker.lorem,
          picture_url: '/images/volunteers/caroline_mongrain.jpg',
          total_hours: 150,
          status: 'active',
          is_admin: false,
          is_disable: false,
        },
        {
          first_name: 'Sebastien',
          last_name: 'Dufresne',
          gender: 'M',
          contact_email:'seb@test.com',
          contact_phone:'15555555555',
          contact_prefered:'phone',
          description: faker.lorem,
          picture_url: '/images/volunteers/sebastien_dufresne.png',
          total_hours: 10,
          status: 'active',
          is_admin: false,
          is_disable: false,
        },
        {
          first_name: 'Catherine',
          last_name: 'Larouche',
          gender: 'F',
          contact_email:'catherine@test.com',
          contact_phone:'15555555555',
          contact_prefered:'phone',
          description: faker.lorem,
          picture_url: '/images/volunteers/catherine_larouche.jpg',
          total_hours: 10,
          status: 'active',
          is_admin: false,
          is_disable: false,
        },
        {
          first_name: 'Céline',
          last_name: 'Demers',
          gender: 'F',
          contact_email:'celine@test.com',
          contact_phone:'15555555555',
          contact_prefered:'phone',
          description: faker.lorem,
          picture_url: '/images/volunteers/celine_demers.jpg',
          total_hours: 10,
          status: 'active',
          is_admin: false,
          is_disable: false,
        },
        {
          first_name: 'Gérald',
          last_name: 'Lemay',
          gender: 'M',
          contact_email:'gerald@test.com',
          contact_phone:'15555555555',
          contact_prefered:'phone',
          description: faker.lorem,
          picture_url: '/images/volunteers/gerald_lemay.jpg',
          total_hours: 10,
          status: 'active',
          is_admin: false,
          is_disable: false,
        },
        {
          first_name: 'Hélène',
          last_name: 'Gratton',
          gender: 'F',
          contact_email:'helene@test.com',
          contact_phone:'15555555555',
          contact_prefered:'phone',
          description: faker.lorem,
          picture_url: '/images/volunteers/helene_gratton.jpg',
          total_hours: 10,
          status: 'active',
          is_admin: false,
          is_disable: false,
        },
        {
          first_name: 'James',
          last_name: 'Volel',
          gender: 'M',
          contact_email:'james@test.com',
          contact_phone:'15555555555',
          contact_prefered:'phone',
          description: faker.lorem,
          picture_url: '/images/volunteers/james_volel.jpg',
          total_hours: 10,
          status: 'active',
          is_admin: false,
          is_disable: false,
        },
      ]);
    }),
  ]);
};
