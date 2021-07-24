const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Product, User } = require('../../models');



router.get('/:id', (req, res) => {
    Post.findOne({
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
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No products found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
