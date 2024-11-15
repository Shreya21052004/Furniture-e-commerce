const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const auth = require('../middleware/auth');

// @route   GET api/cart
// @desc    Get user's cart
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const cartItems = await CartItem.find({ user: req.user.id }).populate('product');
    res.json(cartItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/cart
// @desc    Add item to cart
// @access  Private
router.post('/', auth, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cartItem = await CartItem.findOne({ user: req.user.id, product: productId });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = new CartItem({
        user: req.user.id,
        product: productId,
        quantity
      });
      await cartItem.save();
    }

    res.json(cartItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/cart/:id
// @desc    Update cart item quantity
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { quantity } = req.body;

  try {
    let cartItem = await CartItem.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ msg: 'Cart item not found' });
    }

    if (cartItem.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.json(cartItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/cart/:id
// @desc    Remove item from cart
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let cartItem = await CartItem.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ msg: 'Cart item not found' });
    }

    if (cartItem.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await cartItem.remove();

    res.json({ msg: 'Cart item removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;