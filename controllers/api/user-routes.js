const router = require('express').Router();
const { User } = require('../../models');

<<<<<<< HEAD
// GET /api/users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
=======
router.get('/', (req, res) => {
>>>>>>> 8132249d2737172331ff135baa796765d47d0a1b
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
<<<<<<< HEAD
    where: {
      id: req.params.id
    }
=======
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'name', 'price', 'quantity', 'consumption', 'created_at']
      },
    ]
>>>>>>> 8132249d2737172331ff135baa796765d47d0a1b
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    // expects {name: 'lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => {
<<<<<<< HEAD
        // req.session.save(() => {
        //   req.session.name = dbUserData.name;
        //   req.session.user_id = dbUserData.id;
        //   req.session.username = dbUserData.username;
        //   req.session.loggedIn = true;
=======
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.name = dbUserData.name;
          req.session.loggedIn = true;
>>>>>>> 8132249d2737172331ff135baa796765d47d0a1b
    
          res.json(dbUserData);
        // });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  
  router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.name = dbUserData.name;
        req.session.loggedIn = true;
    
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });
  
  router.put('/:id', (req, res) => {
    // expects {name: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  
    // pass in req.body instead to only update what's passed through
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;