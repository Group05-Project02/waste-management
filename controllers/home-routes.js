const router = require('express').Router();

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
  })

  router.get('/overview', (req, res) => {
    if (req.session.loggedIn) {
    res.redirect('/dashboard/overview');
      return;
    }
  
    res.redirect('/');
  })
  
  module.exports = router;