
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
          picture_url: 'images/sponsors/zayat_aroma.jpg',
          description:'',
          sponsor_url:'https://www.zayataroma.com/'
        },
        {
          name: 'Spa Bota Bota',
          picture_url: 'images/sponsors/bota_bota.jpg',
          description:'',
          sponsor_url:'https://botabota.ca/'
        },
        {
          name: "L'Aubainerie",
          picture_url: 'images/sponsors/aubainerie.jpg',
          description:"L'Aubainerie s'est transformée en Père Noël : 1,000 Paires de bas chaud !",
          sponsor_url:'https://www.aubainerie.com/'
        },
        {
          name: 'Fédération Québécoise des Massothérapeutes',
          picture_url: 'images/sponsors/fqm.jpg',
          description:'',
          sponsor_url:'https://www.fqm.qc.ca/'
        },
        {
          name: 'La Biosthetique',
          picture_url: 'images/sponsors/la_biosthetique.jpg',
          description:'',
          sponsor_url:'https://www.labiosthetique.ca/'
        },
        {
          name: 'Boutique Mädo',
          picture_url: 'images/sponsors/boutique_mado.jpg',
          description:'',
          sponsor_url:'http://www.boutiquemado.ca/'
        },
        {
          name: 'Hugo Sport',
          picture_url: 'images/sponsors/hugo_sport.jpg',
          description:'',
          sponsor_url:'https://www.hugosport.com/'
        },
        {
          name: 'Norton Rose Fulbright',
          picture_url: 'images/sponsors/norton_rose_fulbright.jpg',
          description:'',
          sponsor_url:'https://www.nortonrosefulbright.com/'
        }
      ]);
    }),
  ]);
};
