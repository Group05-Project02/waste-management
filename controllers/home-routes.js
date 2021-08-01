const router = require('express').Router();
const { Product, User } = require('../models');

router.get('/', (req, res) => {
    res.render('index');
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('index');
  });

  router.get('/add', (req, res) => {
    if (req.session.loggedIn) {
    res.render('inventory');
      return;
    }
  
    res.redirect('/');
  });

  // get all posts for dashboard
router.get('/overview', (req, res) => {
  if (req.session.loggedIn) {
    Product.findAll({
      where: {
        user_id: req.session.user_id
      }
    })
      .then(dbProductData => {
        const products = dbProductData.map(post => post.get({ plain: true }));
        res.render('management', {products});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
  else{
    res.redirect('/');
  }
});

  // delete posts as id
  router.get('/delete/:id', (req, res) => {
    if (req.session.loggedIn) {
      Product.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbProductData => {
          if (!dbProductData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.redirect('/overview');

        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });   
      }
    else{
      res.redirect('/');
    }
  });

  module.exports = router;