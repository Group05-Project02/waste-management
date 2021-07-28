const router = require('express').Router();
const { Product, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Product.findAll({
      where: {
        user_id: req.session.user_id
      }
      // attributes: [
      //   'id',
      //   'name',
      //   'price',
      //   'quantity',
      //   'consumption',
      //   'created_at'
      // ],
      // include: [
        
      //   {
      //     model: User,
      //     attributes: ['name']
      //   }
      // ]
    })
      .then(dbProductData => {
        // const products = dbProductData.map(post => post.get({ plain: true }));
        // res.render('dashboard', { products, loggedIn: true });
        
        res.render('dashboard');
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/edit/:id', withAuth, (req, res) => {
    Product.findByPk(req.params.id, {
      attributes: [
        'id',
        'name',
        'price',
        'quantity',
        'consumption',
        'created_at'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbProductData => {
        if (dbProductData) {
          const post = dbProductData.get({ plain: true });
          
          res.render('edit-product', {
            post,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  
  module.exports = router;