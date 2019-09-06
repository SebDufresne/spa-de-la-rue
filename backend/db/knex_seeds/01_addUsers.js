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
          first_name: 'FirstName',
          last_name: 'LastName',
          gender: 'M',
          contact_email:'test@test.com',
          contact_phone:'15555555555',
          contact_prefered:'email',
          description: faker.lorem,
          picture_url: 'images/assets/missing_avatar.svg',
          total_hours: 0,
          status: 'active',
          is_admin: true,
          is_disable: false,
        },
        {
          first_name: 'bob',
          last_name: 'chicken',
          gender: 'F',
          contact_email:'test2@test2.com',
          contact_phone:'25555555555',
          contact_prefered:'phone',
          description: faker.lorem,
          picture_url: 'images/assets/missing_avatar.svg',
          total_hours: 0,
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
          picture_url: 'images/volunteers/seb.png',
          total_hours: 10,
          status: 'active',
          is_admin: false,
          is_disable: false,
        },
      ]);
    }),
  ]);
};
