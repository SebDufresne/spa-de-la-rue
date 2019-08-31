const express = require('express');
const router = express.Router();

/* GET users listing. */

module.exports = function(knex) {
  router.get('/', function(req, res) {
    knex
      .select('*')
      .from('users')
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });  

  return router;
}