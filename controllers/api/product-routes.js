const router = require('express').Router();
const { Product, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res => {
  Post.findAll({
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
   })
  );

  router.post('/', withAuth, (req, res) => {
    Products.create({
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

router.put('/:id', withAuth, (req, res) => {
  Product.update(
    {
      name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        consumption: req.body.consumption,
        user_id: req.session.user_id
    },
    {
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

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
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