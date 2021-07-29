const router = require('express').Router();
const { Product, User } = require('../../models');
const withAuth = require('../../utils/auth');
  
router.get('/', (req, res) => {
  Product.findAll({
      attributes: [
        'id',
        'name',
        'price',
        'quantity',
        'consumption'
    ],
    include: [
    {
        model: User,
        attributes:['id'],
    }
]
    })
    .then(dbProductData => {
        if (!dbProductData) {
          res.status(404).json({ message: 'No products found with this id' });
          return;
        }
        res.json(dbProductData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ['id']
      }
    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        consumption: req.body.consumption,
        user_id: req.session.user_id
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id',withAuth, (req, res) => {
  Product.update( req.body, {
    individualHooks: true,
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  
router.delete('/:id', withAuth,(req, res) => {
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
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;