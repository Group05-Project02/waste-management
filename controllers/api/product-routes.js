const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Product, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', (req, res) => {
    Product.findOne({
      where: {
        id: req.params.id
      },
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