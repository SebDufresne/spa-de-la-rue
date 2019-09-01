
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('sponsors').del(),
    knex.raw('ALTER SEQUENCE sponsors_id_seq RESTART WITH 1'),
    knex('sponsors').then(function() {
      // Inserts seed entries
      return knex('sponsors').insert([
        {
          name: 'Zayat Aroma',
          picture: 'images/sponsors/zayat_aroma.jpg',
          description:'',
          url:'https://www.zayataroma.com/'
        },
        {
          name: 'Spa Bota Bota',
          picture: 'images/sponsors/bota_bota.jpg',
          description:'',
          url:'https://botabota.ca/'
        },
        {
          name: "L'Aubainerie",
          picture: 'images/sponsors/aubainerie.jpg',
          description:"L'Aubainerie s'est transformée en Père Noël : 1,000 Paires de bas chaud !",
          url:'https://www.aubainerie.com/'
        },
        {
          name: 'Fédération Québécoise des Massothérapeutes',
          picture: 'images/sponsors/fqm.jpg',
          description:'',
          url:'https://www.fqm.qc.ca/'
        },
        {
          name: 'La Biosthetique',
          picture: 'images/sponsors/la_biosthetique.jpg',
          description:'',
          url:'https://www.labiosthetique.ca/'
        },
        {
          name: 'Boutique Mädo',
          picture: 'images/sponsors/boutique_mado.jpg',
          description:'',
          url:'http://www.boutiquemado.ca/'
        },
        {
          name: 'Hugo Sport',
          picture: 'images/sponsors/hugo_sport.jpg',
          description:'',
          url:'https://www.hugosport.com/'
        },
        {
          name: 'Norton Rose Fulbright',
          picture: 'images/sponsors/norton_rose_fulbright.jpg',
          description:'',
          url:'https://www.nortonrosefulbright.com/'
        }
      ]);
    }),
  ]);
};
