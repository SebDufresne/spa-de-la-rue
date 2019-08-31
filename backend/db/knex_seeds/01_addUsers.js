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
          picture: '',
          total_hours: 0,
          password_hash:'$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.',
          is_admin: true,
          is_active: true,
          is_disable: false,
        },
      ]);
    }),
  ]);
};
