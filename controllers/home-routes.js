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
    console.log("in add route");
    if (req.session.loggedIn) {
    res.render('inventory');
      return;
    }
  
    res.redirect('/');
  })
  
  module.exports = router;