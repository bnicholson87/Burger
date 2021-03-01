const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  router.post('/api/burgers', (req, res) => {
      const burgerObject = {
        burger_name: req.body.burger,
        devoured: req.body.devoured
      }
    burger.insertOne(burgerObject, (result) => {
      res.json({ id: result.insertId });
    });
  });

  router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.updateOne([
      {
        devoured: req.body.devoured,
      },
      {
          id: req.params.id
      }],
      (result) => {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });

  module.exports = router;